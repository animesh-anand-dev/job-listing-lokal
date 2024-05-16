import React, { useState } from "react";
import { Button, TextInput } from "react-native";

const SearchButton = () => {
  const [inputData, setInputData] = useState("");

  function inputHandler(inputText) {
    setInputData([...inputData, inputText]);
  }
  return (
    <View>
      <TextInput
        onChangeText={inputHandler}
        placeholder="Search"
      />
      <Button title="Search" />
    </View>
  );
};

export default SearchButton;
