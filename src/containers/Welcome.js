import React, { useState, useEffect } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import styled from 'styled-components/native';

const Page = styled.View`
  flex:1;
  align-items:center;
`;

const LeaderText = styled.Text`
  font-size:25px;
`;

const Input = styled.TextInput`
  width:90%;
  height:50px;
  font-size:18px;
  background-color:#D3D3D3;
  margin-top:20px;
  border-radius:10px;
  padding:10px;
`;

const ResultButton = styled.TouchableHighlight`
  margin-top:10px;
  border-radius: 10px;
  border-color: black;
  background-color: #D3D3D3;
  padding:10px;
`;

const ResultArea = styled.View`
  width:100%;
  margin-top:30px;
  background-color:#D3D3D3;
  padding:20px;
  justify-content:center;
  align-items:center;
`;

const ResultItemTitle = styled.Text`
  font-size:18px;
  font-weight:bold;
`;

const ResultItem = styled.Text`
  font-size:15px;
  margin-bottom:20px;
`;

const PctArea = styled.View`
  flex-direction:row;
  margin:20px;
`;

const PctItem = styled.TouchableHighlight`
  margin-top:10px;
  border-radius: 10px;
  border-color: black;
  background-color: #D3D3D3;
  padding:10px;
  margin-right:5px;
`;

export default () => {

  const [calculation, setCalculation] = useState('');
  const [tip, setTip] = useState(0);
  const [pct, setPct] = useState(10);

  const Result = () => {
    const numericResult = parseFloat(calculation)

    if (numericResult) {
      setTip(numericResult * pct / 100);
    }
  }

  useEffect(() => {
    Result();
  }, [pct]);

  return (
    <Page>
      <LeaderText>Calculadora de Gorjeta</LeaderText>
      <Input
        placeholder='Quanto deu a conta?'
        placeholderTextColor='gray'
        keyboardType='numeric'
        value={calculation}
        onChangeText={number => setCalculation(number)} />
      <PctArea>
        <PctItem onPress={() => setPct(5)}>
          <Text>5%</Text>
        </PctItem>
        <PctItem onPress={() => setPct(10)}>
          <Text>10%</Text>
        </PctItem>
        <PctItem onPress={() => setPct(15)}>
          <Text>15%</Text>
        </PctItem>
        <PctItem onPress={() => setPct(20)}>
          <Text>20%</Text>
        </PctItem>
      </PctArea>
      <ResultButton onPress={Result}>
        <Text>{`Calcular ${pct}%`}</Text>
      </ResultButton>
      {tip > 0 &&
        < ResultArea >
          <ResultItemTitle>Valor da conta</ResultItemTitle>
          <ResultItem>R$ {parseFloat(calculation).toFixed(2)}</ResultItem>

          <ResultItemTitle>Valor da Gorjeta</ResultItemTitle>
          <ResultItem>R$ {tip.toFixed(2)} ({pct}%)</ResultItem>

          <ResultItemTitle>Valor Total</ResultItemTitle>
          <ResultItem>R$ {(parseFloat(calculation) + tip).toFixed(2)}</ResultItem>
        </ResultArea>
      }
    </Page >
  );
}