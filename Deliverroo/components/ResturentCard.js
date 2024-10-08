import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/solid'
import { MapPinIcon } from 'react-native-heroicons/outline'
import { urlFor } from '../sanity'

const ResturentCard = ({
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat
}) =>
{
    
    return (
        <TouchableOpacity className="bg-white mr-3 boxShadow">
            <Image
                source={{
                    uri: urlFor(imgUrl).url(),
                }}
                className="h-36 w-64 rounded-sm"
                alt='img'
            />
            <View className="px-3 pb-4">
                <Text className="font-bold text-lg pt-2">{title}</Text>
                <View className="flex-row items-center space-x-1">
                    <StarIcon color="green" opacity={0.5} size={22}></StarIcon>
                    <Text className="text-xs text-gray-500">
                        <Text className="text-green-500">{rating}</Text> . {genre}
                    </Text>
                </View>
                <View className="flex-row items-center space-x-1">
                    <MapPinIcon color={"#00CCBB"} opacity={0.5} size={22}></MapPinIcon>
                    <Text>Near By . {address}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ResturentCard