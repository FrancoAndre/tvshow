import { useState, useEffect, useContext } from 'react';
import { Animated, ScrollView, StatusBar } from 'react-native';
import { TVShowContext } from '../../../../const/ContextTVShow';
import styled from 'styled-components/native';

import {
    Container,
    ContainerTitle,
    Title,
    TouchableClose,
    TextTouchableClose,
    TouchableSelectedSeason,
    TextTouchableSelectedSeason
} from './styles';
import { ThemeContext } from '../../../../const/ContextTheme';

export interface IModalSelectSeasons {
    visibleSelectSeasons: boolean,
    setVisibleSelectSeasons: React.Dispatch<React.SetStateAction<boolean>>;
}

const BackGround = styled(Animated.View)`
    background-color: ${props => props.theme.background};
    margin-top: 50px; 
    width: 100%; 
    height: 100%;
    position: absolute;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default function ModalSelectSeasons({ visibleSelectSeasons = false, setVisibleSelectSeasons }: IModalSelectSeasons){
    const [animation, setAnimation] = useState(new Animated.Value(1000));
    const { seasons, setSelectedSeason, show } = useContext(TVShowContext);
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        Animated.timing(animation, {
            toValue: StatusBar.currentHeight || 50,
            duration: 1000,
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
                <BackGround style={[{marginTop: animation }]}>
                    <ScrollView style={{ width: '100%'}}>
                        <Container>
                            <ContainerTitle>
                                <Title>{show.name}</Title>
                                <TouchableClose onPress={() => setVisibleSelectSeasons(false)}>
                                    <TextTouchableClose>x</TextTouchableClose>
                                </TouchableClose>
                            </ContainerTitle>
                            
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
                            
                        </Container>
                    </ScrollView>
                </BackGround>
        )
    }else return null;
}