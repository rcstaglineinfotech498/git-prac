import images from "./images.js";

export const projects = [
  {
    slug: "the-courtyard-house",
    title: "The Courtyard House",
    location: "North Shore, Sydney",
    year: "2025",
    category: "Residential",
    area: "320 m²",
    client: "Private residence",
    status: "Completed",
    architects: "Mara Ellis, Theo Park",
    image: images.projectHouse,
    gallery: [images.projectHouse, images.projectHouse2, images.projectGallery],
    excerpt:
      "A quiet family home shaped around light, landscape and the rituals of everyday life.",
    overview:
      "Set within a coastal neighbourhood, The Courtyard House offers a calm retreat from the pace of the city. A central garden brings daylight into the heart of the home, while natural materials allow the architecture to settle gently into its setting.",
    challenge:
      "The narrow site and close neighbours called for a plan that could feel open without compromising privacy or the connection to the outdoors.",
    solution:
      "We organised the home around a planted courtyard and layered the facade with considered openings, creating long views and a sense of refuge in equal measure.",
    featured: true,
  },
  {
    slug: "form-and-field",
    title: "Form & Field Studio",
    location: "Surry Hills, Sydney",
    year: "2024",
    category: "Commercial",
    area: "480 m²",
    client: "Form & Field",
    status: "Completed",
    architects: "Theo Park, Lina Moreau",
    image: images.projectOffice,
    gallery: [images.projectOffice, images.projectInterior],
    excerpt:
      "A generous workplace designed to make room for focus, exchange and new ideas.",
    overview:
      "This creative workplace brings a collection of small, carefully tuned spaces together under one roof. Warm timber, robust stone and generous planting create an atmosphere that is both purposeful and welcoming.",
    challenge:
      "The brief asked for an adaptable work environment that would support different teams while retaining a clear sense of identity.",
    solution:
      "A simple material palette and flexible planning establish a coherent studio, with shared spaces positioned to encourage connection throughout the day.",
    featured: true,
  },
  {
    slug: "stillwater-retreat",
    title: "Stillwater Retreat",
    location: "Blue Mountains, NSW",
    year: "2024",
    category: "Residential",
    area: "265 m²",
    client: "Private residence",
    status: "Completed",
    architects: "Mara Ellis",
    image: images.projectGarden,
    gallery: [images.projectGarden, images.projectHouse2],
    excerpt:
      "A low-impact retreat that borrows its quiet character from the surrounding bushland.",
    overview:
      "Stillwater is a weekend retreat placed lightly within a rugged landscape. The rooms turn toward the trees and distant escarpment, making the changing seasons an essential part of the experience.",
    challenge:
      "A sensitive landscape and steep terrain required a compact design with minimal ground disturbance.",
    solution:
      "The home follows the natural contours of the site and uses a restrained palette of durable, locally sourced materials.",
    featured: true,
  },
  {
    slug: "the-long-table",
    title: "The Long Table",
    location: "Paddington, Sydney",
    year: "2023",
    category: "Interior",
    area: "190 m²",
    client: "Common Ground",
    status: "Completed",
    architects: "Lina Moreau",
    image: images.projectInterior,
    gallery: [images.projectInterior, images.detail],
    excerpt:
      "An intimate restaurant interior built around the simple pleasure of gathering.",
    overview:
      "A neighbourhood restaurant shaped by hospitality and craft. The project layers tactile finishes and softened light around a long communal table.",
    challenge:
      "The existing narrow tenancy needed to welcome both intimate dining and lively shared occasions.",
    solution:
      "A continuous timber element anchors the plan and guides guests from the street through a sequence of dining spaces.",
  },
  {
    slug: "greenline-house",
    title: "Greenline House",
    location: "Inner West, Sydney",
    year: "2022",
    category: "Landscape",
    area: "1,100 m²",
    client: "Greenline Foundation",
    status: "Completed",
    architects: "Mara Ellis, Theo Park",
    image: images.projectGarden,
    gallery: [images.projectGarden, images.projectHouse],
    excerpt:
      "A garden-led renewal that reconnects a much-loved home with its leafy setting.",
    overview:
      "A landscape renewal for an established family home, bringing structure and seasonal interest to a generous garden.",
    challenge:
      "The existing garden felt disconnected from the daily life of the house and required a clear new organising idea.",
    solution:
      "A sequence of outdoor rooms links the house to the garden, using native planting and permeable materials to support local ecology.",
  },
  {
    slug: "harbour-house",
    title: "Harbour House",
    location: "Mosman, Sydney",
    year: "2021",
    category: "Residential",
    area: "410 m²",
    client: "Private residence",
    status: "Completed",
    architects: "Theo Park",
    renovation: true,
    beforeAfter: {
      before: images.projectInterior,
      after: images.projectHouse2,
    },
    image: images.projectHouse2,
    gallery: [images.projectHouse2, images.projectGallery],
    excerpt:
      "A measured renovation that opens a heritage home to its harbour outlook.",
    overview:
      "A careful renovation that preserves the character of an existing home while opening it to the light and views beyond.",
    challenge:
      "The original layout was dark and compartmentalised, while the protected street frontage needed to remain intact.",
    solution:
      "A new rear living pavilion and subtle internal re-planning bring light deep into the home without losing its original character.",
  },
];

export const projectCategories = [
  "All",
  "Residential",
  "Commercial",
  "Interior",
  "Landscape",
  "Urban",
];
