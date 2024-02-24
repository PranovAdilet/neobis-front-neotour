import React from 'react';
import ImageGallery, {ReactImageGalleryItem} from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import {transformImg} from "../../../utils/transformImg";



interface IImages{
    images: string[] | undefined
}

const SwiperImages = ({images} : IImages) => {

    const images2: ReactImageGalleryItem[] = (images || [])?.map(item => {

        const img = transformImg(item, '1200', '900')

        return  {
            original: img,
            thumbnail: item
        }
    })

    return  <ImageGallery items={images2}/>
};

export default SwiperImages