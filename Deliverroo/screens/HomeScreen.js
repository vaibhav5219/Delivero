import { SafeAreaView, Text, View, Image, TextInput, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import Categories from '../components/Categories/'
import FeaturedRow from '../components/FeaturedRow'
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
            {/* Header */}
            <View className="flex-row pb-3 items-center mx-4 space-x-2">
                <Image
                    source={{ uri: "https://links.papareact.com/wru" }}
                    className="rounded-full"
                />

                <View className="flex-1">
                    <Text className="font-bold text-gray-400 text-xs">Deliover Now!</Text>
                    <Text className="font-bold text-xl">
                        Current Location
                        <ChevronDownIcon size={20} color="#00FFFF" />
                    </Text>
                </View>

                <UserIcon size={35} color="#00FFFF" className="" />
            </View>

            {/* Search */}
            <View className="flex-row items-center space-x-2 pb-2 mx-4">
                <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
                    <MagnifyingGlassIcon color="#00FFFF" />
                    <TextInput
                        placeholder='Resturents and cuisines'
                        keyboardType='default'
                        className="flex-1"
                    />
                </View>
                <AdjustmentsHorizontalIcon color="#00FFFF" />
            </View>
            {/* Body */}
            <ScrollView className="bg-gray-100"
                contentContainerStyle={{
                    paddingBottom: 100,
                }}
            >
                {/* Categories */}
                <Categories></Categories>

                {/* Featured Row */}
                <FeaturedRow
                    id="1"
                    title="featured"
                    description="Description from Home screen"
                    featuredCategory="featured"
                />
                <FeaturedRow
                    id="2"
                    title="Tasty Discounts"
                    description="Description from Home screen"
                    featuredCategory="featured"
                />
                <FeaturedRow
                    id="3"
                    title="Offers Near You!"
                    description="Description from Home screen"
                    featuredCategory="featured"
                />

            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen
