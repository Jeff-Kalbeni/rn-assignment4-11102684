import * as React from 'react';
import { StyleSheet } from 'react-native';
import Login from './components/LoginScreen';


export default function App() {
  return (
    <Login/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
