let filmlist=[{
    nom:"Star Wars",
    year:"1977",
    genre:"science fiction",
    réalisateur:"George Lucas",
    production:"americain",
},
{
    nom:" The Lord of the Rings",
    year:"2001",
    genre:"science fiction",
    réalisateur:"Peter Jackson",
    production:"américaine",
},
{
    nom:"Harry Potteur",
    year:"2001",
    genre:"science fiction",
    réalisateur:"J. K.Roling",
    production:"anglaise",
},
{
    nom:"Fast and Furious",
    year:"2001",
    genre:"action",
    réalisateur:"vin diesel",
    production:"américaine",
},
{
    nom:"taken",
    year:"2008",
    genre:"action",
    réalisateur:"luc Besson",
    production:"américaine",
},
{
    nom:"armageddon",
    year:"1998",
    genre:"aventure",
    réalisateur:"Michael Bay",
    production:"américaine",
},
{
    nom:"avengers",
    year:"2012",
    genre:"science fiction",
    réalisateur:"Joss Whedon",
    production:"américaine",
},
{
    nom:"le transporteur",
    year:"2002",
    genre:"action",
    réalisateur:"Louis Leterrier",
    production:"américaine",
},
{
    nom:"expendables",
    year:"2010",
    genre:"action",
    réalisateur:"Sylvester Stallone",
    production:"américaine",
},
{
    nom:"intouchables",
    year:"2011",
    genre:"comédie",
    réalisateur:"Olivier Nakache",
    production:"francaise",
}
]


let corp=document.querySelector('main')

for(let i=0;i<filmlist.length;i++){
    let forme=document.createElement('forme');
    corp.appendChild(forme);

    let div=document.createElement('div');
    let h2=document.createElement('h2');
    h2.innerHTML=filmlist[i].nom;
    div.appendChild[h2]

    let year=document.createElement('h3');
    year.innerHTML=filmlist[i].year;
    forme.appendChild(year)

    let genre=document.createElement('p');
    genre.innerHTML=filmlist[i].genre;
    div.appendChild('p')

    let réalisateur=document.createElement('em');
    réalisateur.innerHTML=filmlist[i].réalisateur;
    forme.appendChild(réalisateur)

    let production=document.createElement('em');
    production.innerHTML=filmlist[i].production;
    forme.appendChild(production)


}