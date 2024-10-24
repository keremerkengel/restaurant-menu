export const menuItems = [
  // KAHVALTI KATEGORİSİ
  {
    id: 1,
    name: "Serpme Kahvaltı",
    category: "Kahvaltı",
    price: 175,
    description: "Zengin içerikli, 2 kişilik serpme kahvaltı tabağı",
    image: "/images/serpme.jpg",
    preparationTime: "20 dakika",
    calories: "850 kcal",
    ingredients: [
      "Zeytin çeşitleri",
      "Beyaz peynir",
      "Kaşar peyniri",
      "Domates",
      "Salatalık",
      "Tereyağı",
      "Bal",
      "Reçel çeşitleri",
      "Yumurta",
      "Sigara böreği",
      "Simit"
    ],
    allergens: ["Gluten", "Süt", "Yumurta"],
    isSpicy: false,
    isVegetarian: false,
    portion: "2 kişilik",
    rating: 4.9,
    reviews: 245
  },
  {
    id: 2,
    name: "Pancakes",
    category: "Kahvaltı",
    price: 85,
    description: "Akışkan çikolata sosu ve taze meyveler ile servis edilir",
    image: "/images/pancakes.jpg",
    preparationTime: "15 dakika",
    calories: "450 kcal",
    ingredients: [
      "Un",
      "Süt",
      "Yumurta",
      "Çikolata sosu",
      "Taze meyveler",
      "Tereyağı",
      "Akçaağaç şurubu"
    ],
    allergens: ["Gluten", "Süt", "Yumurta"],
    isSpicy: false,
    isVegetarian: true,
    portion: "3 adet",
    rating: 4.8,
    reviews: 124
  },
  {
    id: 3,
    name: "Menemen",
    category: "Kahvaltı",
    price: 65,
    description: "Taze domates, biber ve yumurta ile hazırlanır",
    image: "/images/menemen.jpg",
    preparationTime: "20 dakika",
    calories: "320 kcal",
    ingredients: [
      "Domates",
      "Biber",
      "Yumurta",
      "Soğan",
      "Zeytinyağı",
      "Baharat"
    ],
    allergens: ["Yumurta"],
    isSpicy: false,
    isVegetarian: false,
    portion: "1 kişilik",
    rating: 4.9,
    reviews: 156
  },

  // ÖĞLE YEMEĞİ KATEGORİSİ
  {
    id: 4,
    name: "Cheeseburger",
    category: "Öğle Yemeği",
    price: 150,
    description: "El yapımı dana eti, cheddar peyniri, özel sos",
    image: "/images/burger.jpg",
    preparationTime: "15 dakika",
    calories: "650 kcal",
    ingredients: [
      "Dana eti",
      "Cheddar peyniri",
      "Marul",
      "Domates",
      "Turşu",
      "Özel sos",
      "Burger ekmeği"
    ],
    allergens: ["Gluten", "Süt", "Hardal"],
    isSpicy: false,
    isVegetarian: false,
    portion: "1 porsiyon",
    rating: 4.7,
    reviews: 189
  },
  {
    id: 5,
    name: "Tavuk Şiş",
    category: "Öğle Yemeği",
    price: 120,
    description: "Marine edilmiş tavuk, pilav ve ızgara sebze ile",
    image: "/images/tavuksis.jpg",
    preparationTime: "25 dakika",
    calories: "480 kcal",
    ingredients: [
      "Tavuk göğsü",
      "Pilav",
      "Izgara sebze",
      "Köy biberi",
      "Domates",
      "Özel marine sos"
    ],
    allergens: [],
    isSpicy: false,
    isVegetarian: false,
    portion: "1 porsiyon",
    rating: 4.6,
    reviews: 142
  },
 

  // AKŞAM YEMEĞİ KATEGORİSİ
  {
    id: 7,
    name: "Karışık Pizza",
    category: "Akşam Yemeği",
    price: 180,
    description: "İtalyan hamuru ile hazırlanan özel karışık pizza",
    image: "/images/pizza.jpg",
    preparationTime: "20 dakika",
    calories: "780 kcal",
    ingredients: [
      "İtalyan pizza hamuru",
      "Mozzarella",
      "Sucuk",
      "Mantar",
      "Zeytin",
      "Mısır",
      "Pizza sos"
    ],
    allergens: ["Gluten", "Süt"],
    isSpicy: false,
    isVegetarian: false,
    portion: "8 dilim",
    rating: 4.7,
    reviews: 276
  },
  {
    id: 8,
    name: "Izgara Somon",
    category: "Akşam Yemeği",
    price: 220,
    description: "Mevsim sebzeleri ile ızgara somon fileto",
    image: "/images/somon.jpg",
    preparationTime: "25 dakika",
    calories: "440 kcal",
    ingredients: [
      "Somon fileto",
      "Brokoli",
      "Havuç",
      "Kabak",
      "Limon",
      "Zeytinyağı",
      "Özel sos"
    ],
    allergens: ["Balık"],
    isSpicy: false,
    isVegetarian: false,
    portion: "1 porsiyon",
    rating: 4.9,
    reviews: 164
  },
  {
    id: 9,
    name: "Mantı",
    category: "Akşam Yemeği",
    price: 110,
    description: "El açması mantı, yoğurt ve özel sos ile",
    image: "/images/manti.jpg",
    preparationTime: "20 dakika",
    calories: "520 kcal",
    ingredients: [
      "El açması mantı",
      "Yoğurt",
      "Domates sos",
      "Nane",
      "Tereyağı",
      "Pul biber"
    ],
    allergens: ["Gluten", "Süt", "Yumurta"],
    isSpicy: true,
    isVegetarian: false,
    portion: "1 porsiyon",
    rating: 4.8,
    reviews: 198
  },

];