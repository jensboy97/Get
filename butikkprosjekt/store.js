// Få oppgradert siden til å starte med å se alle hoved merkene først
// så kunne gå inn på vært enkelt merke for å få opp alle bilene innen det merket 
// deretter kunne trykke på undermerker for mer nøyaktig informasjon





//Modell

var screen = document.getElementById('screen')
var Modell = {
    App:{
    showBrand:null, 
    carView:null
    },
    items:[
        {
            Brand: 'Audi',
            Year: '2015',
            Title: 'A8',
            Picture: `https://www.auto-data.net/images/f100/Audi-A8-D4-4H-facelift-2013.jpg`,
            desc: 'selger min gode 4,2liter turbo diesel audi A8',
            price: '469 950 KR',
        },
        
        {
            Brand: 'Audi',
            Year: '2011',
            Title: 'A7',
            Picture: 'https://stimg.cardekho.com/images/car-images/large/Audi/Audi-A7/garnet-red-pearl-effect.jpg?impolicy=resize&imwidth=420',
            desc: 'selger min nydelige 3.0 liter A7 da jeg har blitt for gammel til førerkortet',
            price: '225 000 KR',
        },

        {
            Brand: 'Audi',
            Year: '1999',
            Title: 'A6',
            Picture: 'https://media.discordapp.net/attachments/1155833003289890868/1170394863120957580/image.png?ex=6558e228&is=65466d28&hm=d7d371635d098531a05fa21a791a7e881bea100862c862608fbaed6f372f64e0&=',
            desc: 'selger min trofaste 1,9liter da jeg ønsker meg en nyere bil',
            price: '1000 000 KR',
        },

        {
            Brand: 'Audi',
            Year: '2009',
            Title: 'A5',
            Picture: 'https://www.carscoops.com/wp-content/uploads/2009/05/8207790e-audi-a5-coupe-avus-6.jpg',
            desc: 'selger min slite sterke quattro 2.0 liter da kjerringa ønsker elbil',
            price: '74 777 KR',
        },

        {
            Brand: 'Audi',
            Year: '2014',
            Title: 'A4',
            Picture: 'https://images.hgmsites.net/med/2014-audi-allroad_100442485_m.jpg',
            desc: 'selger med sårt hjerte min lekende 1,8 liter TFSI A4 pågrunn av endring i livsituasjon ',
            price: '144 147 KR',
        },

        {
            Brand: 'Audi',
            Year: '2005',
            Title: 'A3',
            Picture: 'https://media.discordapp.net/attachments/1155833003289890868/1170378120214347906/IMG_20230106_175232.jpg?ex=6558d290&is=65465d90&hm=8e685762d165841097f7b35bb00fc1273660304a75ea5adfe01cb0f6a8be174d&=&width=472&height=630',
            desc: 'selger min slite sterke 1,6 bensin daglige reprasjoner påberegnes',
            price: '850 000 KR',
        },

        {
            Brand: 'Lada',
            Year: '1980',
            Title: 'Niva',
            Picture: 'https://media.discordapp.net/attachments/1155472178851106896/1170384101354770534/Lada-1.png?ex=6558d822&is=65466322&hm=a9348d038e0c345f5b6ddcf0d8e5b241b97a93d52e8602957dad20f6b928ac7d&=&width=994&height=630',
            desc: 'Guttungen har finni seg thaidame og er ikke lenger intressert i herjebilen vår, så den selges med tungt hjerte',
            price: '40 000KR',
        },

    ]
}



updateview()
//view
function updateview(){
    let HTML =  ''
    if (Modell.App.carView === null) {
        HTML = GetCarListHtml()
    }
    else {
        HTML = GetCarDetailHtml();
    }
    screen.innerHTML=/*html*/`
    <h1>WingWang's Car dealership </h1> <BR> 
    <div class='lists'> 
    <input value='${Modell.App.showBrand||''}' onchange='storeFilter(this.value)'> 
   <div class='salesbutton'>Add car for sale</div>
    </div> <br>
    ${HTML}` ;
}


function GetCarListHtml() {
  let HTML = ''
    for (let index = 0; index < Modell.items.length;index++) {
        const car = Modell.items[index]
        if (Modell.App.showBrand&&!car.Brand.toLowerCase().includes(Modell.App.showBrand.toLowerCase())) {
            continue 
        }
        HTML += /*html*/ `
        
        <li class='itemss' onclick='viewCar(${index})'>
        ${car.Brand}
        ${car.Year}
        ${car.Title}
        
        </li>`
    }
    return HTML
}

//controller

function storeFilter(storeinput){
    Modell.App.showBrand=storeinput;
    Modell.App.carView = null;
    updateview()
}

function viewCar(car){
Modell.App.carView = car;
updateview()
}

function GetCarDetailHtml(){
    const car = Modell.items[Modell.App.carView];
    return /*html*/ `
    <div class='backbutton' onclick='storeFilter(Modell.App.showBrand)'>Return </div>
   <h2> ${car.Brand}
   ${car.Title}</h2>
   <h3> ${car.Year}</h3>
   <h4> ${car.price}</h4>
   <p>${car.desc}</p>
    <img src='${car.Picture}'>
    `
}