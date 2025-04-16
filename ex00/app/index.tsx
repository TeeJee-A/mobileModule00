import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Home = () => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 20,
      }}
    >
      <Text
        style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', paddingHorizontal: 20 }}
      >
        Welcome
      </Text>
      <TouchableOpacity
        style={{
          width: '50%',
          maxWidth: 300,
          minWidth: 150,
          height: 50,
          borderRadius: 10,
          backgroundColor: 'red',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => console.log('Button Pressed!')}
      >
        <Text style={{ fontSize: 18 }}>Go to Details</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
