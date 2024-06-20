import React from 'react';
import {Pressable, Text} from 'react-native';
import {HOME_CARD_TYPE} from '../../../../type/homePage/homePageTypes';
import {homePageCardStyle} from './homePageCardStyle';
import FocusButtons from '../focusButtons/focusButtons';
import {HOME_CARD_ICON_SIZE, SPACE} from '../../../../utils/constant';
import iconDrawer from '../../../../hooks/iconDrawer';

const Card = (props: HOME_CARD_TYPE) => {
  const {
    isFocused,
    selectedCardIndex,
    index,
    card,
    onPress,
    setSelectedCardIndex,
    setIsFocused,
    setAmount,
    plusAction,
    minesAction,
  } = props;
  return (
    <Pressable
      onPress={() => {
        onPress(
          index,
          selectedCardIndex,
          isFocused,
          setSelectedCardIndex,
          setIsFocused,
        );
      }}
      key={index}
      style={[homePageCardStyle.card]}>
      {isFocused && selectedCardIndex === index ? (
        <FocusButtons
          value={card.value}
          setAmount={setAmount}
          plusAction={plusAction}
          minesAction={minesAction}
        />
      ) : null}
      {iconDrawer(
        card.icon,
        HOME_CARD_ICON_SIZE.width,
        HOME_CARD_ICON_SIZE.height,
      )}
      <Text style={{marginVertical: SPACE / 1.5}}>{card.name}</Text>
      <Text style={{color: '#a9a9a9'}}>{card.description}</Text>
    </Pressable>
  );
};
export default Card;
