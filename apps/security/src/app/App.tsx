import { Text, View } from "react-native";
import * as SecureStore from "expo-secure-store";

const App = () => {
	const storeData = async (key: string, value: string) => {
		try {
			await SecureStore.setItemAsync(key, value);
			console.log("Data stored successfully");
		} catch (error) {
			console.error("Error storing data", error);
		}
	};

	const getData = async (key: string) => {
		try {
			const value = await SecureStore.getItemAsync(key);
			if (value !== null) {
				console.log("Retrieved data:", value);
			} else {
				console.log("No data found for key:", key);
			}
		} catch (error) {
			console.error("Error retrieving data", error);
		}
	};

	return (
		<View>
			<Text>Welcome to the Security App!</Text>
			<Text onPress={() => storeData("testKey", "testValue")}>Store Data</Text>
			<Text onPress={() => getData("testKey")}>Get Data</Text>
		</View>
	);
};

export { App };
