import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { SearchBar } from 'react-native-elements';

const RegionPokedex = ({ route, navigation }) => {
    const { pokemonData, renderItem, FlatListItemSeparator } = route.params;

    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState(pokemonData);
    const [masterDataSource, setMasterDataSource] = useState(pokemonData);

    const searchFilterFunction = (text) => {
        // Check if searched text is not blank
        if (text) {
            // Inserted text is not blank
            // Filter the masterDataSource
            // Update FilteredDataSource
            const newData = masterDataSource.filter(function (item) {
                const itemData = item.name
                    ? item.name.toUpperCase()
                    : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilteredDataSource(newData);
            setSearch(text);
        } else {
            // Inserted text is blank
            // Update FilteredDataSource with masterDataSource
            setFilteredDataSource(masterDataSource);
            setSearch(text);
        }
    };

    return (
        <View>
            <SearchBar
                round
                searchIcon={{ size: 24 }}
                onChangeText={(text) => searchFilterFunction(text)}
                onClear={(text) => searchFilterFunction('')}
                placeholder="Type Here..."
                value={search}
            />

            <FlatList
                data={filteredDataSource}
                ItemSeparatorComponent={FlatListItemSeparator}
                renderItem={item => renderItem(item, navigation)}
                keyExtractor={item => item.key}
            />
        </View>
    )
};

export default RegionPokedex;