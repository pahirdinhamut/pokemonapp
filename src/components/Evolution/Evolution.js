import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Evolution = ({ pokemon }) => {
  const evo = [1, 2, 3];
  const { evoImg, setEvoImg } = useState([]);
  const image = [
    {
      imageUrl: "",
    },
  ];

  useEffect(() => {
    const getEvolution = async () => {
      evo.map(async (item) => {
        await axios
          .get(`https://pokeapi.co/api/v2/pokemon/${item}`)
          .then(function (res) {
            const newEvoImg = res.data.sprites.other.dream_world.front_default;

            console.log(newEvoImg);
            return newEvoImg;
          })
          .catch((err) => {
            console.log(err);
          });
      });
    };
    getEvolution();
  }, [image]);

  return <View></View>;
};

export default Evolution;

const styles = StyleSheet.create({});
