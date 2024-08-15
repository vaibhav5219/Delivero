import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'deliverroo',

  projectId: 'qqzjlsx7',
  dataset: 'deliverroo-clone',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
