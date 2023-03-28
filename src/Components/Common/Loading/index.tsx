import { useContext } from 'react';
import { ActivityIndicator } from 'react-native';
import { ThemeContext } from '../../../const/ContextTheme';
import {
    LoadingContainer,
    LoadingText
} from './styles'

export const Loading = () => {
    const { theme } = useContext(ThemeContext)
    return (
        <LoadingContainer>
            <LoadingText>Loading</LoadingText>
            <ActivityIndicator size="large" color={theme.text} />
        </LoadingContainer>
    )
}