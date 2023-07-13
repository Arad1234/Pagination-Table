import { Typography } from "@mui/material";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const Body = ({ children }: Props) => {
  return <Typography>{children}</Typography>;
};

export default Body;
