import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import globalStyles from '../Styles';

const Pacientes = ({ navigation }) => {
  const [pacientes, setPacientes] = useState([]);

  useEffect(() => {
    const loadPacientes = async () => {
      try {
        const pacientesSalvos = await AsyncStorage.getItem('pacientes');
        if (pacientesSalvos) {
          setPacientes(JSON.parse(pacientesSalvos)); // Atualiza o estado com os pacientes
        }
      } catch (error) {
        console.error("Erro ao carregar pacientes:", error);
      }
    };

    loadPacientes();
  }, []); // Carrega os pacientes quando a tela for carregada

  const renderPaciente = ({ item }) => (
    <View style={globalStyles.pacienteContainer}>
      {item.foto && (
        <Image source={{ uri: item.foto }} style={globalStyles.pacienteFoto} />
      )}
      <Text style={globalStyles.pacienteNome}>{item.nomeCompleto}</Text> {/* Nome do paciente abaixo da foto */}
      <TouchableOpacity
        style={globalStyles.pacienteButton}
        onPress={() => navigation.navigate('EditarPaciente', { paciente: item })}
      >
        <Text style={globalStyles.pacienteButtonText}>Editar</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={globalStyles.pacientesContainer}>
      <Text style={globalStyles.pacientesTitulo}>Lista de Pacientes</Text>
      <FlatList
        data={pacientes}
        keyExtractor={(item) => item.id} // Cada item deve ter um id único
        renderItem={renderPaciente} // Renderiza o paciente com foto e nome
      />
    </View>
  );
};

export default Pacientes;
