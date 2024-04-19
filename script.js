let cartKuan = document.querySelector('.cart span')
var total = 0
const troli = document.querySelectorAll('.caption .troli')
let produk = document.querySelectorAll('.caption')
let arrProduk = Array.from(produk)
let contentTroli = document.getElementById('content-troli')
let totalPrice = document.querySelector('.totalPrice')
console.log(produk)
 
produk.forEach(function(i){
    i.addEventListener('click',function(){
        cartKuan.style.display = 'block'
        total +=1
        console.log(total)
        cartKuan.innerHTML = total
        

        let newItem = document.createElement('div')
        newItem.innerHTML= i.outerHTML
        contentTroli.appendChild(newItem)
    })
})



let btnHumburger = document.querySelector(".humburger-nav input")
let showNav = document.querySelector('.nav ul')


btnHumburger.addEventListener('click', function(){
    showNav.classList.toggle('show-nav')
})
