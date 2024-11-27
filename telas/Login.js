import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import globalStyles from '../Styles';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  // Simulação de um "banco de dados" local de usuários
  const usuarios = [
    { email: 'gabriel', senha: '123456' },
    { email: 'usuario2@example.com', senha: 'senha123' },
  ];

  const handleLogin = () => {
    // Verifica se os campos estão preenchidos
    if (!email || !senha) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos!');
      return;
    }

    // Verifica se a senha tem no mínimo 6 caracteres
    if (senha.length < 6) {
      Alert.alert('Erro', 'A senha deve ter no mínimo 6 caracteres!');
      return;
    }

    // Busca o usuário no array de usuários
    const usuarioEncontrado = usuarios.find(
      (usuario) => usuario.email === email && usuario.senha === senha
    );

    if (usuarioEncontrado) {
      // Caso o login seja bem-sucedido
      Alert.alert('Sucesso', 'Login realizado com sucesso!');
      navigation.navigate('Pacientes'); // Redireciona para a tela "Pacientes"
    } else {
      // Caso o e-mail ou a senha estejam incorretos
      Alert.alert('Erro', 'E-mail ou senha incorretos!');
    }
  };

  return (
    <View style={globalStyles.loginContainer}>
      {/* Logo */}
      <View style={globalStyles.logoContainer}>
        <Image
          source={require('./Logo.png')}
          style={globalStyles.logoImage}
          resizeMode="contain"
        />
      </View>

      {/* Campo de email */}
      <TextInput
        style={globalStyles.input}
        placeholder="Email"
        placeholderTextColor="#FFF"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Campo de senha */}
      <TextInput
        style={globalStyles.input}
        placeholder="Senha"
        placeholderTextColor="#FFF"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      {/* Botão de login */}
      <TouchableOpacity style={globalStyles.button} onPress={handleLogin}>
        <Text style={globalStyles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      {/* Links adicionais */}
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