import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Route from './src/route/main';

type Props = {};

const App = (props: Props) => {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={styles.gesture}>
        <StatusBar barStyle={'dark-content'} />
        <Route />
      </GestureHandlerRootView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  gesture: {
    flex: 1,
  },
});

export default App;
