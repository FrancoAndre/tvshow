import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 20px;
`;

export const TouchableSelectionSeasons = styled.TouchableOpacity`
    width: 40%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
`;

export const TextTouchableSelectionSeasons = styled.Text`
    color: ${props => props.theme.text};
    font-size: 15px;
    font-weight: bold;
`;

export const Arrow = styled.Text`
    color: ${props => props.theme.text};
    transform: rotate(90deg);
    font-size: 30px;
    font-weight: bold;
`;

export const ContainerEpisodes = styled.View`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 20px;
`;

export const TouchableSelectionEpisode = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const TextTouchableSelectionEpisode = styled.Text`
    color: ${props => props.theme.text};
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
