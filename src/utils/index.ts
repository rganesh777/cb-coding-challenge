import api from "../js/fake-api";
import type { IncidentProps, LocationProps } from "../types/App.types";
const { getLocations, getIncidentsByLocationId } = api;

export const DEFAULT_LOCATION_ID = "airport";

// Fetch all locations
export const getAllLocations = async () => {
  try {
    const data = await getLocations();
    return data as LocationProps[];
  } catch (error) {
    console.error("Failed to fetch locations:", error);
    return [];
  }
};

// Sort incidents by priority and datetime, and remove duplicates
const sortIncidents = (incidents: IncidentProps[]) => {
  const sorted = [...incidents].sort((a, b) => {
    // first, sort by priority ascending
    if (a.priority !== b.priority) return a.priority - b.priority;
    // if same priority, sort by datetime descending
    return new Date(b.datetime).getTime() - new Date(a.datetime).getTime();
  });

  // remove duplicates based on id
  const uniqueIncidents = Array.from(
    new Map(sorted.map((item) => [item.id, item])).values()
  );

  return uniqueIncidents;
};

// Fetch incidents by locationId, and sort them
export const getIncidents = async (locationId = DEFAULT_LOCATION_ID) => {
  try {
    const data = await getIncidentsByLocationId(locationId);
    const sortedData = sortIncidents(data as IncidentProps[]);
    return sortedData;
  } catch (error) {
    console.error("Failed to fetch incidents:", error);
    return [];
  }
};

// Get location name by its ID
export const getLocationNameById = async (locationId: string) => {
  try {
    const locations = await getAllLocations();
    const location = (locations as LocationProps[]).find(
      ({ id }) => id === locationId
    );
    return location ? location.name : "Unknown";
  } catch (error) {
    console.error("Failed to get location name:", error);
    return "Unknown";
  }
};

// Convert priority number to text
export const getPriorityText = (priority: number) => {
  switch (priority) {
    case 1:
      return "High";
    case 2:
      return "Medium";
    case 3:
      return "Low";
    default:
      return "Unknown";
  }
};
