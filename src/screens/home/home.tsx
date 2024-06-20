import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {useDerivedValue, useSharedValue} from 'react-native-reanimated';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {homePageStyle} from './homePageStyle';
import AmountAndGlass from './components/amountAndGlass/amountAndGlass';
import {MAX_HEIGHT} from '../../utils/constant';
import Cards from './components/cards/cards';
import useHome from './useHome';

const Home = () => {
  const {
    getCardsData,
    resolveData,
    cardOnPressHandler,
    plusHandler,
    minesHandler,
  } = useHome();
  const [amount, setAmount] = React.useState<number>(0);
  const translateY = useSharedValue(0);

  React.useEffect(() => {
    resolveData();
  }, []);

  React.useEffect(() => {
    AsyncStorage.getItem('value').then(value => {
      if (typeof value === 'string') {
        if (isNaN(Number(value))) {
          setAmount(0);
        } else {
          setAmount(Number(value));
        }
      }
    });
  }, []);

  React.useEffect(() => {
    translateY.value = -(MAX_HEIGHT * amount) / 100;
    AsyncStorage.setItem('value', String(amount)).then(r => {});
  }, [amount]);

  return (
    <SafeAreaView style={homePageStyle.container}>
      <AmountAndGlass amount={amount} translateY={translateY} />
      <Cards
        data={getCardsData}
        onPress={cardOnPressHandler}
        plusAction={plusHandler}
        minesAction={minesHandler}
        setAmount={setAmount}
      />
    </SafeAreaView>
  );
};
export default Home;
