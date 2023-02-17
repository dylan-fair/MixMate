import { Auth } from 'aws-amplify';

async function confirmSignUp(username, code, navigation) {
    try {
      await Auth.confirmSignUp(username, code);
      navigation.navigate("SignIn");
    } catch (error) {
        console.log('error confirming sign up', error);
    }
}

export default confirmSignUp;