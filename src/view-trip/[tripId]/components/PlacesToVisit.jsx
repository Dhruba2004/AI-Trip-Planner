import React from "react";
import PlaceCardItem from "./PlaceCardItem";

function PlacesToVisit({ trip }) {
  return (
    <div className="mt-4">
      <h2 className="font-bold text-lg">Places to Visit</h2>
      <div className="grid md:grid-cols-2 gap-5 cursor-pointer">
        {trip?.tripData?.itinerary.map((place, index) => (
          <div className="mt-3">
            <h2 className="font-medium text-lg"> Day {place.day}</h2>
            <div className="">
              <div>
                <h2 className="font-[700] text-sm text-orange-600">
                  {place.time}
                </h2>
                <PlaceCardItem place={place} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlacesToVisit;
