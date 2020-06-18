import React from 'react'; //how to make different components work together.
//the complete library

import { Text, StyleSheet, View } from 'react-native'; //take information to show in some comments
//just part of the library

const ComponentsScreen = () => { //could be without 'function'
	const greeting = 'Otro texto, recordar (); y component View'
	const myName = 'Gustavo Jimenez'
	//Refer to a JS object in JSX (Just text object)
	const otherElement = <Text>OtherElement, better location</Text>
	//Refer to a JSX object in JSX 

	return (
	<View>
		<Text style={styles.textStyle}>This is the components screen</Text>
		<Text>{greeting}</Text>
		{otherElement}
		<Text style={styles.textStyle}>Getting started with React Native!</Text>
		<Text style={styles.textStyle1}>My name is {myName}</Text>
	</View>
	); //Styles es una 'prop'
};

const styles = StyleSheet.create({
	textStyle: {
		fontSize: 45
	},

	textStyle1: {
		fontSize: 20
	}
});

export default ComponentsScreen;
