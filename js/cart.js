
var cartArray = []
if (localStorage.getItem('cart') != null) {
    cartArray = JSON.parse(localStorage.getItem('cart'))
    displayItems()
}
function displayItems() {
    var cartona = ``
    for (let i = 0; i < cartArray.length; i++) {
        var imgArray = cartArray[i].img.split("").slice('5', '1000000').join("");

        cartona += `
        <tr>
    <td class="table-img"><img src="${imgArray}" alt="image" class="img-table"></td>
    <td>${cartArray[i].name}</td>
    <td>${cartArray[i].price}</td>
    <td>
    <button class="negative btn" onclick="nagative(${i})">-</button>
        <input type="number" value="${cartArray[i].value}">
        <button class="pluse btn" onclick="pluse(${i})" >+</button></td>
        </td>
                    
    <td><button class="delete" onclick="deleteData(${i})">Delete</button>
    <td>${Number(cartArray[i].value) * Number(cartArray[i].price)}</td>

    </td>
</tr>`
    }

    document.querySelector('tbody').innerHTML = cartona;
}
function pluse(id) {


    var total = cartArray[id].value++;
    localStorage.setItem('cart', JSON.stringify(cartArray));
    displayItems()
}
function nagative(id) {
    if (cartArray[id].value == 0) {
        cartArray[id].value = 2
    }
    var total = cartArray[id].value--;
    localStorage.setItem('cart', JSON.stringify(cartArray));
    displayItems()
}
// delete Function
function deleteData(id) {
    cartArray.splice(id, 1);
    localStorage.setItem('cart', JSON.stringify(cartArray));
    displayItems()
}
document.querySelector('.cart p').innerHTML = cartArray.length + 'item';