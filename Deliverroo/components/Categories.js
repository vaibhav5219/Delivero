import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () =>
{
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
            <CategoryCard imgUrl="https://links.papareact.com/wru" title="testing 1" />
            <CategoryCard imgUrl="https://links.papareact.com/wru" title="testing 2" />
            <CategoryCard imgUrl="https://links.papareact.com/wru" title="testing 3" />
            <CategoryCard imgUrl="https://links.papareact.com/wru" title="testing 3" />
            <CategoryCard imgUrl="https://links.papareact.com/wru" title="testing 3" />
            <CategoryCard imgUrl="https://links.papareact.com/wru" title="testing 3" />
            <CategoryCard imgUrl="https://links.papareact.com/wru" title="testing 3" />
            <CategoryCard imgUrl="https://links.papareact.com/wru" title="testing 3" />
        </ScrollView>
    )
}

export default Categories