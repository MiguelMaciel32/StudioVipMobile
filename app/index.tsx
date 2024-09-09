import * as React from 'react';
import { View } from 'react-native';
import Animated, { FadeInUp, FadeOutDown, LayoutAnimationConfig } from 'react-native-reanimated';
import { Info } from '~/lib/icons/Info';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { Image } from 'react-native';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import { Progress } from '~/components/ui/progress';
import { Text } from '~/components/ui/text';
import { Tooltip, TooltipContent, TooltipTrigger } from '~/components/ui/tooltip';
import { Link, Stack } from 'expo-router';



export default function Screen() {
  const [progress, setProgress] = React.useState(78);

  function updateProgressValue() {
    setProgress(Math.floor(Math.random() * 100));
  }
  return (
    <View className='flex-1 justify-center items-center '>
  
      <Image
        className='h-60 w-60'
        source={require('a.png')}
      />
      <Input
        className='mt-8 px-12 w-64 text-center'
        placeholder='Seu Email.'
        aria-labelledbyledBy='inputLabel'
        aria-errormessage='inputError'
      />
    <Input
        className='mt-8 px-12 w-64 text-center'
        placeholder='Sua Senha'
        aria-labelledbyledBy='inputLabel'
        aria-errormessage='inputError'
      />
      <Button className='mt-4 w-40 text-center mt-8'>
      <Link href='/Home'>
        <Text>Entrar</Text>
        </Link>
      </Button>
      <Text className='mt-4'>Esqueceu sua Senha?</Text>
    </View>
  );
}