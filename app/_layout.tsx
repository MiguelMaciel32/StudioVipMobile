import '~/global.css';
import { View } from 'react-native';
import Animated, { FadeInUp, FadeOutDown, LayoutAnimationConfig } from 'react-native-reanimated';
import { Avatar, AvatarImage } from '~/components/ui/avatar'; 
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { StatusBar } from 'expo-status-bar';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Theme, ThemeProvider } from '@react-navigation/native';
import * as React from 'react';
import { Platform } from 'react-native';
import { NAV_THEME } from '~/lib/constants';
import { useColorScheme } from '~/lib/useColorScheme';
import { PortalHost } from '@rn-primitives/portal';
import { ThemeToggle } from '~/components/ThemeToggle';
import { Link, Stack, SplashScreen } from 'expo-router';

const LIGHT_THEME: Theme = {
  dark: false,
  colors: NAV_THEME.light,
};
const DARK_THEME: Theme = {
  dark: true,
  colors: NAV_THEME.dark,
};

export {
  ErrorBoundary,
} from 'expo-router';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { colorScheme, setColorScheme, isDarkColorScheme } = useColorScheme();
  const [isColorSchemeLoaded, setIsColorSchemeLoaded] = React.useState(false);
  const [profilePicture, setProfilePicture] = React.useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = React.useState<boolean>(false);

  React.useEffect(() => {
    (async () => {
      const theme = await AsyncStorage.getItem('theme');
      const profile = await AsyncStorage.getItem('profile');
      const token = await AsyncStorage.getItem('token'); // Verifique se há um token ou cookie
      

      if (Platform.OS === 'web') {
        document.documentElement.classList.add('bg-background');
      }
      if (!theme) {
        AsyncStorage.setItem('theme', colorScheme);
        setIsColorSchemeLoaded(true);
        return;
      }
      const colorTheme = theme === 'dark' ? 'dark' : 'light';
      if (colorTheme !== colorScheme) {
        setColorScheme(colorTheme);
        setIsColorSchemeLoaded(true);
        return;
      }
      setIsColorSchemeLoaded(true);

      if (profile) {
        try {
          const profileData = JSON.parse(profile);
          console.log('Profile Data:', profileData); // Adicione um log para verificar os dados
          setProfilePicture(profileData.profile_picture); // Atualize a foto do perfil
        } catch (error) {
          console.error('Error parsing profile data:', error);
        }
      }

      if (token) {
        setIsAuthenticated(true); // O usuário está autenticado
      } else {
        setIsAuthenticated(false); // O usuário não está autenticado
      }
    })().finally(() => {
      SplashScreen.hideAsync();
    });
  }, []);

  if (!isColorSchemeLoaded) {
    return null;
  }

  // Fallback image URL
  const defaultProfilePicture = 'https://avatars.githubusercontent.com/u/157251097?v=4';

  return (
    <ThemeProvider value={isDarkColorScheme ? DARK_THEME : LIGHT_THEME}>
      <StatusBar style={isDarkColorScheme ? 'light' : 'dark'} />
      <Stack screenOptions={{
        headerRight: () => <ThemeToggle />, // Exibe o ThemeToggle em todas as telas
        headerLeft: () => isAuthenticated ? (
          <Link href='/Config'>
            <Avatar alt="Imagem do meu perfil" className='flex ml-auto w-12 h-12'>
              <AvatarImage source={{ uri: profilePicture || defaultProfilePicture }} />
            </Avatar>
          </Link>
        ) : null, // Mostra o avatar apenas se autenticado
        headerTitle: '', // Remova o texto do cabeçalho
        headerBackVisible: false, // Remove a seta de voltar
      }}>
        <Stack.Screen
          name='index'
          options={{
            title: 'StudioVip', // Título principal da tela inicial
          }}
        />
        <Stack.Screen
          name='otherScreen'
          options={{
            title: 'Outra Tela',
          }}
        />
        <Stack.Screen
          name='login'
          options={{
            title: 'Login',
            headerShown: false, // Oculta o cabeçalho na tela de login
          }}
        />
        <Stack.Screen
          name='register'
          options={{
            title: 'Cadastro',
            headerShown: false, // Oculta o cabeçalho na tela de cadastro
          }}
        />
      </Stack>
      <PortalHost />
    </ThemeProvider>
  );
}
