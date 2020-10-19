import React,{useEffect,useState} from 'react'
import axios from '../axios'
import '../Css/maincontent.scss'
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'
const base_url ="https://image.tmdb.org/t/p/original/"
function Row({title,fetchUrl,isLargeRow}){
    const [movies,setMovies] = useState([]);
    const [trailerUrl,setTrailerUrl] = useState("");
    const opts = {
        height:"390",
        width :"100%",
        playerVars :{
            autoplay:1
        }
    }
    const handleClick = (movie) =>{
        if(trailerUrl){
            setTrailerUrl('')
        }else{
            movieTrailer(movie?.name || "")
               .then((url)=>{
                    console.log("URL:" +url)
                    const urlParam = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParam.get("v"))
                })
                .catch((err) =>console.log(err))
        }
    }
    useEffect(()=>{
        async function fetchData(){
            const req = await axios.get(fetchUrl); 
            setMovies(req.data.results)
            return req;
        }
        fetchData();
    },[fetchUrl])
    return(
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {movies.map( movie => (
                    <img key={movie.id} 
                    onClick={()=> handleClick(movie)}
                    src={`${base_url}${isLargeRow?movie.poster_path:movie.backdrop_path}`} 
                    alt={movie.name} 
                    className={`row__poster ${isLargeRow && "row__posterLarge"}`}></img>
                ) )}
            </div>
           {trailerUrl &&  <Youtube videoId={trailerUrl} opts={opts}/>}
        </div>
    )
}
export default Row;