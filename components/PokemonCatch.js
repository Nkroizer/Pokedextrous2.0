import React, { Component } from 'react';
import { Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';
import { Spring, animated } from '@react-spring/native';
import tainerCatch from "../assets/Game/tainerCatch.png";
import pokeBallButton from "../assets/Game/Pokeball.png";
import pokeBall from "../assets/img/items/poke-ball.png";
import { allImages } from './RegularPokemonSprites';
import { allShinyImages } from './ShinyPokemonSprites';
import { capitalizeFirstLetter } from './PokemonDetails';

const AnimatedView = animated(View);

const styles = {
    marginTop: 50,
    height: 100,
    width: 100,
}

const pokeballStyle = {
    height: 100,
    width: 100,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
}

const textBoxWWrapper = {
    borderColor: 'black',
    borderWidth: 3,
    height: 100,
    margin: 6,
    borderRadius: 5
}

const textBoxStyles = {
    borderColor: 'black',
    borderWidth: 4,
    height: 92,
    padding: 8,
    margin: 1,
    borderRadius: 5,
    fontWeight: 'bold',
    fontFamily: 'monospace'
}

const delay = ms => new Promise(res => setTimeout(res, ms));

export default class PokemonCatch extends Component {
    constructor(props) {
        super(props);
        const isShiny = Math.floor(Math.random() * 15);
        const shinyCalc = isShiny == 1;
        const tmpRandomNumber = shinyCalc ? Math.floor(Math.random() * allShinyImages.length) : Math.floor(Math.random() * allImages.length);
        const tmpPokemonImages = shinyCalc ? allShinyImages : allImages;
        const tmpName = capitalizeFirstLetter(tmpPokemonImages[tmpRandomNumber].name);
        const tmpForm = capitalizeFirstLetter(tmpPokemonImages[tmpRandomNumber].form);

        this.state = {
            pokeballFlag: false,
            randomNumber: tmpRandomNumber,
            isShiny: shinyCalc,
            pokemonImages: tmpPokemonImages,
            hidePokemon: false,
            messageBoxText: "",
            name: tmpName,
            form: tmpForm,
        };
    }
    async displayCatchMessage() {
        this.setState({ pokeballFlag: true });
        await delay(1000);
        this.setState({ hidePokemon: true });
        await delay(1000);
        this.setState({ messageBoxText: "" });
        for (var i = 0; i < 3; i++) {
            this.setState({ messageBoxText: this.state.messageBoxText + "." });
            await delay(300);
        }
        this.setState({ messageBoxText: "Gotcha! " });
        this.setState({ messageBoxText: this.state.messageBoxText + this.state.name });
        this.setState({ messageBoxText: this.state.messageBoxText + " Was Cuaght!" });
        await delay(1000);
        var newpokemonObj = {};
        newpokemonObj.newPokemonName = this.state.name;
        newpokemonObj.newPokemonId = this.state.randomNumber;
        newpokemonObj.newPokemonImage = this.state.pokemonImages[this.state.randomNumber].image
        this.props.navigation.navigate('PokemonGame', {
            navigation: this.props.navigation,
            newPokemon: newpokemonObj,
        });
    };

    async UNSAFE_componentWillMount() {
        await delay(300);
        this.setState({ messageBoxText: "A " });
        this.setState({ messageBoxText: this.state.messageBoxText + "Wild " });
        this.setState({ messageBoxText: this.state.messageBoxText + this.state.name });
        if (this.state.form && this.state.form != 'Default') {
            this.setState({ messageBoxText: this.state.messageBoxText + " (" + this.state.form + ")" });
        }
        if (this.state.isShiny) {
            this.setState({ messageBoxText: this.state.messageBoxText + "٭" });
        }
        this.setState({ messageBoxText: this.state.messageBoxText + " Appeared!" });
        await delay(300);
    };

    render() {
        const windowWidth = Dimensions.get('window').width;
        return (
            <View>
                <Spring
                    native
                    from={{ translateX: 0, opacity: 1 }}
                    to={{ translateX: windowWidth - 100, opacity: this.state.hidePokemon ? 0 : 1 }}
                >
                    {props => (
                        <AnimatedView style={{ ...styles, ...props }}>
                            <Image source={this.state.pokemonImages[this.state.randomNumber].image}
                                style={{
                                    resizeMode: "contain",
                                    height: 100,
                                    width: 100,
                                }} />
                        </AnimatedView>
                    )}
                </Spring>

                <Spring
                    native
                    from={{ translateX: windowWidth - 100 }}
                    to={{ translateX: 0 }}
                >
                    {props => (
                        <AnimatedView style={{ ...styles, ...props }}>
                            <Image source={tainerCatch}
                                style={{
                                    resizeMode: "contain",
                                    height: 100,
                                    width: 100,
                                }} />
                        </AnimatedView>
                    )}
                </Spring>

                {this.state.pokeballFlag &&
                    <Spring
                        native
                        from={{ translateX: 80, translateY: -40 }}
                        to={{ translateX: windowWidth - 70, translateY: -200 }}
                    >
                        {props => (
                            <AnimatedView style={{ ...props }}>
                                <Image source={pokeBall}
                                    style={{
                                        height: 50,
                                        width: 50,
                                        top: 0,
                                        position: 'absolute'
                                    }} />
                            </AnimatedView>
                        )}
                    </Spring>
                }

                <View style={textBoxWWrapper}>
                    <Text style={textBoxStyles}>
                        {this.state.messageBoxText}
                    </Text>
                </View>

                <Spring
                    native
                    from={{ opacity: 0 }}
                    to={{ opacity: 1 }}
                >
                    {props => (
                        <TouchableOpacity
                            onPress={() => {
                                this.displayCatchMessage()
                            }}>
                            <AnimatedView style={{ ...pokeballStyle, ...props, }} >
                                <Image source={pokeBallButton}
                                    style={{
                                        resizeMode: "contain",
                                        height: 100,
                                        width: 100,
                                    }} />
                            </AnimatedView>
                        </TouchableOpacity>
                    )}
                </Spring>
            </View>
        );
    }
}