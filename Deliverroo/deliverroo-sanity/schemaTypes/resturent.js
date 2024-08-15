import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'resturent',
  title: 'Resturent',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Resturent Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'short_description',
      title: 'Short Description',
      type: 'string',
      validation: Rule => Rule.max(200),
    }),
    defineField({
      name: 'image',
      title: 'image',
      type: 'image'
    }),
    defineField({
      name: 'lat',
      title: 'Latitude of the Resturant',
      type: 'number',
    }),
    defineField({
      name: 'log',
      title: 'Longitude of the Resturent',
      type: 'number',
    }),
    defineField({
      name: 'address',
      title: 'Resturent Address',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'Enter a Rating from (1-5 Starts)',
      type: 'number',
      validation: Rule => 
        Rule.required()
          .min(1)
          .max(5)
          .error("Please enter a value between 1 and 5"),
    }),
    defineField({
      name: 'type',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}],
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'dishes',
      title: 'Dishes',
      type: 'array',
      of: [{ type: "reference", to: [{ type: "dish"}] }],
    }),
  ],
})
