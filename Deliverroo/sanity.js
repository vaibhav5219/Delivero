// import sanityClient from "@sanity/client";
import { createClient } from '@sanity/client';
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
    projectId: "qqzjlsx7",
    dataset: "deliverroo-clone",
    useCdn: true,
    apiVersion: "2021-10-21"
})

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);


// sanity cors add http://localhost:3000

export default client;