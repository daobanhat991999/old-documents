let montieubieu_data = [
    {
        "img": "./images/product_images/americano.jpg",
        "name": "Americano",
        "price": "55000"
    },
    {
        "img": "./images/product_images/caramel_macchiato.jpg",
        "name": "caramel macchiato",
        "price": "65000"
    },
    {
        "img": "./images/product_images/espresso.jpg",
        "name": "espresso",
        "price": "55000"
    },
    {
        "img": "./images/product_images/milk_coffee.jpg",
        "name": "nâu đá",
        "price": "30000"
    },
    {
        "img": "./images/product_images/tra_phuc_bon_tu.png",
        "name": "trà phúc bồn tử",
        "price": "65000"
    },
    {
        "img": "./images/product_images/tra_xoai_macchiato.jpg",
        "name": "trà xoài macchiato",
        "price": "65000"
    },
]
let espresso_data = [
    {
        "img": "./images/product_images/americano.jpg",
        "name": "Americano",
        "price": "55000"
    },
    {
        "img": "./images/product_images/caramel_macchiato.jpg",
        "name": "caramel macchiato",
        "price": "65000"
    },
    {
        "img": "./images/product_images/espresso.jpg",
        "name": "espresso",
        "price": "55000"
    },
]
let coffee_bean_data = [
    {
        "img": "./images/coffee_bean/coffee_bean_metal.JPG",
        "name": "metal coffee bean",
        "price": "300000"
    },
    {
        "img": "./images/coffee_bean/coffee_bean_wood.JPG",
        "name": "wood coffee bean",
        "price": "300000"
    },
    {
        "img": "./images/coffee_bean/coffee_bean_water.JPG",
        "name": "water coffee bean",
        "price": "300000"
    },
    {
        "img": "./images/coffee_bean/coffee_bean_fire.JPG",
        "name": "fire coffee bean",
        "price": "300000"
    },
    {
        "img": "./images/coffee_bean/coffee_bean_earth.JPG",
        "name": "earth coffee bean",
        "price": "300000"
    },
    {
        "img": "./images/coffee_bean/coffee_bean_for_test.JPG",
        "name": "coffee bean for test",
        "price": "20000"
    },
]
let filter_coffee_data = [
    {
        "img": "./images/product_images/den.jpg",
        "name": "cà phê đen",
        "price": "29000"
    },
    {
        "img": "./images/product_images/milk_coffee.jpg",
        "name": "cà phê nâu",
        "price": "32000"
    },
    {
        "img": "./images/product_images/bac_siu.jpg",
        "name": "bạc sỉu",
        "price": "32000"
    },

]
let tea_macchiato_data = [
    {
        "img": "./images/product_images/tra_phuc_bon_tu.png",
        "name": "trà phúc bồn tử",
        "price": "65000"
    },
    {
        "img": "./images/product_images/tra_xoai_macchiato.jpg",
        "name": "trà xoài macchiato",
        "price": "65000"
    },
    {
        "img": "./images/product_images/tra_cherry_macchiato.jpg",
        "name": "trà cherry macchiato",
        "price": "65000"
    },
]
let danh_sach_sp = [montieubieu_data, espresso_data, coffee_bean_data, filter_coffee_data, tea_macchiato_data]
let thong_tin_nguoi_dung = []
//ham hien thi san pham
function displaysanpham(array, id) {
    var s = "";
    let itemcount = Math.round(array.length / 3);
    for (let i = 0; i < itemcount; i++) {
        s += `<div class="row">`
        for (let j = i * 3; j < i * 3 + 3; j++) {
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
                </div>`
            }
        }
        s += "</div>"
    }
    document.getElementById(id).innerHTML = s;
}
displaysanpham(montieubieu_data, "montieubieu");
displaysanpham(espresso_data, "espresso");
displaysanpham(coffee_bean_data, "coffee_bean");
displaysanpham(filter_coffee_data, "filter_coffee");
displaysanpham(tea_macchiato_data, "tra_macchiato");


