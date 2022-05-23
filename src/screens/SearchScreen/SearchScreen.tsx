import {useQuery} from '@apollo/client';
import * as React from 'react';
import {Button, ScrollView, SafeAreaView} from 'react-native';
import MovieCard from '../../components/MovieCard/MovieCard';
import TitleItem from '../../components/TitleItem/TitleItem';
import episodesQuery from '../../graphql/episodes.query.gql';
import {likedMoviesVar} from '../../reactiveVariables/reactiveVariables';
import { CharactersQueryData, EpisodesQueryData } from '../../typings/grqphql';
import styles from './SearchScreen.styles';
import { useFetchCharaters } from './useFetchCharacters';

function SearchScreen({navigation}) {
  const {data, loading} = useQuery<EpisodesQueryData>(episodesQuery);

  const {dataCharacters, loadingCharacters, fetchMoreCharacters} = useFetchCharaters();
  const characters = dataCharacters?.characters.results;

  const onPressHeart = (title: string) => {
    const likedMovies = likedMoviesVar();
    if (!likedMovies.includes(title)) {      
      likedMoviesVar([...likedMovies, title]);
    }
  };

  function isScrollviewCloseToRight({
    layoutMeasurement,
    contentOffset,
    contentSize,
  }) {
    const paddingToRight = 10;
    return (
      layoutMeasurement.width + contentOffset.x >=
      contentSize.width - paddingToRight
    );
  }

  if ((!data && loading) || (loadingCharacters && dataCharacters)) {
    return loading;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="Advanced filters"
        onPress={() => navigation.navigate('Filters')}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <TitleItem titleName="Movie news" />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <MovieCard
            title="Death in Venice"
            subtitle="Luchino Viscontis"></MovieCard>
          <MovieCard
            title="Death in Venice"
            subtitle="Luchino Viscontis"></MovieCard>
          <MovieCard
            title="Death in Venice"
            subtitle="Luchino Viscontis"></MovieCard>
        </ScrollView>

        <TitleItem titleName="Rick And Morty characters" />
        <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={event => {
          if (isScrollviewCloseToRight(event.nativeEvent)) {
            fetchMoreCharacters({
              variables: {
                page: dataCharacters?.characters.info.next
              }
            });;
          }
        }}>
        {characters?.map((character: CharactersQueryData["characters"]["results"][0]) => (
            <MovieCard
              title={character.name}
              subtitle={character.status}
              imageUrl={character.image}
              onPressHeart={() => onPressHeart(character.name)}
              >
            </MovieCard>
          ))}
        </ScrollView>

        <TitleItem titleName="Rick And Morty episodes" />
        <ScrollView horizontal >
          {data?.episodes.results.map((episode, item) => (
            <MovieCard
              key={item}
              title={episode.name}
              subtitle={episode.episode}
              onPressHeart={() => onPressHeart(episode.name)}>
            </MovieCard>
          ))}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

export default SearchScreen;
