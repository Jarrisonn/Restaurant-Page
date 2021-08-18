import Cake from './icons/colourcake.svg'
import Brownie from './icons/brownie.svg';
import Cheesecake from './icons/cheesecake.svg'
import Pancake from './icons/pancake.svg'
import Cupcake from './icons/cupcake.svg'

export default function generateMenuPage() {
    const container = document.querySelector(".container");
    const menu = document.createElement("ul");
    const h1 = document.createElement("h1");
    const menuItem1El = document.createElement("div")
    const menuItem2El = document.createElement("div")
    const menuItem3El = document.createElement("div")
    const menuItem4El = document.createElement("div")
    const menuItem5El = document.createElement("div")

    const cakeImg = document.createElement("img");
    const brownieImg = document.createElement("img");
    const cheesecakeImg = document.createElement("img");
    const pancakeImg = document.createElement("img");
    const cupcakeImg = document.createElement("img");

    

    cakeImg.classList.add("cake")
    brownieImg.classList.add("cake")
    cheesecakeImg.classList.add("cake")
    pancakeImg.classList.add("cake")
    cupcakeImg.classList.add("cake")
    
    cakeImg.src = Cake;
    brownieImg.src = Brownie;
    cheesecakeImg.src = Cheesecake;
    pancakeImg.src = Pancake;
    cupcakeImg.src = Cupcake;

    h1.textContent = "Dessert Menu";
    menuItem1El.textContent = "Chocolate Cake"
    menuItem2El.textContent = "Brownies"
    menuItem3El.textContent = "Cheesecake"
    menuItem4El.textContent = "Pancakes"
    menuItem5El.textContent = "Cupcake"

    
    menuItem1El.appendChild(cakeImg);
    menuItem2El.appendChild(brownieImg);
    menuItem3El.appendChild(cheesecakeImg);
    menuItem4El.appendChild(pancakeImg);
    menuItem5El.appendChild(cupcakeImg);
    


    
    menu.classList.add("dessert-menu");
    
    
    
    
    

    

    
    container.appendChild(menu);
    menu.appendChild(h1)
    menu.appendChild(menuItem1El)
    menu.appendChild(menuItem2El)
    menu.appendChild(menuItem3El)
    menu.appendChild(menuItem4El)
    menu.appendChild(menuItem5El)

};