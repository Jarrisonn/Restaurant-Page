import Cake from "./icons/colourcake.svg";
import Brownie from "./icons/brownie.svg";
import Cheesecake from "./icons/cheesecake.svg";
import Pancake from "./icons/pancake.svg";
import Cupcake from "./icons/cupcake.svg";

export default function generateMenuPage() {
  const container = document.querySelector(".container");
  const menu = document.createElement("ul");
  const h1 = document.createElement("h1");
  const menuItem1El = document.createElement("li");
  const menuItem2El = document.createElement("li");
  const menuItem3El = document.createElement("li");
  const menuItem4El = document.createElement("li");
  const menuItem5El = document.createElement("li");

  const menuItem1Title = document.createElement("h2");
  const menuItem2Title = document.createElement("h2");
  const menuItem3Title = document.createElement("h2");
  const menuItem4Title = document.createElement("h2");
  const menuItem5Title = document.createElement("h2");

  const menuItem1Text = document.createElement("p");
  const menuItem2Text = document.createElement("p");
  const menuItem3Text = document.createElement("p");
  const menuItem4Text = document.createElement("p");
  const menuItem5Text = document.createElement("p");

  menuItem1Text.textContent = "All our desserts are freshly baked in store using our finest ingredients ";
  menuItem2Text.textContent =
    "All our desserts are freshly baked in store using our finest ingredients";
  menuItem3Text.textContent = 'All our desserts are freshly baked in store using our finest ingredients';
  menuItem4Text.textContent = "All our desserts are freshly baked in store using our finest ingredients";
  menuItem5Text.textContent = "All our desserts are freshly baked in store using our finest ingredients";

  const cakeImg = document.createElement("img");
  const brownieImg = document.createElement("img");
  const cheesecakeImg = document.createElement("img");
  const pancakeImg = document.createElement("img");
  const cupcakeImg = document.createElement("img");

  cakeImg.classList.add("cake");
  brownieImg.classList.add("cake");
  cheesecakeImg.classList.add("cake");
  pancakeImg.classList.add("cake");
  cupcakeImg.classList.add("cake");

  cakeImg.src = Cake;
  brownieImg.src = Brownie;
  cheesecakeImg.src = Cheesecake;
  pancakeImg.src = Pancake;
  cupcakeImg.src = Cupcake;

  h1.textContent = "Dessert Menu";
  menuItem1Title.textContent = "Chocolate Cake";
  menuItem2Title.textContent = "Brownies";
  menuItem3Title.textContent = "Cheesecake";
  menuItem4Title.textContent = "Pancakes";
  menuItem5Title.textContent = "Cupcake";

  menuItem1El.appendChild(menuItem1Title);
  menuItem2El.appendChild(menuItem2Title);
  menuItem3El.appendChild(menuItem3Title);
  menuItem4El.appendChild(menuItem4Title);
  menuItem5El.appendChild(menuItem5Title);

  menuItem1El.appendChild(menuItem1Text);
  menuItem2El.appendChild(menuItem2Text);
  menuItem3El.appendChild(menuItem3Text);
  menuItem4El.appendChild(menuItem4Text);
  menuItem5El.appendChild(menuItem5Text);

  menuItem1El.appendChild(cakeImg);
  menuItem2El.appendChild(brownieImg);
  menuItem3El.appendChild(cheesecakeImg);
  menuItem4El.appendChild(pancakeImg);
  menuItem5El.appendChild(cupcakeImg);

  menu.classList.add("dessert-menu");

  container.appendChild(menu);
  menu.appendChild(h1);
  menu.appendChild(menuItem1El);
  menu.appendChild(menuItem2El);
  menu.appendChild(menuItem3El);
  menu.appendChild(menuItem4El);
  menu.appendChild(menuItem5El);
}
