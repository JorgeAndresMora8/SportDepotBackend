class Shoe { 
    id: string; 
    name: string; 
    price: number; 
    image: string; 
    description: string; 
    stock: number; 

    constructor(id: string, name: string, price: number, image: string, description: string, stock: number){
        this.id = id;
        this.name = name;
        this.price = price;
        this.image = image;
        this.description = description;
        this.stock = stock;
    }

    asDTO(){ 
        return Object.freeze({ 
            id: this.id,
            name: this.name,
            price: this.price,
            image: this.image,
            description: this.description,
            stock: this.stock,
        })
    }
}