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

const GITHUB_AVATAR_URI =
  'https://i.pinimg.com/originals/ef/a2/8d/efa28d18a04e7fa40ed49eeb0ab660db.jpg'; //dps trocar pra do firebase!

export default function Screen() {
  const [progress, setProgress] = React.useState(78);

  function updateProgressValue() {
    setProgress(Math.floor(Math.random() * 100));
  }
  return (
    <View className='flex-1 justify-center items-center '>
      
      <Image
        className='w-48 h-48'
        source={require('a.png')}
      />
      <Input
        className='mt-8 px-12'
        placeholder='Seu Email.'
        aria-labelledbyledBy='inputLabel'
        aria-errormessage='inputError'
      />
    <Input
        className='mt-8 px-12'
        placeholder='Sua Senha'
        aria-labelledbyledBy='inputLabel'
        aria-errormessage='inputError'
      />
      <Button className='mt-4'>
      <Link href='/Home'>
        <Text>Entrar</Text>
        </Link>
      </Button>
    </View>
  );
}
