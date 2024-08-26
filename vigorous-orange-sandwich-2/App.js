import React, { useState } from 'react';
import {
   StyleSheet, 
  Text, 
  TextInput, 
  View, 
  TouchableOpacity 
  
  } 

 
  from 'react-native';

export default function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleAddition = () => {
    const number1 = parseFloat(num1) || 0;
    const number2 = parseFloat(num2) || 0;
    setResult((number1 + number2).toString());
  };

  const handleSubtraction = () => {
    const number1 = parseFloat(num1) || 0;
    const number2 = parseFloat(num2) || 0;
    setResult((number1 - number2).toString());
  };

  const handleMultiplication = () => {
    const number1 = parseFloat(num1) || 0;
    const number2 = parseFloat(num2) || 0;
    setResult((number1 * number2).toString());
  };

  const handleDivision = () => {
    const number1 = parseFloat(num1) || 0;
    const number2 = parseFloat(num2) || 0;
    if (number2 !== 0) {
      setResult((number1 / number2).toString());
    } else {
      setResult('Cannot divide by zero');
    }
  };
  const handlePower = () => {
    const base = parseFloat(num1) || 0;
    const exponent = parseFloat(num2) || 0;
    setResult(Math.pow(base, exponent).toString());
  };

  const handleSquareRoot = () => {
    const number = parseFloat(num1) || 0;
    if (number >= 0) {
      setResult(Math.sqrt(number).toString());
    } else {
      setResult('Invalid input for square root');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculator App </Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter number"
        value={num1}
        onChangeText={setNum1}
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter number"
        value={num2}
        onChangeText={setNum2}
      />
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={handleAddition}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleSubtraction}>
          <Text style={styles.buttonText}>Subtract</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleMultiplication}>
          <Text style={styles.buttonText}>Multiply</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleDivision}>
          <Text style={styles.buttonText}>Divide</Text>
        </TouchableOpacity>
         <TouchableOpacity style={styles.button} onPress={handlePower}>
          <Text style={styles.buttonText}>Power</Text>
        </TouchableOpacity>
         <TouchableOpacity style={styles.button} onPress={handleSquareRoot}>
          <Text style={styles.buttonText}>SquareRoot</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.result}>Answer: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    fontSize: 18,
  },
  buttons: {
    flexDirection: 'columns',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '170%',
    marginVertical: 40,
  },
  button: {
    height: 40,
    width: '80%',
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: 'yellow',
    padding: 11,
    borderRadius: 5,
    width: '20%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
  },
  result: {
    fontSize: 20,
  },
});

