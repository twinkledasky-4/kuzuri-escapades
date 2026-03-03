import { Destination, Tour, Service, Review, Lodge } from './types.ts';

export const HERO_SLIDES = [
  {
    id: 'safari-crossroad',
    subtitle: 'Signature Private Experiences',
    title: 'Safari in <span class="italic text-[#D4AF37]">Uganda</span>',
    description: 'From fascinating wildlife to vibrant urban centers, from tranquil lake shores to lush rainforests, Uganda is a land of incredible diversity that will inspire you to explore it all! Its breathtaking landscapes and rich cultural heritage have inspired countless tales of adventure and discovery. So, embark on your own journey to this remarkable jewel of East Africa and write your own chapter to share an exceptional experience!',
    imageUrl: 'https://i.postimg.cc/8k9K1thN/crossroad-car-safari-scene-(1).jpg',
    cta: 'Begin Your Experience'
  },
  {
    id: 'cultural-immersion',
    subtitle: 'Ancestral Narratives',
    title: 'Native <span class="italic text-[#D4AF37]">Heritage.</span>',
    description: 'Step into the living history of the manyattas, where the rhythm of the land is mirrored in the traditions of its guardians.',
    imageUrl: 'https://i.postimg.cc/Kv7JNMzm/Kara_Tunga_Tours_Life_in_Manyatta_5_e1643904828756.webp',
    cta: 'Connect with Roots'
  },
  {
    id: 'wildlife-horizons',
    subtitle: 'Untamed Elegance',
    title: 'Infinite <span class="italic text-[#D4AF37]">Expanses.</span>',
    description: 'Traverse the golden savannas where the thundering wild meets the quiet grace of the Pearl of Africa.',
    imageUrl: 'https://i.postimg.cc/Hkp3Pkcx/Tanzani_Wildlife_tour_1536x1152.jpg',
    cta: 'View the Horizon'
  }
];

export const ABOUT_CONTENT = {
  legacyLabel: "OUR LEGACY",
  headingMain: "Local Experts.",
  headingSub: "Unique Journeys.",
  signatureStory: "Welcome to Kuzuri Escapades, your gateway to unforgettable adventures across Uganda and beyond! We are passionate about creating immersive travel experiences that connect you with the Pearl of Africa—its breathtaking landscapes, vibrant cultures, and extraordinary wildlife. Whether you're exploring our curated trips, planning a private safari, or seeking a relaxing getaway, we are committed to providing safe, authentic, and inspiring journeys.",
  quote: "True luxury is found in the moments where time stands still, and the heart finds its rhythm in the wild.",
  para1: "Kuzuri Escapades was born from a singular vision: to bridge the gap between raw, untamed wilderness and refined, soulful elegance. We do not just show you the Pearl of Africa; we invite you to breathe it.",
  para2: "From our headquarters at Ham Towers Wandegeya, Room Number H:12, P.O. BOX 202305, Kampala, we craft journeys that are as profound as the roar of a lion and as silent as the mist over Bwindi. We are not just guides; we are the guardians of your Ugandan legacy.",
  stats: [
    { value: "7+", label: "Years of Stewardship" },
    { value: "100%", label: "Native Owned" },
    { value: "∞", label: "Exclusive Access" }
  ]
};

export const DISCOVER_FEATURES = [
  {
    id: 'boat',
    subtitle: 'AQUATIC EXPERIENCE',
    title: 'SERENITY OF WATER SAFARI',
    description: "Hop aboard and experience safari from a whole new perspective. Thanks to its rivers and lakes, Uganda is the perfect place for a boat safari – whether you simply want to relax, observe wildlife up close, or awaken your inner adventurer.",
    detailHeading: 'REGIONAL AQUATIC HIGHLIGHTS',
    subHighlights: [
      { label: 'LAKE VICTORIA', text: "Lake Victoria is one of the world's largest freshwater lakes. Sailing smoothly across this natural gem, you can visit islands like Ngamba Island and its chimpanzee sanctuary, or the Ssese Islands, a prime spot for birdwatchers." },
      { label: 'MURCHISON FALLS', text: "Head to Murchison Falls National Park and experience the ultimate safari with an experienced marine guide. After getting up close to the falls, continue cruising the Victoria Nile Delta, where elephants, hippos, and crocodiles await." },
      { label: 'KAZINGA CHANNEL', text: "Home to the largest population of hippos in Africa. Keep your eyes peeled for the various mammals, birds, crocodiles, and enormous monitor lizards—some so large they can even be mistaken for baby crocodiles!" },
      { label: 'LAKE BUNYONYI', text: "Discover Ugandan culture across twenty-nine islands scattered across the lake. While this boat safari focuses on scenery and birds, your guide will share stories and legends known only to the locals." },
      { label: 'LAKE MBURO', text: "Relaxation at Lake Mburo. In western Uganda lies its smallest lake, yet it boasts an incredibly rich biodiversity. Besides the usual aquatic animals, numerous birds can be spotted, including the endemic African finch." },
      { label: 'LAKE MUTANDA', text: "One of the most beautiful lakes in the country, where the famous Virunga volcanoes rise from the mist. You can swim and fish with the locals; rest assured, there are no hippos or crocodiles in it." },
      { label: 'TIMING', text: "The best time is all the time. During the dry months (June-Aug, Dec-Feb), chances of spotting wildlife are higher as they congregate at the water's edge. If you're eager to experience this, be our guest." }
    ],
    imageUrl: 'https://i.postimg.cc/HkZK72Sk/frames-for-your-heart-yb-Ea-Jqf-RUHs-unsplash.jpg'
  },
  {
    id: 'gorilla',
    subtitle: 'MISTY ENCOUNTERS',
    title: 'GORILLA TREKKING',
    description: 'The soul of the forest. Venture into the ancient Bwindi Impenetrable Forest for a life-altering encounter with the mountain gorilla.',
    detailHeading: 'THE SOUL OF THE ANCIENT FOREST',
    detailDescription: 'Bwindi is not just a forest; it is a living sanctuary of ancient memories. Tracking the mountain gorilla through its misty valleys is a journey that transcends traditional travel—it is a profound reconnection with the natural world. In the silent emerald gloom, meeting the gaze of a silverback is a moment of pure, raw connection.',
    imageUrl: 'https://i.postimg.cc/qvMp6vwr/beautiful-nice-chimpanzee-nature-looking-habitatpan-troglodytes-wild-animal-bars.jpg'
  },
  {
    id: 'chimpanzee',
    subtitle: 'PRIMATE SYMPHONY',
    title: 'OBSERVE THE CHIMPANZEES',
    description: 'Experience the wild energy of Kibale National Park, the primate capital of the world. Track our closest relatives through the lush tropical rainforest.',
    detailHeading: 'THE RHYTHM OF THE RAINFOREST',
    detailDescription: 'In the heart of Kibale, the air vibrates with the raw energy of our closest living relatives. Observing chimpanzees in their natural habitat is a window into a complex social world of intelligence, play, and survival. As you traverse the forest floor, the overhead calls and rustling canopy create an immersive primate symphony.',
    imageUrl: 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&q=85&w=1200'
  },
  {
    id: 'planning',
    subtitle: 'THE PERFECT RHYTHM',
    title: 'PLANNING & BOOKING',
    description: 'The best time is all the time. Discover the dry months that offer the ultimate wildlife convergence at the water’s edge.',
    detailHeading: 'PLANNING YOUR JOURNEY',
    detailDescription: "During the dry months of June, July, August, December, January, and February, the chances of spotting Africa's famous wildlife are higher, as the animals congregate at the water's edge. If you're eager to experience one (or all) of these boat safaris yourself, be our guest – literally.",
    imageUrl: 'https://images.unsplash.com/photo-1590603740183-980e7f6920eb?auto=format&fit=crop&q=80&w=1200'
  }
];

export const DESTINATIONS: Destination[] = [
  {
    id: 'bwindi-forest',
    name: 'Bwindi Impenetrable',
    slug: 'bwindi-forest',
    tagline: 'Misty Realms & Gentle Giants',
    description: 'The ancient soul of the forest, where sunlight filters through ancient canopies to reveal the mountain gorilla.',
    images: ['https://images.unsplash.com/photo-1518063311540-0640001280cc?auto=format&fit=crop&q=85&w=1600'],
    highlights: ['Gorilla Tracking', 'Forest Birding', 'Batwa Cultural Heritage'],
    featured: true,
    order_index: 1
  },
  {
    id: 'queen-elizabeth',
    name: 'Queen Elizabeth',
    slug: 'queen-elizabeth',
    tagline: 'Savannah Medley & Primal Roads',
    description: 'A biodiverse mosaic where lions claim the open roads and the Kazinga Channel flows with ancestral life.',
    images: ['https://i.postimg.cc/8k9K1thN/crossroad-car-safari-scene-(1).jpg'],
    highlights: ['Lions of the Savannah', 'Kazinga Channel Cruises', 'Crater Lake Horizons'],
    featured: true,
    order_index: 2
  },
  {
    id: 'lake-mburo',
    name: 'Lake Mburo',
    slug: 'lake-mburo',
    tagline: 'The Mosaic of Stripes',
    description: 'An intimate sanctuary of stripped elegance, offering a closer connection to the native wildlife of the plains.',
    images: ['https://images.unsplash.com/photo-1501705388883-4ed8a543392c?auto=format&fit=crop&q=85&w=1600'],
    highlights: ['Zebra Portraits', 'Night Forest Trails', 'Native Steward Guidance'],
    featured: true,
    order_index: 3
  }
];

export const TOURS: Tour[] = [
  {
    id: 'ug-rw-mburo-3d',
    name: '3 day world life safari in lake mburo national park',
    slug: 'ug-rw-mburo-3d',
    duration_days: 3,
    duration_nights: 2,
    price_from: 1250,
    currency: '$',
    category: 'Combined Safari',
    description: 'An intimate exploration of Lake Mburo National Park, the mosaic of stripes. This short but profound escape offers a closer connection to the native wildlife of the plains, featuring boat safaris and guided nature walks.',
    highlights: ['Zebra Portraits', 'Night Forest Trails', 'Native Steward Guidance', 'Boat Safari on Lake Mburo'],
    imageUrls: ['https://images.unsplash.com/photo-1501705388883-4ed8a543392c?auto=format&fit=crop&q=85&w=1600'],
    featured: false,
    countries: 'Uganda',
    inclusions: ['Private 4x4 Transport', 'Full Board Accommodation', 'Park Entrance Fees', 'Boat Safari', 'Expert Native Guide'],
    itinerary: [
      { 
        day: 1, 
        title: 'Day 1: Arrival & Equator Crossing', 
        detail: 'Your journey begins with a warm welcome at Entebbe International Airport by your Kuzuri Escapades steward. We depart for Lake Mburo National Park, making a significant stop at the Equator crossing in Kayabwe for photographs and a brief scientific demonstration of the Coriolis effect. \n\nContinuing through the rolling hills of central Uganda, we arrive at our luxury lodge in time for a refined lunch. The afternoon is dedicated to your first game drive, where the golden savannah light reveals zebras, impalas, and the majestic Eland. Dinner and overnight stay at a signature wilderness retreat.' 
      },
      { 
        day: 2, 
        title: 'Day 2: Morning Game Drive & Afternoon Boat Cruise', 
        detail: 'Awaken to the symphony of the wild. A morning game drive takes us deeper into the mosaic of stripes, tracking the elusive leopard and observing the park\'s unique biodiversity. Lake Mburo is the only place in southern Uganda where you can see Burchell\'s zebra and impala.\n\nIn the afternoon, we embark on a private boat cruise on Lake Mburo. This aquatic safari offers intimate encounters with hippos, crocodiles, and a variety of water birds, including the African Finfoot. As the sun sets, we return to the lodge for a gourmet dinner under the stars.' 
      },
      { 
        day: 3, 
        title: 'Day 3: Nature Walk & Departure', 
        detail: 'The final morning offers a unique perspective: a guided nature walk. Accompanied by an armed ranger, you will traverse the plains on foot, experiencing the sights and sounds of the bush without the barrier of a vehicle. This is a profound way to connect with the land.\n\nFollowing a leisurely brunch, we begin our return journey to Entebbe. We stop for a final traditional lunch en route, arriving at the airport in time for your evening departure, carrying the indelible spirit of the Pearl of Africa with you.' 
      }
    ],
    exclusions: ['International Flights', 'Entry Visas', 'Personal Insurance', 'Tips & Gratuities', 'Premium Alcoholic Drinks']
  },
  {
    id: 'ug-rw-rwanda-tanzania-9d',
    name: '9 days rwanda gorilla adventure & tanzania',
    slug: 'ug-rw-rwanda-tanzania-9d',
    duration_days: 9,
    duration_nights: 8,
    price_from: 5850,
    currency: '$',
    category: 'Combined Safari',
    description: 'A cross-border odyssey combining the misty primate sanctuaries of Rwanda with the legendary savannahs of Tanzania. Witness the gentle giants of the forest and the thundering wild of the plains.',
    highlights: ['Volcanoes Gorilla Trekking', 'Serengeti Game Drives', 'Ngorongoro Crater', 'Kigali Cultural Tour'],
    imageUrls: ['https://i.postimg.cc/Hkp3Pkcx/Tanzani_Wildlife_tour_1536x1152.jpg'],
    featured: false,
    countries: 'Rwanda & Tanzania',
    inclusions: ['Gorilla Permit', 'Regional Flights', 'Luxury Lodge Stays', 'Private 4x4 Safari Vehicle', 'All Meals & Park Fees'],
    itinerary: [
      { 
        day: 1, 
        title: 'Day 1: Kigali City Tour & Cultural Legacy', 
        detail: 'Arrive in Kigali, the clean and vibrant heart of Rwanda. Your curator will lead you on an insightful city tour, visiting the Kigali Genocide Memorial—a place of profound remembrance and resilience. We explore the local markets and art galleries, witnessing the city\'s remarkable transformation.\n\nIn the evening, enjoy a welcome dinner at one of Kigali\'s finest restaurants, offering panoramic views of the "Land of a Thousand Hills." Overnight at a luxury city hotel.' 
      },
      { 
        day: 2, 
        title: 'Day 2: Journey to the Volcanoes', 
        detail: 'After breakfast, we depart for the Volcanoes National Park, a dramatic landscape of five dormant volcanoes. The drive takes us through scenic terraced hillsides, offering a glimpse into the rural life of Rwanda.\n\nArrive at your mountain lodge for lunch. The afternoon is yours to relax and soak in the misty atmosphere of the Virungas, or perhaps visit the Ellen DeGeneres Campus of the Dian Fossey Gorilla Fund to learn about gorilla conservation efforts.' 
      },
      { 
        day: 3, 
        title: 'Day 3: Gorilla Trekking in Volcanoes NP', 
        detail: 'The day you have been waiting for. After an early briefing, you will enter the ancient forest in search of a mountain gorilla family. The trek can be challenging but the reward is incomparable: an hour spent in the presence of these gentle giants.\n\nObserve their social dynamics, the playful infants, and the commanding presence of the silverback. Return to the lodge for a celebratory lunch and an afternoon of reflection. Dinner and overnight at the lodge.' 
      },
      { 
        day: 4, 
        title: 'Day 4: Transition to the Serengeti', 
        detail: 'We bid farewell to the mountains and return to Kigali for a regional flight to the legendary Serengeti National Park in Tanzania. This transition from the misty forests to the infinite golden plains is one of the most dramatic shifts in the natural world.\n\nUpon arrival at the Serengeti airstrip, your Tanzanian steward will meet you for an introductory game drive en route to your luxury tented camp. The vastness of the horizon begins to unfold.' 
      },
      { 
        day: 5, 
        title: 'Day 5: Serengeti Sovereignty', 
        detail: 'A full day dedicated to the Serengeti. We track the Great Migration (seasonal) and the predators—lions, leopards, and cheetahs—that follow the thundering herds. The Serengeti offers some of the most spectacular wildlife viewing on the planet.\n\nEnjoy a bush lunch under an acacia tree, surrounded by the sights and sounds of the wild. As evening falls, we return to camp for a traditional sundowner and a gourmet dinner.' 
      },
      { 
        day: 6, 
        title: 'Day 6: The Ngorongoro Descent', 
        detail: 'We depart the Serengeti for the Ngorongoro Conservation Area. Along the way, we stop at Olduvai Gorge, the "Cradle of Mankind," where significant paleoanthropological discoveries were made.\n\nArrive at the crater rim in the late afternoon. The view into the caldera is one of the most breathtaking sights in Africa. Dinner and overnight at a lodge perched on the rim.' 
      },
      { 
        day: 7, 
        title: 'Day 7: Crater Floor Discovery', 
        detail: 'Descend 600 meters into the Ngorongoro Crater for a full day of game viewing. This self-contained Eden is home to over 25,000 large mammals, including the rare black rhino. The high density of wildlife ensures constant action.\n\nPicnic lunch by the hippo pool before continuing our exploration of the diverse habitats within the crater. In the late afternoon, we ascend back to the rim for another night of spectacular views.' 
      },
      { 
        day: 8, 
        title: 'Day 8: Lake Manyara Whispers', 
        detail: 'We journey to Lake Manyara National Park, famous for its tree-climbing lions and vast flocks of flamingos that turn the lake shore pink. The park\'s varied ecosystems, from groundwater forests to acacia woodlands, support a rich array of wildlife.\n\nEnjoy a final afternoon game drive, spotting elephants, giraffes, and a variety of primates. Dinner and overnight at a luxury lodge overlooking the Great Rift Valley.' 
      },
      { 
        day: 9, 
        title: 'Day 9: Arusha & Departure', 
        detail: 'After a leisurely breakfast, we drive to Arusha. Enjoy a farewell lunch and some time for last-minute souvenir shopping at the Cultural Heritage Centre. \n\nTransfer to Kilimanjaro International Airport for your onward flight, marking the conclusion of an epic journey that spanned the forests of Rwanda and the plains of Tanzania.' 
      }
    ],
    exclusions: ['International Flights', 'Entry Visas', 'Personal Insurance', 'Tips & Gratuities', 'Premium Alcoholic Drinks']
  },
  {
    id: 'ug-rw-birding-12d',
    name: '12 day rwanda & uganda birding comfort',
    slug: 'ug-rw-birding-12d',
    duration_days: 12,
    duration_nights: 11,
    price_from: 4850,
    currency: '$',
    category: 'Combined Safari',
    description: 'An elite avian odyssey across the diverse biomes of Uganda and Rwanda. Designed for birding enthusiasts seeking rare sightings like the Shoebill Stork and Albertine Rift Endemics.',
    highlights: ['Shoebill Stork Quest', 'Albertine Rift Endemics', 'Mabamba Swamp', 'Nyungwe Forest Birding'],
    imageUrls: ['https://i.postimg.cc/TY6XvMQy/closeup-shot-group-cranes-field-181624-19833(1).jpg'],
    featured: false,
    countries: 'Rwanda & Uganda',
    inclusions: ['Expert Birding Guides', 'Private Transport', 'Comfort Lodge Stays', 'Park Entrance Fees', 'All Meals'],
    itinerary: [
      { 
        day: 1, 
        title: 'Day 1: Entebbe & Mabamba Swamp', 
        detail: 'Your avian quest begins at Mabamba Swamp on the shores of Lake Victoria. We navigate the narrow channels by dugout canoe in search of the prehistoric Shoebill Stork. This is one of the best places in the world to see this rare bird.\n\nOther sightings may include the Malachite Kingfisher, African Jacana, and the Lesser Jacana. Afternoon birding around Entebbe Botanical Gardens for a variety of lake-shore species. Overnight in Entebbe.' 
      },
      { 
        day: 2, 
        title: 'Day 2: The Journey to Kibale', 
        detail: 'We depart for Kibale National Park, making several birding stops along the way. The transition from the lake basin to the western highlands offers a change in species, including raptors and various weavers.\n\nArrive at our forest lodge in the late afternoon. The forest edge provides excellent birding opportunities right from your balcony. Dinner and overnight at the lodge.' 
      },
      { 
        day: 3, 
        title: 'Day 3: Kibale Forest Birding', 
        detail: 'A full day dedicated to the forest birds of Kibale. Our primary target is the elusive Green-breasted Pitta. We also search for the Great Blue Turaco, Black-billed Turaco, and various species of hornbills and barbets.\n\nThe afternoon includes a walk in the Bigodi Wetland Sanctuary, a community-run project famous for its rich birdlife and primates. Dinner and overnight at the lodge.' 
      },
      { 
        day: 4, 
        title: 'Day 4: Queen Elizabeth Savannahs', 
        detail: 'We venture to Queen Elizabeth National Park. The park boasts a checklist of over 600 species. Our birding begins in the Kasenyi plains, tracking savannah species and raptors.\n\nIn the afternoon, we take a boat safari on the Kazinga Channel. This is an incredible experience for water birds, including the African Skimmer, Pink-backed Pelican, and various kingfishers. Overnight at a lodge overlooking the channel.' 
      },
      { 
        day: 5, 
        title: 'Day 5: Kazinga Channel Avian Life', 
        detail: 'A second day in Queen Elizabeth, focusing on different habitats. We explore the crater lakes and the Maramagambo Forest for forest-dwelling species and water birds.\n\nThe afternoon is spent birding the Ishasha sector, famous for its tree-climbing lions but also home to a variety of savannah birds. Dinner and overnight in Ishasha.' 
      },
      { 
        day: 6, 
        title: 'Day 6: Bwindi Impenetrable Forest', 
        detail: 'We travel to Bwindi, a UNESCO World Heritage site and a hotspot for Albertine Rift Endemics. The drive through the "Switzerland of Africa" offers spectacular views and high-altitude birding.\n\nArrive in the Buhoma sector and begin forest birding in the afternoon, looking for species like the Bar-tailed Trogon and various sunbirds. Overnight at a forest lodge.' 
      },
      { 
        day: 7, 
        title: 'Day 7: The Misty Highland Quest', 
        detail: 'A full day of birding in the higher altitudes of Bwindi, specifically the Ruhija sector. Our main target is the rare African Green Broadbill. We also search for the Grauer\'s Rush Warbler and other Albertine Rift endemics.\n\nThe misty forest provides a magical backdrop for our quest. Dinner and overnight in Ruhija.' 
      },
      { 
        day: 8, 
        title: 'Day 8: Crossing to Rwanda & Akagera', 
        detail: 'We journey across the border to Rwanda and head towards Akagera National Park. This park offers a completely different ecosystem, consisting of savannah, acacia woodlands, and a series of lakes.\n\nAfternoon birding in Akagera, looking for the Red-faced Barbet and various water birds. Overnight at a lodge within the park.' 
      },
      { 
        day: 9, 
        title: 'Day 9: Akagera Savannah & Wetlands', 
        detail: 'A full day in Akagera. We explore the diverse habitats, from the open plains to the papyrus swamps. Targets include the Shoebill (if missed in Uganda), Papyrus Gonolek, and various raptors.\n\nThe park\'s lakes provide excellent opportunities for spotting kingfishers, herons, and storks. Dinner and overnight at the lodge.' 
      },
      { 
        day: 10, 
        title: 'Day 10: Nyungwe Forest Canopy', 
        detail: 'We travel to Nyungwe Forest National Park, one of the oldest rainforests in Africa. The afternoon is spent on the Canopy Walk, offering a unique perspective on the forest birdlife from 60 meters above the ground.\n\nLook for the Great Blue Turaco and various mountain species. Overnight at a luxury lodge near the forest.' 
      },
      { 
        day: 11, 
        title: 'Day 11: Nyungwe Endemics', 
        detail: 'A full day of birding in Nyungwe, focusing on Albertine Rift Endemics. Targets include the Red-collared Babbler, Kungwe Apalis, and the Ruwenzori Turaco.\n\nThe forest trails are rich with birdlife and primates. Dinner and overnight at the lodge.' 
      },
      { 
        day: 12, 
        title: 'Day 12: Kigali & Departure', 
        detail: 'We return to Kigali, visiting wetlands and cultural sites for final birding opportunities. Enjoy a farewell lunch before transferring to the airport for your departure.\n\nCarry with you a checklist filled with rare sightings and memories of the incredible avian diversity of the Albertine Rift.' 
      }
    ],
    exclusions: ['International Flights', 'Entry Visas', 'Personal Insurance', 'Tips & Gratuities', 'Premium Alcoholic Drinks']
  },
  {
    id: 'ug-rw-gorilla-chimps-14d',
    name: '14 days rwanda & uganda gorilla and chimps',
    slug: 'ug-rw-gorilla-chimps-14d',
    duration_days: 14,
    duration_nights: 13,
    price_from: 7250,
    currency: '$',
    category: 'Combined Safari',
    description: 'The definitive primate expedition. Immerse yourself in the lush tropical rainforests of Uganda and Rwanda to track mountain gorillas and chimpanzees in their natural habitats.',
    highlights: ['Gorilla Tracking (Uganda & Rwanda)', 'Chimpanzee Trekking', 'Golden Monkey Tracking', 'Cultural Immersion'],
    imageUrls: ['https://i.postimg.cc/qvMp6vwr/beautiful-nice-chimpanzee-nature-looking-habitatpan-troglodytes-wild-animal-bars.jpg'],
    featured: false,
    countries: 'Rwanda & Uganda',
    inclusions: ['2 Gorilla Permits', 'Chimpanzee Permit', 'Golden Monkey Permit', 'Luxury Lodging', 'Private 4x4 Vehicle'],
    itinerary: [
      { 
        day: 1, 
        title: 'Day 1: Arrival in Entebbe', 
        detail: 'Arrive at Entebbe International Airport, situated on the shores of Lake Victoria. Your Kuzuri Escapades curator will welcome you and transfer you to your boutique hotel.\n\nEnjoy a relaxing evening and a welcome dinner as you prepare for your primate odyssey. Overnight in Entebbe.' 
      },
      { 
        day: 2, 
        title: 'Day 2: The Primate Capital - Kibale', 
        detail: 'We depart for Kibale National Park, the primate capital of the world. The drive takes us through the lush countryside of western Uganda, passing through tea plantations and crater lakes.\n\nArrive at your forest lodge in time for lunch. The afternoon is spent at leisure, soaking in the sounds of the rainforest. Dinner and overnight at the lodge.' 
      },
      { 
        day: 3, 
        title: 'Day 3: Chimpanzee Tracking in Kibale', 
        detail: 'A morning of high-energy tracking. Enter the Kibale forest to find our closest living relatives—the chimpanzees. Observe their social interactions, grooming, and vocalizations.\n\nIn the afternoon, we take a guided walk in the Bigodi Wetland Sanctuary to spot other primates like the Red Colobus and L\'Hoest\'s monkeys. Dinner and overnight at the lodge.' 
      },
      { 
        day: 4, 
        title: 'Day 4: Queen Elizabeth Savannahs', 
        detail: 'We journey to Queen Elizabeth National Park. Enjoy an afternoon boat safari on the Kazinga Channel, where hippos and crocodiles congregate. The channel is a lifeline for the park\'s wildlife.\n\nSpot elephants and buffaloes at the water\'s edge. Overnight at a lodge with spectacular views of the savannah.' 
      },
      { 
        day: 5, 
        title: 'Day 5: Ishasha Tree-Climbing Lions', 
        detail: 'We venture to the remote Ishasha sector, famous for its unique population of tree-climbing lions. We spend the day tracking these majestic predators as they lounge in the ancient fig trees.\n\nThe sector also offers sightings of topis and various bird species. Dinner and overnight in Ishasha.' 
      },
      { 
        day: 6, 
        title: 'Day 6: Bwindi Impenetrable Forest', 
        detail: 'We travel to the edge of the ancient Bwindi forest. The drive takes us through the scenic Kigezi highlands, known as the "Switzerland of Africa."\n\nArrive at your luxury forest lodge and prepare for the first of your gorilla encounters. Dinner and overnight at the lodge.' 
      },
      { 
        day: 7, 
        title: 'Day 7: Gorilla Trekking in Bwindi', 
        detail: 'A life-altering day. After a briefing, you will enter the misty forest to track a mountain gorilla family. The experience of meeting their gaze is profound and unforgettable.\n\nSpend an hour observing their daily lives before returning to the lodge for a celebratory lunch. Afternoon at leisure. Dinner and overnight at the lodge.' 
      },
      { 
        day: 8, 
        title: 'Day 8: Lake Mutanda Serenity', 
        detail: 'We drive to the beautiful Lake Mutanda, where the Virunga volcanoes rise from the mist. Enjoy a relaxing day with a boat trip on the lake, visiting the various islands.\n\nThe scenery is some of the most beautiful in the country. Dinner and overnight at a lodge overlooking the lake.' 
      },
      { 
        day: 9, 
        title: 'Day 9: Crossing to Rwanda & Volcanoes', 
        detail: 'We journey across the border into Rwanda, the "Land of a Thousand Hills," and arrive at Volcanoes National Park. The dramatic volcanic landscape is the setting for your second gorilla encounter.\n\nCheck into your luxury mountain lodge and enjoy the cooler mountain air. Dinner and overnight at the lodge.' 
      },
      { 
        day: 10, 
        title: 'Day 10: Double Trekking - Volcanoes NP', 
        detail: 'Experience the "Double Trekking" advantage. Today you track a different gorilla family in Rwanda, offering a new perspective on their behavior and habitat.\n\nThe Rwandan trek often offers more open views of the gorillas. Return to the lodge for lunch and an afternoon of relaxation. Dinner and overnight at the lodge.' 
      },
      { 
        day: 11, 
        title: 'Day 11: Golden Monkey Play', 
        detail: 'Track the rare and playful golden monkeys in the bamboo forests of the Volcanoes. These vibrant primates are endemic to the Albertine Rift and offer a delightful tracking experience.\n\nThe afternoon is spent visiting the Iby\'Iwacu Cultural Village to learn about Rwandan traditions and history. Dinner and overnight at the lodge.' 
      },
      { 
        day: 12, 
        title: 'Day 12: Lake Kivu Relaxation', 
        detail: 'We travel to the shores of Lake Kivu, one of the African Great Lakes. Enjoy a day of relaxation, with options for boat trips, kayaking, or simply soaking in the sun on the beach.\n\nThe lake is free of hippos and crocodiles, making it perfect for swimming. Dinner and overnight at a lakeside resort.' 
      },
      { 
        day: 13, 
        title: 'Day 13: Kigali Cultural Legacy', 
        detail: 'We return to Kigali for a cultural tour, including the Kigali Genocide Memorial and local craft markets. This is a chance to reflect on the country\'s journey of healing and growth.\n\nEnjoy a final farewell dinner at a top Kigali restaurant. Overnight in Kigali.' 
      },
      { 
        day: 14, 
        title: 'Day 14: Departure', 
        detail: 'Final morning in Kigali for last-minute shopping or a visit to an art gallery before your transfer to the airport for your departure.\n\nCarry with you the stories of the primates and the people of the Albertine Rift, an odyssey that has touched your soul.' 
      }
    ],
    exclusions: ['International Flights', 'Entry Visas', 'Personal Insurance', 'Tips & Gratuities', 'Premium Alcoholic Drinks']
  },
  {
    id: 'boat-safaris-uganda',
    name: 'SERENITY OF WATER SAFARI',
    slug: 'boat-safaris-uganda',
    duration_days: 1,
    duration_nights: 0,
    price_from: 250,
    price_was: 320,
    currency: '$',
    category: 'Aquatic Experience',
    description: "Experience Uganda from the water. Our signature aquatic safaris take you through the country's most iconic lakes and rivers, offering a perspective of the Pearl of Africa that can only be found from the bow of a private vessel.",
    highlights: ['Private Nile Cruise', 'Sunset over Kazinga', 'Hippopotamus Close-Encounters'],
    imageUrls: ['https://i.postimg.cc/Dfcx09nJ/fishing-boat-sea-thailand.jpg'],
    featured: true
  },
  {
    id: 'uganda-rwanda-birding-12d',
    name: '12 days Uganda and Rwanda birding comfort safari',
    slug: 'uganda-rwanda-birding-12d',
    duration_days: 12,
    duration_nights: 11,
    price_from: 4520,
    price_was: 4780,
    currency: '$',
    category: 'Signature Birding',
    description: 'An elite avian odyssey across the diverse biomes of Uganda and Rwanda, designed for birding enthusiasts seeking rare sightings and supreme lodge comfort.',
    highlights: ['Albertine Rift Endemics', 'Shoebill Stork Quest', 'Rwandan Highland Trails'],
    imageUrls: ['https://i.postimg.cc/TY6XvMQy/closeup-shot-group-cranes-field-181624-19833(1).jpg'],
    featured: true
  },
  {
    id: 'kenya-uganda-wildlife-14d',
    name: '14 days Kenya & Uganda wildlife and Gorilla tracking safari',
    slug: 'kenya-uganda-wildlife-14d',
    duration_days: 14,
    duration_nights: 13,
    price_from: 6450,
    currency: '$',
    category: 'Combined Safari',
    description: 'The ultimate East African circuit combining Kenya’s legendary plains with Uganda’s misty primate sanctuaries for a definitive wildlife encounter. Experience a "360-degree primate odyssey" alongside the thundering wild of the Great Migration and the Big Five.',
    highlights: ['Maasai Mara Great Migration', '360° Primate Experience', 'Gorilla & Chimp Tracking', 'Kazinga Channel Cruise', 'Tree-Climbing Lions'],
    imageUrls: ['https://i.postimg.cc/J0r1cfsX/90e57c35-c104-4c92-b085-d10243cac4cd.jpg'],
    featured: true,
    countries: 'Kenya & Uganda',
    startCity: 'Nairobi',
    endCity: 'Entebbe',
    transportMode: '4x4 Land Cruiser & Regional Flight',
    primaryFocus: 'Big Five & 360° Primate Experience',
    inclusions: ['Gorilla Permit', 'Chimpanzee Permit', 'Regional Flights', 'Luxury Lodge Stays', 'Private 4x4 Safari Vehicle', 'All Meals & Park Fees'],
    itinerary: [
      { 
        day: 1, 
        title: 'Day 1: Arrival in Nairobi - The Safari Capital', 
        detail: 'Welcome to Kenya. Upon arrival at Jomo Kenyatta International Airport, you will be met by your Kuzuri Escapades curator and transferred to your luxury city hotel. \n\nSpend the evening at leisure, perhaps enjoying a gourmet dinner at the world-renowned Carnivore Restaurant or simply relaxing after your flight. Overnight at a signature city retreat.' 
      },
      { 
        day: 2, 
        title: 'Day 2: Nairobi to Lake Nakuru National Park', 
        detail: 'After a refined breakfast, we depart for Lake Nakuru National Park, nestled in the Great Rift Valley. The park is famous for its vast flocks of flamingos and is a sanctuary for both black and white rhinos.\n\nEnjoy an afternoon game drive around the lake shore, spotting leopards, Rothschild giraffes, and waterbucks. Dinner and overnight at a luxury lodge overlooking the lake.' 
      },
      { 
        day: 3, 
        title: 'Day 3: Lake Nakuru to the Legendary Maasai Mara', 
        detail: 'We journey to the Maasai Mara National Reserve, the crown jewel of Kenyan wildlife. The drive takes us through the dramatic landscapes of the Rift Valley and into the golden savannahs.\n\nArrive at your luxury tented camp in time for lunch. In the afternoon, embark on your first game drive in the Mara, where the density of wildlife is unparalleled. Dinner and overnight at a signature camp.' 
      },
      { 
        day: 4, 
        title: 'Day 4: Maasai Mara Sovereignty', 
        detail: 'A full day dedicated to the Maasai Mara. We track the Big Five and witness the raw beauty of the plains. During the migration season, we head towards the Mara River to witness the dramatic crossings.\n\nEnjoy a bush breakfast on the plains and continue your exploration of the reserve\'s diverse habitats. As evening falls, return to camp for a traditional sundowner. Dinner and overnight at the camp.' 
      },
      { 
        day: 5, 
        title: 'Day 5: Maasai Mara to Lake Naivasha', 
        detail: 'After a final morning game drive in the Mara, we depart for Lake Naivasha, a beautiful freshwater lake in the Rift Valley. \n\nIn the afternoon, enjoy a boat safari on the lake, spotting hippos and a variety of water birds. We also visit Crescent Island for a guided nature walk among giraffes and zebras. Dinner and overnight at a lakeside lodge.' 
      },
      { 
        day: 6, 
        title: 'Day 6: Transition from Big Five to Primates - The Luxury Flight', 
        detail: 'Today marks the profound transition from the golden savannahs of Kenya to the lush, tropical primate sanctuaries of Uganda. After a final morning in the Mara, we return to Nairobi for a regional flight to Entebbe.\n\nThis Entebbe-Masai Mara flight connection is a hallmark of luxury combined safaris, ensuring you move from the thundering wild of the Big Five to the quiet majesty of the Pearl of Africa without the stress of long road transfers. Upon arrival at Entebbe, your Ugandan steward will meet you and transfer you to your boutique hotel on the shores of Lake Victoria. Overnight in Entebbe.' 
      },
      { 
        day: 7, 
        title: 'Day 7: The Journey to Kibale Forest', 
        detail: 'We depart for Kibale National Park, the primate capital of the world. The drive takes us through the scenic tea plantations of Fort Portal and into the heart of the tropical rainforest.\n\nArrive at your forest lodge for lunch. The afternoon is yours to relax and soak in the vibrant energy of the forest. Dinner and overnight at a signature forest retreat.' 
      },
      { 
        day: 8, 
        title: 'Day 8: Chimpanzee Tracking & Bigodi Walk', 
        detail: 'Enter the Kibale forest for a life-altering encounter with our closest relatives—the chimpanzees. Observe their complex social social structures and vocalizations in the wild.\n\nIn the afternoon, we visit the Bigodi Wetland Sanctuary for a guided walk, spotting various primate species and rare birds like the Great Blue Turaco. Dinner and overnight at the lodge.' 
      },
      { 
        day: 9, 
        title: 'Day 9: Queen Elizabeth Savannahs', 
        detail: 'We journey to Queen Elizabeth National Park, a biodiverse mosaic of savannah, crater lakes, and forests. \n\nEnjoy an afternoon game drive in the Kasenyi plains, tracking lions and leopards. The park\'s open roads offer some of the best wildlife viewing in Uganda. Dinner and overnight at a lodge with panoramic views.' 
      },
      { 
        day: 10, 
        title: 'Day 10: Kazinga Channel & Ishasha Lions', 
        detail: 'A morning boat safari on the Kazinga Channel offers intimate encounters with hippos, crocodiles, and elephants at the water\'s edge.\n\nIn the afternoon, we drive to the remote Ishasha sector, famous for its unique population of tree-climbing lions. We track these majestic predators as they lounge in the ancient fig trees. Dinner and overnight in Ishasha.' 
      },
      { 
        day: 11, 
        title: 'Day 11: The Road to Bwindi Impenetrable', 
        detail: 'We travel to the edge of the ancient Bwindi forest, a UNESCO World Heritage site. The drive through the "Switzerland of Africa" offers spectacular views of the terraced hillsides.\n\nArrive at your luxury forest lodge and prepare for the highlight of your journey. Dinner and overnight at a signature lodge perched on the forest edge.' 
      },
      { 
        day: 12, 
        title: 'Day 12: Gorilla Trekking in Bwindi', 
        detail: 'The soul of the forest. After a briefing, you will enter the misty valleys of Bwindi in search of a mountain gorilla family. This encounter completes your "360-degree primate experience," bridging your time with the chimpanzees of Kibale to the gentle giants of Bwindi.\n\nSpend an hour in their presence, observing the silverback\'s command and the infants\' play. Return to the lodge for a celebratory lunch and an afternoon of reflection. Dinner and overnight at the lodge.' 
      },
      { 
        day: 13, 
        title: 'Day 13: Lake Bunyonyi Serenity', 
        detail: 'We drive to Lake Bunyonyi, the "Place of Many Little Birds." This incredibly beautiful lake is dotted with 29 islands and surrounded by terraced hills.\n\nEnjoy a relaxing day with a dugout canoe trip or a swim in the bilharzia-free waters. It is the perfect place to unwind after your trekking adventures. Dinner and overnight at a lakeside resort.' 
      },
      { 
        day: 14, 
        title: 'Day 14: Return to Entebbe & Departure', 
        detail: 'After a final leisurely breakfast overlooking the lake, we begin our return journey to Entebbe. We stop at the Equator crossing for photographs and a farewell lunch.\n\nArrive at Entebbe International Airport in time for your evening departure, carrying the indelible spirit of both Kenya and Uganda with you.' 
      }
    ],
    exclusions: ['International Flights', 'Entry Visas', 'Personal Insurance', 'Tips & Gratuities', 'Premium Alcoholic Drinks']
  },
  {
    id: 'ug-ke-gorilla-mara-5d',
    name: '5 DAY GORILLA TREKKING AND MASAI MARA wild life safari',
    slug: 'ug-ke-gorilla-mara-5d',
    duration_days: 5,
    duration_nights: 4,
    price_from: 3850,
    currency: '$',
    category: 'Combined Safari',
    description: 'A high-impact, luxury expedition combining the two most iconic wildlife experiences in East Africa: Gorilla Trekking in Uganda and the legendary Maasai Mara in Kenya. Featuring the hallmark Entebbe-Mara flight transition.',
    highlights: ['Entebbe-Mara Flight Transition', 'Bwindi Gorilla Trekking', 'Maasai Mara Big Five', 'Great Migration (Seasonal)'],
    imageUrls: ['https://i.postimg.cc/9f9FWt3z/9be3ba5d-30ad-463d-9fb9-8226e0f67943.jpg'],
    featured: true,
    countries: 'Uganda & Kenya',
    startCity: 'Entebbe',
    endCity: 'Nairobi',
    transportMode: 'Private Charter Flights & 4x4 Land Cruiser',
    primaryFocus: 'Gorilla Trekking & Maasai Mara Big Five',
    inclusions: ['Gorilla Permit', 'Internal Flights (Entebbe-Bwindi-Mara)', 'Luxury Lodging', 'Private 4x4 Vehicles', 'All Meals & Park Fees'],
    itinerary: [
      { 
        day: 1, 
        title: 'Day 1: Entebbe to Bwindi - Flight to the Misty Forest', 
        detail: 'Your journey begins with a smooth transition from Entebbe to the ancient Bwindi Impenetrable Forest. Upon arrival at Entebbe International Airport, you will be met by your Kuzuri Escapades curator and escorted to your private charter flight. \n\nSoar over the lush landscapes of the Pearl of Africa, landing in the heart of the misty Virunga mountains. A short drive takes you to your luxury forest lodge, where the sounds of the jungle welcome you. Spend the afternoon soaking in the atmosphere of this UNESCO World Heritage site. Dinner and overnight at a signature lodge.' 
      },
      { 
        day: 2, 
        title: 'Day 2: Gorilla Trekking - Meeting the Gentle Giants', 
        detail: 'The soul of the forest awaits. After an early morning briefing, you will enter the dense foliage of Bwindi in search of a mountain gorilla family. The trek is a profound experience, leading to a life-altering moment: meeting the gaze of a silverback.\n\nSpend an hour observing their social dynamics, the playful infants, and the quiet dignity of these gentle giants. Return to the lodge for a celebratory lunch and an afternoon of reflection. Dinner and overnight at the lodge.' 
      },
      { 
        day: 3, 
        title: 'Day 3: Flight to Masai Mara - The Hallmark Transition', 
        detail: 'We bid farewell to the misty forests and board a private flight directly to the legendary Maasai Mara in Kenya. This Entebbe-Masai Mara flight transition is the ultimate luxury, saving you hours of travel and offering spectacular aerial views of the Great Rift Valley.\n\nUpon arrival at the Mara airstrip, your Kenyan steward will meet you for an introductory game drive en route to your luxury tented camp. The infinite golden plains begin to reveal their secrets. Dinner and overnight at a signature camp.' 
      },
      { 
        day: 4, 
        title: 'Day 4: Full Day Game Drive - Maasai Mara Sovereignty', 
        detail: 'A full day dedicated to the thundering wild of the Maasai Mara. We track the Big Five—lion, leopard, elephant, buffalo, and rhino—across the vast savannahs. The Mara is home to one of the highest densities of predators in the world.\n\nEnjoy a gourmet bush lunch under an acacia tree, surrounded by the sights and sounds of the wild. As evening falls, return to camp for a traditional sundowner and a dinner under the stars, sharing tales of the day\'s sightings.' 
      },
      { 
        day: 5, 
        title: 'Day 5: Departure - Final Savannah Whispers', 
        detail: 'Awaken to the final sunrise on the plains. A morning game drive offers a last chance to spot the predators on the hunt before the heat of the day. \n\nFollowing a leisurely brunch, we transfer to the airstrip for your flight to Nairobi, connecting to your international departure. You carry with you the indelible spirit of East Africa\'s most iconic landscapes and its most profound inhabitants.' 
      }
    ],
    exclusions: ['International Flights', 'Entry Visas', 'Personal Insurance', 'Tips & Gratuities', 'Premium Alcoholic Drinks']
  },
  {
    id: 'ug-ke-tz-combined-16d',
    name: '16 days combined east african wild life',
    slug: 'ug-ke-tz-combined-16d',
    duration_days: 16,
    duration_nights: 15,
    price_from: 8250,
    currency: '$',
    category: 'Combined Safari',
    description: 'The definitive East African odyssey. A 16-day "Grand Loop" spanning the most legendary parks of Uganda, Kenya, and Tanzania, offering a 360-degree primate and Big Five experience.',
    highlights: ['360° Primate Experience', 'Amboseli Elephants', 'Lake Nakuru Rhinos', 'Maasai Mara Migration', 'Bwindi Gorillas'],
    imageUrls: ['https://i.postimg.cc/Hkp3Pkcx/Tanzani_Wildlife_tour_1536x1152.jpg'],
    featured: true,
    countries: 'Kenya, Tanzania & Uganda',
    startCity: 'Nairobi',
    endCity: 'Entebbe',
    transportMode: '4x4 Land Cruiser & Regional Flights',
    primaryFocus: 'The Grand East African Loop',
    inclusions: ['Gorilla & Chimp Permits', 'Regional Flights', 'Luxury Lodging', 'Private 4x4 Safari Vehicles', 'All Meals & Park Fees'],
    itinerary: [
      { 
        day: 1, 
        title: 'Day 1: Arrival in Nairobi & Amboseli', 
        detail: 'Welcome to the Safari Capital. Upon arrival in Nairobi, you will be met by your Kuzuri Escapades curator and depart for Amboseli National Park, famous for its massive elephant herds and the iconic backdrop of Mount Kilimanjaro.\n\nArrive at your luxury lodge for lunch and an afternoon game drive. The sight of elephants silhouetted against the snow-capped peak is one of Africa\'s most enduring images. Dinner and overnight at a signature lodge.' 
      },
      { 
        day: 2, 
        title: 'Day 2: Amboseli to Lake Nakuru', 
        detail: 'We journey to Lake Nakuru National Park in the Great Rift Valley. This park is a sanctuary for both black and white rhinos and is famous for its vast flocks of flamingos that turn the lake shore pink.\n\nEnjoy an afternoon game drive around the lake, spotting leopards and the rare Rothschild giraffe. Dinner and overnight at a luxury lodge overlooking the lake.' 
      },
      { 
        day: 3, 
        title: 'Day 3: Lake Nakuru to Maasai Mara', 
        detail: 'We depart for the legendary Maasai Mara National Reserve. The drive takes us through the dramatic landscapes of the Rift Valley and into the golden savannahs.\n\nArrive at your luxury tented camp in time for lunch. In the afternoon, embark on your first game drive in the Mara, where the density of wildlife is unparalleled. Dinner and overnight at a signature camp.' 
      },
      { 
        day: 4, 
        title: 'Day 4: Maasai Mara Sovereignty', 
        detail: 'A full day dedicated to the Maasai Mara. We track the Big Five and witness the Great Migration (seasonal). The Mara offers some of the most spectacular wildlife viewing on the planet.\n\nEnjoy a bush lunch on the plains. Dinner and overnight at the camp.' 
      },
      { 
        day: 5, 
        title: 'Day 5: Serengeti Sovereignty', 
        detail: 'We cross the border into Tanzania and enter the legendary Serengeti National Park. The infinite golden plains unfold before you.\n\nEnjoy a game drive en route to your luxury tented camp. Dinner and overnight at a signature camp.' 
      },
      { 
        day: 6, 
        title: 'Day 6: Serengeti Discovery', 
        detail: 'A full day in the Serengeti, tracking the thundering herds and the predators that follow them.\n\nThe vastness of the horizon is truly humbling. Dinner and overnight at the camp.' 
      },
      { 
        day: 7, 
        title: 'Day 7: Ngorongoro Crater Floor', 
        detail: 'We drive to the Ngorongoro Conservation Area and descend into the caldera for a full day of game viewing.\n\nThis self-contained Eden is home to the rare black rhino. Dinner and overnight at a lodge on the crater rim.' 
      },
      { 
        day: 8, 
        title: 'Day 8: Flight to Entebbe', 
        detail: 'We bid farewell to the plains and board a regional flight to Entebbe, Uganda. This marks the transition from the savannahs to the lush, tropical landscapes of the Pearl of Africa.\n\nUpon arrival at Entebbe, transfer to your boutique hotel on the shores of Lake Victoria. Overnight in Entebbe.' 
      },
      { 
        day: 9, 
        title: 'Day 9: The Primate Capital - Kibale', 
        detail: 'We depart for Kibale National Park, the primate capital of the world. The drive takes us through the scenic tea plantations of Fort Portal.\n\nArrive at your forest lodge in the late afternoon. The forest edge provides excellent birding opportunities. Dinner and overnight at a signature forest retreat.' 
      },
      { 
        day: 10, 
        title: 'Day 10: Chimpanzee Tracking & Queen Elizabeth', 
        detail: 'Enter the Kibale forest for a morning of tracking chimpanzees. Observe our closest relatives in their natural habitat.\n\nIn the afternoon, we drive to Queen Elizabeth National Park, arriving in time for a sunset game drive. Dinner and overnight at a lodge with panoramic views.' 
      },
      { 
        day: 11, 
        title: 'Day 11: Kazinga Channel & Ishasha', 
        detail: 'A morning boat safari on the Kazinga Channel offers intimate encounters with aquatic wildlife.\n\nWe then drive to the Ishasha sector to track the famous tree-climbing lions. Dinner and overnight in Ishasha.' 
      },
      { 
        day: 12, 
        title: 'Day 12: Bwindi Impenetrable Forest', 
        detail: 'We travel to the edge of the ancient Bwindi forest. The drive through the terraced hillsides is spectacular.\n\nArrive at your luxury forest lodge and prepare for your gorilla encounter. Dinner and overnight at a signature lodge.' 
      },
      { 
        day: 13, 
        title: 'Day 13: Gorilla Trekking in Bwindi', 
        detail: 'The highlight of your journey. Track a mountain gorilla family through the misty forest. Meeting their gaze is a profound experience.\n\nReturn to the lodge for a celebratory lunch. Afternoon at leisure. Dinner and overnight at the lodge.' 
      },
      { 
        day: 14, 
        title: 'Day 14: Lake Bunyonyi Serenity', 
        detail: 'We drive to Lake Bunyonyi for a day of relaxation. Enjoy a boat trip on the lake and soak in the beautiful scenery.\n\nIt is the perfect conclusion to your East African odyssey. Dinner and overnight at a lakeside resort.' 
      },
      { 
        day: 15, 
        title: 'Day 15: Return to Entebbe', 
        detail: 'We begin our return journey to Entebbe, stopping at the Equator for photographs and a farewell lunch.\n\nArrive in Entebbe for a final evening of reflection. Overnight in Entebbe.' 
      },
      { 
        day: 16, 
        title: 'Day 16: Departure', 
        detail: 'Transfer to Entebbe International Airport for your departure. You carry with you the indelible spirit of the "Grand Loop" across East Africa.' 
      }
    ],
    exclusions: ['International Flights', 'Entry Visas', 'Personal Insurance', 'Tips & Gratuities', 'Premium Alcoholic Drinks']
  },
  {
    id: 'ug-ke-tz-safari-16d',
    name: '16 days tanzania, kenya and uganda safari',
    slug: 'ug-ke-tz-safari-16d',
    duration_days: 16,
    duration_nights: 15,
    price_from: 7950,
    currency: '$',
    category: 'Combined Safari',
    description: 'A comprehensive regional tour through the wildlife capitals of East Africa. From the legendary Serengeti and Mara to the Pearl of Africa\'s misty primate forests, this is the ultimate "360-degree" safari legacy.',
    highlights: ['360° Primate Experience', 'Serengeti & Mara Migration', 'Ngorongoro Crater', 'Bwindi Gorilla Trekking', 'Lake Nakuru Rhinos'],
    imageUrls: ['https://i.postimg.cc/9f9FWt3z/9be3ba5d-30ad-463d-9fb9-8226e0f67943.jpg'],
    featured: true,
    countries: 'Tanzania, Kenya & Uganda',
    startCity: 'Arusha',
    endCity: 'Entebbe',
    transportMode: '4x4 Land Cruiser & Regional Flights',
    primaryFocus: 'Serengeti Migration & Primate Forests',
    inclusions: ['Gorilla & Chimp Permits', 'Regional Flights', 'Luxury Lodging', 'Private 4x4 Vehicles', 'All Meals & Park Fees'],
    itinerary: [
      { 
        day: 1, 
        title: 'Day 1: Arrival in Arusha', 
        detail: 'Welcome to Tanzania. Your Kuzuri Escapades curator will meet you at Kilimanjaro International Airport and transfer you to your luxury lodge in Arusha.\n\nEnjoy a relaxing evening as you prepare for your East African circuit. Overnight in Arusha.' 
      },
      { 
        day: 2, 
        title: 'Day 2: Tarangire National Park', 
        detail: 'We depart for Tarangire National Park, known for its high density of elephants and iconic baobab trees.\n\nEnjoy an afternoon game drive, spotting large herds and various bird species. Dinner and overnight at a luxury lodge.' 
      },
      { 
        day: 3, 
        title: 'Day 3: Ngorongoro Crater Floor', 
        detail: 'Descend into the Ngorongoro Crater for a full day of game viewing in this natural amphitheater.\n\nSpot the black rhino and the dense population of predators. Dinner and overnight at a lodge on the crater rim.' 
      },
      { 
        day: 4, 
        title: 'Day 4: Serengeti National Park', 
        detail: 'We journey to the legendary Serengeti National Park. The drive takes us through the Ngorongoro highlands and into the infinite plains.\n\nEnjoy a game drive en route to your luxury tented camp. Dinner and overnight at a signature camp.' 
      },
      { 
        day: 5, 
        title: 'Day 5: Serengeti Sovereignty', 
        detail: 'A full day in the Serengeti, tracking the Great Migration (seasonal) and the Big Five.\n\nEnjoy a bush lunch on the plains. Dinner and overnight at the camp.' 
      },
      { 
        day: 6, 
        title: 'Day 6: Crossing to the Maasai Mara', 
        detail: 'We cross the border into Kenya and enter the Maasai Mara National Reserve. This seamless transition allows you to follow the wildlife across borders.\n\nArrive at your luxury tented camp in time for a sunset game drive. Dinner and overnight at a signature camp.' 
      },
      { 
        day: 7, 
        title: 'Day 7: Maasai Mara Discovery', 
        detail: 'A full day dedicated to the Maasai Mara. Track the predators and witness the raw beauty of the savannah.\n\nEnjoy a traditional sundowner as the sun sets over the Mara. Dinner and overnight at the camp.' 
      },
      { 
        day: 8, 
        title: 'Day 8: Lake Nakuru Rhinos', 
        detail: 'We drive to Lake Nakuru National Park, a sanctuary for rhinos and flamingos.\n\nEnjoy an afternoon game drive around the lake shore. Dinner and overnight at a luxury lodge.' 
      },
      { 
        day: 9, 
        title: 'Day 9: Nairobi & Flight to Entebbe', 
        detail: 'We return to Nairobi for a regional flight to Entebbe, Uganda. \n\nUpon arrival, transfer to your boutique hotel on the shores of Lake Victoria. Overnight in Entebbe.' 
      },
      { 
        day: 10, 
        title: 'Day 10: The Primate Capital - Kibale', 
        detail: 'We depart for Kibale National Park, the primate capital of the world.\n\nArrive at your forest lodge and soak in the vibrant energy of the rainforest. Dinner and overnight at a signature forest retreat.' 
      },
      { 
        day: 11, 
        title: 'Day 11: Chimpanzee Tracking', 
        detail: 'Enter the Kibale forest for a morning of tracking chimpanzees. Observe our closest relatives in their natural habitat.\n\nIn the afternoon, visit the Bigodi Wetland Sanctuary. Dinner and overnight at the lodge.' 
      },
      { 
        day: 12, 
        title: 'Day 12: Queen Elizabeth Savannahs', 
        detail: 'We journey to Queen Elizabeth National Park. Enjoy an afternoon boat safari on the Kazinga Channel.\n\nSpot hippos, crocodiles, and elephants at the water\'s edge. Overnight at a lodge with panoramic views.' 
      },
      { 
        day: 13, 
        title: 'Day 13: Ishasha to Bwindi', 
        detail: 'Track the tree-climbing lions in Ishasha before continuing to the ancient Bwindi forest.\n\nArrive at your luxury forest lodge and prepare for your gorilla encounter. Dinner and overnight at a signature lodge.' 
      },
      { 
        day: 14, 
        title: 'Day 14: Gorilla Trekking in Bwindi', 
        detail: 'The highlight of your journey. Track a mountain gorilla family through the misty forest. Meeting their gaze is a profound experience.\n\nReturn to the lodge for a celebratory lunch. Dinner and overnight at the lodge.' 
      },
      { 
        day: 15, 
        title: 'Day 15: Lake Bunyonyi Serenity', 
        detail: 'We drive to Lake Bunyonyi for a day of relaxation. Enjoy a boat trip on the lake and soak in the beautiful scenery.\n\nIt is the perfect conclusion to your East African odyssey. Dinner and overnight at a lakeside resort.' 
      },
      { 
        day: 16, 
        title: 'Day 16: Return to Entebbe & Departure', 
        detail: 'Transfer to Entebbe International Airport for your departure. Carry with you the indelible spirit of the three East African nations.' 
      }
    ],
    exclusions: ['International Flights', 'Entry Visas', 'Personal Insurance', 'Tips & Gratuities', 'Premium Alcoholic Drinks']
  },
  {
    id: 'masai-mara-serengeti-6d',
    name: '6 Days Masai Mara and Serengeti safari',
    slug: 'masai-mara-serengeti-6d',
    duration_days: 6,
    duration_nights: 5,
    price_from: 3520,
    currency: '$',
    category: 'Savannah Sovereignty',
    description: 'A focused, high-impact safari through the world’s most famous wildlife ecosystem across the Kenya-Tanzania border during migration peak.',
    highlights: ['Masai Mara Reserve', 'Serengeti Plains', 'Migration Crossing'],
    imageUrls: ['https://i.postimg.cc/9f9FWt3z/9be3ba5d-30ad-463d-9fb9-8226e0f67943.jpg'],
    featured: true,
    countries: 'Kenya & Tanzania',
    startCity: 'Nairobi',
    endCity: 'Arusha',
    transportMode: '4x4 Land Cruiser',
    primaryFocus: 'Migration Peak & Savannah Predators'
  },
  {
    id: 'uganda-tanzania-safari-13d',
    name: '13 Days Uganda and Tanzania Safari',
    slug: 'uganda-tanzania-safari-13d',
    duration_days: 13,
    duration_nights: 12,
    price_from: 5850,
    currency: '$',
    category: 'Combined Safari',
    description: 'A masterpiece of regional travel, combining the primate-rich forests of Uganda with the legendary plains of the Serengeti and Ngorongoro Crater. Experience the "360-degree primate odyssey" and the thundering wild of Tanzania.',
    highlights: ['Bwindi Gorilla Trekking', 'Serengeti Migration', 'Ngorongoro Crater', 'Kibale Chimpanzees', 'Tree-Climbing Lions'],
    imageUrls: ['https://i.postimg.cc/Hkp3Pkcx/Tanzani_Wildlife_tour_1536x1152.jpg'],
    featured: true,
    countries: 'Uganda & Tanzania',
    startCity: 'Entebbe',
    endCity: 'Arusha',
    transportMode: '4x4 Land Cruiser & Regional Flight',
    primaryFocus: 'Primates & Great Plains',
    inclusions: ['Gorilla & Chimp Permits', 'Regional Flight (Entebbe-Serengeti)', 'Luxury Lodging', 'Private 4x4 Vehicles', 'All Meals & Park Fees'],
    itinerary: [
      { day: 1, title: 'Day 1: Arrival in Entebbe', detail: 'Welcome to the Pearl of Africa. Transfer to your boutique hotel on the shores of Lake Victoria.' },
      { day: 2, title: 'Day 2: Kibale Primate Capital', detail: 'Journey to Kibale Forest, the primate capital of the world.' },
      { day: 3, title: 'Day 3: Chimpanzee Tracking', detail: 'A morning of tracking chimpanzees followed by a Bigodi wetland walk.' },
      { day: 4, title: 'Day 4: Queen Elizabeth Savannahs', detail: 'Drive to Queen Elizabeth National Park for game drives and a Kazinga Channel boat safari.' },
      { day: 5, title: 'Day 5: Ishasha Tree-Climbing Lions', detail: 'Track the unique tree-climbing lions of Ishasha.' },
      { day: 6, title: 'Day 6: Bwindi Impenetrable Forest', detail: 'Travel to the misty forests of Bwindi, home to the mountain gorillas.' },
      { day: 7, title: 'Day 7: Gorilla Trekking - 360° Primate Experience', detail: 'The highlight of your journey. Meet the gentle giants in their natural habitat.' },
      { day: 8, title: 'Day 8: Flight to Serengeti - The Luxury Transition', detail: 'Board a regional flight from Entebbe directly to the Serengeti plains. A hallmark transition of luxury combined safaris.' },
      { day: 9, title: 'Day 9: Serengeti Sovereignty', detail: 'A full day in the Serengeti tracking the Great Migration and the Big Five.' },
      { day: 10, title: 'Day 10: Serengeti Discovery', detail: 'Further exploration of the vast Serengeti ecosystem.' },
      { day: 11, title: 'Day 11: Ngorongoro Crater Floor', detail: 'Descend into the world\'s largest inactive caldera for spectacular game viewing.' },
      { day: 12, title: 'Day 12: Lake Manyara / Tarangire', detail: 'Explore the diverse landscapes of Manyara or Tarangire.' },
      { day: 13, title: 'Day 13: Departure from Arusha', detail: 'Transfer to Kilimanjaro International Airport for your departure.' }
    ],
    exclusions: ['International Flights', 'Entry Visas', 'Personal Insurance', 'Tips & Gratuities']
  },
  {
    id: 'ug-ke-tz-wildlife-11d',
    name: '11 Days Uganda, Tanzania and Kenya Wildlife Safari',
    slug: 'ug-ke-tz-wildlife-11d',
    duration_days: 11,
    duration_nights: 10,
    price_from: 4950,
    currency: '$',
    category: 'Combined Safari',
    description: 'A high-impact regional circuit covering the most iconic wildlife destinations in Uganda, Kenya, and Tanzania. From the misty primate forests to the legendary savannahs.',
    highlights: ['Bwindi Gorilla Trekking', 'Maasai Mara Big Five', 'Serengeti Migration', 'Ngorongoro Crater'],
    imageUrls: ['https://i.postimg.cc/J0r1cfsX/90e57c35-c104-4c92-b085-d10243cac4cd.jpg'],
    featured: true,
    countries: 'Uganda, Kenya & Tanzania',
    startCity: 'Entebbe',
    endCity: 'Arusha',
    transportMode: '4x4 Land Cruiser & Regional Flights',
    primaryFocus: 'Primates & Savannah Wildlife',
    inclusions: ['Gorilla Permit', 'Regional Flights', 'Luxury Lodging', 'Private 4x4 Vehicles', 'All Meals & Park Fees'],
    itinerary: [
      { day: 1, title: 'Day 1: Arrival in Entebbe', detail: 'Arrival and transfer to your boutique hotel.' },
      { day: 2, title: 'Day 2: Bwindi Impenetrable Forest', detail: 'Flight to Bwindi and preparation for trekking.' },
      { day: 3, title: 'Day 3: Gorilla Trekking', detail: 'A profound encounter with the mountain gorillas.' },
      { day: 4, title: 'Day 4: Flight to Masai Mara', detail: 'The hallmark Entebbe-Mara flight transition.' },
      { day: 5, title: 'Day 5: Masai Mara Sovereignty', detail: 'Full day game drives tracking the Big Five.' },
      { day: 6, title: 'Day 6: Crossing to Serengeti', detail: 'Border crossing into the legendary Serengeti.' },
      { day: 7, title: 'Day 7: Serengeti Discovery', detail: 'Tracking the Great Migration across the plains.' },
      { day: 8, title: 'Day 8: Ngorongoro Crater Floor', detail: 'Full day in the self-contained Eden of the crater.' },
      { day: 9, title: 'Day 9: Lake Manyara / Tarangire', detail: 'Exploring the diverse Rift Valley landscapes.' },
      { day: 10, title: 'Day 10: Arusha Cultural Legacy', detail: 'Cultural tour and relaxation in Arusha.' },
      { day: 11, title: 'Day 11: Departure', detail: 'Transfer to Kilimanjaro Airport for departure.' }
    ],
    exclusions: ['International Flights', 'Entry Visas', 'Personal Insurance', 'Tips & Gratuities']
  },
  {
    id: 'ug-ke-tz-safari-17d',
    name: '17 Days Wildlife Safari of Uganda, Kenya & Tanzania',
    slug: 'ug-ke-tz-safari-17d',
    duration_days: 17,
    duration_nights: 16,
    price_from: 8950,
    currency: '$',
    category: 'Combined Safari',
    description: 'The ultimate East African odyssey. A 17-day master-class in regional travel, covering every iconic park and primate sanctuary in the Pearl of Africa and the legendary savannahs.',
    highlights: ['360° Primate Experience', 'Maasai Mara Migration', 'Serengeti Plains', 'Ngorongoro Crater', 'Amboseli Elephants'],
    imageUrls: ['https://i.postimg.cc/Hkp3Pkcx/Tanzani_Wildlife_tour_1536x1152.jpg'],
    featured: true,
    countries: 'Uganda, Kenya & Tanzania',
    startCity: 'Entebbe',
    endCity: 'Nairobi',
    transportMode: '4x4 Land Cruiser & Regional Flights',
    primaryFocus: 'Complete East African Immersion',
    inclusions: ['Gorilla & Chimp Permits', 'Regional Flights', 'Luxury Lodging', 'Private 4x4 Vehicles', 'All Meals & Park Fees'],
    itinerary: [
      { day: 1, title: 'Day 1: Arrival in Entebbe', detail: 'Welcome to Uganda. Transfer to your luxury hotel.' },
      { day: 2, title: 'Day 2: Kibale Primate Capital', detail: 'Journey to the heart of the primate forest.' },
      { day: 3, title: 'Day 3: Chimpanzee Tracking', detail: 'A morning with our closest relatives.' },
      { day: 4, title: 'Day 4: Queen Elizabeth Savannahs', detail: 'Game drives and Kazinga Channel boat safari.' },
      { day: 5, title: 'Day 5: Ishasha Tree-Climbing Lions', detail: 'Tracking the unique predators of Ishasha.' },
      { day: 6, title: 'Day 6: Bwindi Impenetrable Forest', detail: 'Arrival at the misty forest edge.' },
      { day: 7, title: 'Day 7: Gorilla Trekking', detail: 'The soul of the forest encounter.' },
      { day: 8, title: 'Day 8: Flight to Masai Mara', detail: 'The hallmark luxury flight transition.' },
      { day: 9, title: 'Day 9: Masai Mara Sovereignty', detail: 'Full day tracking the Big Five.' },
      { day: 10, title: 'Day 10: Crossing to Serengeti', detail: 'Border crossing into Tanzania.' },
      { day: 11, title: 'Day 11: Serengeti Discovery', detail: 'Tracking the Great Migration.' },
      { day: 12, title: 'Day 12: Ngorongoro Crater Floor', detail: 'Full day in the caldera.' },
      { day: 13, title: 'Day 13: Lake Manyara / Tarangire', detail: 'Rift Valley exploration.' },
      { day: 14, title: 'Day 14: Amboseli National Park', detail: 'Elephants under the shadow of Kilimanjaro.' },
      { day: 15, title: 'Day 15: Amboseli Discovery', detail: 'Full day in Amboseli.' },
      { day: 16, title: 'Day 16: Return to Nairobi', detail: 'Journey back to the capital.' },
      { day: 17, title: 'Day 17: Departure', detail: 'Transfer to Jomo Kenyatta Airport.' }
    ],
    exclusions: ['International Flights', 'Entry Visas', 'Personal Insurance', 'Tips & Gratuities']
  },
  {
    id: 'gorilla-quick-3d',
    name: '3 Days Gorilla Quick Escape',
    slug: 'gorilla-quick-3d',
    duration_days: 3,
    duration_nights: 2,
    price_from: 1450,
    currency: '$',
    category: 'Primate Swift',
    description: 'A focused, high-intensity escape into the heart of Bwindi for those seeking a direct encounter with the gentle giants.',
    highlights: ['Bwindi Impenetrable', 'Gorilla Tracking', 'Misty Highlands'],
    imageUrls: ['https://i.postimg.cc/d03qBkbL/Kyambura_Game_Reserve_Chimpanzee_trekking_750x400.jpg'],
    featured: true
  },
  {
    id: 'murchison-explorer-7d',
    name: '7 Days Murchison Falls Explorer',
    slug: 'murchison-explorer-7d',
    duration_days: 7,
    duration_nights: 6,
    price_from: 2850,
    currency: '$',
    category: 'Northern Wilds',
    description: 'Complete immersion into the thundering power of the Nile and the vast savannahs of Murchison Falls National Park.',
    highlights: ['Bottom of the Falls Cruise', 'Savannah Game Drives', 'Budongo Chimpanzees'],
    imageUrls: ['https://i.postimg.cc/RhFXcb5J/aruu_falls_1_750x450.png'],
    featured: true
  },
  {
    id: 'kidepo-valley-5d',
    name: '5 Days Kidepo Valley Adventure',
    slug: 'kidepo-valley-5d',
    duration_days: 5,
    duration_nights: 4,
    price_from: 3120,
    currency: '$',
    category: 'Remote Isolation',
    description: 'Venture to the far north to discover the most rugged and isolated wilderness in the Pearl of Africa.',
    highlights: ['Naruso Valley Game Drives', 'Karamoja Culture', 'Apoka Wilderness'],
    imageUrls: ['https://i.postimg.cc/Px4HxSSt/1979d9c0_1bbb_4bdb_97e0_f9287cc86395.jpg'],
    featured: true
  },
  {
    id: 'karamoja-cultural-6d',
    name: '6 Days Karamoja Cultural Immersion',
    slug: 'karamoja-cultural-6d',
    duration_days: 6,
    duration_nights: 5,
    price_from: 1980,
    currency: '$',
    category: 'Ancestral Roots',
    description: 'Live the life of the Karamojong people, learning their traditions, rhythms, and deep connection to the land.',
    highlights: ['Manyatta Stay', 'Traditional Crafts', 'Plains Discovery'],
    imageUrls: ['https://i.postimg.cc/Kv7JNMzm/Kara_Tunga_Tours_Life_in_Manyatta_5_e1643904828756.webp'],
    featured: true
  }
];

export const LODGES: Lodge[] = [
  {
    id: 'ishasha-jungle-lodge',
    name: 'Ishasha Jungle Lodge',
    location: 'Ishasha Sector',
    region: 'Queen Elizabeth',
    imageUrl: 'https://i.postimg.cc/Jn163QxT/thatch-roof-house.jpg',
    description: 'Nestled along the Ntungwe River, this eco-lodge is the perfect base for spotting the famous tree-climbing lions of Ishasha.'
  },
  {
    id: 'kibale-tourist-safari-lodge',
    name: 'Kibale Tourist Safari Lodge',
    location: 'Kibale Forest Boundary',
    region: 'Kibale',
    imageUrl: 'https://i.postimg.cc/5NvrVjHW/bed_with_canopy.jpg',
    description: 'A sanctuary of comfort on the edge of the primate capital, offering serene views and proximity to chimpanzee trekking trails.'
  },
  {
    id: 'boma-hotel-entebbe',
    name: 'The Boma Hotel Entebbe',
    location: 'Entebbe',
    region: 'Entebbe',
    imageUrl: 'https://i.postimg.cc/0QswdfSF/spa-salon-with-beach-view.jpg',
    description: "Entebbe's original boutique hotel, set in a 1940s colonial home with lush gardens and a timeless, hospitable atmosphere."
  },
  {
    id: 'aardvark-safari-lodge',
    name: 'Aardvark Safari Lodge',
    location: 'Queen Elizabeth Park Edge',
    region: 'Queen Elizabeth',
    imageUrl: 'https://i.postimg.cc/HnD18xPJ/uzuri-safaris-tanzania-Ti9XCg6QOn4-unsplash.jpg',
    description: 'An intimate wilderness retreat designed to blend into the landscape, offering raw nature and refined comfort.'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'bespoke-itinerary',
    name: 'Signature Itinerary Design',
    slug: 'itinerary-design',
    description: "The architecture of your journey. We don't sell tours; we design personal legends tailored to your pace, privacy, and passion.",
    features: ['Personalized Mapping', 'Rhythm Calibration', 'Exclusive Access'],
    icon_name: 'compass',
    order_index: 1,
    active: true,
    typeLabel: 'Curation'
  },
  {
    id: 'luxury-transport',
    name: 'Luxury Transport & Logistics',
    slug: 'transport-logistics',
    description: 'Navigate the Pearl of Africa in our customized 4x4 Land Cruisers, equipped with pop-up roofs for 360° viewing and onboard refreshments.',
    features: ['4x4 Land Cruisers', '360° Pop-up Roofs', 'Onboard Refreshments'],
    icon_name: 'jeep',
    order_index: 2,
    active: true,
    typeLabel: 'Expedition'
  },
  {
    id: 'elite-guiding',
    name: 'Elite Guiding & Tracking',
    slug: 'guiding-tracking',
    description: 'Our silverback-certified rangers and birding experts are more than guides—they are storytellers who bring the wilderness to life.',
    features: ['Certified Rangers', 'Expert Tracking', 'Nature Storytelling'],
    icon_name: 'binoculars',
    order_index: 3,
    active: true,
    typeLabel: 'Discovery'
  },
  {
    id: 'concierge-support',
    name: 'Concierge & Support',
    slug: 'concierge-support',
    description: 'From securing rare Gorilla permits to 24/7 on-ground support, we handle the complexity so you can enjoy the serenity.',
    features: ['Permit Procurement', 'VIP Protocol', '24/7 Curator Access'],
    icon_name: 'shield',
    order_index: 4,
    active: true,
    typeLabel: 'Stewardship'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    clientName: "Eleanor Vance",
    title: "A Primal Return to Nature",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    country: "Switzerland",
    countryCode: "CH",
    tripTaken: "The Grand Savanna Experience",
    rating: 5,
    comment: "Kuzuri authored a journey that felt less like a tour and more like a return to something primal and profound. Every detail was curated with an invisible hand of excellence.",
    date: "2024-02-10",
    verified: true,
    approved: true,
    published: true,
    responses: [],
    helpful: 24
  },
  {
    id: 2,
    clientName: "Marcus Thorne",
    title: "Misty Mountain Magic",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    country: "United Kingdom",
    countryCode: "GB",
    tripTaken: "5 Days Bwindi Gorilla Trekking",
    rating: 5,
    comment: "The silence of the Bwindi forest is a luxury I never knew existed. Meeting the mountain gorillas was curated with absolute excellence by Nasif. An experience that stays with you forever.",
    date: "2024-01-15",
    verified: true,
    approved: true,
    published: true,
    responses: [{ author: "Lead Curator", text: "It was an honor to steward your journey, Marcus. The silence is where the soul breathes.", date: "2024-01-16" }],
    helpful: 42
  },
  {
    id: 3,
    clientName: "Emilia Rossi",
    title: "Magical Murchison Falls",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    country: "Italy",
    countryCode: "IT",
    tripTaken: "Murchison Falls Explorer",
    rating: 5,
    comment: "The thundering Nile and the golden horizons were breathtaking. Absolute excellence in logistics and guiding. A truly native perspective that revealed the secret soul of Uganda.",
    date: "2023-11-28",
    verified: true,
    approved: true,
    published: true,
    responses: [],
    helpful: 19
  },
  {
    id: 4,
    clientName: "Julianne Moore",
    title: "The Ultimate African Odyssey",
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
    country: "United States",
    countryCode: "US",
    tripTaken: "Grand Uganda Odyssey",
    rating: 5,
    comment: "Two weeks of absolute perfection. From the tree-climbing lions to the quiet evenings on the Nile. Kuzuri Escapades is the definitive choice for discerning world travelers.",
    date: "2023-10-12",
    verified: true,
    approved: true,
    published: true,
    responses: [],
    helpful: 56
  },
  {
    id: 5,
    clientName: "Arjun Mehta",
    title: "Primate Perfection",
    avatarUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200",
    country: "India",
    countryCode: "IN",
    tripTaken: "Primate Symphony",
    rating: 5,
    comment: "Tracking chimpanzees in Kibale was a high-fidelity experience. The native stewardship made all the difference. We felt safe, respected, and deeply connected to nature.",
    date: "2023-09-05",
    verified: true,
    approved: true,
    published: true,
    responses: [],
    helpful: 31
  }
];