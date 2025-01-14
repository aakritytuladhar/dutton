import React from "react";
import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import img from "../../Assets/carosal2.jpg";
const CardBox = () => {
  const cardsData = [
    {
      id: 1,
      images: img,
      title: "Flexible Car Loans",
      description:
        "Get the best car loan options tailored to your needs and budget.",
    },
    {
      id: 2,
      images: img,
      title: "Expert Financial Planning",
      description:
        "Plan your finances with our expert guidance and achieve your car ownership goals.",
    },
    {
      id: 3,
      images: img,
      title: "Comprehensive Insurance Coverage",
      description:
        "Protect your investment with our comprehensive car insurance coverage. ",
    },
    {
      id: 4,
      images: img,
      title: "What Our Customers Says",
      description: "Read our latest blog posts for car buying tips and advice.",
    },
  ];
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "2.6%" }}>
      <Grid container spacing={2}>
        {cardsData.map((card) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={card.id}>
            <Card
              sx={{
                maxWidth: 320,
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <CardActionArea sx={{ flexGrow: 1 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={card.images}
                  alt={card.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {card.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {card.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
export default CardBox;
