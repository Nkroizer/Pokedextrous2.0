import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { TransitionSpecs, HeaderStyleInterpolators } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InformationScreen from './components/InformationMain';
import GameScreen from './components/GameMain';
import AwardScreen from './components/AwardMain';
import CollectionScreen from './components/CollectionMain';
import RegionPokedex from './components/RegionPokedex';
import PokemonDetails from './components/PokemonDetails';
import PokemonCatch from './components/PokemonCatch';
import MiniGamePokedex from './components/MiniGamePokedex';

function HomeScreen({ navigation }) {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <View style={styles.mainScreenButton}>
        <TouchableOpacity onPress={() => navigation.navigate('Information')}>

          <Text style={styles.mainScreenButtonText}>
            Information
          </Text>

        </TouchableOpacity>
      </View>

      <View style={styles.mainScreenButton}>
        <TouchableOpacity onPress={() => navigation.navigate('CollectionHelper')}>

          <Text style={styles.mainScreenButtonText}>
            Collection
          </Text>

        </TouchableOpacity>
      </View>

      <View style={styles.mainScreenButton}>
        <TouchableOpacity onPress={() => {
          navigation.navigate('PokemonGame', {
            navigation: navigation
          });
        }}>

          <Text style={styles.mainScreenButtonText}>
            Mini Game
          </Text>

        </TouchableOpacity>
      </View>

      <View style={styles.mainScreenButton}>
        <TouchableOpacity onPress={() => navigation.navigate('PokemonAwards')}>

          <Text style={styles.mainScreenButtonText}>
            Awards
          </Text>

        </TouchableOpacity>
      </View>
    </View>
  );
}

const MyTransition = {
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  headerStyleInterpolator: HeaderStyleInterpolators.forFade,
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Information" component={InformationScreen} />
        <Stack.Screen name="CollectionHelper" component={CollectionScreen} />
        <Stack.Screen
          name="PokemonGame"
          component={GameScreen}
          options={{
            title: 'Pokemon Mini Game'
          }} />
        <Stack.Screen
          name="PokemonCatch"
          component={PokemonCatch}
          options={{
            title: 'Pokemon Catch Mini Game',
            ...MyTransition,
          }} />
        <Stack.Screen
          name="MiniGamePokedex"
          component={MiniGamePokedex}
          options={{
            title: 'Mini Game Pokedex',
            ...MyTransition,
          }} />
        <Stack.Screen name="PokemonAwards" component={AwardScreen} />
        <Stack.Screen name="Kanto" component={RegionPokedex} />
        <Stack.Screen name="Jhoto" component={RegionPokedex} />
        <Stack.Screen name="Hoenn" component={RegionPokedex} />
        <Stack.Screen name="Sinnoh" component={RegionPokedex} />
        <Stack.Screen name="Unova" component={RegionPokedex} />
        <Stack.Screen name="Kalos" component={RegionPokedex} />
        <Stack.Screen name="Alola" component={RegionPokedex} />
        <Stack.Screen name="Galar" component={RegionPokedex} />
        <Stack.Screen name="Other" component={RegionPokedex} />
        <Stack.Screen name="PokemonDetails" component={PokemonDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  mainScreenButton: {
    backgroundColor: '#fe0066',
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 2,
    margin: 10,
    textAlign: 'center',
    textTransform: 'uppercase',
    width: '90%'
  },

  mainScreenButtonText: {
    color: 'white',
    margin: 5,
    fontWeight: '700',
    fontSize: 20
  }
});
