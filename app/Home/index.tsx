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
import { ArrowLeft, LocateIcon, Star } from "lucide-react-native";



 

 
const Avatarbase = 'https://avatars.githubusercontent.com/u/157251097?v=4'; //dps trocar pra do firebase!

 
type CardProps = React.ComponentProps<typeof Card>

export default function Home() {
  return (
    <View className=' p-2'>
      <View>
          <Text className='text-2xl ml-4 mt-6'>
            Olá, Luis Miguel
          </Text>
          <Text className='text-xl ml-4 mb-6 font-bold tracking-tight px-4'>
            Sex, 16 de Agosto
          </Text>
      </View>
      <View className='flex flex-row'>
      <View className=' flex border-2  flex-row mx-4 rounded-md'>
      <TextInput className='w-full p-2 mr-2 ' placeholder='Buscar'/>
      </View>
      </View>

    <View className='flex flex-row mx-10 gap-4 mt-2 '>
    <Button>
    <ArrowLeft color={"#fff"} className="" />
    </Button>

    <Button>
    <ArrowRight color={"#fff"} className="" />
    </Button>

    <Button>
    <ArrowLeft color={"#fff"} className="" />
    </Button>

    <Button>
    <ArrowLeft color={"#fff"} className="" />
    </Button>

    <Button>
    <ArrowLeft color={"#fff"} className="" />
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
      <Image
        className=' h-32 w-24 rounded-md absolute"' 
        source={require("c.jpeg")}
      />
    </View>



    <View className='flex'>
    <Text className='font-bold mx-2'></Text>
    </View>
      
    <View>
    <Image
        className=' h-32 w-24 rounded-md absolute"' 
        source={require("d.jpeg")}
      />

    </View>


    <View>
    <Image
        className=' h-32 w-24 mx-2 rounded-md absolute"' 
        source={require("c.jpeg")}
      />
    </View>

    <View>    
    <Image
        className=' h-32 w-24 mx-1  rounded-md absolute"' 
        source={require("d.jpeg")}
      />

    </View>
    <Link href="/Product">
      <Text>TESTE</Text>
      </Link>

    </View>

    </View>
  );
}