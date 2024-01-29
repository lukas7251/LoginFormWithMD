import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import MainAppBar from '../components/MainAppBar.js'

export default function Login() {

	const [formData, setFormData] = useState({username: '', password: ''})
	const [showError, setshowError] = useState(false)

	const validateAndSubmit = () => {
		setFormData(true)
		if (formData.username.length > 0 && formData.password.length > 8) {
			setFormData({username: '', password: ''})
			setshowError(false)
		}
	}
  return (
		<>
    	<MainAppBar title="Login" />
			<View style={styles.container}>
				<TextInput 
				label='Username' 
				style={styles.input_field} 
				value={formData.username} 
				onChangeText={text => setFormData({...formData, username: text})} 
				error={formData.username.length===0 && showError}
				/>
				<TextInput 
				label='Password' 
				style={styles.input_field} 
				keyboardType='visible-password'
				value={formData.password} 
				onChangeText={text => setFormData({...formData, password: text})} 
				error={formData.password.length < 8 && showError}
				/>
				<Button mode='contained' style={styles.button} onPress={validateAndSubmit}>Submit</Button>
			</View>		
		</>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
	input_field: {
		backgroundColor: '#fcfcfc',
		margin: (16,8,16,8)
	},
	button: {
		margin: (16,8,16,8)
	},
});
