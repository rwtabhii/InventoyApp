export default class ProductModel {

    constructor(id, name, desc, price, imageUrl) {
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.price = price;
        this.imageUrl = imageUrl
    }
    // To Get the Products
    static getAllProducts() {
        return products;
    }

    static findProduct(id) {
        const product = products.find(p => p.id == id);
        return product;

    }

    static addProduct(data) {
        const newProduct = new ProductModel(
            products.length + 1,
            data.name,
            data.desc,
            data.price,
            data.imageUrl
        );
        console.log(newProduct);
        return products.push(newProduct);

    }

    static filter(minPrice, maxPrice) {
        // console.log("Min Price:", minPrice);
        // console.log("Max Price:", maxPrice);
    
        const result = products.filter(product => {
            return product.price >= minPrice && product.price <= maxPrice; // Correct price comparison
        });
    
        return result;
    }
}


var products = [
    new ProductModel(
        1,
        'Product 1',
        'Description for Product 1',
        19,
        'https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg',
    ),
    new ProductModel(
        2,
        'Product 2',
        'Description for Product 2',
        29,
        'https://m.media-amazon.com/images/I/51xwGSNX-EL._SX356_BO1,204,203,200_.jpg',
    ),
    new ProductModel(
        3,
        'Product 3',
        'Description for Product 3',
        39.99,
        'https://m.media-amazon.com/images/I/31PBdo581fL._SX317_BO1,204,203,200_.jpg',
    ),
    new ProductModel(
        4,
        'Product 4',
        'Description for Product 4',
        34.99,
        'https://m.media-amazon.com/images/I/31PBdo581fL._SX317_BO1,204,203,200_.jpg',
    ),
    new ProductModel(
        5,
        'Product 5',
        'Description for Product 5',
        39,
        'https://m.media-amazon.com/images/I/31PBdo581fL._SX317_BO1,204,203,200_.jpg',
    ),
]