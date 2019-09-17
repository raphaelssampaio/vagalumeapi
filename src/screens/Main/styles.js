import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  padding-top: ${getStatusBarHeight()}px;
  background: #070903;
  align-items: center;
`;

export const ImageContainer = styled.View`
  margin-bottom: 20px;
`;

export const Logo = styled.Image``;

export const InputContainer = styled.View`
  width: 85%;
  max-height: 40px;
  background: #333;
  border-radius: 25px;
  padding-left: 15px;
  margin-bottom: 150px;
`;

export const SearchInput = styled.TextInput.attrs({
  placeholder: 'Search song...',
  placeholderTextColor: 'white',
  underlineColorAndroid: 'transparent',
})`
  color: white;
  font-size: 16px;
`;

export const ContentContainer = styled.ScrollView`
  flex: 1;
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 2px;
`;
export const RankingText = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin: 5px 0 0 10px;
`;

export const Card = styled.View`
  flex: 1;
  background: #dfe3d5;
  padding: 5px;
  flex-direction: row;
  border-radius: 2px;
  border-color: #bcc4a7;
  border-width: 1px;
  margin: 10px;
`;

export const CommonContainer = styled.View`
  padding: 10px;
`;
export const NameAndPosition = styled.Text`
  font-size: 22px;
  font-weight: bold;
  max-width: 90%;
`;
export const ImageArtistContainer = styled.View``;
export const ImageArtist = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 10px;
  margin: 5px;
`;
export const TextContainer = styled.View``;

export const CommonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin: 2px 0 0 10px;
`;

export const ImageTextContainer = styled.View`
  flex-direction: row;
`;

export const Button = styled.TouchableOpacity`
  background: #6f9602;
  align-self: flex-end;
  border-radius: 10px;
`;

export const ButtonText = styled.Text`
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  color: white;
`;

export const Border = styled.View`
  flex: 1;
  border-width: 1px;
  padding: 5px;
`;
