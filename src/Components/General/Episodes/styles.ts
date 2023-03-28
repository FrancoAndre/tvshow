import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.background};
    display: flex;
    align-items: center;
`;

export const Title = styled.Text`
    color: ${props => props.theme.text};
    padding: 20px;
    font-size: 15px;
    font-weight: bold;
`;

export const Image = styled.Image`
    height: 250px;
    width: 80%;
    object-fit: cover;
    border-radius: 10px;
`;

export const ContainerBack = styled.View`
    height: 50px;
    width: 100%;
    background-color: ${props => props.theme.background};
    bottom: 0px;
    position: absolute;
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const TouchableBack = styled.TouchableOpacity`
    width: 80%;
    height: 45px;
    background-color: transparent;
    border-color: ${props => props.theme.text};
    border-width: 1px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const TextTouchableBack = styled.Text`
    color: ${props => props.theme.text};
    font-size: 18px;
`;