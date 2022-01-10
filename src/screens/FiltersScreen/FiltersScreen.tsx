import * as React from 'react';
import { View } from 'react-native';
import TitleItem from '../../components/TitleItem/TitleItem';
import styles from './FiltersScreen.styles';

const filterNames = ["By Keyword", "By Genres", "By Director", "By Release Date"];

function FiltersScreen() {
  return (
    <View style={styles.container}>
      {filterNames.map(item => <TitleItem titleName={item}/>)}
    </View>
  );
}

export default FiltersScreen;
