import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";

export default function AccountabilityPartner() {
  return (
    <Card sx={{ textAlign: "center", m: 1 }}>
      <CardActionArea>
        <CardMedia
          sx={{ mx: "auto" }}
          component="img"
          height="140"
          image={bgImage}
          alt="Partner Picture"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Albert Karlo
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
