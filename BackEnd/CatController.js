const cats = [
    { name: "Salem",
     color: "black", 
     lovesLasagna: false },
    { name: "Garfield", 
    color: "orange", 
    lovesLasagna: true, 
    image: 'https://st1.latestly.com/wp-content/uploads/2021/06/Garfield-784x441.jpg' },
    { name: "Heathcliff", 
    color: "orange", 
    lovesLasagna: false },
    { name: "Whiskey", 
    color: "Calico", 
    lovesLasagna: true },
    { name: "Mr. Jynx", 
    color: "white", 
    lovesLasagna: false },
    { name: "Mr. Bigglesworth",
    color: "grey", 
    lovesLasagna: false },
    { name: "Cheshire Cat", 
    color: "purple", 
    lovesLasagna: false, 
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGc6EUi2vKLnEl8vpi9LO9VUM5iEsTws2xOg&usqp=CAU' }
  ];

  

const getCats = (req, res) => {
    res.send(cats)
  }

const getCat = (req, res) => {
   
    res.send(cats[req.params.id])
  }

module.exports ={
    getCats,
    getCat
}