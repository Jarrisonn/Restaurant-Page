import generateHomePage from "./home.js";
import generateContactPage from "./contact.js";
import generateMenuPage from "./menu.js";
import "./style.css";
import cake from './icons/cakeStrawb.jpg'




generateContactPage();
generateMenuPage();



const container = document.querySelector(".container");
const buttonsDivEl = document.createElement("div")
const homeBtn = document.createElement("button");
const contactBtn = document.createElement("button");
const menuBtn = document.createElement("button");



container.innerHTML = "";
generateHomePage();

homeBtn.classList.add("selected", "button", "home");
contactBtn.classList.add("button", "contact");
menuBtn.classList.add("button", "menu");
homeBtn.textContent = "Home"
contactBtn.textContent = "Contact"
menuBtn.textContent = "Menu"

const buttons = [homeBtn, contactBtn, menuBtn];

class Page {
    
    constructor(page, isShowing){
        this.page = page
        this.isShowing = isShowing
    }
    
    showPage(page){
        page();
    }

}


let homePage = new Page(generateHomePage,true);
let contactPage = new Page(generateContactPage,false);
let menuPage = new Page(generateMenuPage,false);

buttons.forEach(button => {
    buttonsDivEl.appendChild(button)
    button.addEventListener("click", () => {
        
        if(button.classList.contains("home")){
            container.textContent = "";
            homePage.isShowing = true;
            contactPage.isShowing = false;
            menuPage.isShowing = false;
            if(homePage.isShowing){
                menuBtn.classList.remove("selected")
                homeBtn.classList.add("selected")
                contactBtn.classList.remove("selected")
            }
            homePage.showPage(generateHomePage)
        }
        if(button.classList.contains("menu")){
            container.textContent = "";
            homePage.isShowing = false;
            contactPage.isShowing = false;
            menuPage.isShowing = true;
            
            if(menuPage.isShowing){
                menuBtn.classList.add("selected")
                homeBtn.classList.remove("selected")
                contactBtn.classList.remove("selected")
            }
            menuPage.showPage(generateMenuPage)
        }
        if(button.classList.contains("contact")){
            container.textContent = "";
            homePage.isShowing = false;
            contactPage.isShowing = true;
            menuPage.isShowing = false;
            if(contactPage.isShowing){
                menuBtn.classList.remove("selected")
                homeBtn.classList.remove("selected")
                contactBtn.classList.add("selected")
            }
            contactPage.showPage(generateContactPage)
        }
        
    })
})

        
    
let cakeImg = new Image();
cakeImg.src = cake;
cakeImg.classList.add("cake")
container.appendChild(cakeImg)


const pages = [homePage, contactPage, menuPage]
pages.forEach(page => console.log(page.isShowing))
buttonsDivEl.classList.add("buttondiv")
document.body.appendChild(buttonsDivEl)

