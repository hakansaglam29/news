import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
} from 'react-native';

const News = () => {
  return (
    <SafeAreaView> 
      <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.news}>News</Text>
          <Image style={styles.newslogo}  source={require('./img/news.png')}/>
        </View>
        
        <View style={styles.container}>
            <Image style={styles.picture}  source={require('./img/statistic.png')}/>
            <View style={styles.first}> 
            <Text style={styles.firsttext}>Bulls Exit BitMEX Bitcoin Futures Market</Text>
            </View>
            <View style={styles.second}> 
            <Text style={styles.secondtext}>Since the announcement from U.S. regulators, BitMEX has witnessed an outflox pf more than 40,000 bitcoins, currently worth more than $422 million</Text>
            </View>
        </View>
        <View style={styles.container}>
            <Image style={styles.picture} source={require('./img/coinbase.jpg')}/>
            <View style={styles.first}>
              <Text style={styles.firsttext}>Coinbase customers can now dodge a bank</Text>
            </View >
            <View style={styles.second}>
            <Text style={styles.secondtext}>New update from Coinbase quickens the transmutation of crypto into fiat. Coinbase has unveiled a faster way for its customers to move digital currincies out of crypto and into their bank accounts</Text>
            </View>
        </View>
        <View style={styles.container}>
            <Image style={styles.picture} source={require('./img/hacker.jpeg')}/>
            <View style={styles.first}>
              <Text style={styles.firsttext}>Hacker Releases Information on Las Vegas-Area</Text>
            </View >
            <View style={styles.second}>
            <Text style={styles.secondtext}>A hacker published documents containing Social Security numbers, student grades and other private information stolen from a large public-school district in Las Vegas</Text>
            </View>
        </View>
        <View style={styles.container}>
            <Image style={styles.picture} source={require('./img/it.webp')}/>
            <View style={styles.first}>
              <Text style={styles.firsttext}>Re-integration of IT: "Backsourcing is common"</Text>
            </View >
            <View style={styles.second}>
            <Text style={styles.secondtext}>Companies talk a lot about outsourcing IT. They are more silent when it comes to IT backsourcing, which is not so rare</Text>
            </View>
        </View>
        <View style={styles.container}>
            <Image style={styles.picture} source={require('./img/github.png')}/>
            <View style={styles.first}>
              <Text style={styles.firsttext}>GitHub plans to replace 'master' with 'main' starting next month</Text>
            </View >
            <View style={styles.second}>
            <Text style={styles.secondtext}>Beginning next month, any new source version controls created on GitHub will be named "main" instead of "master" as part of the company's efforts to remove unnecessary references to slavery and replace it with broader terms</Text>
            </View>
        </View>
        <View style={styles.container}>
            <Image style={styles.picture} source={require('./img/react.jpg')}/>
            <View style={styles.first}>
              <Text style={styles.firsttext}>Similar software to React, the best React alternatives</Text>
            </View >
            <View style={styles.second}>
            <Text style={styles.secondtext}>Declarative React makes creating interactive user interfaces effortless. Design simple views for each state in your application and React efficiently updates and renders just the right components as your data changes.</Text>
            </View>
        </View>
        <View style={styles.footer}>
            <Text style={styles.copyright}> Copyright©</Text>
            <Image style={styles.logo} source={require('./img/cw.png')}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  news: {
    paddingLeft: 12,
    color: "black",
    backgroundColor: "white",
    fontSize: 35,
    fontWeight: "bold",

  },
  footer: {
    height: 30,
    display:"flex",
    flexDirection:"row",
    justifyContent:"flex-start",
    padding: 5,
    marginLeft:80,
    marginRight:80,
    color: "black",
    backgroundColor: "white",
  },
  header: {
    height: 100,
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    padding: 5,
    color: "black",
    backgroundColor: "white",
  },
  copyright: {
    textAlign:"center"
  },
  container: {
    display:"flex",
    height:350,
    padding: 10,
    margin: 10,
    borderColor: "#e0e0e0",
    borderWidth: 1,
    borderRadius:5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity:0.15,
    shadowRadius: 2.84,
    elevation:1,
  },
  first: {
    display:"flex",
    flex:2,
    flexDirection:"column",
    justifyContent:"center",
    padding: 2,

  },
  firsttext: {
    fontSize: 17,
    fontWeight: "bold",

  },
  second: {
    flexDirection:"column",
    justifyContent:"center",
    flex:3,
    padding: 2,
  },
  secondtext: {
    fontSize: 13,
  },
  picture: {
    borderRadius:10,
    flex:9,
    width: "100%",
    height: "100%",
    resizeMode:"contain"
  },
  logo: {
    borderRadius:10,
    flex:9,
    width: "100%",
    height: "100%",
    resizeMode:"contain"
  },
  newslogo: {
    width: "100%",
    height: "100%",
    resizeMode:"contain",

  },
});
export default News;