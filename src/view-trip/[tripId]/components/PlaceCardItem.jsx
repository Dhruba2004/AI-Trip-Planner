import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { GetPlaceDetails, PHOTO_URL } from '@/service/GlobalApi';

function PlaceCardItem({place}) {
    const [photoUrl, setPhotoUrl] = useState();
    useEffect(() => {
      place && GetPlacePhoto();
    }, [place]);
    const GetPlacePhoto = async () => {
      const data = {
        textQuery: place?.title,
      };
      const result = await GetPlaceDetails(data).then((resp) => {
        const PhotoUrl = PHOTO_URL.replace(
          "{NAME}",
          resp.data.places[0].photos[1].name
        );
        setPhotoUrl(PhotoUrl);
      });
    };
  return (
    <Link to={'https://www.google.com/maps/search/?api=1&query='+place.title + " ," + place.address } target="_blank">
    <div className="border rounded-xl p-3 mt-2 flex gap-5 hover:scale-105 transition-all ">
      <img src={photoUrl} className="h-[130px] w-[160px] rounded-xl" />
      <div>
        <h2 className="font-bold">{place.title}</h2>
        <p className="text-sm text-gray-500">{place.description}</p> 
        <h2 className="mt-2">{place.time}</h2>
      </div>
    </div>
    </Link>
    
  );
}

export default PlaceCardItem;
