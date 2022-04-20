var prodectNameInput = document.getElementById("prodectName");
var prodectPriceInput = document.getElementById("prodectPrice");
var prodectCategoryInput = document.getElementById("prodectCategory");
var prodectDescInput = document.getElementById("prodectDesc");
let addProdectt = document.querySelector(".addProdect");
let addProductBtn = document.getElementById("addProdect");
let aupdateProductBtn = document.getElementById("btnUpdate");
let getIndex = null;
var prodectContainer;
if (localStorage.getItem("prodectes") == null) {
  prodectContainer = [];
} else {
  prodectContainer = JSON.parse(localStorage.getItem("prodectes"));
  displayProdect(prodectContainer);
}
// if(addProdect.innerHTML='addProdect'){
function addProdect() {
  var prodect = {
    name: prodectNameInput.value,
    price: prodectPriceInput.value,
    category: prodectCategoryInput.value,
    desc: prodectDescInput.value,
  };
  // الكول دا علشان المينتج يتمسح من الانبوكس
  if (
    prodect.name != "" &&
    prodect.price != "" &&
    prodect.desc != "" &&
    prodect.category != ""
  ) {
    prodectContainer.push(prodect);
    localStorage.setItem("prodectes", JSON.stringify(prodectContainer));
    console.log(prodectContainer);
    // انا بكوول الفنكاشان بتاع الدزبليي هنا علشان كل مرخ يضيف منتج يتحط ف الكارتونه القيه+يدخل اللوب
    // علشان كل ما اكوول الااد يشغل الدسبليي
    displayProdect(prodectContainer);
    clearForme();
  } else {
    alert("please enter all data");
    // clearForme();
  }
}
// }
// else(btnUpdate.innerHTML='btnUpdate')
// {
// window.onload=function(){
//     document.getElementsById('bodyy').innerHTML="";

// }
//     clearForme();

// }

// علشان نجمع القيم بتاعت اللي هيتجمع من اللوب
function displayProdect(prodectLiest) {
  var cartoona = ``;
  for (var i = 0; i < prodectLiest.length; i++) {
    cartoona += `
    <tr id='' class="total anmationn-${i} text-center">
    
                    <td>${i + 1}</td>
                    <td>${prodectLiest[i].name}</td>
                    <td>${prodectLiest[i].price}</td>
                    <td>${prodectLiest[i].category}</td>
                    <td>${prodectLiest[i].desc}</td>
                    <td><button onclick="updateShow(${i})" class="btn  btn-outline-warning bagg">update</button></td>
                    <td><button onclick="deleteProdect(${i})" class="btn  btn-outline-danger bagg2">delat</button></td>
                </tr>`;
  }

  document.getElementById("tabelRowe").innerHTML = cartoona;
}

function deleteProdect(prodectIndex) {
  prodectContainer.splice(prodectIndex, 1);
  localStorage.setItem("prodectes", JSON.stringify(prodectContainer));
  displayProdect(prodectContainer);
}
function clearForme() {
  prodectNameInput.value = "";
  prodectPriceInput.value = "";
  prodectCategoryInput.value = "";
  prodectDescInput.value = "";
}
function updateShow(index) {
  getIndex = index;
  prodectNameInput.value = prodectContainer[index].name;
  prodectPriceInput.value = prodectContainer[index].price;
  prodectCategoryInput.value = prodectContainer[index].category;
  prodectDescInput.value = prodectContainer[index].desc;
  aupdateProductBtn.classList.remove("d-none");
  addProductBtn.classList.add("d-none");
}
function update() {
  prodectContainer[getIndex].name = prodectNameInput.value;
  prodectContainer[getIndex].price = prodectPriceInput.value;
  prodectContainer[getIndex].category = prodectCategoryInput.value;
  prodectContainer[getIndex].desc = prodectDescInput.value;
  localStorage.setItem("prodectes", JSON.stringify(prodectContainer));
  displayProdect(prodectContainer);
  clearForme()
}

// valtiton name
let alertt1 = document.getElementById("alertt1");
let spancolor = document.getElementById("spancolor");

prodectNameInput.addEventListener("keydown", function () {
  let nameRejex = /^[A-Z][a-z]{2,8}$/;
  // console.log(nameRejex.test())
  if (nameRejex.test(prodectNameInput.value) == true) {
    addProdectt.removeAttribute("disabled");
    prodectNameInput.classList.add("is-valid");
    prodectNameInput.classList.remove("is-invalid");
    spancolor.classList.remove("text-danger");
    spancolor.classList.add("text-success");
    alertt1.classList.add("d-none");
  } else {
    addProdectt.disabled = "true";
    prodectNameInput.classList.add("is-invalid");
    prodectNameInput.classList.remove("is-valid");
    spancolor.classList.remove("text-success");
    spancolor.classList.add("text-danger");
    alertt1.classList.remove("d-none");
  }
});
// valtiton price
let alertt2 = document.getElementById("alertt2");
let spancolor2 = document.getElementById("spancolor2");
prodectPriceInput.addEventListener("keyup", function () {
  let priceRejex = /^[0-9]{1,4}$/;
  if (priceRejex.test(prodectPriceInput.value) == true) {
    addProdectt.removeAttribute("disabled");
    prodectPriceInput.classList.add("is-valid");
    prodectPriceInput.classList.remove("is-invalid");
    spancolor2.classList.remove("text-danger");
    spancolor2.classList.add("text-success");
    alertt2.classList.add("d-none");
  } else {
    addProdectt.disabled = "true";
    prodectPriceInput.classList.add("is-invalid");
    prodectPriceInput.classList.remove("is-valid");
    spancolor2.classList.remove("text-info");
    spancolor2.classList.add("text-danger");
    alertt2.classList.remove("d-none");
  }
});

let spancolor3 = document.getElementById("spancolor3");
prodectCategoryInput.addEventListener("keyup", function () {
  let catogreRejex = /^[A-Za-z0-9]{1,10}$/;
  if (catogreRejex.test(prodectCategoryInput.value) == true) {
    addProdectt.removeAttribute("disabled");
    prodectCategoryInput.classList.add("is-valid");
    prodectCategoryInput.classList.remove("is-invalid");
    spancolor3.classList.remove("text-danger");
    spancolor3.classList.add("text-success");
  } else {
    addProdectt.disabled = "true";
    prodectCategoryInput.classList.add("is-invalid");
    prodectCategoryInput.classList.remove("is-valid");
    spancolor3.classList.remove("text-success");
    spancolor3.classList.add("text-danger");
  }
});
let spancolor4 = document.getElementById("spancolor4");
prodectDescInput.addEventListener("keyup", function () {
  let desRejex = /^[A-Za-z0-9 .]{1,100}$/;
  if (desRejex.test(prodectDescInput.value) == true) {
    addProdectt.removeAttribute("disabled");
    prodectDescInput.classList.add("is-valid");
    prodectDescInput.classList.remove("is-invalid");
    spancolor4.classList.remove("text-danger");
    spancolor4.classList.add("text-success");
  } else {
    addProdectt.disabled = "true";
    prodectDescInput.classList.add("is-invalid");
    prodectDescInput.classList.remove("is-valid");
    spancolor4.classList.remove("text-success");
    spancolor4.classList.add("text-danger");
  }
});
