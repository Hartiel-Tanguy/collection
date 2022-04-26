let collection=[{
    nom:"Star Wars",
    year:1977,
    genre:"science fiction",
    réalisateur:"George Lucas",
    production:"americain",
    img:'img/star wars.jpeg'
},
{
    nom:" The Lord of the Rings",
    year:2001,
    genre:"science fiction",
    réalisateur:"Peter Jackson",
    production:"américaine",
    img:'img/the lord.jpeg'
},
{
    nom:"Harry Potteur",
    year:2001,
    genre:"science fiction",
    réalisateur:"J. K.Roling",
    production:"anglaise",
    img:'img/harry.jpeg'
},
{
    nom:"Fast and Furious",
    year:2001,
    genre:"action",
    réalisateur:"vin diesel",
    production:"américaine",
    img:'img/fast.jpeg'
},
{
    nom:"taken",
    year:2008,
    genre:"action",
    réalisateur:"luc Besson",
    production:"américaine",
    img:'img/taken.jpeg'
},
{
    nom:"armageddon",
    year:1998,
    genre:"aventure",
    réalisateur:"Michael Bay",
    production:"américaine",
    img:'img/arma.jpeg'
},
{
    nom:"avengers",
    year:2012,
    genre:"science fiction",
    réalisateur:"Joss Whedon",
    production:"américaine",
    img:'img/avenger.jpeg'
},
{
    nom:"le transporteur",
    year:2002,
    genre:"action",
    réalisateur:"Louis Leterrier",
    production:"américaine",
    img:'img/transport.jpeg'
},
{
    nom:"expendables",
    year:2010,
    genre:"action",
    réalisateur:"Sylvester Stallone",
    production:"américaine",
    img:'img/expen.jpeg'
},
{
    nom:"intouchables",
    year:2011,
    genre:"comédie",
    réalisateur:"Olivier Nakache",
    production:"francaise",
    img:'img/intouchable.jpeg'
}
]


const main = document.querySelector('main')


for (const card of collection) {

    const grid = document.createElement('div')
    grid.className = 'grid'
    main.appendChild(grid)
    
    const article = document.createElement("article")
    article.className = "cards"
    main.appendChild(article)
    
    
    const nom = document.createElement('h2')
    nom.className='nom'
    nom.innerText = card.nom
    article.appendChild(nom)

    const year = document.createElement('h3')
    year.className='year'
    year.innerText = card.year
    article.appendChild(year)

    const genre = document.createElement('p')
    genre.className= 'genre'
    genre.innerText = card.genre
    article.appendChild(genre)

    const réalisateur = document.createElement('p')
    réalisateur.className = 'réalisateur'
    réalisateur.innerText = card.réalisateur
    article.appendChild(réalisateur)

    const production = document.createElement('p')
    production.className = 'production'
    production.innerText = card.production
    article.appendChild(production)

    const img = document.createElement('img')
    img.className = 'img'
    img.src = card.img
    article.appendChild(img)

}





