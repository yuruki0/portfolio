import { createRoute } from "@tanstack/react-router"

import classes from './art.module.css'

// Importing root route
import { rootRoute } from "./__root";

import imageIndex from '../../assets/images/image_index.json'

import Image from "../components/art-display/image";

interface ImageDataType {
    name: string,
    caption: string,
    date: string,
    fileName: string
}

const images: ImageDataType[] = [];

for (const imageData of imageIndex.illustrations) {
    import(`../../assets/images/${imageData.fileName}.jpg`)
        .then((imgUrl) => {
            const newImageData: ImageDataType = {...imageData};
            newImageData.fileName = imgUrl.default;
            images.push(newImageData)
        })
}

// Index page component
function ArtPage() {
    return (
        <>
            <h2>my art</h2>
            <div className={classes.art_display}>
                {
                    images.map((image) =>
                        <Image key={image.fileName} src={image.fileName} caption={image.caption} />
                    )
                }
            </div>
        </>
    )
}

// Making route for the index page
export const ArtRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/art',
    component: ArtPage,
});
