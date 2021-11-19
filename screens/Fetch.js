import React from 'react';
import {StyleSheet, View, Text } from 'react-native';

function Fetch () {
    return(
    <View style= { styles.container}>

        <Text style={styles.titleText}>Fetch de la app Pokemon</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 24
    },
    titleText: {
        fontFamily: 'roboto',
        fontSize: 20,
    }
})

export default Fetch;