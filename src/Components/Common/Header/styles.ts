import styled from 'styled-components/native';

export const ContainerHeader = styled.View`
    margin-top: 50px;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom-color: ${props => props.theme.text};
    border-bottom-width: 1px;
`;

export const TitleBack = styled.Text`
    transform: rotate(270deg);
    color: ${props => props.theme.text};
    font-size: 50px;
`;

export const TitleHeader = styled.Text`
    color: ${props => props.theme.text};
    font-size: 20px;
`;
