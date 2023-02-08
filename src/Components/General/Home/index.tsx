import { useContext } from "react";
import Seasons from "../Seasons";
import { TVShowContext } from "../../../const/ContextTVShow";
import { Header } from "../../Common/Header";
import { Loading } from "../../Common/Loading";

import {
    Container,
    ContainerShow,
    Title,
    Image,
    Description
} from './styles';

export default function Home() {
    const { show, loading } = useContext(TVShowContext);

    if(loading) {
        return <Loading />
    }else {
        return (
            <Container
                decelerationRate="normal"
                showsVerticalScrollIndicator={false}
            >
                <Header />
                <ContainerShow>
                        { show?.image !== '' ?
                            <Image source= {{uri: show?.image}}/>
                            : null
                        }
                        <Title>{show?.name}</Title>
                        <Description>
                            {show?.summary?.replace('<p>','').replace('</p>','').replace('<b>','').replace('</b>','')}
                        </Description>
                </ContainerShow>
                <Seasons />
            </Container> 
        )
    }
}