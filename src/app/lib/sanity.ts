import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  apiVersion: "2024-04-29",
  dataset: "production",
  projectId: "p3ldffmo",
  useCdn: false,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => {
  return builder.image(source);
}
