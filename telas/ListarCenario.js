import React from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import CenarioCard from './CenarioCard';
import globalStyles from '../Styles'; 

const cenarios = [
  {
    titulo: "Conversa Sobre um Novo Amigo na Escola",
    descricao: "João acabou de conhecer um novo amigo chamado Pedro na escola. Eles se encontraram no recreio e começaram a conversar. João quer saber mais sobre Pedro, mas está nervoso sobre o que perguntar. Ajude João a pensar em perguntas para conhecer Pedro melhor e continuar a conversa de forma natural."
  },
  {
    titulo: "Pedido de Ajuda em Sala de Aula",
    descricao: "João está com dificuldades para entender um exercício de matemática. Ela vê que seu colega, Lucas, já terminou a tarefa. Maria precisa pedir ajuda a Lucas, mas está insegura sobre como fazer isso. Pratique com Maria o melhor jeito de pedir ajuda de maneira educada e clara."
  },
  {
    titulo: "Apresentação em Público",
    descricao: "João precisa fazer uma apresentação na frente da turma pela primeira vez. Ele está nervoso e não sabe como começar. Ajude João a praticar a apresentação, ensinando-o a falar com clareza e a lidar com o nervosismo para transmitir sua mensagem com confiança."
  }
];

export default function ListarCenario({ navigation }) {
  const handleEditarPaciente = () => {
    // Adicionar a navegação ou funcionalidade de edição de paciente aqui
    navigation.navigate('EditarPaciente'); // Exemplo de navegação
  };

  return (
    <View style={globalStyles.Listacontainer}>
      <ScrollView>
        {cenarios.map((cenario, index) => (
          <CenarioCard
            key={index}
            titulo={cenario.titulo} 
            descricao={cenario.descricao}
          />
        ))}
      </ScrollView>
      
      <TouchableOpacity 
        style={globalStyles.editarPacienteButton} 
        onPress={handleEditarPaciente}
      >
        <Text style={globalStyles.editarPacienteButtonText}>Editar Paciente</Text>
      </TouchableOpacity>
    </View>
  );
}
