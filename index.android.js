import React from 'react';
import { Text, View, Button, AppRegistry } from 'react-native';

const generateRandomNumber = () => {
  var randomNumber = Math.floor(Math.random() * 10);

  alert(randomNumber);
}

const App = () => {
  return (
    <View>
      <Text>Gerador de números randomicos</Text>
      <Button
        title="Gerar um número randomico"
        onPress={generateRandomNumber}
      />
    </View>
  );
};

AppRegistry.registerComponent('RandomNumbers', () => App)
