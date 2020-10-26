import React, {useEffect, useState} from 'react';
import InputSpinner from './InputSpinner';

const ImageGalleryApp = () => {

    const [images, setImages] = useState([]);
    const [imageCount, setImageCount] = useState(1);

    const getCount = (count) => {
        setImageCount(count)
    }

    useEffect(() => {
        if(imageCount > 0) {
            fetch('https://picsum.photos/v2/list/?limit='+imageCount)
                .then(response => response.json())
                .then(data => setImages(data));
        }
    },[imageCount]);
        
    return (
        <div className="image-gallery">
            <InputSpinner getCount = {getCount}/>
            <div className="image-container">
                {
                    images.map((image) => (
                            <div><img className="display-image" src={image.download_url}/></div>
                    ))
                }
                
            </div>
        </div>
    )
}
//give a meaningful name for the input 
//use button instead of input type=button
export default ImageGalleryApp;