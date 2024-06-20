import React, {useRef} from 'react';
import {
  Dimensions,
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RenderItem from './components/renderItem';
import {useAdd} from './useAdd';
import {addPageStyle} from './addPageStyle';
import BottomSheet from '../../components/bottom/bottomSheet';

const {width, height} = Dimensions.get('screen');

const Add = () => {
  const {
    activeSheet,
    description,
    dispatch,
    getCardsData,
    getRandomIcon,
    name,
    onSaveHandler,
    ref,
    setDescription,
    setName,
  } = useAdd();

  React.useEffect(() => {
    AsyncStorage.setItem('cards', JSON.stringify(getCardsData)).then(r => {});
  }, [getCardsData]);

  return (
    <>
      <BottomSheet
        ref={ref}
        name={name}
        description={description}
        setName={setName}
        setDescription={setDescription}
        onSave={onSaveHandler}
      />
      <SafeAreaView style={addPageStyle.container}>
        <View style={addPageStyle.titleCard}>
          <Text style={addPageStyle.text}>Recourses</Text>
        </View>
        <Pressable
          style={addPageStyle.button}
          onPress={() => {
            activeSheet();
          }}>
          <Text style={addPageStyle.buttonText}>Add New Recourse</Text>
        </Pressable>
        <View style={addPageStyle.listContainer}>
          <FlatList
            data={getCardsData}
            keyExtractor={(_, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            bounces={false}
            renderItem={({item, index}) => {
              return (
                <RenderItem
                  card={item}
                  lastItem={index === getCardsData.length - 1}
                />
              );
            }}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default Add;
