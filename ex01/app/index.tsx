import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Home = () => {
  const [state, setState] = React.useState<boolean>(false);
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
        {state ? 'Hello World!' : 'Welcome'}
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
        onPress={() => setState((prev) => !prev)}
      >
        <Text style={{ fontSize: 18 }}>Go to Details</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
