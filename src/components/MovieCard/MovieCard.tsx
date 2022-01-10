import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import styles from "./MovieCard.styles";

export type CardColor = "black" | "white";

interface Props {
  title: string;
  director?: string;
  onPress?: () => void;
  backgroundColor?: string;
  borderColor?: string;
  imageUrl?: string;
}

const MovieCard = (props: Props): React.ReactElement => {
  const {
    title,
    director,
    onPress,
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
        <Text numberOfLines={1} style={styles.title}>{title}</Text>
        <Text numberOfLines={1} style={styles.description}>{director}</Text>
      </TouchableOpacity>
  );
};

export default MovieCard;
