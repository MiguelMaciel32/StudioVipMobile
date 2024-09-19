import { ArrowLeft, LocateIcon, Star } from "lucide-react-native";
import { View, Text, StatusBar, Image } from "react-native"
import { Button } from '~/components/ui/button';
import { Link, Stack } from 'expo-router';

export default function Product () {
  
  return (
    <View className="w-full h-screen flex">
      
      <View className="h-64 w-full">
        <Image 
        className="w-full h-64 absolute"
        source={require("c.jpeg")}
        />
          <Button className="z-50 relative top-2 left-2 bg-zinc-950/80 backdrop-blur border border-zinc-800 rounded-md" size={"icon"}>
            <Link
            href="/Home">
            <Text>
              <ArrowLeft color={"#fff"} className="text-2xl absolute top-2 left-2" />
            </Text>
            </Link>
          </Button>
        
      </View>
      <View className="">
        <Text className="font-bold text-4xl tracking-tight my-4 px-4">Alex  Barber</Text>
         <View className="flex-row gap-2 items-center px-4" >
            <LocateIcon color={"#1a1a1a"} />
            <Text className="font-medium">
        Jardim Belval, Barueri
            </Text>
          </View>
          <View className="flex-row gap-2 items-center px-4">
            <Star color={"#1a1a1a"} />
            <Star color={"#1a1a1a"} />
            <Text className="font-medium">Avaliação: 2.0</Text>
          </View>
          <View className="h-[1px] w-full bg-zinc-950 mt-4" />



      </View>
    </View>
  )
}