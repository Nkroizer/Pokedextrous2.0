import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text } from 'react-native';
import { capitalizeFirstLetter } from './PokemonDetails';
import { allImages } from './RegularPokemonSprites';

import defaultImage from "../assets/img/pokemon/unknown-pokemon.png"

export function getPokeImage(sprite) {
  const found = allImages.find(element => element.name == sprite);

  if (found) {
    return found.image;
  }

  return defaultImage;
};

export function getPokeId(pokeId) {
  var prefix = "#";
  if (pokeId < 10) {
    prefix += "00"
  } else if (pokeId < 100) {
    prefix += "0"
  }

  return prefix + pokeId;
};

export function getTypeBakgroundColor(poketype) {
  switch (poketype) {
    case "Grass": {
      return { backgroundColor: "#9bcc50", borderRadius: 5, margin: 2, maxWidth: 110, textAlign: 'center', padding: 4 }
    }
    case "Poison": {
      return { backgroundColor: "#b97fc9", color: "#fff", borderRadius: 5, margin: 2, maxWidth: 110, textAlign: 'center', padding: 4 }
    }
    case "Fire": {
      return { backgroundColor: "#fd7d24", color: "#fff", borderRadius: 5, margin: 2, maxWidth: 110, textAlign: 'center', padding: 4 }
    }
    case "Electric": {
      return { backgroundColor: "#eed535", borderRadius: 5, margin: 2, maxWidth: 110, textAlign: 'center', padding: 4 }
    }
    case "Steel": {
      return { backgroundColor: "#9eb7b8", borderRadius: 5, margin: 2, maxWidth: 110, textAlign: 'center', padding: 4 }
    }
    case "Water": {
      return { backgroundColor: "#4592c4", color: "#fff", borderRadius: 5, margin: 2, maxWidth: 110, textAlign: 'center', padding: 4 }
    }
    case "Flying": {
      return { backgroundColor: "#3dc7ef", borderRadius: 5, margin: 2, maxWidth: 110, textAlign: 'center', padding: 4 }
    }
    case "Dragon": {
      return { backgroundColor: "#53a4cf", color: "#fff", borderRadius: 5, margin: 2, maxWidth: 110, textAlign: 'center', padding: 4 }
    }
    case "Ground": {
      return { backgroundColor: "#f7de3f", borderRadius: 5, margin: 2, maxWidth: 110, textAlign: 'center', padding: 4 }
    }
    case "Fairy": {
      return { backgroundColor: "#fdb9e9", borderRadius: 5, margin: 2, maxWidth: 110, textAlign: 'center', padding: 4 }
    }
    case "Fighting": {
      return { backgroundColor: "#d56723", color: "#fff", borderRadius: 5, margin: 2, maxWidth: 110, textAlign: 'center', padding: 4 }
    }
    case "Psychic": {
      return { backgroundColor: "#f366b9", color: "#fff", borderRadius: 5, margin: 2, maxWidth: 110, textAlign: 'center', padding: 4 }
    }
    case "Ghost": {
      return { backgroundColor: "#7b62a3", color: "#fff", borderRadius: 5, margin: 2, maxWidth: 110, textAlign: 'center', padding: 4 }
    }
    case "Rock": {
      return { backgroundColor: "#a38c21", color: "#fff", borderRadius: 5, margin: 2, maxWidth: 110, textAlign: 'center', padding: 4 }
    }
    case "Bug": {
      return { backgroundColor: "#729f3f", color: "#fff", borderRadius: 5, margin: 2, maxWidth: 110, textAlign: 'center', padding: 4 }
    }
    case "Dark": {
      return { backgroundColor: "#707070", color: "#fff", borderRadius: 5, margin: 2, maxWidth: 110, textAlign: 'center', padding: 4 }
    }
    default: {
      return { backgroundColor: "#a4acaf", borderRadius: 5, margin: 2, maxWidth: 110, textAlign: 'center', padding: 4 }
    }
  }
};

const Pokemon = (props) => {
  return (
    <>
      <View style={styles.pokemonCube}>
        <View style={styles.pokemonImageWrapper}>
          <Image style={styles.pokemonImage} source={getPokeImage(props.pokeData.item.sprite)} alt="Logo" />
        </View>

        <Text style={styles.pokemonId}>
          {getPokeId(props.pokeData.item.num)}
        </Text>

        <Text style={styles.pokemonText}>
          {capitalizeFirstLetter(props.pokeData.item.name)}
        </Text>

        <View>
          <Text style={{ ...styles.pokemonAbility, ...getTypeBakgroundColor(props.pokeData.item.types[0]) }}>
            {props.pokeData.item.types[0]}
          </Text>

          {props.pokeData.item.types[1] ?
            <Text style={{ ...styles.pokemonAbility, ...getTypeBakgroundColor(props.pokeData.item.types[1]) }}>
              {props.pokeData.item.types[1]}
            </Text> : null
          }
        </View>

      </View>
    </>
  );
};

const styles = StyleSheet.create({
  pokemonCube: {
    borderColor: 'blue',
    borderWidth: 2,
    borderRadius: 5,
    margin: 10,
    padding: 15,
  },

  pokemonImageWrapper: {
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'red',
    height: 50,
    width: 50,
  },

  pokemonImage: {
    height: 40,
    width: 40,
  },

  pokemonText: {
    color: '#313131',
    marginBottom: 5,
    textTransform: 'none',
    fontWeight: 'bold'
  },

  pokemonId: {
    color: '#919191',
    paddingTop: 2,
    fontWeight: 'bold'
  },

  pokemonAbility: {
    lineHeight: 18,
    textTransform: 'none',
    width: '38.4375%',
  }
});

export default Pokemon;