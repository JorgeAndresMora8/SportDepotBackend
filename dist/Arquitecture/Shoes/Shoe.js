"use strict";
class Shoe {
    constructor(id, name, price, image, description, stock) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.image = image;
        this.description = description;
        this.stock = stock;
    }
    asDTO() {
        return Object.freeze({
            id: this.id,
            name: this.name,
            price: this.price,
            image: this.image,
            description: this.description,
            stock: this.stock,
        });
    }
}
