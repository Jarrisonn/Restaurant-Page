import Cake from './icons/cakeStrawb.jpg'
export default function generateMenuPage() {
    const container = document.querySelector(".container")
    const h1 = document.createElement("h1");
    h1.textContent = "Dessert Menu";
    const myCake = document.createElement("img");
    myCake.src = Cake
    
    container.appendChild(myCake)  
    

    console.log(container);

    container.appendChild(h1);
    
};