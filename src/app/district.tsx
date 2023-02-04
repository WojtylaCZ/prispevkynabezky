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
    <Stack gap={3}>
      <span
        style={{
          fontFamily: "Kaushan Script",
          fontSize: "2em",
          fontWeight: "bolder",
          margin: "auto",
          color: "#f7b500",
        }}
      >
        {name}
      </span>

      {trailparksList}
    </Stack>
  );
};
