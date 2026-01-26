/* eslint-disable no-unused-vars */
//import React, { useEffect, useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useMediaQuery, useTheme, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";

export default function Gallery() {
  const [imageData,setImageData] = useState([]);
  useEffect(()=>{
    const getData = async ()=>{
      const data = await fetch('http://localhost:8080/gallery');
      const jsonData = await data.json();
      setImageData(jsonData);
    }
    getData();
  },[])
  const theme = useTheme();

  // This returns true if the screen is smaller than 600px (MUI's 'sm' breakpoint)
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  // const [itemData,setItemData] = useState([]);
  // useEffect(()=>{
  //     const fetchData = async ()=>{

  //         const imageData = await fetch("/gallery")
  //         const imageDataJson = await imageData.json();
  //         setItemData(imageDataJson);
  //     }
  //     fetchData();
  // },[]);
  const itemData = [
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Breakfast",
    },
    {
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      title: "Burger",
    },
    {
      img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
      title: "Camera",
    },
    {
      img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
      title: "Coffee",
    },
    {
      img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
      title: "Hats",
    },
    {
      img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
      title: "Honey",
    },
    {
      img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
      title: "Basketball",
    },
    {
      img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
      title: "Fern",
    },
    {
      img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
      title: "Mushrooms",
    },
    {
      img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
      title: "Tomato basil",
    },
    {
      img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
      title: "Sea star",
    },
    {
      img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
      title: "Bike",
    },
  ];
  return (
    <Container maxWidth="lg" sx={{ mt: 8, mb: 8 }}>
      <Typography
        variant="h3"
        sx={{ textAlign: "center", mb: 5, fontWeight: "bold" }}
      >
        Our <span style={{ color: "#00bcd4" }}>Gallery</span>
      </Typography>

      <ImageList variant="masonry" cols={isMobile ? 1 : 3} gap={16}>
        {imageData.map((item, index) => (
          <ImageListItem className="hover:scale-105 " key={item._id}>
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }} // Staggered entrance
              viewport={{ once: true }}
              src={`${item.url}?w=500&auto=format`}
              alt={item.title}
              loading="lazy"
              style={{
                borderRadius: "16px",
                cursor: "pointer",
                display: "block",
                width: "100%",
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
}
