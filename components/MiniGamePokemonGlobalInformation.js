var globalPokemonList = {
    pokemonList: [],
    numberOfCuaght: 0
};

const globalMiniGameInformation = {
    getStarted: async () => {
        var tmpPokemonListData = await getData();
        if (tmpPokemonListData) {
            globalPokemonList = tmpPokemonListData;
        } else {
            globalPokemonList = initializeNewGlobalPokemonList();
            storeData(globalPokemonList)
        }

        return tmpPokemonListData();
    },

    storeData: async (value) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem('@globalPokemonList', jsonValue)
        } catch (e) {
            // saving error
        }
    },

    getData: async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('@globalPokemonList')
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (e) {
            // error reading value
        }
    },

    getGlobalPokemonList: () => {
        return globalPokemonList;
    },

    initializeNewGlobalPokemonList: () => {
        const emptyPokemonList = require('../savedData/emptyPokemonList.json');
        globalPokemonList.pokemonList = emptyPokemonList;
        storeData(globalPokemonList);
    },

    updateGlobalPokemonList: (pokemon) => {
        const found = globalPokemonList.pokemonList.findIndex(element => element.name.toLower() == pokemon.name);
        globalPokemonList.pokemonList[found].avialableForms.forEach(form => {
            if (form.formName == pokemon.form) {
                form.cuaght = true;
            }
        });
        globalPokemonList.numberOfCuaght++;
        storeData(globalPokemonList);
    }
}

export default globalMiniGameInformation;
