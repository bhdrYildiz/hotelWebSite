export type Room = {
  id: string;
  name: string;
  description: string;
  images: string[];
  features: string[];
  size: string;
};

export const rooms: Room[] = [
  {
    id: "room-301",
    name: "Özel Teraslı ve Jakuzili King Suit",
    images: [
      "/images/room-301/301-1.jpeg",
      "/images/room-301/301-2.jpeg",
      "/images/room-301/301-3.jpeg",
      "/images/room-301/301-4.jpeg",
      "/images/room-301/301-5.jpeg",
      "/images/room-301/301-6.jpeg",
    ],
    description:
      "Taş duvarlar arasında saklı, romantik ve büyüleyici bir deneyim sizi bekliyor.",
    features: [
      "BedDouble",
      "Wifi",
      "Mirror",
      "Tv",
      "RoomService",
      "BathIcon",
      "Coffee",
      "HairDryer",
      "Shower",
    ],
    size: "50m²",
  },
  {
    id: "room-105",
    name: "Havuzlu King Suit",
    images: [
      "/images/room-105/105-1.jpg",
      "/images/room-105/105-2.jpg",
      "/images/room-105/105-3.jpg",
      "/images/room-105/105-4.jpg",
      "/images/room-105/105-5.jpg",
      "/images/room-105/105-6.jpg",
      "/images/room-105/105-7.jpg",
      "/images/room-105/105-8.jpg",
    ],
    description:
      "Hem geleneksel hem çağdaş detaylarla donatılmış bu odada, unutulmaz anılar biriktirin.",
    features: [
      "BedDouble",
      "Wifi",
      "Mirror",
      "Tv",
      "RoomService",
      "BathIcon",
      "Coffee",
      "HairDryer",
      "Shower",
    ],
    size: "50m²",
  },
  {
    id: "room-103",
    name: "Jakuzili ve Balkonlu Suit",
    images: [
      "/images/room-103/103-1.jpg",
      "/images/room-103/103-2.jpg",
      "/images/room-103/103-3.jpg",
      "/images/room-103/103-4.jpg",
      "/images/room-103/103-5.jpg",
      "/images/room-103/103-6.jpg",
      "/images/room-103/103-7.jpg",
      "/images/room-103/103-8.jpg",
      "/images/room-103/103-9.jpg",
    ],
    description:
      "Özel jakuzinizde günün yorgunluğunu atarken, Kapadokya'nın mistik atmosferine tanıklık edin.",
    features: [
      "BedDouble",
      "Wifi",
      "RoomService",
      "Tv",
      "BathIcon",
      "Coffee",
      "Shower",
    ],
    size: "50m²",
  },
  {
    id: "room-202",
    name: "Deluxe Room 202",
    images: [
      "/images/room-202/202-1.jpg",
      "/images/room-202/202-2.jpg",
      "/images/room-202/202-3.jpg",
      "/images/room-202/202-4.jpg",
      "/images/room-202/202-5.jpg",
    ],
    description: "Kapadokya taşından odalarımızda lüksü ve sakinliği keşfedin",
    features: [
      "BedDouble",
      "Wifi",
      "RoomService",
      "Tv",
      "BathIcon",
      "Shower",
      "Mirror",
    ],
    size: "50m²",
  },
  {
    id: "room-203",
    name: "Deluxe Room 203",
    images: [
      "/images/room-203/203-1.jpg",
      "/images/room-203/203-2.jpg",
      "/images/room-203/203-3.jpg",
      "/images/room-203/203-4.jpg",
      "/images/room-203/203-5.jpg",
    ],
    description:
      "Hem geleneksel hem çağdaş detaylarla donatılmış bu odada, unutulmaz anılar biriktirin.",
    features: [
      "BedDouble",
      "Wifi",
      "RoomService",
      "Tv",
      "BathIcon",
      "Shower",
      "Mirror",
    ],
    size: "50m²",
  },
  {
    id: "room-104",
    name: "Deluxe Room",
    images: [
      "/images/room-104/104-1.jpg",
      "/images/room-104/104-2.jpg",
      "/images/room-104/104-3.jpg",
      "/images/room-104/104-4.jpg",
      "/images/room-104/104-5.jpg",
      "/images/room-104/104-6.jpg",
      "/images/room-104/104-7.jpg",
    ],
    description:
      "Doğal taşın verdiği serinlik ve şıklıkla, sabahları kuş sesleriyle uyanacağınız bir cennet köşesi.",
    features: [
      "BedDouble",
      "Wifi",
      "RoomService",
      "Tv",
      "BathIcon",
      "Shower",
      "Mirror",
    ],
    size: "50m²",
  },
];
