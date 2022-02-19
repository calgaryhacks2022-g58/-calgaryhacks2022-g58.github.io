import * as React from "react";
import Box from "@mui/material/Box";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import Typography from "@mui/material/Typography";

export default function Quote() {
  return (
    <Box sx={{ display: "inline-flex" }}>
      <FormatQuoteIcon />
      <Typography gutterBottom variant="h5" component="div">
        Do something today that your future self will thank you for.
      </Typography>
    </Box>
  );
}
