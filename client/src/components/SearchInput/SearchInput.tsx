import { Input } from "@mui/material";
import React from "react";

interface Props {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput = ({ handleInputChange }: Props) => {
  return (
    <Input
      sx={{
        border: "1px solid gray",
        paddingLeft: "10px ",
        fontSize: "20px",
        margin: "20px",
        position: "absolute",
        top: "130px",
        borderRadius: "5px",
      }}
      onChange={handleInputChange}
      placeholder="Search by title..."
    />
  );
};

export default SearchInput;
