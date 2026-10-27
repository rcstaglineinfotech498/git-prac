const photo = (id, width = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

export const images = {
  hero: photo("photo-1600607687939-ce8a6c25118c", 2400),
  intro: photo("photo-1600210492486-724fe5c67fb0", 1000),
  introDetail: photo("photo-1600566753086-00f18fb6b3ea", 850),
  projectHouse: photo("photo-1600607687920-4e2a09cf159d", 1200),
  projectHouse2: photo("photo-1600566753190-17f0baa2a6c3", 1000),
  projectOffice: photo("photo-1497366754035-f200968a6e72", 1200),
  projectInterior: photo("photo-1600210491369-e753d80a41f3", 1200),
  projectGarden: photo("photo-1600585154340-be6161a56a0c", 1200),
  projectGallery: photo("photo-1600607687920-4e2a09cf159d", 1800),
  blogOne: photo("photo-1600607687939-ce8a6c25118c", 1200),
  blogTwo: photo("photo-1600566753086-00f18fb6b3ea", 1000),
  blogThree: photo("photo-1511818966892-d7d671e672a2", 1000),
  teamOne: photo("photo-1500648767791-00dcc994a43e", 500),
  teamTwo: photo("photo-1534528741775-53994a69daeb", 500),
  teamThree: photo("photo-1506794778202-cad84cf45f1d", 500),
  clientOne: photo("photo-1531123897727-8f129e1688ce", 300),
  studio: photo("photo-1497366216548-37526070297c", 1500),
  detail: photo("photo-1600566753190-17f0baa2a6c3", 1500),
};

export default images;
