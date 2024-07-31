import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { HiShare } from "react-icons/hi2";
import { GetPlaceDetails } from "@/service/GlobalApi";
import { PHOTO_URL } from "@/service/GlobalApi";
function InfoSection({ trip }) {
  const [photoUrl, setPhotoUrl] = useState();
  useEffect(() => {
    trip && GetPlacePhoto();
  }, [trip]);
  const GetPlacePhoto = async () => {
    const data = {
      textQuery: trip?.userSelection?.location?.label,
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
    <div>
      <img
        src={photoUrl}
        className="h-[440px] w-full object-cover rounded-xl "
      />
      <div className="flex justify-between items-center">
        <div className="my-5 flex flex-col gap-2">
          <h2 className="font-bold text-2xl">
            {trip?.userSelection?.location?.label}
          </h2>

          <div className="flex gap-5">
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-700 text-xs md:text-md">
              📅{trip?.userSelection?.noOfDays} Days
            </h2>
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-700 text-xs md:text-md">
              💰{trip?.userSelection?.budget}
            </h2>
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-700 text-xs md:text-md">
              🥂 No Of Traveler : {trip?.userSelection?.traveler}
            </h2>
          </div>
        </div>
        <Button>
          <HiShare size={20} />
        </Button>
      </div>
    </div>
  );
}

export default InfoSection;
