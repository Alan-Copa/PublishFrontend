// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Crowdfunding {
    address public owner;
    uint public goal;
    uint public deadline;
    uint public totalPledged;
    mapping(address => uint) public donors; // Donor address as key and amount of donation as value
    address[] public donorAddresses; // Array to store only donor addresses

    constructor(uint _goal, uint _duration) {
        owner = msg.sender; // Contract deployer becomes the owner
        goal = _goal; // Campaign goal in ether
        deadline = block.timestamp + _duration; // Duration in seconds
    }
    // Events
    event NewDonor(address indexed donor);
    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);
    event GoalSet(uint amount);
    event DeadlineSet(address indexed owner, uint duration);
    event PledgeReceived(address indexed donor, uint amount);
    event RefundProcessed(address indexed donor, uint amount);
    event CampaignEnded(address indexed owner, uint totalAmount, bool goalMet);
    // Modifier
    modifier onlyOwner {
        require(msg.sender == owner, "Only owner can perform this action");
        _;
    }
    modifier deadlineReached {
        require(block.timestamp >= deadline, "Deadline has not been reached");
        _;
    }
    modifier goalMet {
        require(totalPledged >= goal, "Goal was not met");
        _;
    }

    // Helper Functions
    function getRemainingDuration() public view returns (uint) {
        return deadline - block.timestamp;
    }
    function getDonationAmount(address _donor) public view returns (uint) {
        return donors[_donor];
    }
    function getDonorsArray() public view returns (address[] memory) {
        return donorAddresses;
    }
    function getCampaignDetails() public view returns (address, uint, uint, uint, uint, uint) {
        return (owner, goal, deadline, block.timestamp, totalPledged, donorAddresses.length);
    }
    // Setters Functions (onlyOwner)
    function setOwner(address _newOwner) external onlyOwner {
        require(_newOwner != address(0), "Invalid address");
        emit OwnershipTransferred(owner, _newOwner);
        owner = _newOwner;
    }
    function setGoal(uint _goal) public onlyOwner {
        goal = _goal; 
        emit GoalSet(_goal);  
    }
    function setDeadline(uint _duration) public onlyOwner {
        deadline = block.timestamp + _duration; 
        emit DeadlineSet(owner,_duration); 
    }

    // External Functions
    // donates an amount of money
    // gas error
    function pledge() external payable {
        require(block.timestamp < deadline, "Campaign has ended");
        require(msg.value > 0, "Pledge must be greater than zero");

        // Add new donor to the array if they haven't donated before
        if (donors[msg.sender] == 0) {
            donorAddresses.push(msg.sender);
            emit NewDonor(msg.sender);
        }

        donors[msg.sender] += msg.value;
        totalPledged += msg.value;

        emit PledgeReceived(msg.sender, msg.value);
    }
    // refunds the whole donation
    // gas error
    function claimRefund() external {
        uint amount = donors[msg.sender];
        require(amount > 0, "No donation to refund");
        require(payable(msg.sender).send(amount), "Refund failed"); // protect totalPledged

        donors[msg.sender] = 0; // Prevent re-entrancy
        totalPledged -= amount;

        // Remove donor from donorAddresses
        for (uint i = 0; i < donorAddresses.length; i++) {
            if (donorAddresses[i] == msg.sender) {
                donorAddresses[i] = donorAddresses[donorAddresses.length - 1]; // Replace with the last address
                donorAddresses.pop(); // Remove the last element
                break;
            }
        }

        payable(msg.sender).transfer(amount);
        emit RefundProcessed(msg.sender, amount);
    }
    // ends the campaign
    // gas error
    function endCampaign() external deadlineReached onlyOwner {
        if (totalPledged >= goal) {
            payable(owner).transfer(totalPledged);
            emit CampaignEnded(msg.sender, totalPledged, true);
        } else {
            emit CampaignEnded(owner, totalPledged, false);
        }
    }

    // alternatives
    // function donate() external payable {
    //     require(msg.value > 0 && msg.sender != address(0) && campaignLive);
    //     sum += msg.value;
    //     pledges[msg.sender] += msg.value;
    // }

    // function endCampaign(address payable beneficiary) external returns (bool) {
    //     require(campaignLive);
    //     campaignLive = false;
    //     beneficiary.transfer(sum);
    //     return sum >= goal;
    // }
}