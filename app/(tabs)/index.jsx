import { StatusBar } from 'expo-status-bar';  
import { Button, Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {Link} from 'expo-router';
import "./global.css";
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import {useState} from 'react';
import ReactDOM from 'react-dom/client';
import { AgChartsReact } from 'ag-charts-react';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from 'react-native-chart-kit'
import { VictoryAxis, VictoryBar, VictoryChart, VictoryLine, VictoryPie, VictoryTheme } from "victory-native";


export default function App(UserDetail) {
  const [count, setcount] = useState(0);
  const handleChange = () => {
    switch (count) {
      case 0 :
        return(CreateLineeChart())
        
        break;
      case 1:
        return(CreatePieChart());
        break;
        case 2:
          return(CreateLineChart());
          break
        }
  }
  return (
    <SafeAreaView style ={styles.container}>
      <View style={{position:'fixed',alignItems: 'center', backgroundColor:"#130933", width:'100%', padding:20 }} >
        <Text style ={{color:'white',fontSize:22}}>Dashboard</Text>
        </View>
      <ScrollView  contentContainerStyle={{alignItems: 'center'}}>
        
        <View className = 'abx' style ={styles.centerDisplay} >
       
          {handleChange()}

          <View style={{flexDirection:"row"}}>  
          <TouchableOpacity style={styles.button} onPress= {() => {if (count >0){setcount(count-1)}; handleChange()} }>
              <Text>Previous</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress= {() => {if (count < 1){setcount(count+1)}; handleChange()} } >
              <Text>Next </Text>
            </TouchableOpacity>
            
          </View>
          
        </View>
        <View className=" " style ={styles.bottomDisplay}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={styles.importantStats}>
            <Text style={styles.topic}>Net sales</Text>
            <Text style = {styles.info}>${sum-lose}</Text>
          </View>
          <View style={styles.importantStats}>
            <Text style={styles.topic}>Total sales</Text> 
            <Text style = {styles.info}>${sum}</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={styles.importantStats}>
            <Text style={styles.topic}>Total Orders</Text>
            <Text style = {styles.info}>{sum_order}</Text>
          </View>
          <View style={styles.importantStats}>
            <Text style={styles.topic}>Refunded Orders</Text>
            <Text style = {styles.info}>{0}</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={styles.importantStats}>
            <Text style={styles.topic}>Voided Order</Text>
            <Text style = {styles.info}>{voided}</Text>
          </View>
          <View style={styles.importantStats}>
            <Text style={styles.topic}>Net Order</Text>
            <Text style = {styles.info}>{sum_order-voided}</Text>
          </View>
        </View>
        

        </View>
        
        
      </ScrollView>
    </SafeAreaView>
  );

  
}   


const data = [
  { month: '18 Jan', earnings: 13000 },
  { month: '19 Jan', earnings: 16500 },
  { month: '20 Jan', earnings: 14250 },
  { month: '21 Jan', earnings: 19000 },
  { month: '22 Jan', earnings: 21231 },
  { month: '23 Jan', earnings: 10293 },
  { month: '24 Jan', earnings: 15423 },
  { month: '25 Jan', earnings: 12645 },
  { month: '26 Jan', earnings: 36231 },
  { month: '27 Jan', earnings: 12341 },
  { month: '28 Jan', earnings: 23414 },
  { month: '29 Jan', earnings: 19000 },
  { month: '30 Jan', earnings: 23402 },
  { month: '31 Jan', earnings: 12000 },
  { month: '01 Feb', earnings: 30212 },
  { month: '02 Feb', earnings: 23415 },
  { month: '03 Feb', earnings: 23414 }
];

var sum = 0;
 sum = data.reduce((accumulator, object) => {
  return accumulator + object.earnings;
}, 0);
var lose = 0;


function CreateLineeChart(){
  return(
    <View style ={{height: 400,width:'98%', marginTop: 30, backgroundColor: "white", borderRadius: 30}}>
  <StatusBar style ="auto" />
    <Text style={{alignItems:"centers",margin:10}} >Total Sale</Text>
    <Text style={{alignItems:"centers",margin:10,fontSize:20}} >${sum}</Text>
    <VictoryChart  theme={VictoryTheme.material} width={400} height={280} padding={{ left: 70, top: 20, bottom: 40, right:20 }}>
    <VictoryAxis
    //tickCount={ 3 }
    dependentAxis={ true } /* To target the y-axis */
  />
  <VictoryAxis
    tickCount={4}
  />
  
    <VictoryLine     animate={{
      duration: 1000,
      onLoad: { duration: 500 }
      }} style= {{data: { stroke: "#c43a31" },parent: { border: "1px solid #ccc"}}}  data = {data} x="month" y = "earnings"/>
  
    </VictoryChart>
    
  </View>
  )
  
}



const pieData = [
  {
    name: 'Seoul',
    orderNumber: 2150,
    color: 'rgba(131, 167, 234, 1)',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Toronto',
    orderNumber: 2800,
    color: '#F00',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Beijing',
    orderNumber: 527,
    color: 'red',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'New York',
    orderNumber: 8538,
    color: '#ffffff',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Moscow',
    orderNumber: 11920,
    color: 'rgb(0, 0, 255)',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
];

var sum_order = 0;
 sum_order = pieData.reduce((accumulator, object) => {
  return accumulator + object.orderNumber;
}, 0);
var voided = 0;

function CreatePieChart(){
  return(
    <View style ={{height: 400,width:'98%', marginTop: 30, backgroundColor: 'white', borderRadius: 30}}>
    <StatusBar style ="auto" />
    <Text style={{alignItems:"centers",margin:10}} >Total Sale</Text>
    <Text style={{alignItems:"centers",margin:10,fontSize:20}} >{sum_order}</Text>
    <VictoryPie animate padding={{ left: 70, top: 30, bottom: 20, right:10 }} height={220} width={340} theme={VictoryTheme.material} data={pieData.slice(0,5)} x="name" y="orderNumber" Labels="name"/>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: 'black'
  //
  //,
  },
  centerDisplay :{ 
    alignItems: 'center',
    //justifyContent: 'center',
     width: '100%', 
     backgroundColor: 'grey',
      height:550},
    bottomDisplay:{backgroundColor:'black', height:1000, width:'100%',paddingTop:30},
    importantStats:{
      alignItems: 'center',
      width: '40%',
      height: 100,
      margin:20,
      padding:10,
      backgroundColor:'white',
      borderRadius: 10
    },
    topic:{
      fontSize:12,
      alignContent: 'flex-start'
    },
    button:{alignItems: 'center',alignContent: 'center',
    backgroundColor: '#DDDDDD',
    width: "30%",
    height: 50,
    //position:'absolute',
    padding: 12, margin: 10, borderRadius: 10, marginTop:30
  },
  info:{
    fontSize:20,
    color:'gold',
    margin:10
  }
}
  );


