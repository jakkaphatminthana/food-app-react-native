import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/search_bar";
import useResults from "../hooks/use_results";
import ResultList from "../components/result_list";

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults('');

    const filterResultByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        });
    }

    return <View style={{backgroundColor: 'white', flex: 1}}>
        <SearchBar
            term={term}
            onTermChange={setTerm}
            onTermSubmit={() => searchApi(term)}
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <ScrollView>
            <ResultList
                title="Cost Effective"
                results={filterResultByPrice('$')}
            />
            <ResultList
                title="Bit Pricier"
                results={filterResultByPrice('$$')}
            />
            <ResultList
                title="Big Spender"
                results={filterResultByPrice('$$$')}
            />
        </ScrollView>
    </View>;
};

const style = StyleSheet.create({});

export default SearchScreen;