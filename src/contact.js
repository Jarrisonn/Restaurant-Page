export default function generateContactPage() {
    const container = document.querySelector(".container")
    const pageTitle = document.createElement("h1");

    const contactListEl = document.createElement("ul")
    const contactName = document.createElement("h2")
    const contactTitle = document.createElement("h3")
    const contactNumber = document.createElement("h3")
    const contactEmail = document.createElement("h3")


    contactName.textContent = "Josh Harrison"
    contactTitle.textContent = "Manager"
    contactNumber.textContent = "07783300571"
    contactEmail.textContent = "josh@desertshop.com"
    pageTitle.textContent = "Contact Us!";

    contactListEl.classList.add("contactmenu")


    container.appendChild(pageTitle);
    container.appendChild(contactListEl);
    contactListEl.appendChild(contactName);
    contactListEl.appendChild(contactTitle);
    contactListEl.appendChild(contactNumber);
    contactListEl.appendChild(contactEmail);
    

}