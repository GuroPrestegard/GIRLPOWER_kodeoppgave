import imageUrlBuilder from "@sanity/image-url";
import client from "../Client";

export const urlForImage = (source) => {
    return imageUrlBuilder(client).image(source)
}
