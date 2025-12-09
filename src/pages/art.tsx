import { createRoute } from "@tanstack/react-router"

import classes from './art.module.css'

// Importing root route
import { rootRoute } from "./__root";

import imageIndex from '../../assets/images/image_index.json'

import Image from "../components/art-display/image";
import { useEffect, useState } from "react";

interface ImageDataType {
    name: string,
    caption: string,
    date: string,
    fileName: string
}


// Index page component
function ArtPage() {
    const [art, setArt] = useState([...imageIndex.illustrations])

    useEffect(() => {
        (async () => {
            const images: ImageDataType[] = [...imageIndex.illustrations]
            for (let i = 0; i < imageIndex.illustrations.length; i ++) {
                const imageData = imageIndex.illustrations[i]
                const imgUrl = await import(`../../assets/images/${imageData.fileName}.jpg`)
                const newImageData: ImageDataType = {...imageData};
                newImageData.fileName = imgUrl.default;
                images[i] = newImageData
            }
            setArt(images)
        })()
    }, [])

    return (    
        <>
            <h2>my art</h2>
            <div className={classes.art_display}>
                {
                    art.map((image) =>
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
