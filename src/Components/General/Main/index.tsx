import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useState, useEffect, useContext } from 'react';
import { FlatList, SafeAreaView, StatusBar, Image } from 'react-native';
import { TVShowContext } from '../../../const/ContextTVShow';
import { endpoint } from '../../../const/endpoint';
import { RootStackParamList } from '../../../Routes';
import { Header } from '../../Common/Header';
import { Loading } from '../../Common/Loading';
import axios from 'axios';

import {
    Container,
    ContainerSearch,
    InputSearch,
    TouchableSearch,
    TextTouchableSearch,
    TextTouchableShow
} from './styles';

interface IShow {
    name: string;
    id: number;
    image: {
        medium: string;
    }
}

type TShow = {
    show : IShow;
};

interface IMain extends NativeStackScreenProps<RootStackParamList, 'Home'> {}

export default function Main({ navigation }: IMain) {
    const [allShows, setAllShows] = useState<TShow[]>([]);
    const [search, setSearch] = useState<string>('The Powerpuff Girls');
    const [loading, setLoading] = useState<boolean>(false);
    const { setSelectedShowID } = useContext(TVShowContext);

    const renderItem = ({item}: {item: TShow}) => {
        return (
                <TextTouchableShow onPress={() => handleSelectedShow(item.show.id)}>
                    <Image style={{ width: 250, height: 200 }}  source={{uri: item.show?.image?.medium}} /> 
                    <TextTouchableSearch>{item?.show?.name}</TextTouchableSearch>
                </TextTouchableShow>
        );
    };

    const handleSelectedShow = (id: number) => {
        setSelectedShowID(id);
        navigation.navigate('Home', undefined);
    }

    async function getAllShows() {
        /* 
            I didnt put this function in the context,
            because here is the only place that have used. 
        */
        const response = await axios.get(`${endpoint}/search/shows?q="${search}"`);
        setAllShows(response.data);
    }

    useEffect(() => {
        setSearch('The Powerpuff Girls');
    }, []);

    useEffect(() => {
        setLoading(true)
        getAllShows();  
        setTimeout(() => {
            setLoading(false);
        }, 1000)
    }, []);

    const handleSearch = () => {

        if(search === '' || search === 'undefined') {
            alert('Please, write a valid show in search!');
            return;
        }

        setLoading(true)
        getAllShows();  
        setTimeout(() => {
            setLoading(false);
        }, 1000)
    }

    return (
        <Container>
            <Header />
            <ContainerSearch>
                <InputSearch 
                    placeholder='Write here the show to search' 
                    placeholderTextColor={'#d3d3d3'}
                    onChangeText={(e) => setSearch(e)}
                    value={search}
                />
                <TouchableSearch onPress={handleSearch}>
                    <TextTouchableSearch>🔍</TextTouchableSearch>
                </TouchableSearch>
                <TouchableSearch onPress={() => setSearch('')}>
                    <TextTouchableSearch>🧹</TextTouchableSearch>
                </TouchableSearch>
            </ContainerSearch>
            <SafeAreaView
                style={{
                    flex: 1,
                    marginTop: StatusBar.currentHeight || 0,   
                }}
            >
            {
                loading ?
                    <Loading />
                : 
                    <FlatList
                        data={allShows}
                        renderItem={renderItem}
                        keyExtractor={item => String(item.show.id)}
                    />
            }
            </SafeAreaView>
        </Container>
    )
}