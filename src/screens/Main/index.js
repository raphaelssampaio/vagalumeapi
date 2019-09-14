import React, {useState, useEffect} from 'react';
import {FlatList, Linking} from 'react-native';
import {
  Container,
  ImageContainer,
  Logo,
  InputContainer,
  SearchInput,
  ContentContainer,
  RankingText,
  Card,
  CommonContainer,
  NameAndPosition,
  ImageArtistContainer,
  ImageTextContainer,
  ImageArtist,
  TextContainer,
  CommonText,
  Button,
  ButtonText,
} from './styles';
import {logo} from '../../assets';

import {
  GET_SONGS_RANK,
  GET_ARTISTS_RANK,
  GET_ALBUNS_RANK,
} from '../../constants/api';
import api from '../../services/api';

export default function Main() {
  const [songs, setSongs] = useState([]);
  const [artists, setArtists] = useState([]);
  const [albuns, setAlbuns] = useState([]);

  useEffect(() => {
    async function getData() {
      const {data: songData} = await api.get(GET_SONGS_RANK);
      const musData = songData.mus.month.all;
      setSongs(musData);
      const {data: artistsData} = await api.get(GET_ARTISTS_RANK);
      const artData = artistsData.art.month.all;
      setArtists(artData);
      const {data: albunsData} = await api.get(GET_ALBUNS_RANK);
      const albData = albunsData.alb.month.all;
      setAlbuns(albData);
    }
    getData();
  }, []);

  function renderArtist(item, index) {
    return (
      <CommonContainer>
        <NameAndPosition>
          {index + 1} - {item.name}
        </NameAndPosition>
        <ImageTextContainer>
          <ImageArtistContainer>
            <ImageArtist source={{uri: item.pic_small}} />
          </ImageArtistContainer>
          <TextContainer>
            <CommonText>Views: {item.views}</CommonText>
            <CommonText>Uniques: {item.uniques}</CommonText>
          </TextContainer>
          <Button>
            <ButtonText onPress={() => Linking.openURL(item.url)}>
              Find songs
            </ButtonText>
          </Button>
        </ImageTextContainer>
      </CommonContainer>
    );
  }

  function renderSongs(item, index) {
    return (
      <CommonContainer>
        <NameAndPosition>
          {index + 1} - {item.name}
        </NameAndPosition>
        <ImageTextContainer>
          <ImageArtistContainer>
            <ImageArtist source={{uri: item.art.pic_small}} />
          </ImageArtistContainer>
          <TextContainer>
            <CommonText>Artist: {item.art.name}</CommonText>
            <CommonText>Rank: {item.rank}</CommonText>
            <CommonText>Uniques: {item.uniques}</CommonText>
          </TextContainer>
          <Button>
            <ButtonText onPress={() => Linking.openURL(item.url)}>
              See lyrics
            </ButtonText>
          </Button>
        </ImageTextContainer>
      </CommonContainer>
    );
  }

  function renderAlbuns(item, index) {
    return (
      <CommonContainer>
        <NameAndPosition>
          {index + 1} - {item.name}
        </NameAndPosition>
        <ImageTextContainer>
          <ImageArtistContainer>
            <ImageArtist source={{uri: item.art.pic_small}} />
          </ImageArtistContainer>
          <TextContainer>
            <CommonText>Artist: {item.art.name}</CommonText>
            <CommonText>Views: {item.views}</CommonText>
            <CommonText>Published: {item.published}</CommonText>
          </TextContainer>
          <Button>
            <ButtonText onPress={() => Linking.openURL(item.url)}>
              See Album
            </ButtonText>
          </Button>
        </ImageTextContainer>
      </CommonContainer>
    );
  }

  return (
    <>
      <Container>
        <ImageContainer>
          <Logo source={logo} />
        </ImageContainer>
        <InputContainer>
          <SearchInput />
        </InputContainer>
      </Container>
      <ContentContainer>
        <RankingText>Ranking Songs</RankingText>
        <Card>
          <FlatList
            data={songs}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => String(item.id)}
            renderItem={({item, index}) => renderSongs(item, index)}
          />
        </Card>
        <RankingText>Ranking Artists</RankingText>
        <Card>
          <FlatList
            data={artists}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => String(item.id)}
            renderItem={({item, index}) => renderArtist(item, index)}
          />
        </Card>
        <RankingText>Ranking Albuns</RankingText>
        <Card>
          <FlatList
            data={albuns}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => String(item.id)}
            renderItem={({item, index}) => renderAlbuns(item, index)}
          />
        </Card>
      </ContentContainer>
    </>
  );
}
