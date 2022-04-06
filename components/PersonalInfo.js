import React from "react";
import { View, TextInput, Text, Image, Button  } from "react-native";
import Styles from "./Styles";

const PersonalInfo = () => {
    return(
        <View style={Styles.personalInfoContainer}>

            <Image style={Styles.logo} source={require("../assets/chat.png")}/>

            <View style={Styles.enterYourName}>
                <Text style={Styles.nameText}>Enter the User Name</Text>
                <TextInput style={Styles.nameTextInput}></TextInput>
            </View>

            <Button title="Start Chating" onPress={() => {} }/>

        </View>
    );
}

export default PersonalInfo;