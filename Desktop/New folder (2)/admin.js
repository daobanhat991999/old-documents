// function displayProduct(array) {
//     let s = "";
//     let itemcount = Math.ceil(array.length/3);
//     for(let i=0; i<itemcount; i++){
//         s += `<div class="row">`
//         for(let j=i*3; j < i*3+3; j++){
//             if (j < array.length) {
//                 const element = array[j];
//             s += `<div class="col-sm-4" style="padding: 10px">
//                     <div class="card" style="rem">
//                         <img class="card-img-top" src="${element.img}" alt="${element.name}" style="width:100%; height:15rem">
//                         <div class="card-body">
//                             <h4 class="card-title">${element.name}</h4>
//                             <p class="cost">${element.price} Đ</p>
//                             <a href="#" class="btn btn-primary">mua ngay</a>
//                         </div>
//                     </div>
//                 </div>`
//         }
//     }
//         s += "</div>"
//     } 
//     document.getElementById("product").innerHTML = s;
//     console.log(data);
    
// }
// //displayProduct(data);
function listProduct(array) {
    //data = JSON.parse(localStorage.getItem("data"));
    let s = "";
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        s+= `<tr>
        <th scope="row">${i+1}</th>
        <td>${element.name}</td>
        <td>${element.price}</td>
        <td>
            <button type="button" class="btn btn-warning" data-toggle="modal" data-target="#Edit">
                Edit
            </button>
            <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#Delete">
                Delete
            </button>
        </td>
    </tr>
        `
    }
    document.getElementById("list-product").innerHTML = s;
    console.log(data);
    
}
listProduct(JSON.parse(localStorage.getItem("data")));

function addToLocalStorage(array) {
    if(typeof(Storage) !== "undefined") {
        localStorage.setItem("data", JSON.stringify(array));
    }
    else {
        alert("browser doesn't support local storage!");
    }
}

function addProduct() {
    data = JSON.parse(localStorage.getItem("data"));
    let img = document.getElementById("exampleInputEmail1").value;
    let name = document.getElementById("exampleInputPassword1").value;
    let price = document.getElementById("exampleInputPassword2").value;
    data.push({img,name,price});
    addToLocalStorage(data);
    alert('Update success, please go back and reload the web to see the update');
    $('#Add_new').modal('hide');
    listProduct(data);
}

// function updateThem (array) {
//     data = JSON.parse(localStorage.getItem("test"));
//    displayProduct(data);
//     //console.log(test2);
    
// }
