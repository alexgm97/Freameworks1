
import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: width * 0.06,
    justifyContent: 'center',
  },
  title: {
    fontSize: width * 0.07,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    padding: width * 0.03,
    marginBottom: 15,
    borderRadius: 8,
    fontSize: width * 0.04,
  },
});
