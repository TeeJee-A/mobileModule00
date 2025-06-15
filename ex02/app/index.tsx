import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

const Home = () => {
  const buttons: string[] = [
    '7',
    '8',
    '9',
    'A',
    'AC',
    '4',
    '5',
    '6',
    '+',
    '-',
    '1',
    '2',
    '3',
    '×',
    '/',
    '0',
    '.',
    '00',
    '=',
  ];

  const handlePress = (value: string) => {
    console.log(value);
  };

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
      }}
    >
      <View
        style={{
          width: '100%',
          backgroundColor: 'black',
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
        }}
      >
        <TextInput
          value="0"
          style={{
            color: 'white',
            fontSize: 40,
            fontWeight: 'bold',
            textAlign: 'right',
            paddingHorizontal: 10,
          }}
        />
        <TextInput
          value="0"
          style={{
            color: 'white',
            fontSize: 40,
            fontWeight: 'bold',
            textAlign: 'right',
            paddingHorizontal: 10,
          }}
        />
      </View>
      <View
        style={{
          backgroundColor: 'black',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 10,
        }}
      >
        {buttons.map((button: string, index: number) => (
          <View
            key={index}
            style={{
              width: button === '=' ? '39%' : '19%',
              height: 80,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 3,
            }}
          >
            <TouchableOpacity
              onPress={() => handlePress(button)}
              style={{
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor:
                  button === 'A' ||
                  button === 'AC' ||
                  button === '+' ||
                  button === '/' ||
                  button === '-' ||
                  button === '×'
                    ? 'orange'
                    : button === '='
                    ? 'orange'
                    : 'white',
                borderRadius: 30,
              }}
            >
              <Text style={{ fontSize: 24 }}>{button}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Home;
