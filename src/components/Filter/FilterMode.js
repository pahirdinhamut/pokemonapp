import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Types from "./Types";
import {
  TypesCategory,
  WeaknessesType,
  HeightsTypes,
  WeightsType,
} from "./typesCategory";

import Slider from "@react-native-community/slider";

const FilterMode = () => {
  const [allType, setAllType] = useState(TypesCategory);
  const [weaknessesType, setWeaknessesType] = useState(WeaknessesType);
  const [heightsTypes, setHeightTypes] = useState(HeightsTypes);
  const [getWeightsType, setWeightType] = useState(WeightsType);
  const [isSelecet, setIsSelect] = useState(false);

  const selectType = (item) => {
    const newData = allType.map((newItem) => {
      if (newItem.id == item.id) {
        return {
          ...newItem,
          isSelecet: !item.isSelecet,
        };
      }
      return {
        ...newItem,
      };
    });
    setAllType(newData);
  };
  const selectWeakness = (item) => {
    const newData = weaknessesType.map((newItem) => {
      if (newItem.id == item.id) {
        return {
          ...newItem,
          isSelecet: !item.isSelecet,
        };
      }
      return {
        ...newItem,
      };
    });
    setWeaknessesType(newData);
  };
  const selectHeightTypes = (item) => {
    const newData = heightsTypes.map((newItem) => {
      if (newItem.id == item.id) {
        return {
          ...newItem,
          isSelecet: !item.isSelecet,
        };
      }
      return {
        ...newItem,
      };
    });
    setHeightTypes(newData);
  };

  const selectWeightTypes = (item) => {
    const newData = getWeightsType.map((newItem) => {
      if (newItem.type == item.type) {
        return {
          ...newItem,
          isSelecet: false,
        };
      }
      return {
        ...newItem,
      };
    });
    setWeightType(newData);
    console.log(newData);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ marginHorizontal: 20 }}>
        <Text style={{ color: "black", fontSize: 22 }}>Filter</Text>
        <Text>
          Use advanced search to explore Pokémon by type, weakness, height and
          more!
        </Text>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontWeight: "700", fontSize: 16, marginHorizontal: 20 }}>
          Types
        </Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {allType.map((item, index) => {
            return (
              <View key={index} style={{ marginRight: 10 }}>
                <Types
                  onPress={() => selectType(item)}
                  type={item.type}
                  isSelect={item.isSelecet}
                />
              </View>
            );
          })}
        </ScrollView>
      </View>
      <View style={{ marginTop: 10 }}>
        <Text style={{ fontSize: 16, fontWeight: "700", marginHorizontal: 20 }}>
          Weaknesses
        </Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {weaknessesType.map((item, index) => {
            return (
              <View key={index} style={{ marginRight: 10 }}>
                <Types
                  onPress={() => selectWeakness(item)}
                  type={item.type}
                  isSelect={item.isSelecet}
                />
              </View>
            );
          })}
        </ScrollView>
      </View>
      <View style={{ marginTop: 10 }}>
        <Text style={{ fontSize: 16, fontWeight: "700", marginHorizontal: 20 }}>
          Heights
        </Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {heightsTypes.map((item, index) => {
            return (
              <View key={index} style={{ marginRight: 10 }}>
                <Types
                  onPress={() => selectHeightTypes(item)}
                  type={item.type}
                  isSelect={item.isSelecet}
                />
              </View>
            );
          })}
        </ScrollView>
      </View>
      <View style={{ marginTop: 10 }}>
        <Text style={{ fontSize: 16, fontWeight: "700", marginHorizontal: 20 }}>
          Weight
        </Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {getWeightsType.map((item, index) => {
            return (
              <View key={index} style={{ marginRight: 10 }}>
                <Types
                  onPress={() => selectWeightTypes(item)}
                  type={item.type}
                  isSelect={item.isSelecet}
                />
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
export default FilterMode;
