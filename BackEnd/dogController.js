const dogs = [
    {name: "lassie", 
    image:'https://media.istockphoto.com/id/1294195550/photo/shetland-sheepdog-on-mountain.jpg?s=612x612&w=0&k=20&c=l0X9LzEVlFxTJ-eNbPnYXwFw_OPGUMM_lNsEjcia_ZY='},
    {name: "balto",
    image:'https://statcdn.fandango.com/MPX/image/NBCU_Fandango/701/579/thumb_0232B08C-6AF3-499A-8E07-975D8A4593E0.jpg'},
    {name: "air bud", 
    image: "www.dogs.com/airbud"},
    {name: "wishbone",
    image:"www.dogs.com/wishbone"}
]

const getDogs = (req, res) => {
    res.send(dogs)
  }

const getDog = (req, res) => {
   
    res.send(dogs[req.params.id])
  }

module.exports ={
    getDogs,
    getDog
}