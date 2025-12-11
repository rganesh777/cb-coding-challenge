export type LocationProps = {
  name: string;
  id: string;
};

export interface IncidentProps {
  name: string;
  id: number;
  priority: 1 | 2 | 3;
  datetime: string;
  locationId: string;
}

export type IncidentCompProps = {
  locationMap: Map<string, string>;
  incident: IncidentProps;
};

export type LocationSelectProps = {
  locations: LocationProps[];
  setIncidents: React.Dispatch<React.SetStateAction<IncidentProps[]>>;
};
