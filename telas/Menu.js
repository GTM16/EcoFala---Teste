import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import globalStyles from '../Styles'; 

export default function MainScreen({ navigation }) {
  return (
    <View style={globalStyles.menuContainer}>
      {/* Botão para Listar Cenários */}
      <TouchableOpacity 
        style={globalStyles.menuButton} 
        onPress={() => navigation.navigate('ListarCenario')}  // Caminho correto: ListarCenario
      >
        <Text style={globalStyles.menuButtonText}>LISTAR CENÁRIOS</Text>
      </TouchableOpacity>

      {/* Botão para Gerar Cenário */}
      <TouchableOpacity 
        style={globalStyles.menuButton} 
        onPress={() => navigation.navigate('GerarCenario')}  // Caminho correto: GerarCenario
      >
        <Text style={globalStyles.menuButtonText}>GERAR NOVO CENÁRIO</Text>
      </TouchableOpacity>

      {/* Botão para Visualizar Relatórios */}
      <TouchableOpacity 
        style={globalStyles.menuButton} 
        onPress={() => navigation.navigate('Relatorio')}  // Caminho correto: Relatorio
      >
        <Text style={globalStyles.menuButtonText}>VISUALIZAR RELATÓRIOS</Text>
      </TouchableOpacity>

      {/* Botão para Editar Cadastro (usando o caminho Cadastro) */}
      <TouchableOpacity 
        style={globalStyles.menuButton} 
        onPress={() => navigation.navigate('Cadastro')}  // Caminho correto: Cadastro
      >
        <Text style={globalStyles.menuButtonText}>EDITAR CADASTRO</Text>
      </TouchableOpacity>
    </View>
  );
}
