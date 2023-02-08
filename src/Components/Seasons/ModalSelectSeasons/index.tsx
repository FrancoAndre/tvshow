import { useState, useEffect, useContext } from 'react';
import { Animated, ScrollView } from 'react-native';
import styled from 'styled-components/native'
import { TVShowContext } from '../../../const/ContextTVShow';

import {
    BackGround,
    Title,
    TouchableSelectedSeason,
    TextTouchableSelectedSeason
} from './styles';

export interface IModalSelectSeasons {
    visibleSelectSeasons: boolean,
    setVisibleSelectSeasons: React.Dispatch<React.SetStateAction<boolean>>;
}

const Container = styled(Animated.View)`
    background-color: #181818;
    width: 80%; 
    border-width: 1px;
    border-radius: 5px;
    border-color: #ddd;
    border-bottom-width: 0px;
    position: absolute;
`;

export default function ModalSelectSeasons({ visibleSelectSeasons = false, setVisibleSelectSeasons }: IModalSelectSeasons){
    const [animation, setAnimation] = useState(new Animated.Value(1000));
    const { seasons, setSelectedSeason, show } = useContext(TVShowContext);

    useEffect(() => {
        Animated.timing(animation, {
            toValue: 50,
            duration: 500,
            useNativeDriver: false,
          }).start()
      },[animation])

    useEffect(() => {
        setAnimation(new Animated.Value(1000))
    }, [visibleSelectSeasons])

    const handleChangeSeason = (season: number) => {
        setSelectedSeason(season);
        setVisibleSelectSeasons(false)
    }

    if(visibleSelectSeasons) {
        return (
            <BackGround>
                <Container style={[{marginTop: animation }]}>
                    <Title>{show.name}</Title>
                    <ScrollView>
                    {
                        seasons.map((season,index) => {
                            return(
                                <TouchableSelectedSeason key={index} onPress={() => handleChangeSeason(season.number)}>
                                    <TextTouchableSelectedSeason>
                                        Season {season.number}
                                    </TextTouchableSelectedSeason>
                                </TouchableSelectedSeason>
                            )
                        })
                    }
                    </ScrollView>
                </Container>
            </BackGround>
        )
    }else return null;
}