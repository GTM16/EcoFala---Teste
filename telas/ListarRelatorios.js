import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import globalStyles from './Styles'; 

export default function ListaRelatorios({ navigation }) {
  const handleViewRelatorio = (data) => {
    Alert.alert('Relatório do Paciente', `Você selecionou o relatório da data: ${data}`);
  };

  return (
    <View style={globalStyles.menuContainer}>
      <Text style={globalStyles.buttonText}>Relatório do Paciente</Text>

      <TouchableOpacity 
        style={globalStyles.menuButton} 
        onPress={() => handleViewRelatorio('10/10/2024')}
      >
        <Text style={globalStyles.menuButtonText}>Relatório - 10/10/2024</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={globalStyles.menuButton} 
        onPress={() => handleViewRelatorio('12/10/2024')}
      >
        <Text style={globalStyles.menuButtonText}>Relatório - 12/10/2024</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={globalStyles.menuButton} 
        onPress={() => handleViewRelatorio('14/10/2024')}
      >
        <Text style={globalStyles.menuButtonText}>Relatório - 14/10/2024</Text>
      </TouchableOpacity>
    </View>
  );
}
import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import globalStyles from './Styles'; 

export default function ListaRelatorios({ navigation }) {
  const handleViewRelatorio = (data) => {
    Alert.alert('Relatório do Paciente', `Você selecionou o relatório da data: ${data}`);
  };

  return (
    <View style={globalStyles.menuContainer}>
      <Text style={globalStyles.buttonText}>Relatório do Paciente</Text>

      <TouchableOpacity 
        style={globalStyles.menuButton} 
        onPress={() => handleViewRelatorio('10/10/2024')}
      >
        <Text style={globalStyles.menuButtonText}>Relatório - 10/10/2024</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={globalStyles.menuButton} 
        onPress={() => handleViewRelatorio('12/10/2024')}
      >
        <Text style={globalStyles.menuButtonText}>Relatório - 12/10/2024</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={globalStyles.menuButton} 
        onPress={() => handleViewRelatorio('14/10/2024')}
      >
        <Text style={globalStyles.menuButtonText}>Relatório - 14/10/2024</Text>
      </TouchableOpacity>
    </View>
  );
}
