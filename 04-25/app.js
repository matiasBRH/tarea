peliculas = [
  {
  title:"The Way Back",
  year:2010,
  genre:"Action",
  plot:"At the dawn of WWII, several men escape from a Russian gulag—to take a perilous and uncertain journey to freedom as they cross deserts, mountains and several nations."
  },
  {
    title:"Wind River",
    year:2017,
    genre:"Drama",
    plot:"An FBI agent teams with the town's veteran game tracker to investigate a murder that occurred on a Native American reservation."
    },
    {
      title:"Inside Job",
      year:2010,
      genre:"Documentary",
      plot:"A film that exposes the shocking truth behind the economic crisis of 2008. The global financial meltdown, at a cost of over $20 trillion, resulted in millions of people losing their homes and jobs. Through extensive research and interviews with major financial insiders, politicians and journalists, Inside Job traces the rise of a rogue industry and unveils the corrosive relationships which have corrupted politics, regulation and academia."
      }
]

function recorrerPeliculas(){
  console.log("CARTELERA")
  peliculas.forEach(pelicula => {
    console.log("########################")
    console.log(`Título: ${pelicula.title}`)
    console.log(`Género: ${pelicula.genre}`)
    console.log(`Año: ${pelicula.year}`)
    console.log(`Sinopsis: ${pelicula.plot}`)
  });
}


class Pelicula{
  constructor(titulo,genero,año,sinopsis){
    this.title=titulo;
    this.genre=genero;
    this.year=año;
    this.plot=sinopsis;
    
  }

  listarInfo() {
    console.log(`Título: ${this.title}`)
    console.log(`Género: ${this.genre}`)
    console.log(`Año: ${this.year}`)
    console.log(`Sinopsis: ${this.plot}`)
  }
}

pelicula1 = new Pelicula("Safe House","Action",2012,"A dangerous CIA renegade resurfaces after a decade on the run. When the safe house he's remanded to is attacked by mercenaries, a rookie operative escapes with him. Now, the unlikely allies must stay alive long enough to uncover who wants them dead.")
pelicula2 = new Pelicula("Black Book","Drama",2006,"In the Nazi-occupied Netherlands during World War II, a Jewish singer infiltrates the regional Gestapo headquarters for the Dutch resistance.")
pelicula3 = new Pelicula("Ghostbusters","Comedy",1984,"After losing their academic posts at a prestigious university, a team of parapsychologists goes into business as proton-pack-toting 'ghostbusters' who exterminate ghouls, hobgoblins and supernatural pests of all stripes. An ad campaign pays off when a knockout cellist hires the squad to purge her swanky digs of demons that appear to be living in her refrigerator.")
pelicula1.listarInfo()
pelicula2.listarInfo()
pelicula3.listarInfo()