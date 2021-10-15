import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>


      <View style={styles.heaferWrapper} >
        <Text style={styles.headerTitle}>
          BELOVED LJUBLJANA </Text>

      </View>


      <View style={styles.jumbotron}>
        <View style={styles.leftContaineric}>
          <Text style={styles.leftText1}>Ljubljana is the city of echoes, the city of illusions, and the city of yearning. </Text>
        </View>
        <View style={styles.rightContaineric}>
          <Text style={styles.rightText2}>The city is like a great house, and the house in its turn a small city.</Text>
        </View>



      </View>


      <View style={styles.containerSlika}>
        <Image style={styles.slikica}
          source={{ uri: "https://www.monde-et-mode.com/wp-content/uploads/2019/09/IMG_2580.jpg" }}
        />

        <Image style={styles.slikica}
          source={require("./assets/slika1.jpg")}
        />
      </View>




      <Button 
        title="PRESS THE BUTTON"
        color="#DE8F6E"
        accessibilityLabel="Learn more about this purple button"
        onPress={() => Alert.alert("Bravo!")}
      />


      <TouchableOpacity
        style={styles.touchableContainer}
        onPress={() => Alert.alert("Bravo!")}
      >

        <Text style={styles.textStyle}>
          Ljubljana, hidden diamond of Europe. 

        </Text>

      </TouchableOpacity>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CF8E80'
  },

  headerWrapper: {

    padding: 10,
    paddingTop: 10,
    borderBottomWidth: 2
  },

  headerTitle: {

    textAlign: "center",
    paddingTop: 30,
    fontSize: 30,
    fontFamily: "Lucida Handwriting"
    

  },

  jumbotron: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "fcb5b5"
  },

  slikica: {
    width: 500,
    height: 500

  },

  containerSlika: {
    flexDirection: 'row-reverse',
    padding: 250

  },

  touchableContainer: {
margin : 100,
backgroundColor : "#fcb5b5",
padding: 100
  },
  textStyle: {
fontSize: 50,
fontFamily: "Lucida Handwriting"

  },

  leftText1: {
    fontSize: 15,
    fontFamily: "Lucida Handwriting"
    
  },
  rightText2: {
    fontSize: 15,
    fontFamily: "Lucida Handwriting"
    
  }


  


});