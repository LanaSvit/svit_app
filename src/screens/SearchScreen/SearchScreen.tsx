import * as React from 'react';
import { Button, ScrollView, SafeAreaView } from 'react-native';
import MovieCard from '../../components/MovieCard/MovieCard';
import TitleItem from '../../components/TitleItem/TitleItem';
import styles from './SearchScreen.styles';

function SearchScreen({ navigation }) {
    return (
      <SafeAreaView style={styles.container}>        
      <Button
          title="Advanced filters"
          onPress={() => navigation.navigate('Filters')}
        />
      <ScrollView showsVerticalScrollIndicator={false} >
        <TitleItem titleName="Movie news"/>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <MovieCard title="Death in Venice" director="Luchino Viscontis"></MovieCard>
          <MovieCard title="Death in Venice" director="Luchino Viscontis"></MovieCard>
          <MovieCard title="Death in Venice" director="Luchino Viscontis"></MovieCard>
          <MovieCard title="Death in Venice" director="Luchino Viscontis"></MovieCard>
          <MovieCard title="Death in Venice" director="Luchino Viscontis"></MovieCard>
        </ScrollView>
        
        <TitleItem titleName="You may like"/>
        <ScrollView horizontal>
          <MovieCard title="Death in Venice" director="Luchino Viscontis"></MovieCard>
        </ScrollView>

        <TitleItem titleName="Most popular"/>
        <ScrollView horizontal>
          <MovieCard title="Death in Venice" director="Luchino Viscontis"></MovieCard>
        </ScrollView>
      </ScrollView>
      </SafeAreaView>
    );
}

export default SearchScreen;
