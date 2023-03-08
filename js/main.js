let lightBox = document.querySelector('.box-light');
let btnAdd = document.querySelector('.btn-add');
let pName = document.querySelector('#pName');
let pPrice = document.querySelector('#pPrice');
let pImg = document.querySelector('#pImg');
let sendData = document.querySelector('.send-data');
let updateData = document.querySelector('.update-data');
let close = document.querySelector('.close');
let allData = []



//Storage data
if (localStorage.getItem('product') != null) {
    allData = JSON.parse(localStorage.getItem('product'))
    display()

}

// Add Box Light
btnAdd.addEventListener('click', function () {
    lightBox.classList.remove('d-none')

})

close.addEventListener('click', function () {
    lightBox.classList.add('d-none')
    // sendData.classList.remove('d-none')
    updateData.classList.add('d-none')
    pName.value = "";
    pPrice.value = "";
})
// send Data
sendData.addEventListener('click', function () {
    const fr = new FileReader();
    fr.readAsDataURL(pImg.files[0]);
    fr.addEventListener('load', function () {

        const url = fr.result;
        console.log(url);
        product = {
            name: pName.value,
            price: pPrice.value,
            img: url,
        }
        allData.push(product)

        localStorage.setItem('product', JSON.stringify(allData));
        display()

        lightBox.classList.add('d-none');
        pName.value = ""
        pPrice.value = ""
        pImg.value = ""
    })



})

// Display Function
function display() {
    let cartona = ``
    for (let i = 0; i < allData.length; i++) {
        cartona += `<tr>
    <td class="td-img"><img src="${allData[i].img}" alt="image" class="img-table"></td>
    <td>${allData[i].name}</td>
    <td>${allData[i].price}$</td>

    <td><button class="delete" onclick="deleteData(${i})">Delete</button>
        <button class="update" onclick="updateProduct(${i})">Update</button>
    
    </td>
</tr>`
    }
    document.querySelector('.table-data').innerHTML = cartona
}

// delete Function
function deleteData(id) {
    allData.splice(id, 1);
    localStorage.setItem('product', JSON.stringify(allData));
    display()
}

// update Product Function
let globalItem;
function updateProduct(item) {
    globalItem = item
    lightBox.classList.remove('d-none');
    pName.value = allData[item].name;
    pPrice.value = allData[item].price;

    sendData.classList.add('d-none')
    updateData.classList.remove('d-none')
}


updateData.addEventListener('click', function () {
    allData[globalItem].name = pName.value;
    allData[globalItem].price = pPrice.value;
    localStorage.setItem('product', JSON.stringify(allData));
    display()
    lightBox.classList.add('d-none');
    sendData.classList.remove('d-none')
    updateData.classList.add('d-none')
    pName.value = "";
    pPrice.value = "";
})




