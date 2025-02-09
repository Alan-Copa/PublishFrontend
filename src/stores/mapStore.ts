import { useLocalStorage } from "@vueuse/core";

type Marker = {
  latitude: number;
  longitude: number;
  title?: string; // Title of the real estate unit
  description?: string; // Additional info about the unit
};

export const userMarker = useLocalStorage<Marker>("USER_MARKER", {
  latitude: 0,
  longitude: 0,
});

export const nearbyMarkers = useLocalStorage<Marker[]>("NEARBY_MARKERS", []);

// Placeholder data for real estate units
export const realEstateUnits = [
  {
    latitude: 46.9481,
    longitude: 7.4474,
    title: "Luxury Apartment",
    description: "2-bedroom apartment in Bern city center.",
  },
  {
    latitude: 47.3769,
    longitude: 8.5417,
    title: "Office Space",
    description: "Modern office space in downtown Zurich.",
  },
  {
    latitude: 46.2044,
    longitude: 6.1432,
    title: "Lakefront Villa",
    description: "Exclusive villa with a view of Lake Geneva.",
  },
];