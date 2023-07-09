/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView
} from 'react-native';

import Splash from './src/screens/auth/Splash';
import SignIn from './src/screens/auth/SignIn';
import SignUp from './src/screens/auth/SignUp';




function App(): JSX.Element {


  return (
    <SafeAreaView >
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
      >
        <SignUp />
      </ScrollView>
    </SafeAreaView>
  );
}



export default App;
