import React from 'react';
import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/bundle";
import ImageGallery, {ReactImageGalleryItem} from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';



interface IImages{
    images: string[] | undefined
}

const SwiperImages = ({images} : IImages) => {
    const images2: ReactImageGalleryItem[] = (images || [])?.map(item => {
        return  {
            original: item,
            thumbnail: item
        }
    })


    return (
        <>
            <ImageGallery items={images2}/>
        </>

    );
};

export default SwiperImages;