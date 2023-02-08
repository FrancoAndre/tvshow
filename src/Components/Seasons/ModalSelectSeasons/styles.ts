import styled from "styled-components/native";

export const BackGround = styled.View`
    width: 100%;
    height: 100%;
    background-color: transparent;
    position: absolute;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    font-size: 20px;
    color: white;
    padding: 10px;
`;

export const TouchableSelectedSeason = styled.TouchableOpacity`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    border-bottom-color: silver;
    border-bottom-width: 1px;

`;


export const TextTouchableSelectedSeason = styled.Text`
    margin-left: 20px;
    color: white;
`;