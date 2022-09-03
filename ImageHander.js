
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Image, Dimensions } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';

export default function ImageHander() {
  return(
<View>
     <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={200}
                       imageHeight={200}>
                <Image style={{width:200, height:200}}
                       source={{uri:'https://images.pexels.com/photos/6274033/pexels-photo-6274033.jpeg'}}/>
    </ImageZoom>
    </View>

  )}
