import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import globalStyles from '../Styles';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    if (!email || !senha) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos!');
      return;
    }

    // Aqui você pode adicionar a lógica desejada, como redirecionar para outra tela
    Alert.alert('Sucesso', 'Login realizado com sucesso!');
    navigation.navigate('Pacientes');
  };

  return (
    <View style={globalStyles.loginContainer}>
      {/* Desabilitei a parte da imagem para evitar o erro */}
      {/* <View style={globalStyles.logoContainer}>
        <Image
          source={require('../telas/Logo.png')}
          style={globalStyles.logoImage} 
          resizeMode="contain" 
        />
      </View> */}

      <TextInput
        style={globalStyles.input}
        placeholder="Email"
        placeholderTextColor="#FFF"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={globalStyles.input}
        placeholder="Senha"
        placeholderTextColor="#FFF"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity style={globalStyles.button} onPress={handleLogin}>
        <Text style={globalStyles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <View style={globalStyles.linksContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
          <Text style={globalStyles.linkText}>Cadastre-se</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('RedefinirSenha')}>
          <Text style={globalStyles.linkText}>Esqueceu a senha?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
