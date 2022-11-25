function calcularPrecioconDescuento(precioOriginal,descuento){return precioOriginal*(100-descuento)/100;};

const baseUrl = "https://platzi-avo.vercel.app";
const appNode = document.querySelector('#app')
// api de internacionalización para darle formato al precio
const formatPrice = (price) =>{
    const newPrice = new window.Intl.NumberFormat('en-En',{
        style: "currency",
        currency :"USD"
    }).format(price);
    return newPrice
};
//web api
// connect to server
window
    .fetch(`${baseUrl}/api/avo`)
    //procesar la respuesta y convertirla a json
    .then((respuesta) => respuesta.json())
    // JSON -> Data -> renderizar info browser
    .then(responseJson => {
        const todosLosItems =[];
        responseJson.data.forEach((item) => {
            //crear imagen
            const imagen =  document.createElement('img');
            imagen.src = `${baseUrl}${item.image}`;
            imagen.className='avocado-image';
            //big details container
            const bigDetails = document.createElement('div');
            bigDetails.className ="bigDetails";
            // crear titulo
            const titulo = document.createElement('h2');
            titulo.textContent = item.name;
            titulo.className = "tituloProd";
            //crear precio
            const price = document.createElement('div');
            price.textContent="Precio original : "+formatPrice(item.price);
            price.className = "price";
            //crear un descuento con un numero entre 0 y 1 
            const discountPer = document.createElement('div');
            discountPer.className = "Discount";
            const discount = Math.random();
            discountPer.textContent = "Descuento : "+parseFloat(discount*100).toFixed(2)+"%";
            // calcular el precio final
            const fPrice = document.createElement('div');
            fPrice.className="fPrice";
            const finalPrice =calcularPrecioconDescuento(item.price,discount*100)
            fPrice.textContent = "Precio final: "+ formatPrice(finalPrice);
            // contenedor por aguacate
            bigDetails.append(titulo,price,discountPer,fPrice);
            const container = document.createElement('div');
            container.append(imagen,bigDetails);
            container.className = "ItemContainer"
            todosLosItems.push(container);
        });
        appNode.append(...todosLosItems);
    });