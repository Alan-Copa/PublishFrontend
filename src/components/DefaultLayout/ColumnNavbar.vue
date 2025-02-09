<template>
  <v-navigation-drawer
    v-model="drawer"
    :rail="rail"
    permanent
    @click="rail = false"
    app
  >
    <!-- User Information -->
    <v-list-item
      prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
      title="John Leider"
      nav
    >
      <template v-slot:append>
        <v-btn
          icon="mdi-chevron-left"
          variant="text"
          @click.stop="rail = !rail"
        ></v-btn>
      </template>
    </v-list-item>

    <v-divider></v-divider>

    <!-- Navigation Links -->
    <v-list density="compact" nav>
      <v-list-item
        prepend-icon="mdi-home-city"
        title="Home"
        to="/"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-account"
        title="My Account"
        to="/account"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-currency-usd"
        title="Crowdfounding"
        to="/crowdfunding"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-heart"
        title="Be Generous"
        to="/all-crowdfunds"
      ></v-list-item> 
      <!-- <v-list-item
        prepend-icon="mdi-storefront"
        title="Market Explorer"
        to="/market"
      ></v-list-item> Market Explorer -->

      <!-- <v-list-item
        prepend-icon="mdi-cash-multiple"
        title="Revenue Management"
        to="/revenue"
      ></v-list-item> -->

      <v-list-item
        prepend-icon="mdi-map"
        title="Map Explorer"
        to="/map"
      ></v-list-item> <!-- Map Explorer -->
      <!-- <v-list-item
        prepend-icon="mdi-chart-line"
        title="Graphs"
        to="/graphs"
      ></v-list-item> -->
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      rail: true,
    };
  },
};
</script>
