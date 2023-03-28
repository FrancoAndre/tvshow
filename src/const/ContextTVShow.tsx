import React, { createContext, useState, useEffect } from 'react';
import { endpoint } from './endpoint';
import axios from 'axios';

export interface IContextTVShow{
    children: React.ReactNode
}

export interface IShow {
    id: string;
    name: string;
    summary: string;
    image: string;
}

export interface ISeasonsList {
    number: number;
    episodeOrder: number;
}

export interface IEpisodesList {
    number: number;
    image: {
        medium: string,
    };
    name: string;
    summary: string;
    season: number;
}

type ShowContext<Episodes = IEpisodesList[], Seasons = ISeasonsList[]> = {
    show: IShow,
    episodes: Episodes,
    seasons: Seasons ,
    selectedShowID: number,
    setSelectedShowID: React.Dispatch<React.SetStateAction<number>>,
    selectedSeason: number,
    setSelectedSeason: React.Dispatch<React.SetStateAction<number>>,
    loading: boolean,
}

const defaultValue = {
  show: {
    id: '',
    image: '',
    name: '',
    summary: ''
  },
  episodes: [],
  seasons: [],
  selectedShowID: 1955,
  setSelectedShowID: () => (1955),
  selectedSeason: 1,
  setSelectedSeason:() => (1),
  loading: false,
};

export const TVShowContext = createContext<ShowContext>(defaultValue);

export default function ContextTVShow({ children }: IContextTVShow) {
  //selectedShowID is if we want to create a screen to get a various others shows
  const [selectedShowID, setSelectedShowID] = useState(defaultValue.selectedShowID);
  const [show, setShow] = useState(defaultValue.show);
  const [episodes, setEpisodes] = useState(defaultValue.episodes);
  const [seasons, setSeasons] = useState(defaultValue.seasons);
  const [selectedSeason, setSelectedSeason] = useState(defaultValue.selectedSeason);
  const [loading, setLoading] = useState(defaultValue.loading);

  useEffect(()=> {
    //id 1955 is equals the  "The Powerpuff Girls"
    setSelectedShowID(16);
    setSelectedSeason(1);
  }, []);

  useEffect(() => {
    setLoading(true);

    getInformationOfShow();
    getInformationOfSeasons();
    getInformationOfEpisodes();

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [children, selectedSeason, selectedShowID]);


  function getInformationOfShow(){
    //In this, we get the information of principal screen of show
    axios.get(endpoint+`/shows/${selectedShowID}`)
      .then((result) => {
        setShow({
          id: result.data.id,
          name: result.data.name,
          image: result.data?.image?.medium,
          summary: result.data.summary,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getInformationOfSeasons() {
    //Here we get the information of seasons of the show
    axios.get(endpoint+`/shows/${selectedShowID}/seasons`)
      .then((result) => {
        const response = result.data;
        setSeasons(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getInformationOfEpisodes(){
    // and here we get the information of episodes of the show
    axios.get(endpoint+`/shows/${selectedShowID}/episodes?specials=1`)
      .then((result) => {
        const episodes = result.data;
        // here, for not using map. I have decided to use a filter to select only episodes of that selected season.
        setEpisodes(episodes.filter((ep: IEpisodesList) => ep.season === selectedSeason));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return(
    <TVShowContext.Provider
      value={{
        selectedShowID,
        show,
        episodes,
        seasons,
        setSelectedShowID,
        selectedSeason,
        setSelectedSeason,
        loading,
      }}
    >
      {children}
    </TVShowContext.Provider>
  );
}
