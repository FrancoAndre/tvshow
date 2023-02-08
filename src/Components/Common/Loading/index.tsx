import { ActivityIndicator } from 'react-native';
import {
    LoadingContainer,
    LoadingText
} from './styles'

export const Loading = () => {
    return (
        <LoadingContainer>
            <LoadingText>Loading</LoadingText>
            <ActivityIndicator size="large" color="white" />
        </LoadingContainer>
    )
}