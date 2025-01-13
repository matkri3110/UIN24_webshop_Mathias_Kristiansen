console.log(products)

// Gå igjennom alle produkter,, generere HTML for hvert produkt og skrive dette til index.html. 

// Lager en variabel som inneholder HTML-koden for produktene

let productHTML = ""

products.map((product, index) => productHTML += 
            `<article class="product-card">
                <img src="website_images/PROD_${product.imagefile}" alt="PRODUKTTITTEL" />
                <a href="#${product.category}">Ninjago</a> 
                <h3>${product.title}</h3>
                <p>Kr. ${product.price},-</p>
                <button>Legg i handlekurv</button>
            </article>`)

//Finn id #productlist, og fyll den med verdiene i variabelen productHTML

document.getElementById("productlist").innerHTML = productHTML

