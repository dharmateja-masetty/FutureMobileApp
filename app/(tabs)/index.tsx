import { Button } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import * as React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import TabDetailsScreen from './details';
import TabTwoScreen from './two';

export type RootStackParamList = {
  Home: undefined;
  Two: undefined;
  Details: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

type TabOneScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Two'>;

export default function AppNavigator() {
  return (
    <RootStack.Navigator initialRouteName="Home">
      <RootStack.Screen name="Home" component={TabOneScreen} />
      <RootStack.Screen name="Two" component={TabTwoScreen} />
      <RootStack.Screen name="Details" component={TabDetailsScreen} />
    </RootStack.Navigator>
  );
}

export function TabOneScreen() {
  const navigation = useNavigation<TabOneScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/splash-icon.png")}
        style={{ width: 150, height: 150 }}
      />
      <Button onPress={() => navigation.navigate('Two')}>
        Go to Details
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});
