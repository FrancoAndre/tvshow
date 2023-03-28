import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: ${props => props.theme.background};
    margin-top: 50px;
    width: 100%;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
`;

export const ContainerTitle = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 50px;
`;

export const Title = styled.Text`
    font-size: 20px;
    color: ${props => props.theme.text};
    padding: 10px;
`;

export const TouchableClose = styled.TouchableOpacity`
    height: 30px;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.background};
    margin-right: 20px;
    border-radius: 50px;
`;

export const TextTouchableClose = styled.Text`
    font-size: 20px;
    color: ${props => props.theme.text};
    font-weight: bold;
`;

export const TouchableSelectedSeason = styled.TouchableOpacity`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    border-bottom-color: ${props => props.theme.text};
    border-bottom-width: 1px;
`;


export const TextTouchableSelectedSeason = styled.Text`
    margin-left: 20px;
    color: ${props => props.theme.text};
`;
