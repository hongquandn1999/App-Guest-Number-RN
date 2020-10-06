import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const StartScreenGame = (props) => {
    return (
        <View style={styles.screen}>
            <Text>Nguyễn Hà Minh</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    }
});

export default StartScreenGame;