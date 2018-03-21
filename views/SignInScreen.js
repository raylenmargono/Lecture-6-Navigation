import React from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    Button,
    StatusBar,
    StyleSheet,
    View,
    Text
} from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});


export default class SignInScreen extends React.Component {
    static navigationOptions = {
        title: 'Please sign in',
    };

    _signInAsync = async () => {
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('App');
    };

    render() {
        return (
            <View style={styles.container}>
                <Button title="Sign in!" onPress={this._signInAsync} />
            </View>
        );
    }

}
