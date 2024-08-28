interface IBlog {
  id: number;
  title: string;
  date: string;
  tag: string;
  img: string;
}

export const blogs: IBlog[] = [
  {
    id: 1,
    title:
      'Rustic Castle Retreat in the French Countryside Offers a Fairytale Escape',
    date: '10 August, 2024',
    tag: 'Unique House',
    img: 'https://img.freepik.com/free-photo/3d-house-model-with-modern-architecture_23-2151004049.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1724716800&semt=ais_hybrid',
  },
  {
    id: 2,
    title: 'Modern Urban Home in the Heart of the City with a Stunning View',
    date: '12 August, 2024',
    tag: 'Urban Home',
    img: 'https://img.freepik.com/free-photo/photorealistic-house-with-wooden-architecture-timber-structure_23-2151302742.jpg',
  },
  {
    id: 3,
    title: 'Luxurious Beachfront Villa in the Caribbean with Private Pool',
    date: '15 August, 2024',
    tag: 'Beach House',
    img: 'https://cms.interiorcompany.com/wp-content/uploads/2023/11/simple-house-design-go-for-minimalist.png',
  },
];
