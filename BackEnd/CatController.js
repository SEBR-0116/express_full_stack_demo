const cats = [
  { name: "Garfield", 
    color: "orange", 
    lovesLasagna: true, 
    image: 'https://st1.latestly.com/wp-content/uploads/2021/06/Garfield-784x441.jpg' },
    { name: "Cheshire Cat", 
    color: "purple", 
    lovesLasagna: false, 
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGc6EUi2vKLnEl8vpi9LO9VUM5iEsTws2xOg&usqp=CAU' },
    { name: "Salem",
     color: "black", 
     lovesLasagna: false,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA4eRzagCsIDOlCw-izzWTZJ14jkEvOTIvTPAx5Dg5vrhvFV9WNpoc0g-spIn-n6Q1qqE&usqp=CAU" },
    
    { name: "Heathcliff", 
    color: "orange", 
    lovesLasagna: false,
  image:"https://assets.gocomics.com/uploads/collection_images/collection_image_large_1721944_Heathcliff_Hero__201808211631.jpg" },
    { name: "Whiskey", 
    color: "Calico", 
    lovesLasagna: true },
    { name: "Mr. Jynx", 
    color: "white", 
    lovesLasagna: false,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRykU4U4Vj8BcE5dPCSBWqbFcMp7kqjkol_A&usqp=CAU" },
    { name: "Mr. Bigglesworth",
    color: "grey", 
    lovesLasagna: false }
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