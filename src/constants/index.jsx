import cafe1 from "../assets/cafe1.jpg";
import cafe2 from "../assets/cafe2.jpg";
import cafe3 from "../assets/cafe3.jpg";
import cafe4 from "../assets/cafe4.webp";
import cafe5 from "../assets/cafe5.jpg";
import cafe6 from "../assets/cafe6.webp";
import cafe7 from "../assets/cafe7.jpg";
import cafe8 from "../assets/cafe8.webp";
import cafe9 from "../assets/cafe9.jpg";
import cafe10 from "../assets/cafe10.jpg";
import cafe11 from "../assets/cafe11.webp";
import cafe12 from "../assets/cafe12.jpg";
import specialty1 from "../assets/speciality1.jpg";
import specialty2 from "../assets/speciality2.jpg";
import specialty3 from "../assets/speciality3.jpg";

import { FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6";

export const LINKS = [
  { text: "Menu", targetId: "menu" },
  { text: "About Us", targetId: "about" },
  { text: "Vision", targetId: "vision" },
  { text: "Our Craft", targetId: "specialty" },
  { text: "Reviews", targetId: "reviews" },
  { text: "Visit Us", targetId: "contact" },
];

export const PRODUCTS = [
  {
    image: cafe1,
    title: "Classic Espresso",
    description: "A bold, comforting shot with deep roasted notes",
  },
  {
    image: cafe2,
    title: "Smooth Americano",
    description: "Smooth espresso gently diluted with hot water",
  },
  {
    image: cafe3,
    title: "Velvet Cappuccino",
    description: "Soft milk foam layered over rich espresso",
  },
  {
    image: cafe4,
    title: "Creamy Latte",
    description: "Creamy, balanced espresso with steamed milk",
  },
  {
    image: cafe5,
    title: "Chocolate Mocha",
    description: "A cozy blend of espresso, chocolate, and milk",
  },
  {
    image: cafe6,
    title: "Iced Cold Brew",
    description: "Slow-steeped and refreshing with a mellow finish",
  },
  {
    image: cafe7,
    title: "Caramel Macchiato",
    description: "Vanilla-sweetened milk with espresso and caramel drizzle",
  },
  {
    image: cafe8,
    title: "Iced Coffee Frappe",
    description: "Blended ice coffee with whipped cream topping",
  },

  {
    image: cafe9,
    title: "Fudge Brownie",
    description: "Fudgy chocolate square with a tender crumb",
  },
  {
    image: cafe10,
    title: "Glazed Cinnamon Roll",
    description: "Warm, sweet swirls with cream cheese glaze",
  },
  {
    image: cafe11,
    title: "Buttery Croissant",
    description: "Flaky layers baked until perfectly golden",
  },
  {
    image: cafe12,
    title: "Double Chocolate Muffin",
    description: "Soft, rich, and gently indulgent",
  },
];

export const ABOUT = {
  header: "A quiet place for warm cups",
  content:
    "Our café is a small, cozy space made for slow mornings and gentle conversations. Every cup is brewed with care, every bite baked with comfort in mind. Whether you're stopping by for a quiet moment alone or sharing time with someone special, we hope our space feels calm, welcoming, and unhurried. Here, time slows down, and every sip is a small ritual of presence. Come as you are, stay as long as you like.",
};

export const MISSION =
  "Our mission is to serve thoughtfully brewed coffee and simple café treats that bring comfort, calm, and warmth to everyday moments.";

export const SPECIALITY = [
  {
    number: "01.",
    image: specialty1,
    title: "Carefully Selected",
    description:
      "We work with roasters who care deeply about their craft and the farmers they support. Every coffee we serve is chosen for its unique story, exceptional quality, and the values behind it. You'll taste the difference intention makes.",
  },
  {
    number: "02.",
    image: specialty2,
    title: "Your Quiet Corner",
    description:
      "In a world that moves too fast, we've created a space that doesn't. Warm wood, soft sounds, and light that feels like home. Come to think, to talk, to disconnect, or simply to sit with a good cup. This is your place to pause.",
  },
  {
    number: "03.",
    image: specialty3,
    title: "Served with Heart",
    description:
      "We believe small moments matter. That's why every drink is made thoughtfully, every greeting is genuine, and every detail—from the temperature of your milk to the smile we offer—is meant to make you feel seen, welcome, and cared for.",
  },
];

export const REVIEW = [
  {
    name: "Emily Carter",
    profession: "Lifestyle Blogger",
    content:
      "This café feels like a soft pause in the middle of the day. The coffee is comforting, the space is calm, and everything feels intentionally made.",
  },
  {
    name: "Jessica Morrison",
    profession: "University Student",
    content:
      "I come here between classes to study and reset. The coffee is amazing, and the quiet energy helps me focus. It's become my second home during exam season.",
  },
  {
    name: "Thomas Moreau",
    profession: "Photographer",
    content:
      "A rare find in the city. The light, the textures, the careful attention to every corner—it's a photographer's dream, but more importantly, it's a place that feels human and warm.",
  },
];

export const CONTACT = [
  { key: "address", value: "18 Harmony Street, 75006 Paris, France" },
  { key: "phone", value: "+90 123 456 789" },
  { key: "email", value: "hello@thequietcup.com" },
  { key: "hours", value: "Open Daily: 8:00 AM - 8:00 PM" },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://facebook.com",
    icon: <FaFacebook fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "https://instagram.com",
    icon: <FaInstagram fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com",
    icon: <FaXTwitter fontSize={26} className="hover:opacity-80" />,
  },
];
