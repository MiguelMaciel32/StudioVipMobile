import React from 'react';
import { View, Text } from 'react-native';
import { BellRing, Check } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import { Input } from '~/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { Link, Stack } from 'expo-router';

 
const Avatarbase =
  'https://avatars.githubusercontent.com/u/157251097?v=4'; //dps trocar pra do firebase!

 
type CardProps = React.ComponentProps<typeof Card>

export default function Home() {
  return (
    <View> 
    </View>
  );
}