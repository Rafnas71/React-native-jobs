import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import styles from "./welcome.style";
import { SIZES, icons } from "../../../constants";
const JobTypes = ["Full Time", "Part Time", "Contract"];

const Welcome = () => {
  const [activeJobType, setActiveJobType] = useState("Full Time");
  return (
    <View style={styles.container}>
      <Text style={styles.userName}>Hello User</Text>
      <Text style={styles.welcomeMessage}>Find Your Perfect Job</Text>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onChange={() => {}}
            placeholder="What are you looking for?"
          />
          <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
            <Image
              source={icons.search}
              resizeMode="contain"
              style={styles.searchBtnImage}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList
          data={JobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                // router.push(`/search/${item}`);
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(key)=>key}
          contentContainerStyle={{columnGap:SIZES.medium}}
          horizontal
        />
      </View>
    </View>
  );
};

export default Welcome;
