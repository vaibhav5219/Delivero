import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { urlFor } from '../sanity'

const CategoryCard = ({ imgUrl, title }) =>
{
    return (
        <TouchableOpacity className="relative mr-2">
            <Image
                source={{
                    uri: urlFor(imgUrl).url() // imgUrl,
                }}
                className="h-20 w-20 rounded"
                alt='img'
            />
            <Text className="absolute bottom-1 left-1 text-white font-bold rounded-xl">
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default CategoryCard