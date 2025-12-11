import type { LocationProps, IncidentProps } from "../types/App.types";

declare module "../js/fake-api" {
  const api: {
    getLocations: () => Promise<LocationProps[]>;
    getIncidentsByLocationId: (locationId: string) => Promise<IncidentProps[]>;
  };
  export default api;
}
