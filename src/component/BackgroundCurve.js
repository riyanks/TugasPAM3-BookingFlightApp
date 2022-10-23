import { StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Svg, {
  Circle,
  Ellipse,
  G,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Image,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from 'react-native-svg'

export default function BackgroundCurve() {

  return (
    <View>
        <View style={styles.viewAbove}/ >

    <Svg style={styles.svg} height="90%" width="100%" >
     <Path fill="#0ae800" d="M0,256L48,261.3C96,267,192,277,288,250.7C384,224,480,160,576,160C672,160,768,224,864,240C960,256,1056,224,1152,202.7C1248,181,1344,171,1392,165.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"/>   
     </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
    viewAbove:{
        backgroundColor : "#0ae800",
        height : 300,
    },
    svg: {
        position: "absolute",
        top: 250,
    }
})