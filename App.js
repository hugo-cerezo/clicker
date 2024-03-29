import React from 'react';
import {StyleSheet, View} from 'react-native';
import Main from './Components/main';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {

  return (
    <View style={styles.container}>
      <Main name="Main"></Main>
      <script src="https://unpkg.com/react/umd/react.production.min.js" ></script>

      <script
        src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
        ></script>

      <script
        src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
        ></script>

      <script>var Alert = ReactBootstrap.Alert;</script>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossOrigin="anonymous"
      />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
