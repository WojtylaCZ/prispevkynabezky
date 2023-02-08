import React from "react";
import { Stack } from "react-bootstrap";
import { Trailpark, TrailparkCard } from "./trailpark";

export type District = {
  name: string;
  trailparks: Array<Trailpark>;
};

export const DistrictSection = ({
  name,
  trailparks,
  isFirst,
}: District & { isFirst: boolean }) => {
  const trailparksList = trailparks.map((trailpark, id) => (
    <TrailparkCard
      key={id}
      trailpark={trailpark}
      isFirst={isFirst && id === 0}
    />
  ));

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <h2
        style={{
          fontFamily: "Kaushan Script",
          color: "#f7b500",
          marginBottom: "24px",
          fontSize: "calc(1.775rem + 1.1vw)",
        }}
      >
        {name}
      </h2>
      <Stack gap={4}>{trailparksList}</Stack>
    </div>
  );
};
