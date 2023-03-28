import React, { useContext, useEffect, useState } from 'react';
import { FlatList, TouchableOpacity, Switch } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../Routes';
import { TVShowContext } from '../../../const/ContextTVShow';
import { ThemeContext } from '../../../const/ContextTheme';
import { endpoint } from '../../../const/endpoint';
import { Loading } from '../../Common/Loading';
import axios from 'axios';

import {
  ContainerScreen,
  Container,
  SearchContainer,
  Search,
  ContainerHeader,
  HeaderText,
  ContainerBody,
  Show,
  ImageShow,
  DescriptionShow,
  TextTouchableShow,
  TextDescriptionShow,
  ButtonReadMore,
  TextReadMore
} from './styles';

interface IShow {
    name: string;
    id: number;
    image: {
        medium: string;
    }
    summary: string;
}

type TShow = {
    show : IShow;
};

type IMain = NativeStackScreenProps<RootStackParamList, 'Main'>

export default function MainNew({ navigation }: IMain) {
  const [allShows, setAllShows] = useState<TShow[]>([]);
  const [search, setSearch] = useState<string>('The Powerpuff Girls');
  const [loading, setLoading] = useState<boolean>(false);
  const { setSelectedShowID } = useContext(TVShowContext);
  const { theme, toogleTheme }  = useContext(ThemeContext);

  const renderItem = ({item}: {item: TShow}) => {
    return (
      <Show>
        <ImageShow source={{uri: item.show?.image?.medium}} />
        <DescriptionShow>
          <TextTouchableShow>{item?.show?.name}</TextTouchableShow>
          <TextDescriptionShow>{
            item?.show?.summary
              ?.replace('<p>', '')
              ?.replace('</p>', '')
              ?.replace('<b>', '')
              ?.replace('</b>', '')}</TextDescriptionShow>
          <ButtonReadMore onPress={() => handleSelectedShow(item.show.id)}>
            <TextReadMore>
                                Read More...
            </TextReadMore>
          </ButtonReadMore>
        </DescriptionShow>
      </Show>
    );
  };


  const handleSelectedShow = (id: number) => {
    setSelectedShowID(id);
    navigation.navigate('Home', undefined);
  };

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
    setLoading(true);
    getAllShows();
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const handleSearch = () => {

    if(search === '' || search === 'undefined') {
      alert('Please, write a valid show in search!');
      return;
    }

    setLoading(true);
    getAllShows();
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <ContainerScreen>
      <Container>
        <SearchContainer>
          <TouchableOpacity onPress={handleSearch}>
            <FontAwesome name="search" size={22} color={theme.text} />
          </TouchableOpacity>
          <Search
            placeholder='Write here the show to search'
            onChangeText={(e) => setSearch(e)}
            value={search}
          />
        </SearchContainer>
        <ContainerHeader>
          <HeaderText>
                        Shows
          </HeaderText>
          <Switch
            trackColor={{true: theme.text, false: theme.text}}
            thumbColor={ theme.background}
            ios_backgroundColor={theme.text}
            onValueChange={toogleTheme}
            value={theme.title === 'light'}
          />
        </ContainerHeader>
        <ContainerBody>
          {
            loading ?
              <Loading />
              :
              <FlatList
                data={allShows}
                keyExtractor={item => String(item.show.id)}
                renderItem={renderItem} />
          }
        </ContainerBody>
      </Container>
    </ContainerScreen>
  );
}
