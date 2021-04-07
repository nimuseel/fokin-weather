import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
	Haze: {
		iconName: 'weather-hail',
		gradient: ['#ada996', '#f2f2f2', '#dbdbdb', '#eaeaea']
	},
	Thunderstorm: {
		iconName: 'weather-lightning',
		gradient: ['#373B44', '#4286f4']
	},
	Drizzle: {
		iconName: 'weather-hail',
		gradient: ['#89F7FE', '#66A6FF']
	},
	Rain: {
		iconName: 'weather-rainy',
		gradient: ['#00C6FB', '#005BEA']
	},
	Snow: {
		iconName: 'weather-snowy',
		gradient: ['#7DE2FC', '#B9B6E5']
	},
	Atmosphere: {
		iconName: 'weather-hail',
		gradient: ['#89F7FE', '#66A6FF']
	},
	Clear: {
		iconName: 'weather-sunny',
		gradient: ['#FF7300', '#FEF253'],
		title: 'Clear',
		subtitle: 'today\'s is clear'
	},
	Clouds: {
		iconName: 'weather-cloudy',
		gradient: ['#D7D2CC', '#304352']
	}
};

export default function Weather({
	temp,
	condition
}) {
	return (
		<LinearGradient
			// Button Linear Gradient
			colors={weatherOptions[condition].gradient}
			style={styles.container}>
			<StatusBar barStyle='light-content'/>
			<View style={styles.halfContainer}>
				<MaterialCommunityIcons name={weatherOptions[condition].iconName} size={86} color="white"/>
				<Text style={styles.temp}>{temp}11º</Text>
			</View>

			<View style={styles.halfContainer}>
				<Text style={styles.title}>{weatherOptions[condition].title}</Text>
				<Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
			</View>
		</LinearGradient>

	)
}

Weather.propTypes = {
	temp: PropTypes.number.isRequired,
	condition: PropTypes.oneOf(['Thunderstorm', 'Drizzle', 'Rain', 'Snow', 'Atmosphere', 'Clear', 'Clouds',
		'Haze']).isRequired
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},

	temp: {
		fontSize: 32,
		color: 'white'
	},

	halfContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},

	title: {
		color: 'white',
		fontSize: 40,
		fontWeight: '300',
		marginBottom: 10,
		alignItems: 'flex-start'
	},

	subtitle: {
		color: 'white',
		fontWeight: '600',
		fontSize: 24,
		alignItems: 'flex-start'
	},

	/*textContainer: {
		paddingHorizontal: 20,
		alignItems: 'flex-start'
	}*/
})
