import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "react-loader-spinner";
import Section from "Components/Section";
import Message from "Components/Message";
import Poster from "Components/Poster";

const Container = styled.div`
  padding: 20px;
`;

const SLoader = styled(Loader)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 300px;
`

const HomePresenter = ({nowPlaying, upcoming, popular, loading, error}) =>  
  
  loading ? 
    <>
      <Helmet>
        <title>Movies | Chanflix </title>
      </Helmet>
      <SLoader 
        type="Heart"
        color="#bdc3c7"
        height={200}
        weight={200}
      />  
    </>
  :
    <Container>
        <Helmet>
          <title>Movies | Chanflix </title>
        </Helmet>
        {nowPlaying && nowPlaying.length > 0 && (
          <Section title="Now Playing">{nowPlaying.map(movie => 
            <Poster
              key={movie.id}
              id={movie.id}
              imageUrl={movie.poster_path}
              title={movie.original_title}
              rating={movie.vote_average}
              year={movie.release_date.substring(0, 4)}
              isMovie={true}
            />
          )}</Section>
        )}
        {upcoming && upcoming.length > 0 && (
          <Section title="Upcoming Movies">{upcoming.map(movie => 
            <Poster
              key={movie.id}
              id={movie.id}
              imageUrl={movie.poster_path}
              title={movie.original_title}
              rating={movie.vote_average}
              year={movie.release_date.substring(0, 4)}
              isMovie={true}
            />
          )}</Section>
        )}
        {popular && popular.length > 0 && (
          <Section title="Popular Movies">{popular.map(movie => 
            <Poster
              key={movie.id}
              id={movie.id}
              imageUrl={movie.poster_path}
              title={movie.original_title}
              rating={movie.vote_average}
              year={movie.release_date.substring(0, 4)}
              isMovie={true}
            />
          )}</Section>
        )}
        {error && <Message color="#e74c3c" text={error}/>}
    </Container>

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  upcoming: PropTypes.array,
  popular: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default HomePresenter;