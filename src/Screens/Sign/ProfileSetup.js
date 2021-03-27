import React, { useState } from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { colors, sizes, fonts, screen, shadow } from "../theme";
import { Ionicons } from "@expo/vector-icons";
import firebase from "firebase";

function FirstNameSetup({ navigation, route }) {
  const [name, setName] = useState("");
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "white",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          alignItems: "center",
        }}
      >
        <Text
          style={{
            margin: 10,
            fontWeight: "500",
            fontSize: 24,
            marginTop: 40,
          }}
        >
          What's your first name?
        </Text>
        <TextInput
          style={{
            textAlign: "center",
            marginTop: 30,
            fontSize: 40,
            // width: screen.width,
            height: 80,
          }}
          // placeholder="0"
          keyboardType="default"
          onChangeText={(text) => setName(text)}
          placeholderTextColor={colors.gray2}
          autoFocus
          selectionColor="black"
        />
      </View>
      <View
        style={{
          marginBottom: screen.height * 0.4,
          alignSelf: "flex-end",
          marginRight: 20,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            firebase
              .firestore()
              .collection("Users")
              .doc(firebase.auth().currentUser.uid)
              .set(
                {
                  firstName: name,
                },
                { merge: true }
              )
              .then(() => navigation.navigate("LastNameSetup"));
          }}
          disabled={name.length === 0}
        >
          <Ionicons
            name="arrow-redo-circle"
            size={50}
            color={name.length === 0 ? colors.gray2 : colors.greeny}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

function LastNameSetup({ navigation, route }) {
  const [name, setName] = useState("");
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "white",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          alignItems: "center",
        }}
      >
        <Text
          style={{
            margin: 10,
            fontWeight: "500",
            fontSize: 24,
            marginTop: 40,
          }}
        >
          What's your last name?
        </Text>
        <TextInput
          style={{
            textAlign: "center",
            marginTop: 30,
            fontSize: 40,
            // width: screen.width,
            height: 80,
          }}
          keyboardType="default"
          onChangeText={(text) => setName(text)}
          placeholderTextColor={colors.gray2}
          autoFocus
          selectionColor="black"
        />
      </View>
      <View
        style={{
          marginBottom: screen.height * 0.4,
          alignSelf: "flex-end",
          marginRight: 20,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            firebase
              .firestore()
              .collection("Users")
              .doc(firebase.auth().currentUser.uid)
              .set(
                {
                  lastName: name,
                },
                { merge: true }
              )
              .then(() => navigation.navigate("GenderSetup"));
          }}
          disabled={name.length === 0}
        >
          <Ionicons
            name="arrow-redo-circle"
            size={50}
            color={name.length === 0 ? colors.gray2 : colors.greeny}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

function GoalSetup({ navigation }) {
  const [fitnessPlan, setFitnessPlan] = useState("");

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Text
        style={{
          margin: 10,
          fontWeight: "500",
          fontSize: 24,
          marginTop: 40,
        }}
      >
        What's your goal?
      </Text>
      <TouchableOpacity
        onPress={() => {
          firebase
            .firestore()
            .collection("Users")
            .doc(firebase.auth().currentUser.uid)

            .set(
              {
                fitnessGoal: { goal: "balance", label: "Get fitter" },
              },
              { merge: true }
            )
            .then(() => navigation.navigate("AgeSetup"));
        }}
      >
        <View style={[styles.mainView, shadow.shadowModal]}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              margin: 20,
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View>
                <Text style={{ fontSize: 16, fontWeight: "700" }}>
                  Get fitter
                </Text>
                <Text style={{ color: colors.gray }}>
                  Tone up & feel healthy
                </Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          firebase
            .firestore()
            .collection("Users")
            .doc(firebase.auth().currentUser.uid)
            .set(
              {
                fitnessGoal: { goal: "heavyWeightGain", label: "Gain muscle" },
              },
              { merge: true }
            )
            .then(() => navigation.navigate("AgeSetup"));
        }}
      >
        <View style={[styles.mainView, shadow.shadowModal]}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              margin: 20,
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View>
                <Text style={{ fontSize: 16, fontWeight: "700" }}>
                  Gain muscle
                </Text>
                <Text style={{ color: colors.gray }}>
                  Build mass & strength
                </Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          firebase
            .firestore()
            .collection("Users")
            .doc(firebase.auth().currentUser.uid)

            .set(
              {
                fitnessGoal: { goal: "heavyWeightLoss", label: "Lose weight" },
              },
              { merge: true }
            )
            .then(() => navigation.navigate("AgeSetup"));
        }}
      >
        <View style={[styles.mainView, shadow.shadowModal]}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              margin: 20,
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View>
                <Text style={{ fontSize: 16, fontWeight: "700" }}>
                  Lose weight
                </Text>
                <Text style={{ color: colors.gray }}>
                  Get motivated & energized
                </Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

function GenderSetup({ navigation, route }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Text
        style={{
          margin: 10,
          fontWeight: "500",
          fontSize: 24,
          marginTop: 40,
        }}
      >
        What's your gender?
      </Text>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          onPress={() => {
            firebase
              .firestore()
              .collection("Users")
              .doc(firebase.auth().currentUser.uid)
              .set(
                {
                  gender: "Female",
                },
                { merge: true }
              )
              .then(() => navigation.navigate("GoalSetup"));
          }}
          style={{ marginHorizontal: 20 }}
        >
          <View
            style={[
              styles.mainView,
              shadow.shadowModal,
              { width: screen.width * 0.3 },
            ]}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                margin: 20,
                justifyContent: "space-between",
                alignSelf: "center",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View>
                  <Ionicons name="female" size={40} color="black" />

                  <Text style={{ color: colors.gray }}>Female</Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginHorizontal: 20 }}
          onPress={() => {
            firebase
              .firestore()
              .collection("Users")
              .doc(firebase.auth().currentUser.uid)
              .set(
                {
                  gender: "Male",
                },
                { merge: true }
              )
              .then(() => navigation.navigate("AgeSetup"));
          }}
        >
          <View
            style={[
              styles.mainView,
              shadow.shadowModal,
              { width: screen.width * 0.3 },
            ]}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                margin: 20,
                justifyContent: "space-between",
                alignSelf: "center",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View>
                  <Ionicons name="male" size={40} color="black" />

                  <Text style={{ color: colors.gray }}>Male</Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function AgeSetup({ navigation, route }) {
  const [age, setAge] = useState("");
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "white",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          alignItems: "center",
        }}
      >
        <Text
          style={{
            margin: 10,
            fontWeight: "500",
            fontSize: 24,
            marginTop: 40,
          }}
        >
          How old are you?
        </Text>
        <TextInput
          style={{
            textAlign: "center",
            marginTop: 30,
            fontSize: 60,
            width: screen.width,
            height: 80,
          }}
          placeholder="0"
          keyboardType="number-pad"
          onChangeText={(text) => setAge(text)}
          placeholderTextColor={colors.gray2}
          autoFocus
          selectionColor="black"
        />
      </View>
      <View
        style={{
          marginBottom: screen.height * 0.4,
          alignSelf: "flex-end",
          marginRight: 20,
        }}
      >
        <TouchableOpacity
          disabled={age.length === 0}
          onPress={() => {
            firebase
              .firestore()
              .collection("Users")
              .doc(firebase.auth().currentUser.uid)
              .set(
                {
                  age: parseInt(age),
                },
                { merge: true }
              )
              .then(() => navigation.navigate("HeightSetup"));
          }}
        >
          <Ionicons
            name="arrow-redo-circle"
            size={50}
            color={age.length === 0 ? colors.gray2 : colors.greeny}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}



const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName={"FirstNameSetup"}>
      <Stack.Screen
        name="FirstNameSetup"
        component={FirstNameSetup}
        options={({ navigation, route }) => ({
          headerTitleAlign: "center",
          headerTitle: "Step 1 of 5",
          gestureEnabled: true,
          headerLeft: () => null,
        })}
      />
      <Stack.Screen
        name="LastNameSetup"
        component={LastNameSetup}
        options={({ navigation, route }) => ({
          headerTitleAlign: "center",
          headerTitle: "Step 2 of 5",
          gestureEnabled: true,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons
                style={{ marginLeft: 10 }}
                name="ios-return-up-back"
                size={30}
                color="black"
              />
            </TouchableOpacity>
          ),
        })}
      />

 
      <Stack.Screen
        name="GenderSetup"
        component={GenderSetup}
        options={({ navigation, route }) => ({
          headerTitleAlign: "center",
          headerTitle: "Step 3 of 5",
          gestureEnabled: true,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons
                style={{ marginLeft: 10 }}
                name="ios-return-up-back"
                size={30}
                color="black"
              />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="AgeSetup"
        component={AgeSetup}
        options={({ navigation, route }) => ({
          headerTitleAlign: "center",
          headerTitle: "Step 4 of 5",
          gestureEnabled: true,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons
                style={{ marginLeft: 10 }}
                name="ios-return-up-back"
                size={30}
                color="black"
              />
            </TouchableOpacity>
          ),
        })}
      />
      
    </Stack.Navigator>
  );
}

export default function ProfileSetup() {
  return <MyStack />;
}
const styles = StyleSheet.create({
  mainView: {
    width: screen.width * 0.9,
    marginVertical: 15,
    borderRadius: 20,
    backgroundColor: "#fff",
    alignSelf: "center",
  },
});
