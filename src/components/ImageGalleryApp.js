import React, {useEffect, useState} from 'react';
import InputSpinner from './InputSpinner';

const ImageGalleryApp = () => {

    const [images, setImages] = useState([]);
    const [imageCount, setImageCount] = useState(1);

    const getCount = (count) => {
        setImageCount(count)
    }
    
    const getImages = () => {
        let items = [];
        for(let i=0; i<imageCount; i++){
            items.push('https://picsum.photos/id/'+i+'/237/200')
            
        }
        return items;
    }

    return (
        <div className="image-gallery">
            <InputSpinner getCount = {getCount}/>
            <div className="image-container">
                {
                    getImages().map((url) => (
                            <div><img className="display-image" src={url}/></div>
                    ))
                }
                
            </div>
        </div>
    )
}
//give a meaningful name for the input 
//use button instead of input type=button
export default ImageGalleryApp;