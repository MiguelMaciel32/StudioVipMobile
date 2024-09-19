import React from 'react';
import { View, Text, TextInput, Image } from 'react-native';
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
import { Button } from '~/components/ui/button';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ArrowRight, Car } from 'lucide-react-native';
import { ArrowLeft, LocateIcon, Star, Scissors, Wind, Flower, Sparkles, Search} from "lucide-react-native";

 
const Avatarbase = 'https://avatars.githubusercontent.com/u/157251097?v=4'; //dps trocar pra do firebase!

 
type CardProps = React.ComponentProps<typeof Card>

export default function Home() {
  return (
    <View className=' p-2'>
      <View className='flex flex-row'>
      <View className=' flex border-2 flex-row mx-4 rounded-md'>
      <TextInput className='flex w-96 ml-2' placeholder='Buscar'/>
      </View>
      <Button variant="outline" size="icon">
        <Search color={'#000'} />
      </Button>
      </View>
    <View>
    <Card className='mt-4'>
    <Image 
        className="w-full h-60 rounded-md"
        source={require("b.png")}
        />
    </Card>
    </View>

    <View>
    <Text className='font-bold text-gray-500 mt-4 ml-4'>Recomendado</Text>
    </View>

    <View className='flex flex-row mt-4 ml-4'>
    <View className='p-22'>
    <Link href="/Product"> 
      <Image
        className=' h-32 w-24 rounded-md absolute"' 
        source={require("c.jpeg")}
      />
      </Link>
    </View>



    <View className='flex'>
    <Text className='font-bold mx-2'></Text>
    </View>
      
    <View>
    <Link href="/Product"> 
    <Image
        className=' h-32 w-24 ml-4 rounded-md absolute"' 
        source={require("d.jpeg")}
      />
      </Link>

    </View>


    <View>
    <Link href="/Product"> 
    <Image
        className=' h-32 w-24 mx-2 rounded-md absolute"' 
        source={require("c.jpeg")}
      />
      </Link>
    </View>

    <View>  
    <Link href="/Product">  
    <Image
        className=' h-32 w-24 mx-1  rounded-md absolute"' 
        source={require("d.jpeg")}
      />
    </Link>


    </View>
    </View>

    </View>
  );
}