let data = [

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
let storage = localStorage.getItem("data");
if (storage == undefined) {
    localStorage.setItem('data', JSON.stringify(data));
}