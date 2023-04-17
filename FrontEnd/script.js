console.log('working')
const garfButt = document.querySelector('#garfield')
const cheshButt = document.querySelector('#cheshire')
const salButt = document.querySelector('#salem')
const allCats = document.querySelector('#allCats')
const lassie = document.querySelector('#lassie')
const baltoButt = document.querySelector('#balto')
const alldogs = document.querySelector('#allDogs')



allCats.addEventListener('click', async ()=> {
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



alldogs.addEventListener('click', async ()=> {
    const response = await axios.get('http://localhost:3001/dogs/')
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


garfButt.addEventListener('click', async ()=> {
    const response = await axios.get('http://localhost:3001/cats/1')
    console.log(response.data)
    let catName = document.querySelector('#name')
    let catImg = document.querySelector('#img')
    catName.innerText = response.data.name
    catImg.setAttribute('src', response.data.image)
    let catNames = document.querySelector('#catnames')
    catNames.style.display = 'none'

})

baltoButt.addEventListener('click', async ()=> {
    const response = await axios.get('http://localhost:3001/dogs/1')
    console.log(response.data)
    let catName = document.querySelector('#name')
    let catImg = document.querySelector('#img')
    catName.innerText = response.data.name
    catImg.setAttribute('src', response.data.image)
    let catNames = document.querySelector('#catnames')
    catNames.style.display = 'none'

})


cheshButt.addEventListener('click', async ()=> {
    const response = await axios.get('http://localhost:3001/cats/6')
    console.log(response.data)
    let catName = document.querySelector('#name')
    let catImg = document.querySelector('#img')
    catName.innerText = response.data.name
    catImg.setAttribute('src', response.data.image)

})


lassie.addEventListener('click', async ()=> {
    const response = await axios.get('http://localhost:3001/dogs/0')
    console.log(response.data)
    let catName = document.querySelector('#name')
    let catImg = document.querySelector('#img')
    catName.innerText = response.data.name
    catImg.setAttribute('src', response.data.image)

})