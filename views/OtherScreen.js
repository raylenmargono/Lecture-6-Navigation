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


export default class OtherScreen extends React.Component {

    static navigationOptions = {
        title: 'This is another screen',
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>This is another page!</Text>
            </View>
        )
    }
}
