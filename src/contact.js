export default function generateContactPage() {
    const container = document.querySelector(".container")
    const h1 = document.createElement("h1");
    h1.textContent = "Contact Us!";
    console.log(container);

    container.appendChild(h1);
}