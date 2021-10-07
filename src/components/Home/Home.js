import React,{ useEffect} from 'react';
import MovieListing from "../MoveListing/MoveListing";
import movieApi from "../../common/apis/MoveApi";
import { APIKey } from "../../common/apis/MovieApiKey";

const Home = () => {
    const movieText = "Harry";
    useEffect(() => {
        const fetchMovies = async () => {
            const response = await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
            .catch((err)=>{
                console.log("err :",err);
            });
            console.log("The response from api ", response );
        };
        fetchMovies();
    },[])
    return (
        <div>
            <div className="banner-img"></div>
            <MovieListing />
        </div>
    );
};

export default Home;