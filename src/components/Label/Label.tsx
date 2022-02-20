import React from "react";
import {Text, TouchableOpacity, ViewStyle } from "react-native";
import styles from "./Label.styles";

export enum LabelSize {
    Small = 8,
    Medium = 16,
    Large = 24
  }

export enum LabelColor {
    Pink = "#FBD9F7",
    Violet = "#E3CFFBs",
    White = "#FDFEFE"
  }

interface Props {
  text: string;
  size: LabelSize;
  color: LabelColor;
  disabled?: boolean;
  onPress?: () => void;
  containerStyle: ViewStyle
}

const Label = (props: Props): React.ReactElement => {
  const {
    text,
    size,
    color,
    disabled = false,
    onPress,
    containerStyle
  } = props;
  return (
      <TouchableOpacity
        style={[styles.container,           {
            backgroundColor: color,
            height: size,
            width: size! * text.length,
            ...containerStyle 
          }
        ]}
        onPress={onPress}
        disabled={disabled}
      >
        <Text style={[styles.text, { fontSize: size * 0.7 }]}>{text}</Text>
      </TouchableOpacity>
  );
};

export default Label;
