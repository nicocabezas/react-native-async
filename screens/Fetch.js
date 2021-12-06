import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    SafeAreaView,
    FlatList,
    ActivityIndicator,
} from 'react-native';

const movieURL = "https://reactnative.dev/movies.json";

const Fetch = () => {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(movieURL)
            .then((response) => response.json())
            .then((json) => setData(json.movies))
            .catch((error) => alert(error))
            .finally(() => setLoading(false));
    }, []);

    return (
        // <text style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>hola</text>
        <SafeAreaView style={styles.container}>
            {isLoading ? (
                <ActivityIndicator />
            ) : (
                <FlatList
                    data={data}
                    keyExtractor={({ id }, index) => id}
                    renderItem={({ item }) => (
                        <Text>
                            {item.title}
                            {item.releaseYear}
                        </Text>
                    )}
                />
            )}
            
        </SafeAreaView>
    )
};


const styles = StyleSheet.create({
    container: {
        padding: 24
    },
    titleText: {
        
        fontSize: 20,
    }
})

export default Fetch;