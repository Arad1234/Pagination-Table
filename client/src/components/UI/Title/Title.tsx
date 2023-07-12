import { Typography } from "@mui/material";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const Title = ({ children }: Props) => {
  return (
    <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
      {children}
    </Typography>
  );
};

export default Title;
