import { View, Image } from 'react-native';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Text } from '../components/ui/text';
import { useToast } from '../components/ui/Toast'; 
import axios from 'axios';
import React, { useState } from 'react';
import * as SecureStore from 'expo-secure-store';
import { useRouter } from 'expo-router';
import { Avatar, AvatarImage } from '~/components/ui/avatar'; // Importar Avatar

export default function Screen() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null); // Adicionado para exibir erros
  const [profileImage, setProfileImage] = useState<string | null>(null); // Adicionar estado para a imagem do perfil
  const router = useRouter();
  const { push } = router;

  const handleLogin = async () => {
    setLoading(true);
    setError(null); // Limpar qualquer erro anterior
    try {
      const response = await axios.post('https://us-central1-scadaiot-c8a2b.cloudfunctions.net/mysqlteste', {
        username,
        password,
      });

      setLoading(false);
      if (response.data.success) {
        // Armazenar o token usando SecureStore
        await SecureStore.setItemAsync('token', response.data.token);

        // Atualizar a imagem do perfil
        setProfileImage(`https://yourwebsite.com${response.data.profile_picture}`);

        // Navegar para a tela protegida
        push('/Home'); // Ajuste conforme a configuração do seu Expo Router
      } else {
        // Mostrar mensagem de erro
        setError(response.data.message || 'Erro ao fazer login.');
      }
    } catch (error) {
      setLoading(false);
      setError('Erro ao conectar com o servidor.');
      console.error(error);
    }
  };

  return (
    <View className='flex-1 justify-center items-center'>
      <Image
        className='h-60 w-60'
        source={require('a.png')}
      />
      <Input
        className='mt-8 px-12 w-72 text-center'
        placeholder='Seu Username'
        value={username}
        onChangeText={setUsername}
        keyboardType="default"
      />
      <Input
        className='mt-8 px-12 w-72 text-center'
        placeholder='Sua Senha'
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button className='mt-8 w-72 text-center' onPress={handleLogin} disabled={loading}>
        <Text>{loading ? 'Carregando...' : 'Entrar'}</Text>
      </Button>
      {error && (
        <Text className='mt-4 text-red-500'>{error}</Text> // Exibe mensagem de erro, se houver
      )}
      {profileImage && (
        <Avatar alt="Imagem do perfil" className='mt-8'>
          <AvatarImage source={{ uri: profileImage }} />
        </Avatar>
      )}
    </View>
  );
}
