import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text } from 'react-native';
import Pokemon from './Pokemon';
import KantoImage from "../assets/img/pokemon/bulbasaur.png";
import JhotoImage from "../assets/img/pokemon/chikorita.png";
import HoennImage from "../assets/img/pokemon/treecko.png";
import SinnohImage from "../assets/img/pokemon/turtwig.png";
import UnovaImage from "../assets/img/pokemon/snivy.png";
import KalosImage from "../assets/img/pokemon/chespin.png";
import AlolaImage from "../assets/img/pokemon/rowlet.png";
import GalarImage from "../assets/img/pokemon/grookey.png";
import OtherImage from "../assets/img/pokemon/meltan.png";

function renderItem(data, navigation) {
    return (
        <TouchableOpacity onPress={() => {
            navigation.navigate('PokemonDetails', {
                pokemonData: data.item,
            });
        }}>
            <Pokemon pokeData={data} ></Pokemon>
        </TouchableOpacity>
    )
};

function FlatListSeparator() {
    return (
        <View style={{
            height: .5,
            width: "100%",
        }}
        />
    );
};

const kantoPokemonList = require('../savedData/pokemon.json');
const jhotoPokemonList = require('../savedData/jhotoPokemon.json');
const hoennPokemonList = require('../savedData/hoennPokemon.json');
const sinnohPokemonList = require('../savedData/sinnohPokemon.json');
const unovaPokemonList = require('../savedData/unovaPokemon.json');
const kalosPokemonList = require('../savedData/kalosPokemon.json');
const alolaPokemonList = require('../savedData/alolaPokemon.json');
const galarPokemonList = require('../savedData/galarPokemon.json');
const otherPokemonList = require('../savedData/otherPokemon.json');

function InformationScreen({ navigation }) {
    return (
        <View>
            <TouchableOpacity
                style={styles.pokedexKantoButton}
                onPress={() => {
                    navigation.navigate('Kanto', {
                        pokemonData: kantoPokemonList,
                        renderItem: renderItem,
                        FlatListItemSeparator: FlatListSeparator,
                    });
                }}>

                <Text style={styles.pokedexTitleText}>
                    Kanto
                </Text>

                <Image source={KantoImage}
                    style={{
                        resizeMode: "contain",
                        height: 100,
                        width: 100,
                        marginBottom: 42
                    }} />
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.pokedexKantoButton}
                onPress={() => {
                    navigation.navigate('Jhoto', {
                        pokemonData: jhotoPokemonList,
                        renderItem: renderItem,
                        FlatListItemSeparator: FlatListSeparator,
                    });
                }}>

                <Text style={styles.pokedexTitleText}>
                    Jhoto
                </Text>

                <Image source={JhotoImage}
                    style={{
                        resizeMode: "contain",
                        height: 100,
                        width: 100,
                        marginBottom: 42
                    }} />
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.pokedexKantoButton}
                onPress={() => {
                    navigation.navigate('Hoenn', {
                        pokemonData: hoennPokemonList,
                        renderItem: renderItem,
                        FlatListItemSeparator: FlatListSeparator,
                    });
                }}>

                <Text style={styles.pokedexTitleText}>
                    Hoenn
                </Text>

                <Image source={HoennImage}
                    style={{
                        resizeMode: "contain",
                        height: 100,
                        width: 100,
                        marginBottom: 42
                    }} />
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.pokedexKantoButton}
                onPress={() => {
                    navigation.navigate('Sinnoh', {
                        pokemonData: sinnohPokemonList,
                        renderItem: renderItem,
                        FlatListItemSeparator: FlatListSeparator,
                    });
                }}>

                <Text style={styles.pokedexTitleText}>
                    Sinnoh
                </Text>

                <Image source={SinnohImage}
                    style={{
                        resizeMode: "contain",
                        height: 100,
                        width: 100,
                        marginBottom: 42
                    }} />
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.pokedexKantoButton}
                onPress={() => {
                    navigation.navigate('Unova', {
                        pokemonData: unovaPokemonList,
                        renderItem: renderItem,
                        FlatListItemSeparator: FlatListSeparator,
                    });
                }}>

                <Text style={styles.pokedexTitleText}>
                    Unova
                </Text>

                <Image source={UnovaImage}
                    style={{
                        resizeMode: "contain",
                        height: 100,
                        width: 100,
                        marginBottom: 42
                    }} />
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.pokedexKantoButton}
                onPress={() => {
                    navigation.navigate('Kalos', {
                        pokemonData: kalosPokemonList,
                        renderItem: renderItem,
                        FlatListItemSeparator: FlatListSeparator,
                    });
                }}>

                <Text style={styles.pokedexTitleText}>
                    Kalos
                </Text>

                <Image source={KalosImage}
                    style={{
                        resizeMode: "contain",
                        height: 100,
                        width: 100,
                        marginBottom: 42
                    }} />
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.pokedexKantoButton}
                onPress={() => {
                    navigation.navigate('Alola', {
                        pokemonData: alolaPokemonList,
                        renderItem: renderItem,
                        FlatListItemSeparator: FlatListSeparator,
                    });
                }}>

                <Text style={styles.pokedexTitleText}>
                    Alola
                </Text>

                <Image source={AlolaImage}
                    style={{
                        resizeMode: "contain",
                        height: 100,
                        width: 100,
                        marginBottom: 42
                    }} />
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.pokedexKantoButton}
                onPress={() => {
                    navigation.navigate('Galar', {
                        pokemonData: galarPokemonList,
                        renderItem: renderItem,
                        FlatListItemSeparator: FlatListSeparator,
                    });
                }}>

                <Text style={styles.pokedexTitleText}>
                    Galar
                </Text>

                <Image source={GalarImage}
                    style={{
                        resizeMode: "contain",
                        height: 100,
                        width: 100,
                        marginBottom: 42
                    }} />
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.pokedexKantoButton}
                onPress={() => {
                    navigation.navigate('Other', {
                        pokemonData: otherPokemonList,
                        renderItem: renderItem,
                        FlatListItemSeparator: FlatListSeparator,
                    });
                }}>

                <Text style={styles.pokedexTitleText}>
                    Other
                </Text>

                <Image source={OtherImage}
                    style={{
                        resizeMode: "contain",
                        height: 100,
                        width: 100,
                        marginBottom: 42
                    }} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    pokedexKantoButton: {
        backgroundColor: '#fe0066',
        borderRadius: 5,
        borderColor: 'black',
        borderWidth: 2,
        margin: 10,
        textAlign: 'center',
        textTransform: 'uppercase',
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center'
    },

    pokedexTitleText: {
        color: 'white',
        marginTop: 5,
        fontWeight: '700',
        fontSize: 25,
        margin: 5
    }
});

export default InformationScreen;