import React from 'react';
import {View} from 'react-native';
import {HOME_CARDS_TYPE} from '../../../../type/homePage/homePageTypes';
import {homePageCardsStyle} from './homePageCardsStyle';
import Card from '../card/card';

const Cards = (props: HOME_CARDS_TYPE) => {
  const {data, setAmount, onPress, plusAction, minesAction} = props;
  const [isFocused, setIsFocused] = React.useState(false);
  const [selectedCardIndex, setSelectedCardIndex] = React.useState(0);

  return (
    <View style={homePageCardsStyle.container}>
      {data.map((eachCard, index) => (
        <Card
          key={index}
          card={eachCard}
          isFocused={isFocused}
          index={index}
          selectedCardIndex={selectedCardIndex}
          onPress={onPress}
          setIsFocused={setIsFocused}
          setSelectedCardIndex={setSelectedCardIndex}
          plusAction={plusAction}
          minesAction={minesAction}
          setAmount={setAmount}
        />
      ))}
    </View>
  );
};

export default Cards;
