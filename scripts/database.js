/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const database = {
    fish: [
        {
            name: "Bart",
            food: "crustaceans",
            image: "https://a.thumbs.redditmedia.com/4dtsZ5CTlKW7fp5qplUli0ET_3Kbu8gbsbsCsGRman0.png",
            species: "fish",
            location: "South Africa",
            length: "5ft"
        },
        {
            name: "Kite",
            food: "bugs",
            image: "https://mexicomike.com/wp-content/uploads/2022/08/fs7.jpg",
            species: "fish",
            location: "Japan",
            length: "4ft"
        },
        {
            name: "Larry",
            food: "fish",
            image: "https://mexicomike.com/wp-content/uploads/2022/08/fs6.jpg",
            species: "Fish",
            location: "Hawaii",
            length: "2ft"
        },
        {
            name: "Pinky",
            food: "crustaceans",
            image: "https://bless.wiki/images/e/e4/Fish_081.png",
            species: "fish",
            location: "China",
            length: "6ft"
        },
        {
            name: "Dory",
            food: "shrimp",
            image: "https://is5-ssl.mzstatic.com/image/thumb/Purple112/v4/a4/c9/7b/a4c97b8e-6111-4639-f870-c884c495d306/AppIcon-0-0-1x_U007emarketing-0-0-0-6-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/256x256bb.jpg",
            species: "fish",
            location: "North Africa",
            length: "1ft"
        }
    ],
    tips: [
        {
            id: 1,
            title: "Regular Water Changes",
            description: "Regularly changing the water in your aquarium is important to keep the water clean and prevent the buildup of harmful chemicals."
        },
        {
            id: 2,
            title: "Testing Water Parameters",
            description: "It is important to test the water parameters in your aquarium regularly to ensure they are within the appropriate range for your fish and plants."
        },
        {
            id: 3,
            title: "Proper Feeding",
            description: "Feeding your fish the appropriate amount of food and the right type of food is essential to their health and wellbeing."
        },
        {
            id: 4,
            title: "Clean subtrate",
            description: "The substrate, or the material on the bottom of your aquarium, can accumulate debris and waste. Use a siphon to vacuum the substrate and remove any waste that has accumulated."
        },
        {
            id: 5,
            title: "Check and clean the filter",
            description: "The filter is responsible for removing waste and debris from the water in your aquarium. Check the filter regularly and clean or replace the filter media as needed."
        }
        
    ],
    location: [
        {
            name: "Dory",
            location: "North Africa",
            description: "The Pomfret is a medium-sized fish that can grow up to 40 centimeters in length and weigh up to 2 kilograms. It has a flat, oval-shaped body with a silver-white color and a single dorsal fin. The fish also has a small mouth and small, sharp teeth."
        },
        {
            name: "Kite",
            location: "North America",
            description: "The sea bream is a medium-sized fish that can grow up to 50 centimeters in length and weigh up to 2 kilograms. It has a round, flat body with a silvery color and distinctive golden stripes along its sides. The fish also has a large head and a mouth filled with sharp teeth."
        },
        {
            name: "Bart",
            location: "South Africa",
            description: "Cape salmon are found along the coast of South Africa, particularly around the Cape of Good Hope. They are typically found in rocky areas and kelp forests, where they feed on smaller fish, squid, and crustaceans."
        },
        {
            name: "Larry",
            location: "South Africa",
            description: "Cape salmon are found along the coast of South Africa, particularly around the Cape of Good Hope. They are typically found in rocky areas and kelp forests, where they feed on smaller fish, squid, and crustaceans."
        },
        {
            name: "Pinky",
            location: "South Africa",
            description: "Cape salmon are found along the coast of South Africa, particularly around the Cape of Good Hope. They are typically found in rocky areas and kelp forests, where they feed on smaller fish, squid, and crustaceans."
        },
        
    ],
    travelTips: [
        {
            id: 1,
            tip: "Check the travel requirements and restrictions for your destination. Make sure you have all the necessary documents and vaccinations."
        },
        {
            id: 1,
            tip: "Research the local customs, culture, and etiquette of your destination. This can help you avoid any unintentional cultural misunderstandings."
        },
        {
            id: 1,
            tip: "Research transportation options and local scams to be aware of. It's important to stay safe and avoid any unnecessary risks."
        },
        {
            id: 1,
            tip: "Inform your loved ones of your travel plans and itinerary in case of emergencies."
        },
        {
            id: 1,
            tip: "Keep an open mind and be respectful of the local people and culture. Remember that traveling is an opportunity to learn and experience new things."
        },
    ]
};



export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}

export const getTips = () => {
    return database.tips.map(tips => ({...tips}))
}

export const getLocation = () => {
    return database.location.map(location => ({...location}))
}

export const getTravel = () => {
    return database.travelTips.map(travelTips =>({...travelTips}))
}