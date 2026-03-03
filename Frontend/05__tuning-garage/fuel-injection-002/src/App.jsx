import Card from "./assets/components/Card";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  const cardData = [
    {
      id: 1,
      image:
        "https://i.pinimg.com/1200x/1c/74/67/1c7467fdd56bce805657fc0336b48ce6.jpg",
      title: "Italian Pasta Delight",
      description: "Creamy and cheesy pasta made with fresh herbs.",
      tags: ["Italian", "Pasta", "Cheesy"],
      time: "30 mins",
      difficulty: "Easy",
      servings: "2 Servings",
    },
    {
      id: 2,
      image:
        "https://i.pinimg.com/1200x/82/5c/01/825c01786eead0aa450390265a1a704a.jpg",
      title: "Spicy Chicken Curry",
      description: "Traditional Indian curry with rich spices.",
      tags: ["Indian", "Spicy", "Chicken"],
      time: "45 mins",
      difficulty: "Medium",
      servings: "4 Servings",
    },
    {
      id: 3,
      image:
        "https://i.pinimg.com/736x/0b/90/ea/0b90ea7daf2f3aa80c69f5fde3494bd1.jpg",
      title: "Healthy Avocado Salad",
      description: "Fresh avocado mixed with veggies and olive oil.",
      tags: ["Healthy", "Salad", "Vegan"],
      time: "15 mins",
      difficulty: "Easy",
      servings: "1 Serving",
    },
    {
      id: 4,
      image:
        "https://i.pinimg.com/736x/2d/a5/82/2da582ebaedd4a216ad0501bc5196be0.jpg",
      title: "Classic Cheeseburger",
      description: "Juicy beef patty with melted cheese.",
      tags: ["Burger", "Fast Food", "Cheese"],
      time: "25 mins",
      difficulty: "Easy",
      servings: "1 Serving",
    },
    {
      id: 5,
      image:
        "https://i.pinimg.com/1200x/43/02/4b/43024bb2e9cd9395f34b85a38de5d675.jpg",
      title: "Mexican Tacos",
      description: "Crunchy tacos filled with spicy veggies.",
      tags: ["Mexican", "Tacos", "Street Food"],
      time: "20 mins",
      difficulty: "Easy",
      servings: "3 Servings",
    },
    {
      id: 6,
      image:
        "https://i.pinimg.com/1200x/5c/a6/90/5ca690cd636cec33182e2ecadc955792.jpg",
      title: "Chocolate Lava Cake",
      description: "Soft cake with molten chocolate center.",
      tags: ["Dessert", "Chocolate", "Baking"],
      time: "35 mins",
      difficulty: "Medium",
      servings: "2 Servings",
    },
    {
      id: 7,
      image:
        "https://i.pinimg.com/1200x/68/ad/f3/68adf33aeb71bba5462a666a85dd58fc.jpg",
      title: "Grilled Fish Steak",
      description: "Perfectly grilled fish with lemon butter.",
      tags: ["Seafood", "Grilled", "Healthy"],
      time: "30 mins",
      difficulty: "Medium",
      servings: "2 Servings",
    },
    {
      id: 8,
      image:
        "https://i.pinimg.com/1200x/cb/1f/3b/cb1f3bbcb17c290c19297fa6a111fb8e.jpg",
      title: "Veg Biryani",
      description: "Aromatic rice cooked with vegetables and spices.",
      tags: ["Indian", "Rice", "Veg"],
      time: "50 mins",
      difficulty: "Hard",
      servings: "5 Servings",
    },
    {
      id: 9,
      image:
        "https://i.pinimg.com/1200x/90/42/1f/90421f510cdd303a44d2b736513cffe2.jpg",
      title: "French Toast",
      description: "Crispy toast soaked in milk and eggs.",
      tags: ["Breakfast", "Sweet", "Quick"],
      time: "10 mins",
      difficulty: "Easy",
      servings: "2 Servings",
    },
    {
      id: 10,
      image:
        "https://i.pinimg.com/736x/09/be/24/09be24167434a60754de2256162d0b12.jpg",
      title: "Paneer Butter Masala",
      description: "Rich and creamy paneer curry.",
      tags: ["Indian", "Paneer", "Curry"],
      time: "40 mins",
      difficulty: "Medium",
      servings: "4 Servings",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <h2 className="head" id="head">
        DISHES ON WISHES
      </h2>
      <div className="main">
        {cardData.map((item) => {
          return (
            <Card
              img={item.image}
              title={item.title}
              description={item.description}
              tags={item.tags}
              time={item.time}
              difficulty={item.difficulty}
              servings={item.servings}
            />
          );
        })}
      </div>
    </>
  );
};

export default App;
