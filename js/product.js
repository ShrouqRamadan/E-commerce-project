
//Storage data

if (localStorage.getItem('product') != null) {
    allData = JSON.parse(localStorage.getItem('product'))
    displayItems()
}

// Display items Function
function displayItems() {
    let cartona = ``
    for (let i = 0; i < allData.length; i++) {
        cartona += `<div class="item">
    <div class="item-img">
        <img src="${allData[i].img}" alt="" productName="${allData[i].name}" ProductPrice="${allData[i].price}">
    </div>
    <h5>${allData[i].name}</h5>
        <p>${allData[i].price}</p>
    
        </div>`
    }
    document.querySelector('.all-items').innerHTML = cartona
}

let allImg = document.querySelectorAll('.item')
let boxLight = document.querySelector('.box-light')
let boxImg = document.querySelector('.box-img')
console.log(allImg);
let cartArray = []

if (localStorage.getItem('cart') != null) {
    cartArray = JSON.parse(localStorage.getItem('cart'))
    console.log(cartArray);
}

document.querySelector('.close').addEventListener('click', function () {
    boxLight.classList.add('d-none')
    location.reload();
})
for (let x = 0; x < allImg.length; x++) {
    allImg[x].addEventListener('click', function (e) {

        let imgSrc = e.target.getAttribute('src');
        boxImg.style.backgroundImage = `url(${imgSrc})`
        if (imgSrc != undefined) {
            boxLight.classList.remove('d-none');
        }

        document.querySelector('.box-caption h3').innerHTML = e.target.getAttribute('productName')
        document.querySelector('.box-caption p').innerHTML = e.target.getAttribute('productPrice')
        var cartName = e.target.getAttribute('productName')

        for (let y = 0; y < cartArray.length; y++) {
            if (cartArray[y].name.toUpperCase().includes(cartName.toUpperCase()) == true) {
                btnCart.classList.add('d-none');
                document.querySelector('.add-cart-btn').classList.remove('d-none');

            }
            else {
                // btnCart.classList.remove('d-none');
                // document.querySelector('.add-cart-btn').classList.add('d-none');
            }

        }


    })


}





// Add to cart
let btnCart = document.querySelector('.add-cart')
btnCart.addEventListener('click', function () {
    document.querySelector('.alert').classList.remove('d-none')
    let bgBox = boxImg.style.backgroundImage;
    let boxName = document.querySelector('.box-caption h3').innerHTML;
    let boxPrice = document.querySelector('.box-caption p').innerHTML;
    productCart = {
        img: bgBox,
        name: boxName,
        price: boxPrice,
        value: 1
    }
    cartArray.push(productCart);
    localStorage.setItem('cart', JSON.stringify(cartArray));
    btnCart.classList.add('d-none');
    document.querySelector('.add-cart-btn').classList.remove('d-none');
})