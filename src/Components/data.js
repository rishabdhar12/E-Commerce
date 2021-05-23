import ftBedroom from "../Images/featured-bed.jpg";
import ftArmchair from "../Images/featured-armchair.jpg";
import ftDesk from "../Images/wooden-desk.jpeg";
import ftKitchenTable from "../Images/kitchen-table.jpeg";
import extra1 from "../Images/extra-1.jpeg";

export default data = [
  {
    id: "1",
    category: "Bedroom",
    name: "Bed",
    decription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel recusandae molestiae unde non suscipit sint consequuntur consectetur pariatur atque est.Lorem ipsum dolor sit amet consectetur adipisicing elit.Dicta, voluptatem.",
    img1: { ftBedroom },
    img2: "/",
    price: 3200,
    company: "Austin",
    freeshiping: true,
    available: true,
    featured: true,
  },
  {
    id: "2",
    category: "Bedroom",
    name: "Sofa",
    decription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel recusandae molestiae unde non suscipit sint consequuntur consectetur pariatur atque est.Lorem ipsum dolor sit amet consectetur adipisicing elit.Dicta, voluptatem.",
    img1: { ftArmchair },
    img2: "/",
    price: 3200,
    company: "Tata",
    freeshiping: true,
    available: true,
    featured: false,
  },
  {
    id: "3",
    category: "Office Room",
    name: "Computer Desk",
    decription: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img1: { ftDesk },
    img2: "/",
    price: 4200,
    company: "IKEA",
    freeshiping: true,
    available: true,
    featured: true,
  },
  {
    id: "4",
    category: "Office Room",
    name: "Arm Chair",
    decription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel recusandae molestiae unde non suscipit.",
    img1: "/",
    img2: "/",
    price: 5200,
    company: "Tesla",
    freeshiping: true,
    available: true,
    featured: false,
  },
  {
    id: "5",
    category: "Kitchen",
    name: "Dining Table",
    decription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel recusandae molestiae unde non suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit.Dicta, voluptatem.",
    img1: { ftKitchenTable },
    img2: "/",
    price: 2100,
    company: "IKEA",
    freeshiping: true,
    available: true,
    featured: true,
  },
  {
    id: "6",
    category: "Kitchen",
    name: "Shelf",
    decription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel recusandae molestiae unde non suscipit.",
    img1: "/",
    img2: "/",
    price: 3100,
    company: "DKR",
    freeshiping: true,
    available: true,
    featured: false,
  },
];
