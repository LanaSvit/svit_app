import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Label, { LabelColor, LabelSize } from "../Label/Label";
import styles from "./MediaCard.styles";

export type CardColor = "black" | "white";

interface Props {
  title: string;
  author: string;
  labelText: string;
  onPress?: () => void;
}

const MediaCard = (props: Props): React.ReactElement => {
  const {
    title,
    author,
    labelText,
    onPress
  } = props;
  return (
      <TouchableOpacity
        style={styles.container}
        onPress={onPress}
      >
        <Text style={styles.subtitle}>{author}</Text>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.bottomSection}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Label text={labelText} size={LabelSize.Medium} color={LabelColor.Pink} containerStyle={styles.label} disabled/>
          </ScrollView>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonDots}>...</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
  );
};

export default MediaCard;
