import { Auth } from 'aws-amplify';
import { useNavigation } from "@react-navigation/core";
import { View } from 'react-native';

async function handleSignUp(username, password, userType, navigation) {
  try {
    const attributes = { 'custom:userType': userType };
    const { user } = await Auth.signUp({
      username,
      password,
      attributes,
    });
    navigation.navigate("ActivateAccount");
  } catch (error) {
    console.log('error signing up:', error);
  }
}

export default handleSignUp;