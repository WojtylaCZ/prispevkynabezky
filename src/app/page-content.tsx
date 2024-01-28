import { ReactNode } from "react";
import { Stack } from "react-bootstrap";

export const PageContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      gap={4}
      style={{
        alignItems: "center",
        width: "95%",
        margin: "auto",
        maxWidth: "690px",
        marginBottom: "16px",
        marginTop: "16px",
      }}
    >
      {children}
    </Stack>
  );
};
