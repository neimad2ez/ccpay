<<<<<<< HEAD
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Profile = () => {
  return (
    <View>
      <Text>Profile</Text>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})
=======
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { VictoryPie,VictoryTheme,VictoryBar,VictoryAxis, VictoryChart } from 'victory-native'

const profile = () => {
  return (
    <SafeAreaView style ={styles.container}>
      <ScrollView  contentContainerStyle={{alignItems: 'center'}}>
      <View style={{position:'fixed',alignItems: 'center', backgroundColor:"#130933", width:'100%', padding:20, marginTop:30 }} >
          <Text style ={{color:'white' ,fontSize:22}}>User Profile</Text>
          </View>

          <View style ={{height: 400,width:'98%', marginTop: 30, backgroundColor: 'white',alignItems:"center",alignContent:"center", borderRadius: 30}}>
        <StatusBar style ="auto" />
        <Text style={{alignItems:"centers" ,margin:10}} >Spending on each field</Text>
        <Text style={{fontSize:20}}>total spent: ${total_spending}</Text>
        <Text style={{alignItems:"centers",margin:10,fontSize:20}} >{}</Text>
        <VictoryPie animate padding={{ left: 10, top: 30, bottom: 20, right:10 }} height={220} width={340} theme={VictoryTheme.material} data={pieData.slice(0,6)} x="name" y="orderNumber" Labels="name"/>
       </View>
       

          <View style ={{height: 400,width:'98%', marginTop: 100, marginBottom:50,alignItems:"center", backgroundColor: 'white', borderRadius: 30}}>
          <StatusBar style ="auto" />
          <Text style={{alignItems:"centers",margin:10}} >Resulting Spending Quota</Text>
          <Text style={{alignItems:"centers",margin:10,fontSize:20}} >{}</Text>


          <VictoryChart
              theme={VictoryTheme.material}  width={350} height={300} padding={{ left: 70, top: 20, bottom: 40, right:20 }}
              domainPadding={{ x: 10 }}> 
          <VictoryBar horizontal
            style={{
              data: { fill: "#c43a31" }
            }}
            data={DATA2}  x="cat" y = "spent"
          />
        </VictoryChart>
         
       </View>
        </ScrollView>
        </SafeAreaView>
  )
}
const DATA1 = [
  {cat:'leisure', spent:400},
  {cat:'Transport', spent:500},
  {cat:'Catering', spent:600},
  {cat:'Rent', spent:1250},
  {cat:'Shopping', spent:800},
  {cat:'Transfer', spent:1400}
]

const DATA2 = [
  {cat:'leisure', spent:200},
  {cat:'Transport', spent:200},
  {cat:'Catering', spent:50},
  {cat:'Rent', spent:0},
  {cat:'Shopping', spent:700},
  {cat:'Transfer', spent:100}
]

const limitSpent = [
  {cat:'leisure', spent:600},
  {cat:'Transport', spent:700},
  {cat:'Catering', spent:650},
  {cat:'Rent', spent:1250},
  {cat:'Shopping', spent:1500},
  {cat:'Transfer', spent:1500}
]

const pieData = [
  {
    name: 'Transportation',
    orderNumber: 500,
    color: 'rgba(131, 167, 234, 1)',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Catering',
    orderNumber: 600,
    color: '#F00',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Leisure',
    orderNumber: 400,
    color: 'red',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Rent',
    orderNumber: 1250,
    color: '#ffffff',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Shopping',
    orderNumber: 800,
    color: 'rgb(0, 0, 255)',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Transfer',
    orderNumber: 1400,
    color: 'rgb(0, 0, 255)',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
];

var total_spending = 0;
 total_spending = pieData.reduce((accumulator, object) => {
  return accumulator + object.orderNumber;
}, 0);

export default profile

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: 'black'
  //
  //,
  },
})

>>>>>>> 73f8c52dcc1d0cf9bae188aa167aafef2f9dd666
