import React, { useState } from 'react';
import { Text, SafeAreaView, Image, Button, View, Alert, ScrollView } from 'react-native';
import globalStyles from './Styles';

const storyParts = [
  {
    text: "Era uma vez, em uma terra distante, um jovem aventureiro...",
    image: "https://example.com/image1.jpg",
    choices: {
      correct: "Seguir pela estrada.",
      incorrect: "Entrar na floresta escura.",
    },
  },
  {
    text: "Ele encontrou uma ponte mágica que levava a um reino encantado.",
    image: "https://example.com/image2.jpg",
    choices: {
      correct: "Atravessar a ponte.",
      incorrect: "Voltar para casa.",
    },
  },
];

export default function Cenario() {
  const [currentPart, setCurrentPart] = useState(0);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleChoice = (choice) => {
    if (choice === 'correct') {
      setIsCorrect(true);
      if (currentPart < storyParts.length - 1) {
        setCurrentPart(currentPart + 1);
      } else {
        Alert.alert('Fim da História', 'Você completou a história!');
      }
    } else {
      setIsCorrect(false);
      Alert.alert('Escolha Incorreta', 'Tente novamente!');
    }
  };

  const handleReadAloud = () => {
    console.log("Ler em voz alta:", storyParts[currentPart].text);
  };

  const handleRepeat = () => {
    handleReadAloud();
  };

  return (
    <SafeAreaView style={globalStyles.historiaContainer}>
      <ScrollView contentContainerStyle={globalStyles.scrollContainer}>
        <Text style={globalStyles.historiaParagraph}>{storyParts[currentPart].text}</Text>
        <Image
          source={{ uri: storyParts[currentPart].historiaImage }}
          style={globalStyles.historiaImage}
        />

        <View style={globalStyles.historiaButtonContainer}>
          <Button
            title={storyParts[currentPart].choices.correct}
            onPress={() => handleChoice('correct')}
            color="#28A745"
          />
          <Button
            title={storyParts[currentPart].choices.incorrect}
            onPress={() => handleChoice('incorrect')}
            color="#FF5733"
          />
        </View>

        <Button title="Repetir" onPress={handleRepeat} color="#007BFF" />
      </ScrollView>
    </SafeAreaView>
  );
}
