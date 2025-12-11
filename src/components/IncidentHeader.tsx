import { memo } from "react";

const IncidentHeader = () => {
  return (
    <div className="incident incident-header column-gap-20">
      <div></div>
      <div className="incident__info column-gap-20">
        <div>Incident Name</div>
        <div>Date and Time</div>
        <div>Priority</div>
        <div>Location Name</div>
      </div>
    </div>
  );
};

export default memo(IncidentHeader);
