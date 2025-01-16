import { create } from "zustand";

const store = create(() => ({
  menus: [
    {
      category: "Drink",
      image: "/images/homepage/content/choco-hazelnut.jfif",
      name: "Choco Hazelnut",
      rating: "Favorite",
      status1: "Hot",
      status2: "Ice",
      status1Price: "15K",
      status2Price: "18K",
    },

    {
      category: "Drink",
      image: "/images/homepage/content/red-velvet.jpg",
      name: "Red Velvet",
      rating: "Best Seller",
      status1: "Hot",
      status2: "Ice",
      status1Price: "15K",
      status2Price: "-",
    },

    {
      category: "Drink",
      image: "/images/homepage/content/choco-hazelnut.jfif",
      name: "Choco Hazelnut",
      rating: "Favorite",
      status1: "Hot",
      status2: "Ice",
      status1Price: "15K",
      status2Price: "18K",
    },

    {
      category: "Drink",
      image: "/images/homepage/content/red-velvet.jpg",
      name: "Red Velvet",
      rating: "Best Seller",
      status1: "Hot",
      status2: "Ice",
      status1Price: "15K",
      status2Price: "-",
    },

    {
      category: "Drink",
      image: "/images/homepage/content/red-velvet.jpg",
      name: "Red Velvet",
      rating: "Best Seller",
      status1: "Hot",
      status2: "Ice",
      status1Price: "15K",
      status2Price: "-",
    },

    {
      category: "Drink",
      image: "/images/homepage/content/red-velvet.jpg",
      name: "Red Velvet",
      rating: "Best Seller",
      status1: "Hot",
      status2: "Ice",
      status1Price: "15K",
      status2Price: "-",
    },
  ],
}));

export default store;
