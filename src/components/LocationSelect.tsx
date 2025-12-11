import { memo, useCallback } from "react";
import { getIncidents, DEFAULT_LOCATION_ID } from "../utils";
import type { LocationSelectProps } from "../types/App.types";

const LocationSelect = ({ setIncidents, locations }: LocationSelectProps) => {
  const handleLocationChange = useCallback(
    async (e: React.ChangeEvent<HTMLSelectElement>) => {
      try {
        const updatedIncidents = await getIncidents(e.target.value);
        setIncidents(updatedIncidents || []);
      } catch (err) {
        console.error("Failed to fetch incidents:", err);
      }
    },
    [setIncidents]
  );

  return locations.length ? (
    <select id="location" onChange={handleLocationChange}>
      {locations.map(({ id, name }) => (
        <option key={id} value={id}>
          {id === DEFAULT_LOCATION_ID ? "Filter by Location" : name}
        </option>
      ))}
    </select>
  ) : null;
};

export default memo(LocationSelect);
