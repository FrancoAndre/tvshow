import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: black;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
`;

export const ContainerHeader = styled.View`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const TitleHeader = styled.Text`
    color: white;
    font-size: 20px;
`;  

export const ContainerShows = styled.View`
    width: 100%;
    height: 70%;
`;

export const Title = styled.Text`
    color: white;
`;

export const Image = styled.Image`
    width: 200px;
    height: 200px;
    object-fit: cover;
    margin-top: 30%;
`;