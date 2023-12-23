//creación de clase
class ProductManager {
    constructor () {
        this.products = []
    }
    
//método para devolver array con los productos existentes
    getProducts = () => this.products

//método para agregar un producto al array de productos inicial
    addProduct = (product) => {        
        if (!product.title ||                   //validación que todos los campos sean obligatorios
            !product.description ||
            !product.price ||
            !product.thumbail ||
            !product.code ||
            !product.stock)
            {
                return "Falta algún campo del producto"
            }                 

        const result = this.products.find (prod => prod.code === product.code)  //validación de campo code
        if (result) {
            return "Existe un producto con igual código"
        }
        
        if (this.products.length === 0) {             //creación de id autoincrementable al agregar producto
            product.id = 1
            this.products.push (product)
        } else {
            product.id = this.products.length + 1     
            this.products.push (product)
        }

        return "Producto agregado"
    }

//método para buscar en array producto por el id
    getProductsById = (id) => {
        const buscarId = this.products.find (product => product.id === id)
        if (buscarId) {
            return buscarId
        } else {
            return "Not found"
        }
    }
}

//creación de productos 
const product1 = {
    title: "product1", 
    description: "cartera de cuero", 
    price: 15000, 
    thumbail: "imagen", 
    code: "abc01", 
    stock: 30
}

const product2 = {
    title: "product2", 
    description: "billetera de cuero", 
    price: 3000, 
    thumbail: "imagen", 
    code: "abc02", 
    stock: 10
}

const products = new ProductManager ()
console.log (products.addProduct(product1))
console.log (products.addProduct(product2))
console.log (products.getProducts())
console.log (products.getProductsById(5))