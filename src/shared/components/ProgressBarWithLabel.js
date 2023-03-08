import { Box, LinearProgress, Typography } from "@mui/material";
import React from "react";

function ProgressBarWithLabel({ progress }) {
  return (
    <div>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box
          sx={{
            minWidth: {
              xs: 100,
              md: 150,
            },
            mr: 1,
          }}
        >
          <LinearProgress
            variant="determinate"
            value={progress}
            color="success"
            sx={{
              height: 20,
              borderRadius: 5,
            }}
          />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="text.secondary">{`${Math.round(
            progress
          )}%`}</Typography>
        </Box>
      </Box>
    </div>
  );
}

export default ProgressBarWithLabel;
