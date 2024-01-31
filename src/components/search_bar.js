import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={style.backgroundStyle}>
            <Feather name="search" style={style.iconStyle} />
            <TextInput
                placeholder="Search"
                style={style.inputStyle}
                autoCorrect={false}
                autoCapitalize="none"
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    );
};

const style = StyleSheet.create({
    backgroundStyle: {
        marginTop: 15,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 16,
        flexDirection: 'row',
        // alignItems: 'center',
        marginBottom: 16,
    },
    inputStyle: {
        flex: 1,
        fontSize: 18,
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15,
    }
});

export default SearchBar;