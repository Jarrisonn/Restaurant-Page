
export default function generateHomePage() {
    const container = document.querySelector(".container")
    const h1 = document.createElement("h1");
    h1.textContent = "Josh's Desserts";
    const h2 = document.createElement("h2");
    const h2para2 = document.createElement("h2");
    
   
    

    h2.textContent = "Here at Josh's desserts you will find the sweetest and most tastiest desserts in all the land!"
    h2para2.textContent = "We make all of our desserts fresh on premises with locally sourced organic ingredients."
    container.appendChild(h1);
    container.appendChild(h2);
    container.appendChild(h2para2);
   
    
};