let demo = document.getElementById('demo')
function some() {
    // demo.innerHTML = some
}
 
let myPromice = new Promise(function(res, rej) {
    let x = 4
    if (x == 0) res('ok')
    else rej('error')
    }
)

myPromice.then (
    function (value) {some(value)},
    function (error) {some(error)}
)

let time = new Date().getHours()
let is_shop_open = false
if (time >= 10) is_shop_open = true
else if (time >= 22) is_shop_open = true 



console.log('i');

setTimeout(() => {
    console.log('eat');
}, 2000)
console.log('ice cream');



let stock = {
    fruits : ["strawberry", "grapes", 'banana', 'apple'],
    liquid : ['water', 'ice'],
    holder : ['cone', 'cup', 'stick'],
    toppings : ['chocolate', 'peanuts'] 
}

let order = (fname, cp) => { 
    setTimeout(() => {
        console.log(`${stock.fruits[fname]} tanlab olindi`);
        setTimeout(() => {
            console.log('fruit chopped');
            setTimeout(() => {
               console.log('ice and water added');
               setTimeout(() => {
                console.log('machine started');
                setTimeout(() => {
                    console.log('idish tanlandi');
                    setTimeout(() => {
                        console.log("shirinlik qo'shildi");
                        setTimeout(() => {
                            console.log('mijozga berildi');
                        }, 1000);
                    }, 1000);
                }, 1000)
               }, 1000) 
            }, 1000);
        }, 1000)
        // cp()
    }, 2000)
}

let productions = () => {
    setTimeout(() => {
        console.log('production started');
    }, 1000)
}

order(productions)


let clock = new Date().getHours()

if (clock >= 10) is_shop_open = true
else if (clock >= 22) is_shop_open = false

let icepromice = new Promise((res, rej) => {
    if (is_shop_open) res()
    else rej()
})

let order1 = (time, work) => {
    return new Promise((res, rej) => {
        if (is_shop_open)res(work())
        else rej()
    })
}



function watch() {
    location.href = 'https://www.lays.uz/o-lays/'
}



order(2000, () => console.log('meva tanlandi'))
.then(() => {
    return order(1000, () => console.log('p started'))
})
.then(() => {
    return order(1000, () => console.log('water and ice added'))
})