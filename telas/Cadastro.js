import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import globalStyles from '../Styles';

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

const Cadastro = ({ navigation, route }) => {
  const [formData, setFormData] = useState({});
  const [foto, setFoto] = useState(null);
  const [nome, setNome] = useState('');

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert('Permissão necessária', 'Permita o acesso à galeria para selecionar uma imagem.');
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setFoto(result.assets[0].uri);
    }
  };

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    if (field === 'nomeCompleto') {
      setNome(value); // Atualiza o nome para exibição abaixo da foto
    }
  };

  const handleSubmit = async () => {
    const novoPaciente = { id: Date.now().toString(), ...formData, foto };

    try {
      const pacientesExistentes = await AsyncStorage.getItem('pacientes');
      const pacientes = pacientesExistentes ? JSON.parse(pacientesExistentes) : [];
      pacientes.push(novoPaciente);

      console.log("Pacientes após adição:", pacientes);

      await AsyncStorage.setItem('pacientes', JSON.stringify(pacientes));

      route.params?.atualizarLista?.();
      navigation.goBack();
    } catch (error) {
      console.error("Erro ao salvar paciente:", error); 
      Alert.alert('Erro', 'Não foi possível salvar os dados do paciente.');
    }
  };

  return (
    <ScrollView style={globalStyles.cadastroContainer}>
      <View style={globalStyles.scrollContainer}>
        <Text style={globalStyles.paragraph}>Cadastro de Paciente</Text>

        {labels.map((label, index) => (
          <View key={index} style={globalStyles.inputContainer}>
            <Text style={globalStyles.label}>{label}</Text>
            <TextInput
              style={globalStyles.cadastroInput}
              placeholder={label}
              placeholderTextColor="#666"
              onChangeText={(text) => handleChange(label.toLowerCase().replace(/\s+/g, ''), text)} 
            />
          </View>
        ))}

        <TouchableOpacity onPress={pickImage} style={globalStyles.cadastroButton}>
          <Text style={globalStyles.cadastroButtonText}>Selecionar Foto</Text>
        </TouchableOpacity>

        {foto && (
          <View style={globalStyles.pacienteContainer}>
            <Image source={{ uri: foto }} style={globalStyles.pacienteFoto} />
            <Text style={globalStyles.pacienteNome}>{nome}</Text>  {/* Exibe o nome abaixo da foto */}
          </View>
        )}

        <TouchableOpacity onPress={handleSubmit} style={globalStyles.cadastroButton}>
          <Text style={globalStyles.cadastroButtonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Cadastro;
