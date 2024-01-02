import ProductData from "./meesho/data.js"

const category = [...new Set(ProductData.map(el => el.category))]
console.log(category)


let filterData = []

document.addEventListener("click", (e) => {


    const bluetoothEl = document.getElementById("bluetooth").checked
    const ChainsEl = document.getElementById("chains").checked
    const KurtasEl = document.getElementById("kurtas").checked
    const AccessoriesEl = document.getElementById("accessories").checked
    const sareesEl = document.getElementById("sarees").checked
    const watchEl = document.getElementById("watch").checked
    const kidsEl = document.getElementById("kids").checked
   

    console.log(bluetoothEl)
    filterData = ProductData.filter(el => (
        bluetoothEl && el.category == "bluetooth Headset" ||
        ChainsEl && el.category == "Men Chains" ||
        KurtasEl && el.category == "Kurtas" ||
        AccessoriesEl && el.category == "Mobile Accessories" ||
        sareesEl && el.category == "sarees" ||
        kidsEl && el.category == "kids"||
        watchEl && el.category == "watch"
       

    ))

    renderProductData()


})

function renderProductData() {
    let filterDataHTML = "";

    if (filterData[0]) {
        filterData.forEach(el => {
            filterDataHTML += `
            <div class="productCard" onclick="ClickProduct(${el.id})">
                <div class="product_image">
                    <img src="./meesho/productImage/${el.img}"/>
                </div>
                <h3 class="product_name">${el.name}</h3>
                <p class="product_price">
                    <span>₹</span>
                    <span>${el.price}</span>
                </p>
             </div>
            `
        })
    }
    else {
        ProductData.forEach(el => {
            filterDataHTML += `
            <div class="productCard" onclick="ClickProduct(${el.id})">
                <div class="product_image">
                    <img src="./meesho/productImage/${el.img}"/>
                </div>
                <h3 class="product_name">${el.name}</h3>
                <p class="product_price">
                    <span>₹</span>
                    <span>${el.price}</span>
                </p>
             </div>
            `
        })
    }

    document.getElementById("product_category_displayId").innerHTML = filterDataHTML
}
renderProductData()



function ClickProduct(id) {
    localStorage.setItem("productId", JSON.stringify(id))
    // window.location("./page/product.html")

    alert("hii")
}

