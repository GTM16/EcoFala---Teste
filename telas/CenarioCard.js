import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import globalStyles from '../Styles'; 

export default function CenarioCard({ titulo, descricao }) {
  return (
    <View style={globalStyles.card}>
      <Text style={globalStyles.label}>Título</Text>
      <Text style={globalStyles.cardTitulo}>{titulo}</Text>
      <Text style={globalStyles.label}>Cenário</Text>
      <Text style={globalStyles.cardDescricao}>{descricao}</Text>
      <TouchableOpacity style={globalStyles.button}>
        <Text style={globalStyles.buttonText}>REUTILIZAR CENÁRIO</Text>
      </TouchableOpacity>
    </View>
  );
}
