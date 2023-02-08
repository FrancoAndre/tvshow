import styled from "styled-components/native";

export const Container = styled.View`
    background-color: #181818;
    width: 100%;
    height: 100%;
`;

export const ContainerSearch = styled.View`
    padding: 20px;
    height: 80px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-bottom-color: white;
    border-bottom-width: 1px;
`;

export const InputSearch = styled.TextInput`
    width: 80%;
    font-size: 18px;
    color: white;
`;

export const TouchableSearch = styled.TouchableOpacity`
    width: 50px;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const TextTouchableSearch = styled.Text`
    color: white;
    font-size: 25px;
`;

export const TextTouchableShow = styled.TouchableOpacity`
    width: 100%;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ImageShow = styled.Image`
    width: 250px;
    height: 200px;
    object-fit: cover;
`;