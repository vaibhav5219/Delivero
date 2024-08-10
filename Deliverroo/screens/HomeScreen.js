import { SafeAreaView, Text, View, Image, TextInput } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import
{
    UserIcon,
    MagnifyingGlassIcon,
    AdjustmentsHorizontalIcon,
    ChevronDownIcon
} from "react-native-heroicons/outline";

const HomeScreen = () =>
{

    const navigation = useNavigation();
    useEffect(() =>
    {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    return (
        <SafeAreaView className="bg-white pt-10">
            <Text className=" text-cyan-100">
                {/* Header */}
                <View className="flex-row pb-3 items-center mx-4 space-x-2">
                    <Image
                        source={{
                            uri: "https://links.papareact.com/wru",
                        }}
                        className="h-7 w-7 bg-grey-300 p-4 rounded-full"
                    />

                    <View className="flex-1">
                        <Text className="font-bold text-gray-400 text-xs">Deliover Now!</Text>
                        <Text className="font-bold text-xl">
                            Current Location
                            <ChevronDownIcon size={20} color="#00FFFF" />
                        </Text>
                    </View>

                    <UserIcon size={35} color="#00FFFF" />
                    <MagnifyingGlassIcon color="#00FFFF" />
                    <TextInput />
                    <AdjustmentsHorizontalIcon color="#00FFFF" />
                </View>

                {/* Search */}
            </Text>
        </SafeAreaView>
    )
}

export default HomeScreen
