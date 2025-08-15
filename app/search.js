import { get } from "./api_requests.js";

const getProducts = await get("products");

// Creating categories

const categoriesContainer = document.getElementById("category");
const categoriesDropDown = document.querySelector(".btn-category")
let categories = [
  "Sports",
  "T-Shirts",
  "Kitchen appliances",
  "Coffeemaker",
  "Bedroom",
];

categoriesContainer.innerHTML = categories
  .map((category) => {
    return `
        <div class="category pointer">
            ${category}
        </div>
    `;
  })
  .join("");

categoriesDropDown.addEventListener("click", () => {
  document.getElementById("category-dd").classList.toggle('hide')
  document.querySelector(".ch-category").classList.toggle('up')
})


const rangeDropdown = document.querySelector(".range-selector")

rangeDropdown.addEventListener("click", () => {
  document.getElementById("price-range").classList.toggle('hide')
  document.querySelector(".ch-range").classList.toggle('up')
})

// views

const viewContainer = document.querySelector('.views')

viewContainer.addEventListener("click",(e)=> {

  const selectedView = e.target.getAttribute('data-mode')

  viewContainer.querySelector(".selected-view").classList.remove("selected-view")

  e.target.classList.add("selected-view")

  if(selectedView.trim().toLowerCase() == 'grid') {
    document.querySelector(".grid-2").classList.add("card-view")
  } else {
    document.querySelector(".grid-2").classList.remove("card-view")
  }

})


const products = await get('products','?_limit=9')
const productContainer = document.querySelector(".grid-2")

productContainer.innerHTML = products.map((product)=> {
  return `
                  <div id="${product.id}" class="card pointer flex">
                    <div class="img-container">
                        <img src="${product.image}" alt="">
                    </div>
                    <div class="description flex flex-col g-1rem">
                        <div class="row w-100 flex space-between item-center">
                            <h2 class="price">$99.50</h2>
                            <div class="liked flex justify-center item-center">
                                <img src="./images/heart.svg" alt="Image Unavailable" class="block icon">
                            </div>
                        </div>
                        <p class="title">
                            ${product.name}
                        </p>
                        <div class="detail">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eum tempora dolorum
                            vitae, natus est quos possimus incidunt blanditiis odit!
                        </div>
                        <a class="btn" href="#">Learn more</a>
                    </div>
                </div>
  `
}).join('')