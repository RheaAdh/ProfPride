import React from 'react'
import { Text } from "react-native"
import { Stack, Avatar } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
const Profile = ({navigation,route}) => {
    return (
        <Avatar style={styles.avatar} label={route.params.title} autoColor />
    )
}
const text="Hi"
const styles={
    avatar:{
        margin:150
    }
}
export default Profile
