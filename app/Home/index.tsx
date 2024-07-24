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

 
const Avatarbase =
  'https://avatars.githubusercontent.com/u/157251097?v=4'; //dps trocar pra do firebase!

 
type CardProps = React.ComponentProps<typeof Card>

export default function Home() {
  return (
    <View>
      <div className='flex-none p-12 mx-12'>
      <Avatar alt="Rick Sanchez's Avatar" className='w-24 h-24'>
            <AvatarImage source={{ uri: Avatarbase}} />
            <AvatarFallback>
              <Text>RS</Text>
            </AvatarFallback>
          </Avatar>
      </div>
      <Input 
        className=''
        placeholder='Procurar por Saloes por perto'
        aria-labelledbyledBy='inputLabel'
        aria-errormessage='inputError'
      />




      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </View>
  );
}