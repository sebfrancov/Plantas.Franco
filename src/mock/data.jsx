const products =[
    {
        id: "1",
        name: "Product1",
        price: 2000,
        stock: 12, 
        category: "temporada"
    },
    {
        id: "2",
        name: "Product2",
        price: 3000,
        stock: 9,
        category: "clasico"
    },
    {
        id: "3",
        name: "Product3",
        price: 3000,
        stock: 4,
        category: "mas vendido"
    },
    {
        id: "4",
        name: "Product4",
        price: 4000,
        stock: 10,
        category: "promociones"
    }
]

export const getProducts =()=>{
    let error = false
    return new Promise ((resolve, reject) => {
        setTimeout(()=>{
            if(error){
                reject("Hubo un error, procure luego")
            }else{
                resolve(products)
            }
        },3000)
    })
}

export const getOneProduct =(id)=>{
    let error = false
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(!error){
                let product = products.find((item)=> item.id === id)
                resolve(product)
            }else{
                reject("Lo sentimos, no se pudo encontrar lo requerido")
            }
        }, 3000)
    })
}