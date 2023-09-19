const listElPro = document.querySelectorAll("div.t4s-product.t4s-pr-grid")

function createListProduct(list) {
    let products = [];
    for (let i = 0; i < listElPro.length; i++) {

        const id = list[i].className.replace('t4s-product t4s-pr-grid t4s-pr-style1 t4s-pr-', '').replace(' t4s-col-item is-t4s-pr-created', '')

        const img = list[i].querySelector('div.is-show-img2 img:first-child').getAttribute('srcset')
        const thumb1 = img.slice(img.indexOf('800w, //') + 8).replace(' 900w', '')
        const img2 = list[i].querySelector('div.is-show-img2 span+img').getAttribute('srcset')
        const thumb2 = img2.slice(img2.indexOf('900w, //') + 8).replace(' 1000w', '')

        const thumbnails = [thumb1, thumb2];

        const elPrice = list[i].querySelector('.t4s-product-price');
        let price = 0
        if (elPrice.querySelector('del')) {
            price = elPrice.querySelector('del').textContent.replaceAll('.', '').replace('₫\n', '').replace('₫', '')
        } else {
            price = elPrice.textContent.replaceAll('.', '').replace('₫\n', '')
        }

        const saleEl = list[i].querySelector('.t4s-badge-sale')
        const sale = saleEl ? saleEl.textContent.replace('-', '').replace('%', '') : 0

        const title = list[i].querySelector('.t4s-product-title a').textContent

        const isNew = !!list[i].querySelector('.t4s-badge-new')

        const isReOder = !!list[i].querySelector('.t4s-badge-preorder')

        products.unshift({
            id, thumbnails,
            price: parseInt(price),
            sale: parseInt(sale),
            title, isNew, isReOder
        })
    }
    return products;
}

const listProduct = createListProduct(listElPro)

console.log('listProduct', listProduct)

/* BNHGGHG */




Codeshare logo
 ShareSign UpLog In
1
const products = [
    2
   {
        3
      "id": "7003102314702",
        4
      "thumbnails": [
            5
         "demo-kalles-4-1.myshopify.com/cdn/shop/products/6.1.jpg?v=1652080096&width=900",
        6
         "demo-kalles-4-1.myshopify.com/cdn/shop/products/6.2.jpg?v=1652080096&width=1000"
7
      ],
8
"price": 855000,
    9
"sale": 0,
    10
"title": "Stratus Ultra High Leggings",
    11
"isNew": false,
    12
"isReOder": false
13
   },
14
{
    15
    "id": "7003102281934",
        16
    "thumbnails": [
        17
         "demo-kalles-4-1.myshopify.com/cdn/shop/products/7.1.jpg?v=1652080092&width=900",
        18
         "demo-kalles-4-1.myshopify.com/cdn/shop/products/7.jpg?v=1652080092&width=1000"
19
    ],
        20
    "price": 611000,
        21
    "sale": 0,
        22
    "title": "Take Me Higher Long Leggings",
        23
    "isNew": false,
        24
    "isReOder": false
    25
},
26
{
    27
    "id": "7003102216398",
        28
    "thumbnails": [
        29
         "demo-kalles-4-1.myshopify.com/cdn/shop/products/8.1.jpg?v=1652080089&width=900",
        30
         "demo-kalles-4-1.myshopify.com/cdn/shop/products/8.jpg?v=1652080089&width=1000"
31
    ],
        32
    "price": 1344000,
        33
    "sale": 0,
        34
    "title": "Tonal Ombre Leggings",
        35
    "isNew": false,
        36
    "isReOder": false
    37
},
38
{
    39
    "id": "7001789268174",
        40
    "thumbnails": [
        41
         "demo-kalles-4-1.myshopify.com/cdn/shop/products/skinn3060927901_q1_2-0.jpg?v=1651800511&width=900",
        42
         "demo-kalles-4-1.myshopify.com/cdn/shop/products/skinn3060927901_q4_2-0.jpg?v=1651800511&width=1000"
43
    ],
        44
    "price": 1832000,
        45
    "sale": 40,
        46
    "title": "Skin Sweatpans",
        47
    "isNew": false,


        JOBS


Hide Ads
    1

    /*   GVGHGVG */





    import products from './const/products.js';
    function formatCurrency(number) {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(number)
    }

    function getNewPrice(pro) {
        if (pro.sale) {
            return `<del>${formatCurrency(pro.price)}</del>
               <ins>${formatCurrency(pro.price * ((100 - pro.sale) / 100))}</ins>`
        } else {
            return formatCurrency(pro.price)
        }
    }

    function createProductElement(pro) {

        return `<div class="card" style="width: 18rem;">
         <img src="https://${pro.thumbnails[0]}" class="card-img-top" alt="${pro.title}">
         <div class="card-body">
           <h5 class="card-title">${pro.title}</h5>
           <p class="card-text">${getNewPrice(pro)}</p >
   <a href="#" class="btn btn-primary">Go somewhere</a>
         </div >
       </div > `
    }

    function renderList(products) {
        const elProducts = document.getElementById('list-product')

        let stringProducts = ''

        products.forEach(product => {
            stringProducts += createProductElement(product)
        })

        elProducts.innerHTML = stringProducts
    }

    renderList(products)


        < div class="container" >
            <div id="list-product"></div>
   </ >
