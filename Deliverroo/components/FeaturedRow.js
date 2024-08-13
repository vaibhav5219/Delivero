import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import ResturentCard from './ResturentCard'

const FeaturedRow = ({ id, title, description, featuredCategory }) =>
{
    return (
        <View>
            <View className="mt-4 flex-row items-center justify-between px-4">
                <Text className="font-bold text-lg">{title}</Text>
                <ArrowRightIcon size={20} color="#00CCBB" />
            </View>
            <Text className="text-xs text-gray-500 px-4">{description}</Text>
            <ScrollView
                horizontal
                contentContainerStyle={{
                    paddingHorizontal: 15
                }}
                showsHorizontalScrollIndicator={false}
                className="pt-4"
            >
                {/* Resturent cards */}
                <ResturentCard
                    id = {1}
                    imgUrl = "https://links.papareact.com/wru"
                    title = "Yo! Momos"
                    rating = {4.5}
                    genre = "Russian"
                    address = "123 Main Street"
                    short_description = ""
                    dishes = {[]}
                    long = {20}
                    lat = {0}
                />
                <ResturentCard
                    id = {1}
                    imgUrl = "https://links.papareact.com/wru"
                    title = "Yo! Momos"
                    rating = {4.5}
                    genre = "Russian"
                    address = "123 Main Street"
                    short_description = ""
                    dishes = {[]}
                    long = {20}
                    lat = {0}
                />
                <ResturentCard
                    id = {1}
                    imgUrl = "https://links.papareact.com/wru"
                    title = "Yo! Momos"
                    rating = {4.5}
                    genre = "Russian"
                    address = "123 Main Street"
                    short_description = ""
                    dishes = {[]}
                    long = {20}
                    lat = {0}
                />
            </ScrollView>
        </View>
    )
}

export default FeaturedRow