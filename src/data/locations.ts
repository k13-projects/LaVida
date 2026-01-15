export interface Location {
  id: number;
  name: string;
  address: string;
  city: string;
  hours: string;
  isOpen: boolean;
  comingSoon?: boolean;
}

export const locations: Location[] = [
  {
    id: 1,
    name: "Carlsbad",
    address: "Windmill Food Hall, 890 Palomar Airport Rd",
    city: "CA 92011",
    hours: "Daily: 11:00 AM – 9:00 PM",
    isOpen: true,
  },
  {
    id: 2,
    name: "Miramar",
    address: "1720 North El Camino Real",
    city: "San Diego, CA",
    hours: "Daily: 11:00 AM – 9:00 PM",
    isOpen: false,
    comingSoon: true,
  },
];
