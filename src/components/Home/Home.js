import React,{ useEffect} from 'react';
import MovieListing from "../MoveListing/MoveListing";
// import movieApi from "../../common/apis/MoveApi";
// import { APIKey } from "../../common/apis/MovieApiKey";
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';

const Home = () => {
   
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAsyncMovies());
        dispatch(fetchAsyncShows());
    },[dispatch])
    return (
        <div>
            <div className="banner-img"></div>
            <MovieListing />
        </div>
    );
};

export default Home;