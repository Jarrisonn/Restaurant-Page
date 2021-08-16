import Cake from './icons/cakeStrawb.jpg';
export default function generateMenuPage() {
    const container = document.querySelector(".container")
    const h1 = document.createElement("h1");
    h1.textContent = "Dessert Menu";
    const myCake = new Image();
    myCake.src = Cake
    
    container.appendChild(myCake)  
    myCake.classList.add("cake")  

    console.log(container);

    container.appendChild(h1);
    
};