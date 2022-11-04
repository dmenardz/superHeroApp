const SUPERHERO_TOKEN = '5719666591434471'
const BASE_URL = `https://www.superheroapi.com/api.php/${SUPERHERO_TOKEN} `
const getNewHeroBtn = document.getElementById('getNewHeroBtn')
const heroImage = document.getElementById('heroImg')
const searchForHero = document.getElementById('search-hero')
const searchInput = document.getElementById('searchInput')
const superInfo = document.getElementById('superInfo')
const heroBiography = document.getElementById('biography')


const style = ` <br style="margin:5px">`
const getSuperHero =(id , name)=>{
 fetch(`${BASE_URL}/${id}`)
.then(response =>response.json())
.then(json => {
    const superHero = json
    showSuperHeroDetails(superHero)
    showHeroBio(superHero)
    console.log(json)
})
}

const searchSuperHero =(name)=>{
fetch(`${BASE_URL}/search/${name}`)
.then(response =>response.json())
.then(json => {
    const hero = json.results[0]
    showSuperHeroDetails(hero)
    showHeroBio(hero)
})
}

const randomHero =()=>{
    const NumberofHero=731
    return Math.floor(Math.random() * NumberofHero)+1
}

const showSuperHeroDetails = (character) =>{
    const name = `<h2 style=" padding:5px 100px;border-radius:1px 1px 95px 95px; background:red;">${character.name}</h2>`
    const img =`<img src="${character.image.url}" 
   style="border-radius:5px 5px 45px 5px; border:4px solid gold; margin-bottom:-25px;" width = 400px; height = 600px;/>`
   const stats=Object.keys(character.powerstats).map(stat => {
    return `${stat.toUpperCase()} : ${character.powerstats[stat]}`
   }).join(`${style}`)
   
   heroImage.innerHTML = `${name}${img}`
   superInfo.innerHTML = `${stats}` 
   
}
const showHeroBio =(bio)=>{
    const biographyHero =Object.keys(bio.biography).map(heroBio =>{
        return `${bio.biography[heroBio]}`
    }).join(' ')

    heroBiography.innerHTML =`${biographyHero}`
}


getNewHeroBtn.onclick =()=> getSuperHero(randomHero())
searchForHero.onclick =()=> searchSuperHero(searchInput.value)
   