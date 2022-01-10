import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './TitleItem.styles';

type TitleHeight = "12" | "24";

interface Props {
    titleName: string, 
    iconLeft?: boolean,
    iconRight?: boolean,
    height?: TitleHeight,
    onPress?: () => void;
}

const TitleItem = (props: Props): React.ReactElement => {
    const { titleName, iconLeft, iconRight, height = 12, onPress} = props;
    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={[styles.nameWrapper, { paddingVertical: Number(height)}]}>
              {!!iconLeft && <View style={styles.iconLeft}>{iconLeft}</View>} 
              <Text style={styles.name}>{titleName}</Text>
              {!!iconRight && 
                <View style={styles.iconRight}>{iconRight}</View>} 
            </View>   
      </TouchableOpacity>
    );
}

export default TitleItem;
