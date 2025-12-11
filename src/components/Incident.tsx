import { memo } from "react";
import type { IncidentCompProps } from "../types/App.types";
import { getPriorityText } from "../utils";

const Incident = ({
  incident: { name, datetime, priority, locationId },
  locationMap,
}: IncidentCompProps) => {
  const priorityText = getPriorityText(priority),
    imgAlt = `${priorityText} Priority`;

  const locationName = locationMap.get(locationId) || "Unknown";

  return (
    <div className="incident column-gap-20" title={`Incident: ${name}`}>
      <div>
        <img
          src={`/img/alarm-${priorityText.toLowerCase()}.svg`}
          alt={imgAlt}
          title={imgAlt}
        />
      </div>
      <div className="incident__info column-gap-20">
        <div>
          <span className="show-on-mobile">Incident Name: </span>
          {name}
        </div>
        <div className="incident__date">
          {new Date(datetime).toLocaleString("en-AU")}
        </div>
        <div>
          <span className="show-on-mobile">Priority: </span>
          {priorityText}
        </div>
        <div>
          <span className="show-on-mobile">Location Name: </span>
          {locationName}
        </div>
      </div>
    </div>
  );
};

export default memo(Incident);
