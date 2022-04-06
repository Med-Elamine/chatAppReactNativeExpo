import React, {useState} from "react";
import { View, TextInput, Text, Image, Button  } from "react-native";
import ImageChooser from "./ImageChooser";
import Styles from "./Styles";

const PersonalInfo = () => {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");

    return(
        <View style={Styles.personalInfoContainer}>

            <Image style={Styles.logo} source={require("../assets/chat.png")}/>

            <View style={Styles.enterYourName}>
                <Text style={Styles.nameText}>Enter the User Name</Text>
                <TextInput style={Styles.nameTextInput} onChangeText={(text) => setName(text)} value={name}></TextInput>
            </View>

            <ImageChooser onChangeImage={(image) => setImage(image)} /> 

            <Button title="Start Chating" onPress={() => {} }/>

        </View>
    );
}

export default PersonalInfo;