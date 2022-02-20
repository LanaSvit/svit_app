import * as React from 'react';
import { FC } from 'react';
import { Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import MediaCard from '../../components/MediaCard/MediaCard';
import styles from './MediaScreen.styles';

interface Props {
  mediaList: MediaListItem[]; 
}

type MediaListItem = {author: string, title: string, label: string};

const MediaScreen: FC<Props> = React.memo(({mediaList}) => {
  const renderMediaItem = (item: MediaListItem) => {
    return (<MediaCard author={item.author} title={item.title} labelText={item.label}/>)
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.screenTitle}>Media</Text>
      <ScrollView showsVerticalScrollIndicator={false} alwaysBounceHorizontal={true} >
        {mediaList.map((item) => renderMediaItem(item))}
      </ScrollView>
    </SafeAreaView>
  );
}
)

export default MediaScreen;
