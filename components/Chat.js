import React, { useState } from "react";
import {  View, Text, Button } from "react-native";

const Chat = (props) => {
    return(
        <View>
            <Text>Hi {props.username} You can chat here shortly</Text>
        </View>
    );
}

export default Chat;