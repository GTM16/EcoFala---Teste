import { Text, SafeAreaView, TextInput, ScrollView, Button, Alert, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import globalStyles from '../Styles'; 

export default function Feedback() {
  const [inputs, setInputs] = useState(Array(6).fill(''));

  const handleInputChange = (text, index) => {
    const updatedInputs = [...inputs];
    updatedInputs[index] = text;
    setInputs(updatedInputs);
  };

  const handleSubmit = () => {
    Alert.alert('Cadastro', `Dados cadastrados com sucesso:\n${inputs.join(', ')}`);
  };

  const labels = [
    "Como foi a clareza e a coerência da fala do paciente?",
    "Como foi a interação do paciente com o cenário ou outras pessoas simuladas?",
    "O paciente entendeu e respondeu adequadamente às questões ou interações?",
    "O paciente expressou suas emoções de forma compreensível?",
    "O paciente demonstrou confiança ao iniciar ou manter a interação?",
    "O paciente conseguiu manter o diálogo e fazer novas perguntas",
    "Observações",
  ];

  return (
    <SafeAreaView style={globalStyles.feedbackContainer}>
      <ScrollView contentContainerStyle={globalStyles.feedbackScrollContainer}>
        <Text style={globalStyles.feedbackTitle}>FEEDBACK DO PACIENTE</Text>

        {labels.map((label, index) => (
          <SafeAreaView key={index} style={globalStyles.feedbackInputContainer}>
            <Text style={globalStyles.feedbackLabel}>{label}</Text>
            <TextInput
              style={globalStyles.feedbackInput}
              value={inputs[index]}
              onChangeText={(text) => handleInputChange(text, index)}
              multiline={true}
              textAlignVertical="top"
            />
          </SafeAreaView>
        ))}

         <TouchableOpacity style={globalStyles.cadastroButton} onPress={handleSubmit}>
        <Text style={globalStyles.cadastroButtonText}>Enviar</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}
