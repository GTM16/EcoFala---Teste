import React, { useState } from 'react';
import { Text, SafeAreaView, TextInput, View, Button, Alert } from 'react-native';
import globalStyles from '../Styles';

export default function Relatorio() {
  const [relatorio, setRelatorio] = useState(
    "Relatório gerado pela IA:\n\nO paciente apresentou melhorias significativas na interação social e na expressão de emoções. Recomenda-se continuar com as sessões semanais e introduzir atividades em grupo."
  );
  const [isEditing, setIsEditing] = useState(false);

  const handleEditRelatorio = () => {
    setIsEditing(!isEditing); 
  };

  const handleComoProsseguir = () => {
    Alert.alert('Como Prosseguir', '1. Continue as sessões semanais.\n2. Introduza atividades em grupo.\n3. Avalie o progresso mensalmente.');
  };

  return (
    <SafeAreaView style={globalStyles.relatorioContainer}> 
      <Text style={globalStyles.relatorioLabel}>Data: 14/10/2024</Text>
      <Text style={globalStyles.relatorioLabel}>Paciente: João Silva</Text>
      <Text style={globalStyles.relatorioLabel}>Cenário: Aventura na Floresta Encantada</Text>

      {isEditing ? (
        <TextInput
          style={globalStyles.relatorioTextInput} 
          value={relatorio}
          onChangeText={setRelatorio}
          multiline
          numberOfLines={4} 
        />
      ) : (
        <View style={globalStyles.relatorioContentContainer}>
          <Text style={globalStyles.relatorioText}>{relatorio}</Text>
        </View>
      )}

      <View style={globalStyles.relatorioButtonContainer}> 
        <Button title={isEditing ? "Salvar" : "Editar Relatório"} onPress={handleEditRelatorio} color="#007BFF" />
        <Button title="Como Prosseguir?" onPress={handleComoProsseguir} color="#28A745" />
      </View>
    </SafeAreaView>
  );
}
