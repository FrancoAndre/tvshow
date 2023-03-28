import styled from 'styled-components/native';

export const LoadingContainer = styled.View`
    background-color: ${props => props.theme.background};
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LoadingText = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: ${props => props.theme.text};
    margin-bottom: 20px;
`;
