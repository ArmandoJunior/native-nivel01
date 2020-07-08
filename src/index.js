import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';

import api from './services/api';

export default function App() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get('projects').then(response => {
            console.log(response.data);
            setProjects(response.data);
        });
    }, []);

    async function handleAddProject() {
        const response = await api.post('projects', {
            title: `Novo projeto ${Date.now()}`,
            owner: 'Armando Junior'
        });

        const project = response.data;

        setProjects([...projects, project]);
    }

    return (
        <>
        <StatusBar barStyle="light-content" backgroundColor="#7159c1"></StatusBar>

            <SafeAreaView style={styles.container}>
                <FlatList 
                    data={projects}
                    keyExtractor={project => project.id}
                    renderItem={({ item: project}) => (
                        <Text style={styles.project}>{project.title}</Text>
                    )}
                />
                <TouchableOpacity 
                  ctiveOpacity={0.6} 
                  style={styles.button} 
                  onPress={handleAddProject}>
                  <Text style={styles.buttonText}>Adicionar Projeto</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7159c1',
        padding: 15
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    project: {
        color: '#fff',
        fontSize: 30
    },
    button: {
        backgroundColor: '#fff',
        margin: 20,
        height: 50,
        borderRadius:  4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 16
    },
});