import styled from "styled-components/native";

export const ContainerScreen = styled.View`
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.background};
`;

export const Container = styled.View`
    margin-top: 50px;
    justify-content: center;
    align-items: center; 
    background-color: ${props => props.theme.background};
    margin-bottom: 50px;
`;

export const SearchContainer = styled.View`
    width: 90%;
    height: 50px;
    flex-direction: row;
    padding: 10px;
    align-items: center;
    border-radius: 10px;
    border-width: 1px;
    border-color: ${props => props.theme.text};
`;

export const Search = styled.TextInput`
    margin-left: 10px;
    color: ${props => props.theme.text};
`;

export const ContainerHeader = styled.View`
    width: 90%;
    margin-top: 15px;
    flex-direction: row;
    justify-content: space-between;
`;

export const HeaderText = styled.Text`
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    color: ${props => props.theme.text};
`;

export const ContainerBody = styled.View`
    width: 100%;    
    height: 90%;
    flex-direction: row;
`;

export const Show = styled.View`
    flex-direction: row;
    margin-top: 10px;
    padding: 10px;
`;

export const ImageShow = styled.Image`
    width: 92px;
    height: 157px;
    border-radius: 10px;
    object-fit: cover;
`;

export const DescriptionShow = styled.View`
    width: 70%;
    height: 157px;
    margin-left: 10px;
    justify-content: space-around;
`;


export const TextTouchableShow = styled.Text`
    color: ${props => props.theme.text};
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    text-align: justify;
`;


export const TextDescriptionShow = styled.Text`
    color: ${props => props.theme.text};
    font-size: 10px;
    text-align: justify;
`;

export const ButtonReadMore = styled.TouchableOpacity`
    width: 86px;
    height: 30px;
    top: 5px;
    border: 1px solid ${props => props.theme.text};
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    align-self: flex-end;
`;

export const TextReadMore = styled.Text`
    font-style: normal;
    font-weight: 500;
    font-size: 9px;
    line-height: 11px;
    color: ${props => props.theme.text};
`;