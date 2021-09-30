import React from 'react';
import { useState, useEffect, lazy, Suspense } from 'react';
import {
    useParams,
    useRouteMatch,
    Route,
    useHistory,
    useLocation
} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import PropTypes from 'prop-types';

import { fetchMovieDetails } from '../../services/movies-api'
// import Cast from '../Cast';
// import Reviews from '../Reviews';

import {
    GoBackButton,
    MovieName,
    Score,
    OverviewTitle,
    Overview,
    GenresTitle,
    Genres,
    GenresItem,
    Image,
    DetailsWrapper,
    InfoWrapper,
    InfoTitle,
    StyledLink
} from './MovieDetailsPage.styled.jsx';

const Cast = lazy(() => import('../Cast/Cast.js' /*webpackChunkName: "cast" */));
const Reviews = lazy(() => import('../Reviews/Reviews.js' /*webpackChunkName: "reviews" */));

export default function MovieDetailsPage() {
    const { url, path } = useRouteMatch();
    const history = useHistory();
    const location = useLocation();
    const { movieId } = useParams();
   
    const [movie, setMovie] = useState(null);
    const [status, setStatus] = useState('idle');

    const handleGoBack = () => {
        if (!location.state.from) {
            history.push('/');
        }
        //checking what page the comeback is from
        if (location.state.from === '/') {
            history.push(location.state.from)
        } else {
            const query = location.state.query;
            localStorage.setItem('query', JSON.stringify(query));
            history.push({
                pathname: '/movies',
                search: `query=${query}`
            });
        }
    }

    useEffect(() => {
        fetchMovieDetails( movieId )
            .then((data) => {
                console.log(data)
                setMovie(data)
                setStatus('resolved');
            }
        )
        .catch(error => {
            setStatus('rejected');
      });
        
    }, [movieId]);
    
    const releaseYear = () => {
        const releaseFullDate = new Date(movie.release_date);
        return releaseFullDate.getFullYear();
    }
    
    const userScore = () => {
        const userScorePercentage = movie.vote_average * 10;
        return userScorePercentage;
    }

    if (status === 'idle') {
        return (<div></div>)
    }

    if (status === 'rejected') {
        return (<div>Oops, there are no movie info</div>)
    }
    
    if (status === 'resolved') {
         console.log("location", location);
      
        return (
            <div>
                <GoBackButton onClick={handleGoBack}>Go back</GoBackButton>
                
                <DetailsWrapper>
                    {movie.poster_path ?
                        <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.name} /> :
                        <Image src="https://i.ibb.co/s9cXZV0/poster.jpg" alt={movie.name} />}
                    <div>
                        <MovieName>{movie.title ? movie.title : movie.name} ({releaseYear()})</MovieName>
                        <Score>User score: {userScore()}%</Score>
                        <OverviewTitle>Overview</OverviewTitle>
                        <Overview>{movie.overview}</Overview>
                        <GenresTitle>Genres</GenresTitle>
                        <Genres>
                            {movie.genres.map(genre => (
                                <GenresItem key={genre.id}>
                                    {genre.name}
                                </GenresItem>
                            ))}
                        </Genres>
                    </div>
                </DetailsWrapper>

                <InfoWrapper>
                    <InfoTitle>Additional information</InfoTitle>

                    <StyledLink to={{
                            ...location,
                                pathname: `${url}/cast`
                                
                                }}>
                                    Cast</StyledLink>
                    <StyledLink to={{
                            ...location,
                                pathname: `${url}/reviews`
                                
                                }}>Reviews</StyledLink>
                </InfoWrapper>

                <Suspense fallback={<div>Loading...</div>}>
                <Route path={`${path}/cast`} exact>
                    <Cast />
                </Route>
                            
                <Route path={`${path}/reviews`} >
                    <Reviews />
                </Route>
                </Suspense>
            </div>
        )
    }
}

MovieDetailsPage.propTypes = {
    movieId: PropTypes.number,
};