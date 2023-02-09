import { useContext } from "react";
import Seasons from "../Seasons";
import { TVShowContext } from "../../../const/ContextTVShow";
import { Header } from "../../Common/Header";
import { Loading } from "../../Common/Loading";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../Routes";
import { TextTouchableBack, TouchableBack } from "../Episodes/styles";

import {
    Container,
    ContainerShow,
    Title,
    Image,
    ContainerDescription,
    Description
} from './styles';

interface IHome extends NativeStackScreenProps<RootStackParamList, 'Home'> {}

export default function Home({ navigation }: IHome) {
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
                    <TouchableBack style={{ marginTop: 10, marginBottom: 10 }} onPress={() => navigation.goBack()}>
                        <TextTouchableBack>Back to the beginning</TextTouchableBack>
                    </TouchableBack>
                    { show?.image !== '' ?
                        <Image source= {{uri: show?.image}}/>
                        : null
                    }
                    <Title>{show?.name}</Title>
                    <ContainerDescription>
                        <Description>
                            {show?.summary?.replace('<p>','').replace('</p>','').replace('<b>','').replace('</b>','')}
                        </Description>
                    </ContainerDescription>
                </ContainerShow>
                <Seasons />
            </Container> 
        )
    }
}