import * as React from 'react';
import { Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import MediaCard from '../../components/MediaCard/MediaCard';
import styles from './MediaScreen.styles';

const MediaScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.screenTitle}>Media</Text>
      <ScrollView showsVerticalScrollIndicator={false} alwaysBounceHorizontal={true} >
        <MediaCard author='Svitlana H.' title="Why Matrix: Revolution is fucking awesome"/>
        <MediaCard author='Svitlana H.' title="Why Matrix: Revolution is fucking awesome"/>
      </ScrollView>
    </SafeAreaView>
  );
}

export default MediaScreen;
