import { Auth } from 'aws-amplify';

async function signIn(username, password, navigation) {
    try {
        const user = await Auth.signIn({
            username,
            password
        });
        const type = user.attributes['custom:userType'];
        if(type == "listener"){
            navigation.navigate("Listener");
        }
    } catch (error) {
        console.log('error signing in', error);
    }
}

export default signIn;