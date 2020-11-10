const PARAMETERS = {
    cat: 'category',
    subcat: 'subcategory',
    search: ['name', 'description', 'category', 'subcategory']
}

const getData = {

    url: "dataBase/dataBase.json",

    get(process) {
        let request = fetch(this.url)
            .then((response) => response.json())
            .then(process);
    },

    whishList(list, callback) {
        this.get((data) => {
            const result = data.filter((item) => list.includes(item.id));
            callback(result);
        })
    }, 

    item(value, callback) {
        this.get((data) => {
            const result = data.find((item) => item.id === value);
            callback(result);
        })
    },

    cart(list, callback) {
        this.get((data) => {
            const result = data.filter((item) => {
                return list.some((obj) => obj.id === item.id);
            });
            callback(result);
        })
    },

    category(prop, value, callback) {
        this.get((data) => {
            const result = data.filter((item) => item[PARAMETERS[prop]].toLowerCase() === value.toLowerCase());
            // console.log(value)
            callback(result);
        })
    },

    search(value, callback) {
        this.get((data) => {
            const result = data.filter((item) => {
                for(const prop in item) {
                    
                    if(PARAMETERS.search.includes(prop) && item[prop].toLowerCase().includes(value.toLowerCase())) {
                        return true;
                    }
                }
            });
            callback(result);
        })
    },

    catalog(callback) {
        this.get((data) => {
            const result = data.reduce((arr, item) => {
                if (!arr.includes(item.category)) {
                    arr.push(item.category);
                }
                return arr;
            }, [])
            callback(result);
        })
    },

    subCatalog(value, callback) {
        this.get((data) => {
            const result = data
                // .filter((item) => item.category === value)
                .reduce((arr, item) => {
                    if (!arr.includes(item.subcategory) && item.category === value) {
                        arr.push(item.subcategory);
                    }
                    return arr;
                }, []);
            callback(result);
        })
    }
}


export {getData};