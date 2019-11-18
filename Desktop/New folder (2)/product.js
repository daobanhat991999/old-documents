function displayProduct(array) {
    let s = "";
    let itemcount = Math.ceil(array.length/3);
    for(let i=0; i<itemcount; i++){
        s += `<div class="row">`
        for(let j=i*3; j < i*3+3; j++){
            if (j < array.length) {
                const element = array[j];
            s += `<div class="col-sm-4" style="padding: 10px">
                    <div class="card" style="rem">
                        <img class="card-img-top" src="${element.img}" alt="${element.name}" style="width:100%; height:15rem">
                        <div class="card-body">
                            <h4 class="card-title">${element.name}</h4>
                            <p class="cost">${element.price} Đ</p>
                            <a href="#" class="btn btn-primary">mua ngay</a>
                        </div>
                    </div>
                </div>`;
                console.log(element);
                
        }
    }
        s += "</div>"
    } 
    document.getElementById("product").innerHTML = s;
    console.log(data);
    
}
displayProduct(JSON.parse(localStorage.getItem("data")));
// function updateThem (array) {
//     data = JSON.parse(localStorage.getItem("test"));
//    displayProduct(data);
//     //console.log(test2);
    
// }

