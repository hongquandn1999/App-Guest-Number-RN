import React from 'react'
import { StyleSheet, View, Text, TextInput, Button } from 'react-native'
import Card from '../components/Card'
import Colors from '../constants/colors'
import Input from '../components/Input'

const StartScreenGame = (props) => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Hà Ngọc Minh</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a number</Text>
                <Input style={styles.input} blurOnSubmit autoCapitalize='none' autoCorrect={false} keyboardType='numeric' maxLength={2} />
                <View style={styles.buttonContainer}>
                    <View>
                        <Button style={styles.styleButton} title="Reset" onPress={() => { }} color={Colors.accent} />
                    </View>
                    <View>
                        <Button style={styles.styleButton} title="Confirm" onPress={() => { }} color={Colors.primary} />
                    </View>
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10,

    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',

    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    styleButton: {
        width: 100
    },
    input: {
        width: 50,
        textAlign: 'center'
    }
});

export default StartScreenGame;