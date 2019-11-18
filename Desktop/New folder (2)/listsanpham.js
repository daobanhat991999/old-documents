let listSanPham = [
    // {
    //     "img": "./images/product_images/americano.jpg",
    //     "name": "Americano",
    //     "price": "55000",
    //     "type": ["món đặc biệt","espresso"],
    //     "countTotal":0,
    //     "issale":0
    // },
    // {
    //     "img": "./images/product_images/caramel_macchiato.jpg",
    //     "name": "caramel macchiato",
    //     "price": "65000",
    //     "type": ["món đặc biệt","espresso"],
    //     "countTotal":0,
    //     "issale":0
    // },
    // {
    //     "img": "./images/product_images/espresso.jpg",
    //     "name": "espresso",
    //     "price": "55000",
    //     "type": ["món đặc biệt","espresso"],
    //     "countTotal":0,
    //     "issale":0
    // },
    // {
    //     "img": "./images/product_images/milk_coffee.jpg",
    //     "name": "nâu đá",
    //     "price": "30000",
    //     "type": ["món đặc biệt","cà phê phin"],
    //     "countTotal":0,
    //     "issale":0
    // },
    // {
    //     "img": "./images/product_images/tra_phuc_bon_tu.png",
    //     "name": "trà phúc bồn tử",
    //     "price": "65000",
    //     "type": ["món đặc biệt","trà"],
    //     "countTotal":0,
    //     "issale":0
    // },
    // {
    //     "img": "./images/product_images/tra_xoai_macchiato.jpg",
    //     "name": "trà xoài macchiato",
    //     "price": "65000",
    //     "type": ["món đặc biệt","trà"],
    //     "countTotal":0,
    //     "issale":0
    // },
    // {
    //     "img": "./images/product_images/americano.jpg",
    //     "name": "Americano",
    //     "price": "55000",
    //     "type": "món đặc biệt",
    //     "countTotal":0,
    //     "issale":0
    // },
    {
        "img": "./images/product_images/caramel_macchiato.jpg",
        "name": "caramel macchiato",
        "price": "65000",
        "type": "espresso",
        "countTotal":0,
        "issale":0
    },
    {
        "img": "./images/product_images/espresso.jpg",
        "name": "espresso",
        "price": "55000",
        "type": "espresso",
        "countTotal":0,
        "issale":0
    },
    {
        "img": "./images/coffee_bean/coffee_bean_metal.JPG",
        "name": "metal coffee bean",
        "price": "300000",
        "type": "coffeeBean",
        "countTotal":0,
        "issale":0
    },
    {
        "img": "./images/coffee_bean/coffee_bean_wood.JPG",
        "name": "wood coffee bean",
        "price": "300000",
        "type": "coffeeBean",
        "countTotal":0,
        "issale":0
    },
    {
        "img": "./images/coffee_bean/coffee_bean_water.JPG",
        "name": "water coffee bean",
        "price": "300000",
        "type": "coffeeBean",
        "countTotal":0,
        "issale":0
    },
    {
        "img": "./images/coffee_bean/coffee_bean_fire.JPG",
        "name": "fire coffee bean",
        "price": "300000",
        "type": "coffeeBean",
        "countTotal":0,
        "issale":0
    },
    {
        "img": "./images/coffee_bean/coffee_bean_earth.JPG",
        "name": "earth coffee bean",
        "price": "300000",
        "type": "coffeebean",
        "countTotal":0,
        "issale":0
    },
    {
        "img": "./images/coffee_bean/coffee_bean_for_test.JPG",
        "name": "coffee bean for test",
        "price": "20000",
        "type": "coffeebean",
        "countTotal":0,
        "issale":0
    },
    {
        "img": "./images/product_images/den.jpg",
        "name": "cà phê đen",
        "price": "29000",
        "type": "cà phê phin",
        "countTotal":0,
        "issale":0
    },
    {
        "img": "./images/product_images/milk_coffee.jpg",
        "name": "cà phê nâu",
        "price": "32000",
        "type": "eà phê phin",
        "countTotal":0,
        "issale":0
    },
    {
        "img": "./images/product_images/bac_siu.jpg",
        "name": "bạc sỉu",
        "price": "32000",
        "type": "cà phê phin",
        "countTotal":0,
        "issale":0
    },
    {
        "img": "./images/product_images/tra_phuc_bon_tu.png",
        "name": "trà phúc bồn tử",
        "price": "65000",
        "type": "trà",
        "countTotal":0,
        "issale":0
    },
    {
        "img": "./images/product_images/tra_xoai_macchiato.jpg",
        "name": "trà xoài macchiato",
        "price": "65000",
        "type": "trà",
        "countTotal":0,
        "issale":0
    },
    {
        "img": "./images/product_images/tra_cherry_macchiato.jpg",
        "name": "trà cherry macchiato",
        "price": "65000",
        "type": "trà",
        "countTotal":0,
        "issale":0
    },
]

localStorage.setItem("listSanPhamLocalStory",JSON.stringify(listSanPham));

//ham hien thi san pham
let thong_tin_nguoi_dung=[]
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
        s += '<div class="row">'
        for(let j=i*3; j < i*3+3; j++)
            if(j < group.length){
            const element1 = group[j];
        console.log(group[j]);
        
            s += `<div class="col-sm-4" style="padding: 10px">
                    <div class="card" style="rem">
                        <img class="card-img-top" id="img_${j}" src="${element1.img}" alt="${element1.name}" style="width:100%; height:15rem">
                        <div class="card-body">
                            <h4  class="card-title" id="name_${j}">${element1.name}</h4>
                            <p class="cost" price_${j}">${element1.price} Đ</p>
                            <button type="button" class="btn btn-primary"  data-itemId="${element1.name}" id="${j}" onclick= "amountHandler(event)">mua ngay</button>
                          
                            
                        </div>
                    </div>
                </div>`
        }
        s += "</div>"
    } 
    document.getElementById(id).innerHTML = s;
}
displaySanPham(listSanPham,"espresso",'Link_espresso');