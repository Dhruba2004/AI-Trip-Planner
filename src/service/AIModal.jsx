import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Generate Travel Plan for Location:Las Vegas for 3 days for couple with a cheap budget,Give me a hotels options list with HotelName ,Hotel Address ,Price,Hotel image url,geo coordinates,rating,descriptions and suggest itinerary with placeName ,Place details ,Place Image url ,Geo coordinates ,ticket pricing,rating,Time travel each of the location for 3 day plan with best time in JSON format",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "hotels": [\n    {\n      "name": "The D Las Vegas",\n      "address": "301 Fremont Street, Las Vegas, NV 89101",\n      "price": "$60-$100 per night",\n      "imageUrl": "https://www.thedle.com/media/wysiwyg/images/hero-images/hero-image-the-d-las-vegas-hotel-casino.jpg",\n      "coordinates": {\n        "latitude": 36.1699,\n        "longitude": -115.1425\n      },\n      "rating": 4,\n      "description": "A centrally located, budget-friendly hotel with a casino, restaurants, and a rooftop pool. It\'s a short walk from Fremont Street Experience."\n    },\n    {\n      "name": "Golden Nugget Las Vegas",\n      "address": "129 E Fremont St, Las Vegas, NV 89101",\n      "price": "$70-$120 per night",\n      "imageUrl": "https://www.goldennugget.com/las-vegas/media/images/hero-images/hero-image-las-vegas-hotel-casino.jpg",\n      "coordinates": {\n        "latitude": 36.1698,\n        "longitude": -115.1414\n      },\n      "rating": 4.5,\n      "description": "A historic hotel known for its impressive aquarium, casino, and multiple dining options. It\'s also located on Fremont Street."\n    },\n    {\n      "name": "Circus Circus Hotel & Casino",\n      "address": "2880 S Las Vegas Blvd, Las Vegas, NV 89109",\n      "price": "$40-$80 per night",\n      "imageUrl": "https://media.accorhotels.com/media/images/hotels/40/4084/4084_h1_l.jpg",\n      "coordinates": {\n        "latitude": 36.1098,\n        "longitude": -115.1711\n      },\n      "rating": 3.5,\n      "description": "A budget-friendly hotel with a circus theme, carnival midway, and a large casino. It\'s known for its family-friendly atmosphere."\n    }\n  ],\n  "itinerary": [\n    {\n      "day": 1,\n      "title": "Fremont Street Experience",\n      "description": "Experience the vibrant atmosphere of Fremont Street, with live music, street performers, and dazzling light shows. Enjoy a free show at the Fremont Street Experience.",\n      "imageUrl": "https://www.vegasexperience.com/wp-content/uploads/Fremont-Street-Experience-Las-Vegas-Aerial-View.jpg",\n      "coordinates": {\n        "latitude": 36.1696,\n        "longitude": -115.1424\n      },\n      "ticketPrice": "Free",\n      "rating": 4.5,\n      "time": "Afternoon and evening"\n    },\n    {\n      "day": 1,\n      "title": "Dinner at a Buffet",\n      "description": "Enjoy a delicious and affordable meal at one of the many buffets on Fremont Street. Many hotels offer buffets at reasonable prices.",\n      "imageUrl": "https://www.casino.com/blog/wp-content/uploads/2018/08/las-vegas-buffet.jpg",\n      "coordinates": {\n        "latitude": 36.1696,\n        "longitude": -115.1424\n      },\n      "ticketPrice": "$20-$30 per person",\n      "rating": 4,\n      "time": "Evening"\n    },\n    {\n      "day": 2,\n      "title": "Free Walking Tour",\n      "description": "Take a free walking tour of the Las Vegas Strip, learning about its history and iconic landmarks. Many tour operators offer free walking tours.",\n      "imageUrl": "https://www.visittwincities.com/wp-content/uploads/2019/06/Las-Vegas-Strip-Walking-Tour.jpg",\n      "coordinates": {\n        "latitude": 36.1146,\n        "longitude": -115.1726\n      },\n      "ticketPrice": "Free",\n      "rating": 4,\n      "time": "Morning"\n    },\n    {\n      "day": 2,\n      "title": "Bellagio Conservatory & Botanical Garden",\n      "description": "Admire the stunning floral displays and seasonal themes at the Bellagio Conservatory. It\'s a beautiful and free attraction.",\n      "imageUrl": "https://www.bellagio.com/content/dam/bellagio/images/conservatory-botanical-garden/2022-holiday-display/bellagio-conservatory-botanical-garden-holiday-display-2022.jpg",\n      "coordinates": {\n        "latitude": 36.1121,\n        "longitude": -115.1733\n      },\n      "ticketPrice": "Free",\n      "rating": 4.5,\n      "time": "Afternoon"\n    },\n    {\n      "day": 2,\n      "title": "Fountains of Bellagio",\n      "description": "Watch the mesmerizing synchronized water and light show at the Fountains of Bellagio. It\'s a free, spectacular performance.",\n      "imageUrl": "https://www.bellagio.com/content/dam/bellagio/images/fountains-of-bellagio/fountains-of-bellagio-main.jpg",\n      "coordinates": {\n        "latitude": 36.1121,\n        "longitude": -115.1733\n      },\n      "ticketPrice": "Free",\n      "rating": 5,\n      "time": "Evening"\n    },\n    {\n      "day": 3,\n      "title": "Red Rock Canyon National Conservation Area",\n      "description": "Explore the scenic beauty of Red Rock Canyon, with its dramatic rock formations, hiking trails, and stunning views. A daily entry fee applies.",\n      "imageUrl": "https://www.nps.gov/redr/planyourvisit/images/RedRock-Canyon-Scenic-Drive-1.jpg",\n      "coordinates": {\n        "latitude": 36.1690,\n        "longitude": -115.2673\n      },\n      "ticketPrice": "$15 per vehicle",\n      "rating": 4.5,\n      "time": "Morning and afternoon"\n    },\n    {\n      "day": 3,\n      "title": "Neon Museum",\n      "description": "Visit the Neon Museum and explore the collection of vintage Las Vegas signs, offering a glimpse into the city\'s history and neon artistry.",\n      "imageUrl": "https://www.neonmuseum.org/wp-content/uploads/2018/11/Neon-Museum-Las-Vegas-Exterior-Front.jpg",\n      "coordinates": {\n        "latitude": 36.1634,\n        "longitude": -115.1432\n      },\n      "ticketPrice": "$20 per person",\n      "rating": 4,\n      "time": "Evening"\n    }\n  ]\n}\n```\n\n**Explanation:**\n\n* **Hotels:** The list includes three budget-friendly hotels with various amenities and locations.\n* **Itinerary:**\n    * **Day 1:** Focuses on the vibrant Fremont Street Experience, including a free show and a buffet dinner.\n    * **Day 2:** Offers a free walking tour of the Las Vegas Strip, a visit to the Bellagio Conservatory, and the iconic Fountains of Bellagio.\n    * **Day 3:** Includes a scenic drive through Red Rock Canyon National Conservation Area and a visit to the Neon Museum for a cultural experience.\n* **Place details:** Each location provides details like description, image URL, coordinates, ticket pricing, rating, and the best time to visit.\n\n**Key Features:**\n\n* **Budget-friendly:** The hotels and activities are chosen to fit a budget-conscious travel plan.\n* **Variety:** The itinerary offers a mix of attractions, from vibrant nightlife to cultural experiences and natural beauty.\n* **Free options:** Many attractions are free, helping to save money.\n* **JSON format:** The data is organized in a structured JSON format for easy parsing and use in applications.\n\nThis itinerary is just a suggestion and can be customized based on your interests and preferences. You can add or remove activities, adjust the order, and spend more or less time at each location. Remember to research the latest ticket prices and opening hours before your trip.\n',
        },
      ],
    },
  ],
});




