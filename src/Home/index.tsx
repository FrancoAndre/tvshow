import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { endpoint } from "../const/endpoint";

import {
    Container,
    Title,
    Image,
    ContainerHeader,
    TitleHeader,
    ContainerShows
} from './styles';

export interface IShows {
    id: string;
    name: string;
    summary: string;
    image: Image;
    episodeList: TEpisodesList[]
    seasons: TSeasons[];
}

interface Image {
    medium: string;
    large: string;
}

interface TSeasons {
    number: number;
    numberOfEpisodes: number;
}

type TEpisodesList = {
    name: string;
    description: string;
}

export default function Home() {
    const [data, setData] = useState<IShows>()

    useEffect(() => {
        axios.get<IShows>(endpoint+'/shows/1955')
        .then((result) => {
            console.log(JSON.stringify(result.data))
            setData(result.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    return (
        <Container>
           <ContainerHeader>
                <TitleHeader>TV Show!</TitleHeader>
           </ContainerHeader>
           <ContainerShows>
            <Image source={{ 
                    uri: data?.image.medium 
                    }}
                />
                <Title>{data?.name}</Title>
                <Title>{data?.summary.replace('<p>','').replace('</p>','').replace('<b>','').replace('</b>','')}</Title>
           </ContainerShows>
        </Container>
    )
}