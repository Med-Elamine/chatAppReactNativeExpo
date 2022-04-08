import React, { useState, useEffect } from "react";
import {  View, Button, FlatList, TextInput, Text, Animated, Easing, Image } from "react-native";
import Styles from "./Styles";
import RenderChatItem from "./ChatItem";


const Chat = (props) => {
    const [chatInput, setChatInput] = useState("");
    const [chatItemList, setChatItemList] = useState([]);
    
    
    const renderItem = ( {item} ) => {
        <RenderChatItem chatItem={item} username={props.username}></RenderChatItem>
     }

    return(
        <View style={Styles.container}>

        <FlatList
        inverted
        data={chatItemList.sort((a,b) => b.timeStamp - a.timeStamp)}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ></FlatList>

        <View style={Styles.sendSection}>
            <TextInput
            style={Styles.chatTextInput}
            value={chatInput}
            onChangeText={(text) => setChatInput(text)}
            />
            <Button
            title="Send"
            onPress={() => {
                setChatItemList([
                    ...chatItemList,
                    {
                        id: Math.random().toString(36).substring(7),
                        text: chatInput,
                        image: props.image,
                        timeStamp: Date.now(),
                        by: props.username,
                    }
                ])
                setChatInput("");
            }}     
            ></Button>
        </View>
        </View>
    );
}

export default Chat;