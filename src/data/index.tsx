import assets from "assets";

const {
  shop,
  move,
  travel,
  pay,
  moveIcon,
  payIcon,
  travelIcon,
  shopIcon,
  cust1,
  cust2,
  cust3,
  cust4,
  payments,
  savings,
  vCards,
  credits,
} = assets.images;

export const withCredpalList = [
  {
    title: "Move with CredPal",
    description:
      "CredPal enables users to pay for Bolt rides and food orders, with the option to pay now or pay later, based on the available payment options.",
    icon: move,
    route: "",
    routeIcon: moveIcon,
    background: "#F6F0EF",
  },
  {
    title: "Travel with CredPal",
    description:
      "CredPal users can pay for bills and services with the option to pay now or pay later, depending on the payment options available.",
    icon: travel,
    route: "",
    routeIcon: travelIcon,
    background: "#F4F1F7",
  },
  {
    title: "Pay with CredPal",
    description:
      "CredPal users have the flexibility to pay for bills and services with the option to pay now or pay later, depending on the available payment options.",
    icon: pay,
    route: "",
    routeIcon: payIcon,
    background: "#E8F4FF",
  },
  {
    title: "Shop with CredPal",
    description:
      "Credpal’s marketplace offers a wide range of products from various merchants, and users can choose to pay for their purchases in instalments.",
    icon: shop,
    route: "",
    routeIcon: shopIcon,
    background: "#EBF1FF",
  },
];

export const feedbackList = [
  {
    name: "Martins Adebowale",
    text: "I love this app! It's so easy to use and has helped me save money for my future goals. The auto-save feature makes it a breeze to save regularly, and the investment options are great too. Highly recommend!",
    rating: 5,
    picture: cust1,
  },
  {
    name: "Kalistus Oluwafemi",
    text: `"This app has been a game-changer for me. I used to struggle with managing my finances, but with this app, I can easily track my spending, set budgets, and save for the things that matter most."`,
    rating: 5,
    picture: cust2,
  },
  {
    name: "Esther Romanus",
    text: `"I never thought investing could be so simple and accessible, but this app has changed my mind. I can invest easily track my portfolio's performance. Highly recommend for anyone looking to start investing."`,
    rating: 5,
    picture: cust3,
  },
  {
    name: "Chigozie Davids",
    text: `"I've been using this app for months now and it has completely changed the way I manage my finances. The app is user-friendly, offers great investment options, and has helped me save more money than I ever thought was possible."`,
    rating: 5,
    picture: cust4,
  },
  {
    name: "Martins Adebowale",
    text: "I love this app! It's so easy to use and has helped me save money for my future goals. The auto-save feature makes it a breeze to save regularly, and the investment options are great too. Highly recommend!",
    rating: 5,
    picture: cust1,
  },
];

export const featuresList = [
  {
    title: "Payments",
    description:
      "Enjoy a secure, reliable and convenient way to pay. Whether you're paying for a purchase, subscription or any other type of payment, CredPal is designed to make the process fast and easy.",
    isBtnRounded: false,
    image: payments,
  },
  {
    title: "Savings",
    description:
      "Simplify your savings journey by setting a budget. Save with ease by setting goals, tracking your progress, and enabling automatic transfers with your bank account. It’s that easy!",
    isBtnRounded: true,
    image: savings,
  },
  {
    title: "Virtual Cards",
    description:
      "Create a virtual credit or cash card, make secure online purchases, keep track of your spending, and have complete visibility of where your funds are going. With advanced security features, you have the ability to set spending limits and exert control over your spending.",
    isBtnRounded: true,
    image: vCards,
  },
  {
    title: "Credit Builder",
    description:
      "Fund your virtual card and make payments everywhere. Use your CredPal virtual card to make purchases both online and offline with ease, and benefit from our reward-rich programs.",
    isBtnRounded: true,
    image: credits,
  },
];
