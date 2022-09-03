import * as React from 'react';
import { useState } from 'react'
import { Image, View, StyleSheet ,Button , } from 'react-native';

export default function App() {
  const [state,setstate] = useState([{
    show:false
  }])

  const ImageData = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'

  const showButton = () => {
     setstate({
       show:true
     })
  }

  const hideButton = () =>{
    setstate({
      show:false
    })
  }

  if(state.show){
    return(
    <View style={{flex:1,flexDirection:'column',alignItems:'center',justifyContent:'center',backgroundColor:'#f0a52e'}}>
      <Image source={{uri:ImageData}} style={{width:225,height:200}} />
      <View style={{marginTop:20}}>
      <Button 
      onPress={()=> showButton()}
  title= "Show Image"
  color='green'
  accessibilityLabel="Learn more about this purple button"
      />
      </View>
      <View style={{marginTop:20}}>
       <Button 
  onPress={()=> hideButton()}
  title="Hide Image"
  color="red"
  accessibilityLabel="Learn more about this purple button"
  />
      </View>
  </View>

  )
  }else{
     return(
    <View style={{flex:1,flexDirection:'column',alignItems:'center',justifyContent:'center',backgroundColor:'#f0a52e'}}>
      <View style={{marginTop:20}}>
      <Button 
      onPress={()=> showButton()}
  title= "Show Image"
  color='green'
  accessibilityLabel="Learn more about this purple button"
      />
      </View>
      <View style={{marginTop:20}}>
       <Button 
  onPress={()=> hideButton()}
  title="Hide Image"
  color="red"
  accessibilityLabel="Learn more about this purple button"
  />
      </View>
  </View>

  )
  }
    
  }
