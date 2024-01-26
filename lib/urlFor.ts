import { client } from "@lib/sanityClient";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

export default urlFor;
