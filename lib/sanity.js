import {
  createClient,
  createImageUrlBuilder,
  createPortableTextComponent,
} from "next-sanity";

const config = {
  projectId: `${process.env.NEXT_PUBLIC_PROJECTID}`,
  dataset: "landscaping-content",
  apiVersion: "2021-10-21",
  token: `${process.env.SANITY_TOKEN}`,
  useCdn: false,
};

export const sanityClient = createClient(config);

export const urlFor = (source) => createImageUrlBuilder(config).image(source);

export const PortableText = createPortableTextComponent({
  ...config,
  serializers: {},
});

export default sanityClient;