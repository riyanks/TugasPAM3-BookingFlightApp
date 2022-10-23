import { TouchableOpacity, SafeAreaView, ScrollView, View, FlatList, StyleSheet, Text, StatusBar,Image } from 'react-native';
import React, { useState } from 'react'
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import flightsdata from '../../Data.json';

const FlightResults = ({route, navigation})=>{ 
    const {date,source,destination}= route.params;
    const [Source, setSource] = useState('');
    const [Destination, setdestination] = useState('');
    const [Date, setDate] = useState("");
    const [plane, setplane] = useState('');
    const [time, settime] = useState('');
    const [nama, setnama] = useState('');
    
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         data: [],
    //     };
    // }
    
    // getData = () =>{
    //     fetch(flightsdata)
    //     .then((rensponse) =>rensponse.json())
    //     .then((json) => {
    //         this.setState({data: json});
    //         console.log(json);
    //     })
    //     .catch((error) => {
    //         console.error(error);
    //     });
    // };
    const SearchByData = () =>{
        try{
                 let sourceFlights = flightsdata.filter(
                                             (flight => (flight.Keberangkatan === source)&&
                                            (flight.date === date)&&
                                            (flight.Tujuan === destination)))
                                            setnama(sourceFlights[0].maskapai_nama);
                                            setplane(sourceFlights[0].maskapai_logo);
                                            setSource(sourceFlights[0].Keberangkatan);
                                            setdestination(sourceFlights[0].Tujuan);
                                            setDate(sourceFlights[0].date);
                                            settime(sourceFlights[0].time)
    }
    catch(error){
        navigation.navigate('Home');
        alert("Maaf rute penerbangan tidak tersedia, silahkan lihat rute pada Data.json")
    }

      
         
    };
  return (
    <View style={styles.container} onLayout={SearchByData}>
      <View style={styles.header}>
          <View style={styles.top}>
            <TouchableOpacity style={styles.button} onPress={ () => navigation.goBack()}>
              <Fontisto name="arrow-left-l" color="#fff" size={25}/>
            </TouchableOpacity>
            <Text style={styles.heading}>Hiling.id</Text>
            <MaterialCommunityIcons name="account" color="#fff" size={25}/>
          </View>
          <Text style={styles.heading2}>Hasil Pencarian Penerbangan</Text>
          <Text style={styles.heading2}>(tanggal Keberangkatan)</Text>
      </View>
      <SafeAreaView>
        <ScrollView style={styles.scrollView}>
          <View style={styles.item}>
            <Text style={styles.tujuanasal}> {JSON.parse(JSON.stringify(Source))}   -   {JSON.parse(JSON.stringify(Destination))}</Text>
            <View style={styles.waktupesawat}>
            <Fontisto name="plane" color="black" size={25}/>
            <Image
                        style={styles.planePic} 
                        source={{
                        uri: `${JSON.parse(JSON.stringify(plane))}`
                        }}/>
            <Text style={styles.texttanggal}> {JSON.parse(JSON.stringify(Date))} {"\n"} {JSON.parse(JSON.stringify(time))}</Text>
            </View>  
        </View>
        </ScrollView>
      </SafeAreaView>
      <Text style={styles.copyright}>Copyright Riyan Khoiri - 120140212</Text>
    </View>
  )
}

const styles = StyleSheet.create({  
  container: {
    flex: 1,
    backgroundColor: '#F1F1F1',
  },
  header:{
    width:'100%',
    height:'25%',
    backgroundColor: '#0ae800',
    padding:20,
    marginBottom:10,
  },
  heading: {
    color: 'white',
    fontSize: 30,
    // fontFamily: "Sans-Serif",
  },
  heading2: {
    // fontFamily: "Sans-Serif",
    color: 'white',
    textAlign:'center',
  },
  top: {
    flexDirection: "row",
    alignItems:"center",
    justifyContent:"space-between",
    marginBottom:10,
    marginTop:30,
    
  },
  planePic:{
    width : 80,
    height : 30,
    marginRight:100,
},
  item: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius:10,
  },
  title: {
    fontSize: 32,
  },
  waktupesawat:{
    marginTop: 20,
    marginBottom:10,
    flexDirection: "row",
    alignItems:"center",
    justifyContent:"space-between"
  },
  maskapai:{
    marginLeft:30,
    fontSize:20,
    fontWeight: "bold",
  },
  texttanggal:{
    color:'blue',
  },
  copyright: {
    color : '#797575',
    fontWeight: 'bold',
    padding:20,
    marginTop: 400,
    textAlign: 'center',
  },

})
  export default FlightResults;