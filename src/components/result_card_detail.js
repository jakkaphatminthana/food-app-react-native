import React from "react";
import { View, Image, Text, StyleSheet } from 'react-native';

const ResultCardDetail = ({ result }) => {
    return (
        <View style={style.container}>
            <Image
                source={{ uri: result.image_url }}
                style={style.image}
            />
            <Text style={style.name}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        marginLeft: 16,
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 4,
    },
    name: {
        fontSize: 14,
        fontWeight: 'bold',
    }
});

export default ResultCardDetail;