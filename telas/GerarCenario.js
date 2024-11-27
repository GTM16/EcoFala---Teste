import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import globalStyles from '../Styles';

// Função para chamar a API de IA
const gerarCenarioIA = async (titulo, descricao) => {
  try {
    const response = await fetch('SUA_API_URL_AQUI', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: `Crie um cenário de conversa com o título "${titulo}" e a descrição "${descricao}".`,
      }),
    });

    const data = await response.json();
    if (data.cenario) {
      return data.cenario;
    } else {
      throw new Error('Cenário não encontrado na resposta');
    }
  } catch (error) {
    console.error('Erro ao chamar a API:', error);
    throw error;
  }
};

export default function GerarCenario() {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [cenarioGerado, setCenarioGerado] = useState('');

  const handleGerar = async () => {
    if (!titulo || !descricao) {
      Alert.alert('Erro', 'Por favor, preencha o título e a descrição.');
      return;
    }

    try {
      const cenario = await gerarCenarioIA(titulo, descricao);
      setCenarioGerado(cenario);
      setTitulo(''); // Limpa o campo após gerar o cenário
      setDescricao(''); // Limpa o campo após gerar o cenário
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível gerar o cenário. Tente novamente.');
    }
  };

  return (
    <View style={globalStyles.cenarioContainer}>
      <Text style={globalStyles.headerGerar}>CENÁRIO PERSONALIZADO</Text>

      <TextInput
        style={globalStyles.inputCenario}
        placeholder="Título"
        placeholderTextColor="#666"
        value={titulo}
        onChangeText={setTitulo}
      />
      <TextInput
        style={globalStyles.textAreaCenario}
        placeholder="Descrição do cenário"
        placeholderTextColor="#666"
        multiline
        numberOfLines={4}
        value={descricao}
        onChangeText={setDescricao}
      />

      <TouchableOpacity style={globalStyles.cadastroButton} onPress={handleGerar}>
        <Text style={globalStyles.cadastroButtonText}>Gerar</Text>
      </TouchableOpacity>

      {cenarioGerado ? (
        <View style={globalStyles.cenarioContainer}>
          <Text style={globalStyles.cenarioText}>{cenarioGerado}</Text>
        </View>
      ) : null}
    </View>
  );
}
