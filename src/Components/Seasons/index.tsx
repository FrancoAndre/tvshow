import { useContext, useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/core';
import { IEpisodesList, TVShowContext } from '../../const/ContextTVShow';
import ModalSelectSeasons from './ModalSelectSeasons';

import { 
    Container,
    TouchableSelectionSeasons,
    TextTouchableSelectionSeasons,
    Arrow,
    ContainerEpisodes,
    TouchableSelectionEpisode,
    TextTouchableSelectionEpisode
} from './styles';


type RootStackParamList = {
    Episode: { episode: IEpisodesList }
};

export default function Seasons() {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const [visibleSelectSeasons, setVisibleSelectSeasons] = useState<boolean>(false);
    const { selectedSeason, episodes } = useContext(TVShowContext); 

    const handleChangeEpisode = (episode: IEpisodesList) => {
        navigation.navigate('Episode', { episode });
    }
    return(
        <>
            <ModalSelectSeasons visibleSelectSeasons={visibleSelectSeasons} setVisibleSelectSeasons={setVisibleSelectSeasons}/>
            <Container>
                <TouchableSelectionSeasons onPress={() => setVisibleSelectSeasons(true)}>
                    <TextTouchableSelectionSeasons>
                        Season { selectedSeason }
                    </TextTouchableSelectionSeasons>
                    <Arrow>^</Arrow>
                </TouchableSelectionSeasons>
                <TextTouchableSelectionSeasons>
                    Episodes
                </TextTouchableSelectionSeasons>
                <ContainerEpisodes>
                    {episodes.map((episode) => {
                        return (
                            <TouchableSelectionEpisode key={episode.number} onPress={() => handleChangeEpisode(episode)}>
                                <TextTouchableSelectionEpisode>
                                    Episode {episode.number}
                                </TextTouchableSelectionEpisode>
                            </TouchableSelectionEpisode>
                        )
                    })}
                </ContainerEpisodes>
            </Container>
        </>
    )
}