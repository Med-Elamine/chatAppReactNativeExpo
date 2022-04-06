import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    
    container: {
        backgroundColor: "#4a9",
        flex: 1,
      },
    
      //personal info
    
      personalInfoContainer: {
        flex: 1,
        padding: 10,
        justifyContent: "space-between",
        alignItems: "stretch"
      },
    
      logo: { width: "auto",height: "20%" , resizeMode: "contain", margin: 40 },
    
      enterYourName: {
        alignSelf: "center",
      },
    
      nameText: {
        fontSize: 20,
      },
    
      nameTextInput: {
        borderColor: "rgba(52, 52, 52, 0.8)",
        borderWidth: 1,
        borderRadius: 4,
        fontSize: 18,
      },
    
      avatarBig: {
        height: 100,
        width: 100,
        borderRadius: 20,
        marginTop: 15,
        alignSelf: "center",
      },

});

export default Styles;