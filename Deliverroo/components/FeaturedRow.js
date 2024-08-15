import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { React, useEffect, useState } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import ResturentCard from './ResturentCard'
import client from '../sanity'

const FeaturedRow = ({ id, title, description, featuredCategory }) =>
{
    const [resturents, setResturents] = useState([]);

    const query = `*[_type == "featured" && _id == "${id}"]  {
    ...,
    resturents[]->{
        ...,
        type->{
        ...,
        },
        dishes[]->{
        ...,
        }
    }
    }[0]`
    // console.log('query =>>> ',query)
    useEffect(() =>
    {
        client.fetch(query)
            .then(data =>
            {
                setResturents(data.resturents)
            })
            .catch(error =>
            {
                console.error('Failed to fetch data:', error);
            });
    }, [id])

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
                {resturents?.map((resturent) =>
                (
                    <ResturentCard
                        key={resturent._id}
                        id={resturent._id}
                        imgUrl={resturent.image}
                        title={resturent.name}
                        rating={resturent.rating}
                        genre={resturent.type?.genre}
                        address={resturent.address}
                        short_description={resturent.short_description}
                        dishes={resturent.dishes}
                        long={resturent.long}
                        lat={resturent.lat}
                    />
                ))}

                {/* <ResturentCard
                    id={1}
                    imgUrl="https://links.papareact.com/gn7"
                    title="Yo! Momos"
                    rating={4.5}
                    genre="Russian"
                    address="123 Main Street"
                    short_description=""
                    dishes={[]}
                    long={20}
                    lat={0}
                />
                <ResturentCard
                    id={1}
                    imgUrl="https://links.papareact.com/gn7"
                    title="Yo! Momos"
                    rating={4.5}
                    genre="Russian"
                    address="123 Main Street"
                    short_description=""
                    dishes={[]}
                    long={20}
                    lat={0}
                />
                <ResturentCard
                    id={1}
                    imgUrl="https://links.papareact.com/gn7"
                    title="Yo! Momos"
                    rating={4.5}
                    genre="Russian"
                    address="123 Main Street"
                    short_description=""
                    dishes={[]}
                    long={20}
                    lat={0}
                /> */}
            </ScrollView>
        </View>
    )
}

export default FeaturedRow