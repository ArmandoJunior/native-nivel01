import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

import api from './services/api';

export default function App() {
    return (
        <>
        <StatusBar barStyle="light-content" backgroundColor="#7159c1"></StatusBar>
            <View style={styles.container}>
                <Text style={styles.title}>Hello Armando</Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7159c1',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: '#fff',
        fontSize: 32,
        fontWeight: 'bold'
    }
});