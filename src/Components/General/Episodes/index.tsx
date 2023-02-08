import { useState, useEffect } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../Routes';
import { Header } from '../../Common/Header';
import { ContainerShow, Description } from '../Home/styles';

import {
    Container,
    Title,
    Image,
    TouchableBack,
    TextTouchableBack,
} from './styles'
import { Loading } from '../../Common/Loading';

interface Props extends NativeStackScreenProps<RootStackParamList, 'Episode'> {}

export default function Episodes({ route, navigation }: Props) {
    const [loading, setLoading] = useState(false);
    const { episode } = route.params;

    useEffect(() => {
        setLoading(true);
        // its just to get an impression of getting data.
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }, []);

    if(loading) {
        return <Loading />
    }else {
        return(
            <Container>
                <Header />
                <ContainerShow>
                    <Title>{ episode.number ? `Episode ${episode.number}` : 'Special' }</Title>
                    <Image source={{uri: episode?.image?.medium}} />
                    <Title>{episode.name}</Title>
                    <Description>
                        {episode.summary?.replace('<p>','').replace('</p>','').replace('<b>','').replace('</b>','')}
                    </Description>
                </ContainerShow>
                <TouchableBack onPress={() => navigation.goBack()}>
                    <TextTouchableBack>
                        Back
                    </TextTouchableBack>
                </TouchableBack>
            </Container>
        )
    }
}