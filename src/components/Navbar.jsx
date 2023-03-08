import { Toolbar, AppBar } from "@mui/material";
import React from "react";

import { LOGO } from "../shared";

function Navbar() {
  return (
    <div>
      <AppBar
        color="transparent"
        style={{
          boxShadow: "none",
          borderBottom: "1px solid #731054",
          marginBottom: "2rem",
        }}
        position="static"
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: {
              xs: "center",
              md: "space-between",
            },
          }}
        >
          <img src={LOGO} alt="I am here" />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
