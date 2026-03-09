import { Stack, useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";

export default function Details() {
  const params = useLocalSearchParams();

  useEffect(() => {
    fetchPokemonByName();
  }, []);

  async function fetchPokemonByName() {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${params.name}`,
      );
      const data = await response.json();
      console.log(JSON.stringify(data.results, null, 2));
    } catch (error) {
      console.log(error);
    }
  }

  console.log(params);
  return (
    <>
      <Stack.Screen options={{ title: params.name }} />
      <ScrollView
        contentContainerStyle={{
          gap: 16,
          padding: 16,
        }}
      >
        <Text>{params.name}</Text>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({});
