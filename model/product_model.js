class Product {
    title;
    description;

    constructor(title, description) {
        this.title = title;
        this.description = description;
    }

    print(){
        console.log("Title: "+this.title);
        console.log("Description: "+this.description);
    }
}
 
module.exports = Product;