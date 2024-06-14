import { useEffect, useState } from "react";
import { getPosts } from "./helpers/getPosts";

export const useFetchPosts = () => {

    const [images, setImages] = useState([]);
    const [isLoading , setIsLoading ] = useState(true)
  
    const getPosts = async () => {
      const newImages = await getGifs(category);
      setImages(newImages);
      setIsLoading(false);
    };
  
    useEffect(() => {
      getImages();
    }, []);
  
    return {
      images,
      isLoading
    }
  }