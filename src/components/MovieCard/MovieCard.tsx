import React, { useState } from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import styles from "./MovieCard.styles";
import HeartIcon from "./../../assets/icons/heart.svg";


export type CardColor = "black" | "white";

interface Props {
  title: string;
  director?: string;
  onPress?: () => void;
  onPressHeart?: () => void;
  isLiked?: boolean;
  backgroundColor?: string;
  borderColor?: string;
  imageUrl?: string;
}

const MovieCard = (props: Props): React.ReactElement => {
  const {
    title,
    director,
    onPress,
    onPressHeart,
    isLiked=false,
    backgroundColor,
    borderColor,
    imageUrl
  } = props;

  return (
      <TouchableOpacity
        style={styles.container}
        onPress={onPress}
      >
        <Image style={styles.image} source={{ uri: (imageUrl ? imageUrl : "https://miro.medium.com/max/302/1*PFkUYkDoC-hen5EZv2CnXg.jpeg" )}} /> 
        <TouchableOpacity onPress={onPressHeart}>
          <HeartIcon width={24} height={24} stroke={isLiked ? "#FF574D" : "#ffffff"} fill={isLiked ? "#FF574D" : "#f2f2f2"} strokeWidth={4} />
        </TouchableOpacity>
        <Text numberOfLines={1} style={styles.title}>{title}</Text>
        <Text numberOfLines={1} style={styles.description}>{director}</Text>
      </TouchableOpacity>
  );
};

export default MovieCard;
