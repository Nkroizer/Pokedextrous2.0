import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text } from 'react-native';

function getPokeImage(sprite) {
    const found = allImages.find(element => element.name == sprite);
  
    if (found) {
      return found.image;
    }
  
    return defaultImage;
  };

export function getPokemonHeight(height) {
    return height*10 + "cm";
};

export function getPokemonWeight(weight) {
    return weight + "kg";
};

export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

const PokemonDetails = ({ route, navigation }) => {
    const { pokemonData } = route.params;

    return (
        <View>
            <View style={styles.kantoPokedexBody}>
                <View style={styles.pokemonImageWrpper}>
                    <View style={styles.pokemonImageRedDotWrapper}>
                        <View style={styles.pokemonImageRedDot}></View>
                        <View style={styles.pokemonImageRedDot}></View>
                    </View>

                    <View style={styles.pokemonPokedexImageWrapper}>
                        <View style={styles.pokemonPokedexImageborder}>
                            <Image style={styles.pokemonPokedexImage} source={getPokeImage(pokemonData.sprite)} alt="Logo" />
                        </View>
                    </View>

                    <View style={styles.pokedexCircleRed}></View>
                </View>

                <Text style={styles.pokedexInformationBoxWrapper}>
                    Name: {capitalizeFirstLetter(pokemonData.name)}
                    {"\n"}
                    Height: {getPokemonHeight(pokemonData.heightm)}
                    {"\n"}
                    Weight: {getPokemonWeight(pokemonData.weightkg)}
                    {"\n"}
                </Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    pokedexCircleRed: {
        backgroundColor: 'rgb(253, 0, 0)',
        borderColor: 'black',
        borderWidth: 2,
        height: 20,
        margin: 6,
        width: 20,
    },
    
    kantoPokedexBody: {
        backgroundColor: '#fe0066',
        borderColor: 'black',
        borderWidth: 2,
        paddingBottom: 40,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 40,
    },
    
    pokemonImageWrpper: {
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 2,
        padding: 10,
        borderRadius: 5,
    },
    
    pokemonImageRedDotWrapper: {
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        width: 'auto',
    },
    
    pokemonImageRedDot: {
        backgroundColor: 'rgb(253, 0, 0)',
        borderColor: 'black',
        borderWidth: 2,
        height: 6,
        margin: 6,
        width: 6,
        borderRadius: 50,
    },
    
    pokemonPokedexImageWrapper: {
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center'
    },
    
    pokemonPokedexImageborder: {
        backgroundColor: 'rgb(153, 203, 152)',
        borderRadius: 5,
        borderColor: 'black',
        borderWidth: 2,
    },
    
    pokemonPokedexImage: {
        borderRadius: 5,
        height: 90,
        padding: 20,
        width: 90,
    },
    
    pokedexInformationBoxWrapper: {
        backgroundColor: 'rgb(157, 157, 157)',
        borderRadius: 5,
        borderColor: 'black',
        borderWidth: 2,
        fontFamily: 'monospace',
        fontWeight: '800',
        marginTop: 10,
        padding: 20,
    }
});

export default PokemonDetails;