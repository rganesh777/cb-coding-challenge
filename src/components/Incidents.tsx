import { useState, useEffect, memo, useMemo } from "react";
import type { IncidentProps, LocationProps } from "../types/App.types";
import { getIncidents, getAllLocations } from "../utils";
import Incident from "./Incident";
import IncidentHeader from "./IncidentHeader";
import LocationSelect from "./LocationSelect";

const Incidents = () => {
  const [incidents, setIncidents] = useState<IncidentProps[]>([]);
  const [locations, setLocations] = useState<LocationProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const [initialIncidents, allLocations] = await Promise.all([
        getIncidents(),
        getAllLocations(),
      ]);
      setIncidents(initialIncidents || []);
      setLocations(allLocations || []);
    };
    fetchData();
  }, []);

  const locationMap = useMemo(
    () => new Map(locations.map((loc) => [loc.id, loc.name])),
    [locations]
  );

  return (
    <div>
      <div className="header column-gap-20">
        <h1>Incidents</h1>
        <LocationSelect setIncidents={setIncidents} locations={locations} />
      </div>
      {incidents.length ? (
        <div className="incidents">
          <IncidentHeader />
          {incidents.map((incident) => (
            <Incident
              key={incident.id}
              incident={incident}
              locationMap={locationMap}
            />
          ))}
        </div>
      ) : (
        <p>No incidents found.</p>
      )}
    </div>
  );
};

export default memo(Incidents);
