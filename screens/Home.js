import React from 'react';
import {StyleSheet, View, Text } from 'react-native';

export default function HomeScreen () {
    return(
    <View style= { styles.container}>

        <Text style={styles.titleText}>Bienvenidos al Home de la App</Text>
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
        color: 'red'
    }
})

