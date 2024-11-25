import { Text, SafeAreaView, StyleSheet, TextInput, ScrollView, Alert, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import globalStyles from '../Styles'; 

export default function Cadastro({ navigation }) {
  const [inputs, setInputs] = useState(Array(13).fill(''));

  const handleInputChange = (text, index) => {
    const updatedInputs = [...inputs];
    updatedInputs[index] = text;
    setInputs(updatedInputs);
  };

  const handleSubmit = () => {
    Alert.alert('Cadastro', `Dados cadastrados com sucesso:\n${inputs.join(', ')}`);
    navigation.navigate('Pacientes'); // Navega para a tela de Pacientes após o cadastro
  };

  const labels = [
    "Nome completo",
    "Data de nascimento",
    "Sexo",
    "Endereço",
    "Contato de emergência",
    "Diagnóstico",
    "Comorbidades",
    "Alergias e restrições alimentares",
    "Histórico médico",
    "Medicações",
    "Sensibilidades",
    "Habilidades de comunicação",
    "Habilidades sociais"
  ];

  return (
    <SafeAreaView style={globalStyles.cadastroContainer}>
      <ScrollView contentContainerStyle={globalStyles.scrollContainer}>
        {labels.map((label, index) => (
          <SafeAreaView key={index} style={globalStyles.inputContainer}>
            <Text style={globalStyles.label}>{label}</Text>
            <TextInput
              style={globalStyles.cadastroInput}
              value={inputs[index]}
              onChangeText={(text) => handleInputChange(text, index)}
            />
          </SafeAreaView>
        ))}

        <TouchableOpacity 
          style={globalStyles.cadastroButton} 
          onPress={handleSubmit} 
        >
          <Text style={globalStyles.cadastroButtonText}>Cadastrar</Text>
        </TouchableOpacity>
      
      </ScrollView>
    </SafeAreaView>
  );
}
