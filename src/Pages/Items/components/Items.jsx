import React, { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Skeleton,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";

const url = "https://fakestoreapi.com/products";

const card = {
  width: "210px",
  margin: "0.5em",
};
const box = {
  backgroundColor: "rgba(0,0,0,20%)",
  borderRadius: "7.5px",
  padding: "30px",
};

export const Items = () => {
  const { data, loading } = useFetch(url);
  console.log(data);
  console.log(loading);

  return (
    <ItemsContainer>
      {loading ? (
        <>
          <ItemsLoading />
        
        </>
      ) : (
        <ItemsList data={data} />
      )}
    </ItemsContainer>
  );
};

const ItemsContainer = ({ children }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>{children}</div>
  );
};

const ItemsLoading = () => {
  return (
    <ImageList cols={3}>
      {Array.from(new Array(9)).map((_, index) => {
        return <ItemLoading key={index} />;
      })}
    </ImageList>
  );
};

const ItemLoading = () => {
  return (
    <ImageListItem sx={card}>
  
      <Skeleton variant="rectangular" width={210} height={118} />

      <Box sx={{ pt: 0.5 }}>
        <Skeleton width="100%" />
        <Skeleton width="100%" />
      </Box>
    </ImageListItem>
  );
};

const ItemsList = ({ data }) => {
  return (
    <ImageList cols={3} sx={box}>
      {data.map((item) => {
        return (
          <ItemList
            variant="masonry"
            cols={3}
            gap={8}
            key={item.id}
            {...item}
          />
        );
      })}
    </ImageList>
  );
};

const ItemList = ({ id, image, title, price }) => {
  return (
    <Link to={`productos/${id}`}>
      <ImageListItem sx={card}>
        <img
          style={{ height: "300px" }}
          srcSet={`${image}?w=248&fit=crop&auto=format&dpr=2 2x`}
          src={`${image}?w=248&fit=crop&auto=format`}
          alt={title}
          loading="lazy"
        />
        <ImageListItemBar title={title} subtitle={price} />
      </ImageListItem>
    </Link>
  );
};
