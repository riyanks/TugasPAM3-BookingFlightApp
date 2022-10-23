import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, TextInput, View, Button} from 'react-native';
import BackgroundCurve from './BackgroundCurve';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { useState, useEffect, useCallback } from 'react';
import { inlineStyles } from 'react-native-svg';
// import { useFonts } from 'expo-font';
// import * as SplashScreen from 'expo-splash-screen';

const FlightSearch = ({navigation})=>{
  // const [fontsLoaded] = useFonts({
  //   'Inter-Black': require('./assets/fonts/Inter-Black.otf'),
  // });

  // useEffect(() => {
  //   async function prepare() {
  //     await SplashScreen.preventAutoHideAsync();
  //   }
  //   prepare();
  // }, []);

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  // if (!fontsLoaded) {
  //   return null;
  // }

  const [source, setSource] = useState('');
  const [destination, setdestination] = useState('');
  const [date, setDate] = useState("");
  return (
    <>
      <StatusBar barstyle="dark-content" />
        <View style={styles.container}>
          <BackgroundCurve styles={styles.svg} />
          <View style={styles.headercontainer}>
            <View style={styles.headerGroupIndicator}>
              <FontAwesome name="bars" color="#fff" size={25}/>
              <MaterialCommunityIcons name="account" color="#fff" size={25}/>
            </View>

            <Text style={styles.heading}>Hilling.id</Text>
          </View>

        <View style = {styles.card}>
          <Text style={styles.textcard} >Lokasi Keberangkatan</Text>
          <View sytle={styles.inputt}>
            <MaterialCommunityIcons name="airplane-takeoff" color="black" size={25}/>
            <TextInput style={styles.textinput}  onChangeText={(source) => setSource(source)} value={source} placeholder="Masukkan Lokasi Keberangkatan" selectTextOnFocus={false}/>
          </View>

          <Text style={styles.textcard} >Lokasi Tujuan</Text>
          <View sytle={styles.inputt}>
            <MaterialCommunityIcons name="airplane-landing" color="black" size={25}/>
            <TextInput style={styles.textinput}  onChangeText={(destination) => setdestination(destination)} value={destination}    placeholder="Masukkan Lokasi Tujuan" selectTextOnFocus={false}/>
          </View>

          <Text style={styles.header2} >Tanggal Keberangkatan</Text>
            <View sytle={styles.inputt}>
              <Fontisto name="date" color="black" size={25}/>
              <TextInput style={styles.textinput}  onChangeText={(date) => setDate(date)} value={date} placeholder="Masukkan Lokasi Tujuan(dd/mm/yyyy)" selectTextOnFocus={false}/>
            </View>

              <Button
                color= '#ED7D31'
                title="cari"
                style={{marginTop : 100}}
                onPress={()=> navigation.navigate('ResultFlight',{date,source,destination})}
              />

        </View>
        <View style={styles.kotak}>
              <Text style={styles.copyright}>Copyright Riyan Khoiri - 120140212</Text>
            </View>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#F1F1F1',
  },
  svg: {
    position :"absolute",
    width : Dimensions.get('window').width,
  },
  headercontainer:{
    marginTop:-250,
    padding:15,
  },
  headerGroupIndicator:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  heading: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginTop: 35,
    // width: 2,
  },
  card:{
    backgroundColor: 'white',
    margin: 'auto',
    width: '90%',
    padding:20,
    borderRadius:20,
    marginLeft: 20,
    shadowColor: "#000", 
    shadowOffset: {width: 0,height: 2,},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }, 
  // textcard:{
  //   fontFamily:'Sans-Serif',
  // },
  inputt :{
    backgroundColor :"blue",
    width: '100%',
    flexDirection:'row',
    alignItems: 'center',
    marginBottom:10,
    marginTop:5,
    paddingLeft:10,
    borderWidth:1,
    borderRadius:10,
    borderColor: 'black',
  },
  textinput:{
    height: 40,
    width: '80%',
    padding: 10,
    borderRadius:10,
    borderWidth: 1,
    borderColor:'#797575',
    marginBottom:10,
  },
  kotak: {
    flex:1,
    borderRadius:10,
  },
  copyright: {
    color : '#797575',
    fontWeight: 'bold',
    marginBottom: 30,
    marginTop: 'auto',
    textAlign: 'center',
  }
  
});
export default FlightSearch;
