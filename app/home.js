import { get } from './api_requests.js'


// Show categories in Category Column

const categories = await get('categories')
const categoriesContainer = document.querySelector(".categories-column")
const bannerTitle = document.getElementById("category")

categoriesContainer.innerHTML = categories.map((category) => {
    return `
        <div class="category flex item-center pointer ${(category == "Automobiles") ? 'selected-category' : ''}">
            ${category}
        </div>   
    `
}).join('')


// Changing Content on Banner

categoriesContainer.addEventListener("click", (e) => {

    categoriesContainer.querySelector('.selected-category').classList.remove('selected-category')

    e.target.classList.add('selected-category')

    bannerTitle.innerText = e.target.innerText
})


// Deals Section

const deals = await get('deals')
const dealContainer = document.getElementById("dealsContainer")

dealContainer.innerHTML = deals.map((deal) => {
    return `

        <div id="${deal.id}" class="card pointer">
            <img src="${deal.src}" alt="Image Unavailable" class="product-image ">
            <div class="details flex flex-col space-between item-center g-1rem">
                <p class="title">${deal.title}</p>
                <span class="discount text-center"> -${deal.offer}% </span>
            </div>
        </div>

    `
}).join('')


// Home and outdoor section

const home_and_outdoor = await get('home_and_outdoor')
const home_and_outdoor_Container = document.getElementById("home-outdoor-container")

home_and_outdoor_Container.innerHTML = home_and_outdoor.map((item)=> {
    return `
    <div id="${item.id}" class="card pointer">
        <div class="details">
            <h1>${item.name}</h1>
            <p class="exporter">
                From <br> <span class="country">USD 19</span>
            </p>
        </div>
        <div class="img">
            <img src="${item.src}" alt="Image Unavailable" class="h-100 w-100 block">
        </div>
    </div>
    `
}).join('')


// Electronics Section

const electronics = await get('electronics')
const electronics_container = document.getElementById("electronics-section")

electronics_container.innerHTML = electronics.map((item)=> {
    return `
    <div id="${item.id}" class="card pointer">
        <div class="details">
            <h1>${item.title}</h1>
            <p class="exporter">
                From <br> <span class="country">USD 19</span>
            </p>
        </div>
        <div class="img">
            <img src="${item.src}" alt="Image Unavailable" class="h-100 w-100 block">
        </div>
    </div>
    `
}).join('')


// Recommended Items

const recommendedItems = await get('products','?_limit=10')
const recommendedItemsContainer = document.getElementById("recommended-container")

recommendedItemsContainer.innerHTML = recommendedItems.map((item)=> {
    return `
    <div id="${item.id}" class="card pointer">
        <div class="img-conatiner">
            <img src="${item.image}" alt="Image Unavailable">
        </div>
        <div class="description">
            <h1 class="price">$10.30</h1>
            <p class="title">${item.name}</p>
        </div>
    </div>
    `
}).join('')