import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  CardMedia,
} from "@mui/material"; // Correct

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
    <div style={{ display: "flex", flexWrap: "wrap", gap: "26px" }}>
      {cardsData.map((card) => (
        <Card sx={{ maxWidth: 320 }} key={card.id}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={card.images}
              alt={card.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {card.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
};
export default CardBox;
