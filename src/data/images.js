const photo = (id, width = 1600) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}`;

export const images = {
  hero: photo(10647324, 2400),
  heroHome:
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=85",
  heroApartment: photo(14998334, 2200),
  intro: photo(28456461, 1200),
  introDetail: photo(7195739, 900),
  homeFeature: photo(20296321, 1600),
  homeCta: photo(4870616, 2000),
  studio:
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=88",
  aboutStory: photo(34688219, 1200),
  aboutGallery: photo(19344325, 1600),
  projectsBanner:
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=88",
  journalBanner:
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2000&q=88",
  projectHouse: photo(30580640, 1400),
  projectHouseGallery1: photo(11890079, 1200),
  projectHouseGallery2: photo(19541342, 1200),
  projectOffice: photo(32863067, 1400),
  projectOfficeGallery1: photo(15007744, 1200),
  projectOfficeGallery2: photo(6934265, 1200),
  projectGarden: photo(6342356, 1400),
  projectGardenGallery1: photo(27852347, 1200),
  projectGardenGallery2: photo(31664773, 1200),
  projectInterior: photo(39017406, 1400),
  projectInteriorGallery1: photo(7166645, 1200),
  projectInteriorGallery2: photo(6908565, 1200),
  projectGreenline: photo(34823937, 1400),
  projectGreenlineGallery1: photo(9308434, 1200),
  projectGreenlineGallery2: photo(15951714, 1200),
  projectHarbour: photo(18078684, 1400),
  projectHarbourGallery1: photo(16798894, 1200),
  projectHarbourGallery2: photo(33244441, 1200),
  projectHarbourBefore: photo(33537442, 1200),
  projectHarbourAfter: photo(8089172, 1200),
  blogOne: photo(7045356, 1400),
  blogTwo: photo(19516616, 1200),
  blogThree: photo(7535012, 1200),
  blogFour: photo(34574606, 1200),
  blogFive: photo(260046, 1200),
  blogSix: photo(6980724, 1200),
};

export default images;
