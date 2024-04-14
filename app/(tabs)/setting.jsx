import { SafeAreaView, StyleSheet, Text, TouchableOpacity, TouchableOpacityComponent, View } from 'react-native'
import React from 'react'

const setting = () => {
  return (
    <SafeAreaView style ={styles.container}>
      <View style={{position:'fixed',alignItems: 'center', alignContent:"center", backgroundColor:"#130933", width:'100%', padding:20, marginTop:30 }} >
      <Text style ={{color:'white' ,fontSize:22}}>Setting</Text>
      </View>
      <View style={{alignItems:'center', margin:20}}>
          <Text style ={{color:'white' ,fontSize:16}}>Set Spent Limit</Text>
      </View>
      <View style={{flexDirection:"row",alignItems:"center", alignContent:"center", marginLeft:'20%'}}>  
          <TouchableOpacity style={styles.button} onPress= {() => {if (count >0){setcount(count-1)}; handleChange()} }>
              <Text>-100</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress= {() => {if (count < 1){setcount(count+1)}; handleChange()} } >
              <Text>+100 </Text>
            </TouchableOpacity>
            
          </View>
    </SafeAreaView>

  )
}

export default setting

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
    //
    //,
    },
    button:{alignItems: 'center',alignContent: 'center',
    backgroundColor: '#DDDDDD',
    width: "30%",
    height: 50,
    //position:'absolute',
    padding: 12, margin: 10, borderRadius: 10, marginTop:30
  }
})