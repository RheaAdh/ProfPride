import { ActivityIndicator } from "react-native";
import {ScreenCenter} from '../utils/styled.components'

export default function Loading({fullScreen}) {
    if (fullScreen) return <ScreenCenter><ActivityIndicator size="large" color="#7E0CD8" /></ScreenCenter>
    
    return <ActivityIndicator size="large" color="#7E0CD8" />
}