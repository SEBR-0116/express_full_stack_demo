const dogs = [
  
    {name: "balto",
    image:'https://statcdn.fandango.com/MPX/image/NBCU_Fandango/701/579/thumb_0232B08C-6AF3-499A-8E07-975D8A4593E0.jpg'},
    {name: "air bud", 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvIGPgSvRzk1-HBqDKQ2JnbP4F8SnavVY2Kw&usqp=CAU"},
    {name: "lassie", 
    image:'https://media.istockphoto.com/id/1294195550/photo/shetland-sheepdog-on-mountain.jpg?s=612x612&w=0&k=20&c=l0X9LzEVlFxTJ-eNbPnYXwFw_OPGUMM_lNsEjcia_ZY='},
    {name: "wishbone",
    image:"https://images2.minutemediacdn.com/image/upload/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/wishbonehed-fd9cc8610ebcd6fc82ad71a223c593cf.png"}
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