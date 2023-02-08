import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { IEpisodesList } from './const/ContextTVShow';

import Episodes from './Components/General/Episodes';
import Home from './Components/General/Home';


export type RootStackParamList = {
    Home: undefined;
    Episode: { episode: IEpisodesList };
 };

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Routes(){
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                headerShown: false
                }}
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Episode" component={Episodes}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}