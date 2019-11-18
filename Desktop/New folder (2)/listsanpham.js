let listSanPham = [
    // {
    //     "img": "./images/product_images/americano.jpg",
    //     "name": "Americano",
    //     "price": "55000",
    //     "type": ["món d?c bi?t","espresso"],
    //     "countTotal":0,
    //     "issale":0
    // },
    // {
    //     "img": "./images/product_images/caramel_macchiato.jpg",
    //     "name": "caramel macchiato",
    //     "price": "65000",
    //     "type": ["món d?c bi?t","espresso"],
    //     "countTotal":0,
    //     "issale":0
    // },
    // {
    //     "img": "./images/product_images/espresso.jpg",
    //     "name": "espresso",
    //     "price": "55000",
    //     "type": ["món d?c bi?t","espresso"],
    //     "countTotal":0,
    //     "issale":0
    // },
    // {
    //     "img": "./images/product_images/milk_coffee.jpg",
    //     "name": "nâu dá",
    //     "price": "30000",
    //     "type": ["món d?c bi?t","cà phê phin"],
    //     "countTotal":0,
    //     "issale":0
    // },
    // {
    //     "img": "./images/product_images/tra_phuc_bon_tu.png",
    //     "name": "trà phúc b?n t?",
    //     "price": "65000",
    //     "type": ["món d?c bi?t","trà"],
    //     "countTotal":0,
    //     "issale":0
    // },
    // {
    //     "img": "./images/product_images/tra_xoai_macchiato.jpg",
    //     "name": "trà xoài macchiato",
    //     "price": "65000",
    //     "type": ["món d?c bi?t","trà"],
    //     "countTotal":0,
    //     "issale":0
    // },
    // {
    //     "img": "./images/product_images/americano.jpg",
    //     "name": "Americano",
    //     "price": "55000",
    //     "type": "món d?c bi?t",
    //     "countTotal":0,
    //     "issale":0
    // },
    {
        "img": "./images/product_images/caramel_macchiato.jpg",
        "name": "Caramel macchiato",
        "price": 65000,
        "type": "espresso",
        "countTotal":0,
        "issale":0
    },
    {
        "img": "./images/product_images/espresso.jpg",
        "name": "Espresso",
        "price": 55000,
        "type": "espresso",
        "countTotal":0,
        "issale":0
    },
    {
        "img": "./images/coffee_bean/coffee_bean_metal.JPG",
        "name": "Metal coffee bean",
        "price": 300000,
        "type": "coffeeBean",
        "countTotal":0,
        "issale":0
    },
    {
        "img": "./images/coffee_bean/coffee_bean_wood.JPG",
        "name": "Wood coffee bean",
        "price": 300000,
        "type": "coffeeBean",
        "countTotal":0,
        "issale":0
    },
    {
        "img": "./images/coffee_bean/coffee_bean_water.JPG",
        "name": "Water coffee bean",
        "price": 300000,
        "type": "coffeeBean",
        "countTotal":0,
        "issale":0
    },
    {
        "img": "./images/coffee_bean/coffee_bean_fire.JPG",
        "name": "Fire coffee bean",
        "price": 300000,
        "type": "coffeeBean",
        "countTotal":0,
        "issale":0
    },
    {
        "img": "./images/coffee_bean/coffee_bean_earth.JPG",
        "name": "Earth coffee bean",
        "price": 300000,
        "type": "coffeeBean",
        "countTotal":0,
        "issale":0
    },
    {
        "img": "./images/coffee_bean/coffee_bean_for_test.JPG",
        "name": "Coffee bean for test",
        "price": 20000,
        "type": "coffeeBean",
        "countTotal":0,
        "issale":0
    },
    {
        "img": "./images/product_images/den.jpg",
        "name": "Cà phê đen",
        "price": 29000,
        "type": "cà phê phin",
        "countTotal":0,
        "issale":0
    },
    {
        "img": "./images/product_images/milk_coffee.jpg",
        "name": "Cà phê nâu",
        "price": 32000,
        "type": "cà phê phin",
        "countTotal":0,
        "issale":0
    },
    {
        "img": "./images/product_images/bac_siu.jpg",
        "name": "Bạc siu",
        "price": 32000,
        "type": "cà phê phin",
        "countTotal":0,
        "issale":0
    },
    {
        "img": "./images/product_images/tra_phuc_bon_tu.png",
        "name": "Trà phúc bồn tử",
        "price": 60000,
        "type": "trà",
        "countTotal":0,
        "issale":0
    },
    {
        "img": "./images/product_images/tra_xoai_macchiato.jpg",
        "name": "Trà xoài macchiato",
        "price": 65000,
        "type": "trà",
        "countTotal":0,
        "issale":0
    },
    {
        "img": "./images/product_images/tra_cherry_macchiato.jpg",
        "name": "Trà cherry macchiato",
        "price": 65000,
        "type": "trà",
        "countTotal":0,
        "issale":0
    },
]

localStorage.setItem("listSanPhamLocalStory",JSON.stringify(listSanPham));


//ham hien thi san pham
function displaySanPham(array,groupName,id) {
    var group = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
    if (element.type === groupName){
        group.push( element);
    }
    }
console.log(group);


    var s = "";
    let itemcount = Math.round(group.length/3);
    for(let i=0; i<itemcount; i++){
        s += `<div class="row">`
        for(let j=i*3; j < i*3+3; j++)
            if(j < group.length){
            const element1 = group[j];
            s += `<div class="col-sm-4" style="padding: 10px">
                    <div class="card" style="rem">
                        <img class="card-img-top" id="img_${j}" src="${element1.img}" alt="${element1.name}" style="width:100%; height:15rem">
                        <div class="card-body">
                            <h4  class="card-title" id="name_${j}">${element1.name}</h4>
                            <p class="cost" price_${j}">${element1.price}đ</p>
                            <button type="button" class="btn btn-primary"  data-itemId="${element1.name}" id="${j}" onclick= "amountHandler(event)">mua ngay</button>
                          
                            
                        </div>
                    </div>
                </div>`
        }
        s += "</div>"
    } 
   document.getElementById(id).innerHTML = s;
}
// //ham lay tin nguoi dung
// function getinf(){
//     let name = document.getElementById(ho_va_ten);
//     let sdt = document.getElementById(so_dien_thoai);
//     let diachi = document.getElementById(dia_chi);
//     let ghichu = document.getElementById(ghi_chu);
//     let frame={
//         "name": name,
//         "sdt": sdt,
//         "diachi": diachi,
//         "ghichu": ghichu
//     },
//     array =+ array.push(frame)
// }

displaySanPham(listSanPham,'espresso',"espresso");
displaySanPham(listSanPham,'cà phê phin',"filter_coffee");
displaySanPham(listSanPham,'trà',"tra_macchiato");
displaySanPham(listSanPham,'coffeeBean',"coffee_bean");

// function amountHandler (e) {

//         // let id = e.target.id; 
//         // alert(id)
//     //     let name = e.target.dataset.itemid 
//     //     let getadd = JSON.parse(localStorage.getItem('add'));
//     // if(getadd.name === san_pham[id.name])  {    
//         //  var count1 = count + 1;
//     // }
//         // alert(e.target.dataset.itemid)     
//         // console.log(san_pham[id]);
        
//         let namesp=e.target.dataset.itemid;

//         console.log(namesp);
        
            
//         listSanPhamSauLocal= JSON.parse(localStorage.getItem("listSanPhamLocalStory"));

//         // for (let i = 0; i < listSanPhamSauLocal.length; i++) {
//         //     const element = san_pham[i];  
//         //     for (let j = 0; j < element.length; j++) {
//         //         const element1 = element.name[j];   
                
//         //         console.log(element1);
                
//         //                 if(namesp === element1){
//         //             count = count1 +1  ;
//         //         }     
//         //         else {
//         //             count = count1 ;
//         //         }
//         //     }

//         add.push(san_pham[e.target.id]);
    
//         localStorage.setItem("add",JSON.stringify(add));
        
//         document.getElementById('amount').innerHTML= count1;
        

//         }}

var listSanPhamSauLocal = JSON.parse(localStorage.getItem("listSanPhamLocalStory"));
console.log(listSanPhamSauLocal);

var hangDat = [];
localStorage.setItem('hangDatLocalStorage',JSON.stringify(hangDat));
var count = 0;

function amountHandler(e){
    hangDat = JSON.parse(localStorage.getItem('hangDatLocalStorage'));        
    let nameHangDat=e.target.dataset.itemid;
    hangDat.push(nameHangDat);
    localStorage.setItem("hangDatLocalStorage",JSON.stringify(hangDat));
    

    hangDat = JSON.parse(localStorage.getItem('hangDatLocalStorage'));      
    count = hangDat.length;

    document.getElementById('amount').innerHTML = count;
    localStorage.setItem("hangDatLocalStorage",JSON.stringify(hangDat));

    alert("Thêm sản phẩm thành công")

}



// listSanPhamSauLocal = JSON.parse(localStorage.getItem("listSanPhamLocalStory"));
// hangDat = JSON.parse(localStorage.getItem('hangDatLocalStorage'));  
// console.log(hangDat);
// let nameSanPham =[];
// let abc = nameSanPham.push(hangDat[0]);
// console.log(abc);

// for (let i = 0; i < hangDat.length; i++) {
// if(nameSanPham != hangDat[i]){
//     nameSanPham.push(hangDat[i]);
//     console.log(nameSanPham);
// }    
// }
// let id=[] ;
// for (let i = 0; i < nameSanPham.length; i++) {
//     id.push(listSanPhamSauLocal.indexOf(nameSanPham[i]));
    
// }
// localStorage.setItem("id",id)
// console.log(id);







