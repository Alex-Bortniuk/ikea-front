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
        console.log(search);

        const prop = search.split("=");
        const value = search.split("=");
        console.log("value:", value)

        console.log("prop:", prop);  
    }

    if(location.hash) {

    }

    if(location.pathname.includes('cart')) {

    }
   
}

export {loadData};