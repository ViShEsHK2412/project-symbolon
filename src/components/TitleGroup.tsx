import React from "react";

export const TitleGroup = React.memo(function TitleGroup() {
  return (
    <div className="title-group">
      <h1 className="display-title">Symbolon</h1>
      <div className="subtitle">
        The Advantage of Mystery in Semiotic Design
      </div>
    </div>
  );
});
