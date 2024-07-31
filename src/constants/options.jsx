export const SelectTravelesList =[
    {
        id:1,
        title:'Just Me',
        desc:'A sole traveles in exploration',
        icon:'✈️',
        people:'1'
    },
    {
        id:2,
        title:'A couple',
        desc:'Two traveles in tandem',
        icon:'🥂',
        people:'2 people'
    },
    {
        id:3,
        title:'Family',
        desc:'A group of fun loving people',
        icon:'🏡',
        people:'3 to 5 people'
    },
    {
        id:4,
        title:'Friends',
        desc:'A bunch of thrill-seekes',
        icon:'⛵',
        people:'5 to 10 People'
    },
]

export const SelectBudgetOptions=[
    {
        id:1,
        title:'Cheap',
        desc:'Stay conscious of costs',
        icon:'💵'
    },
    {
        id:2,
        title:'Moderate',
        desc:'Keep cost on the average side',
        icon:'💰'
    },
    {
        id:3,
        title:'Luxary',
        desc:'Dont worry about the cost',
        icon:'💸'
    }

]
export const AI_PROMPT='Generate Travel Plan for location:{location} for {totalDays} days for {traveler} people with a {budget} budget,Give me a hotels options list with HotelName ,Hotel Address ,Price,Hotel image url,geo coordinates,rating,descriptions and suggest itinerary with placeName ,Place details ,Place Image url ,Geo coordinates ,ticket pricing,rating,Time travel each of the location for {totalDays} day plan with best time in JSON format'