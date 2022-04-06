import React, { useState } from "react";
import {  View, Button, FlatList, TextInput } from "react-native";
import Styles from "./Styles";

const Chat = (props) => {
    const [chatInput, setChatInput] = useState("");

    return(
        <View style={Styles.container}>

        <FlatList></FlatList>

        <View style={Styles.sendSection}>
            <TextInput
            style={Styles.chatTextInput}
            value={chatInput}
            onChangeText={(text) => setChatInput(text)}
            />
            <Button
            title="Send"
            onPress={() => {
                setChatInput("");
            }}
            ></Button>
        </View>
        </View>
    );
}

export default Chat;