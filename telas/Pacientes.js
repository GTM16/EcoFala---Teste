import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import globalStyles from './Styles'; 

const pacientes = [
  { id: '1', nome: 'Paciente 1', foto: 'https://via.placeholder.com/100' },
  { id: '2', nome: 'Paciente 2', foto: 'https://via.placeholder.com/100' },
  { id: '3', nome: 'Paciente 3', foto: 'https://via.placeholder.com/100' },
];

const Pacientes = ({ navigation }) => {
  const handleSelectPaciente = () => {
    navigation.navigate('Menu'); // Navega para a tela de Menu
  };

  const handleAddPaciente = () => {
    navigation.navigate('Cadastro'); // Navega para a tela de Cadastro
  };

  return (
    <View style={globalStyles.pacientesContainer}>
      <Text style={globalStyles.pacientesTitulo}>Selecionar Pacientes</Text>
      <FlatList
        data={pacientes}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={handleSelectPaciente}>
            <View style={globalStyles.pacienteContainer}>
              <Image source={{ uri: item.foto }} style={globalStyles.pacienteFoto} />
              <Text style={globalStyles.pacienteNome}>{item.nome}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      {/* Botão para adicionar paciente */}
      <TouchableOpacity 
        style={globalStyles.pacienteButton} 
        onPress={handleAddPaciente}
      >
        <Text style={globalStyles.menuButtonText}>ADICIONAR PACIENTE</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Pacientes;
