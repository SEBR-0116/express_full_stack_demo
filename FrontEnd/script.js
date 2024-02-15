console.log('working')

const allCats = document.querySelector('#allCats')
const alldogs = document.querySelector('#allDogs')
const catButtons = document.querySelectorAll('.cat')
const dogButtons = document.querySelectorAll('.dog')
const nameList = document.querySelector("#names")
const dataContainer = document.querySelector("#data")

//gets a list of 4 of our cats
allCats.addEventListener('click', async ()=> {
    const nameList = document.querySelector("#names")
    const dataContainer = document.querySelector("#data") 
     dataContainer.style.display="none"
     nameList.style.display="block"
    const response = await axios.get('http://localhost:3001/cats/')
    console.log(response.data)
    let catName1 = document.querySelector('#catName1')
    catName1.innerText = response.data[0].name
    let catName2 = document.querySelector('#catName2')
    catName2.innerText = response.data[1].name
    let catName3 = document.querySelector('#catName3')
    catName3.innerText = response.data[4].name
    let catName4 = document.querySelector('#catName4')
    catName4.innerText = response.data[6].name
})

//gets a list of 4 of our dogs
alldogs.addEventListener('click', async ()=> {
    const nameList = document.querySelector("#names")
   const dataContainer = document.querySelector("#data") 
    dataContainer.style.display="none"
    nameList.style.display="block"
    const response = await axios.get('http://localhost:3001/dogs/')
    console.log(response.data)
    let catName1 = document.querySelector('#catName1')
    catName1.innerText = response.data[0].name
    let catName2 = document.querySelector('#catName2')
    catName2.innerText = response.data[1].name
    let catName3 = document.querySelector('#catName3')
    catName3.innerText = response.data[2].name
    let catName4 = document.querySelector('#catName4')
    catName4.innerText = response.data[3].name
})


//pulls individual Cat data
catButtons.forEach((button) => {
    button.addEventListener("click", async ()=> {
        const response = await axios.get(`http://localhost:3001/cats/${button.value}`)
    console.log(response.data)
    const nameList = document.querySelector("#names")
    const dataContainer = document.querySelector("#data") 
     dataContainer.style.display="block"
     nameList.style.display="none"
    let catName = document.querySelector('#name')
    let catImg = document.querySelector('#img')
    catName.innerText = response.data.name
    catImg.setAttribute('src', response.data.image)
    let catNames = document.querySelector('#names')
    catNames.style.display = 'none'
    }
    )
})


//pulls individual dog data

    dogButtons.forEach((button) => {
    console.log('clicked')
    button.addEventListener("click", async ()=> {
        const nameList = document.querySelector("#names")
        const dataContainer = document.querySelector("#data") 
         dataContainer.style.display="block"
         nameList.style.display="none"
        const response = await axios.get(`http://localhost:3001/dogs/${button.value}`)
    console.log(response.data)
    let catName = document.querySelector('#name')
    let catImg = document.querySelector('#img')
    catName.innerText = response.data.name
    catImg.setAttribute('src', response.data.image)
    let catNames = document.querySelector('#names')
    catNames.style.display = 'none'
    }
    )
})



