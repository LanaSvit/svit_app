import { useReactiveVar } from '@apollo/client';
import * as React from 'react';
import { Text, View, Button, ScrollView } from 'react-native';
import MovieCard from '../../components/MovieCard/MovieCard';
import { likedMoviesVar } from '../../reactiveVariables/reactiveVariables';

function HomeScreen({navigation}) {

  const likedMovies = useReactiveVar(likedMoviesVar);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        title="Edit Profile"
        onPress={() => navigation.navigate('Profile')}
      />
      <Text>Liked movies</Text>
      <ScrollView horizontal>
          {likedMovies.map(movie => <MovieCard title={movie}></MovieCard>)}
        </ScrollView>
    </View>
  );
}

export default HomeScreen;
