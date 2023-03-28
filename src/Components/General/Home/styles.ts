import styled from 'styled-components/native';

export const Container = styled.ScrollView`
    background-color: ${props => props.theme.background};
    width: 100%;
    height: 100%;
`;

export const ContainerShow = styled.View`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`;

export const Title = styled.Text`
    color: ${props => props.theme.text};
    font-size: 20px;
    margin: 10px 0px;
`;

export const ContainerDescription = styled.View`
    width: 90%;
    display: flex;
`;

export const Description = styled.Text`
    color: ${props => props.theme.text};
    font-size: 14px;
    text-align: justify;
`;

export const Image = styled.Image`
    width: 80%;
    height: 400px;
    object-fit: cover;
    border-radius: 10px;
`;
