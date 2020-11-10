import {getData} from "./getData.js";
const wishList = ["idd005", "idd006", "idd007", "idd008"];

const cartList = [
    {
        id: "idd015",
        count: 3
    },
    {
        id: "idd019",
        count: 7
    },
    {
        id: "idd025",
        count: 11
    }
];


const loadData = () => {
    if(location.search) {

        const search = decodeURI(location.search);
        const prop = search.split("=")[0].slice(1);
        const value = search.split("=")[1];
        
        switch (prop) {
            case "s":
                getData.search(value, (data) => {
                    console.log(data);
                })
                break;

            case "wishlist":
                getData.whishList(wishList, (data) => console.log(data));
                break;  

            default:
                getData.category(prop, value, (data) => {
                    console.log(data);
                })
                break;
        }

    }

    if(location.hash) {
        getData.item(location.hash.substring(1), (data) => {
            console.log(data);
        });
    }

    if(location.pathname.includes('cart')) {
        getData.cart(cartList, (data) => {
            console.log(data);  
        })
    }

    getData.catalog((data) => {
        console.log(data);
    });


}

export {loadData};