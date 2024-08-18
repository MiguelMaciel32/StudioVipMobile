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

const Avatarbase =
  'https://avatars.githubusercontent.com/u/157251097?v=4';

export default function Home() {
    return (
      <View className='flex justify-center  mt-20'>
        <Card className="flex ml-12 w-full max-w-sm p-6 rounded-2xl">
  <CardHeader className="items-center">
    <Avatar alt="Rick Sanchez's Avatar" className="w-24 h-24">
      <AvatarImage source={{ uri: Avatarbase }} />
      <AvatarFallback>
        <Text>RS</Text>
      </AvatarFallback>
    </Avatar>
    <View className="p-3" />
    <CardTitle className="pb-2 text-center">Luis Miguel</CardTitle>
    <View className="flex-row">
      <CardDescription className="text-base font-semibold">Cliente</CardDescription>
      <Tooltip delayDuration={150}>
        <TooltipTrigger className="px-2 pb-0.5 active:opacity-50">
          <Info size={14} strokeWidth={2.5} className="w-4 h-4 text-foreground/70" />
        </TooltipTrigger>
      </Tooltip>
    </View>
  </CardHeader>
  <View className="flex-row justify-around gap-3">
    <View className="items-center">
      <Text className="text-sm text-muted-foreground">Regiao</Text>
      <Text className="text-xl font-semibold">Itapevi</Text>
    </View>
    <View className="items-center">
      <Text className="text-sm text-muted-foreground">Idade</Text>
      <Text className="text-xl font-semibold">18</Text>
    </View>
    <View className="items-center">
      <Text className="text-sm text-muted-foreground">Species</Text>
      <Text className="text-xl font-semibold">Human</Text>
    </View>
  </View>
</Card>
</View>
    )}