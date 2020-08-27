import React from 'react'
import { View, Text, StyleSheet, ScrollView, ImageBackground, Image } from 'react-native'
import { DrawerNavigatorItems } from 'react-navigation-drawer'
import { Ionicons } from '@expo/vector-icons'


const Sidebar = (props) => {
    return (
        <ScrollView>
            <ImageBackground source={require("../assets/img/bgm_1.jpg")} style={{ width: undefined, padding: 16, paddingTop: 48}}>
                <Image source={require("../assets/img/1_chandu.jpg")} style={styles.profile} />
                <Text style={styles.name}> Chandrasekhar </Text>
                <View style={{flexDirection: "row"}}>
                    <Text style={styles.followers}> 865 Followers </Text>
                    <Ionicons name="md-people" size={16} color="rgba(255, 255, 255, 0.8)" />
                </View>
            </ImageBackground>
            <View style={styles.container}>
                <DrawerNavigatorItems {...props}/>
            </View>
        </ScrollView>
    );
}

export default Sidebar;

const styles = StyleSheet.create({
    container : {
        flex : 1
    },
    profile : {
        width : 80,
        height : 80,
        borderRadius : 40,
        borderWidth : 3,
        borderColor : "#FFF"
    },
    name : {
        color : "#FFF",
        fontSize : 20,
        fontWeight : "800",
        marginVertical : 8
    },
    followers : {
        color : "rgba(255, 255, 255, 0.8)",
        fontSize : 16,
        marginRight : 4
    }
});