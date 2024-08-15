import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { React, useState, useEffect } from 'react'
import CategoryCard from './CategoryCard'
import client from '../sanity'

const Categories = () =>
{
    const [categories, setCategories] = useState([]);
    const query = `*[_type == "category"]{...}`;

    useEffect(() =>
    {
        console.log('client => ', client)
        client?.fetch(query)
            .then((data) =>
            {
                setCategories(data)
            })
            .catch(error =>
            {
                console.error('Failed to fetch data:', error);
            });
    }, [])

    console.log("CATEGORIES => ", categories)

    return (
        <ScrollView
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10,
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
        >
            {/* Category Card */}
            {categories?.map(category => (
                <CategoryCard
                    key={category._id}
                    imgUrl={category.image} // {urlFor(category.image.width(200)).url()}
                    title={category.name}
                />
            ))}

            {/* <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing 1" />
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing 2" />
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing 3" />
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing 3" />
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing 3" />
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing 3" />
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing 3" />
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing 3" /> */}
        </ScrollView>
    )
}

export default Categories