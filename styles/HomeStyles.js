
import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: width * 0.06,
    justifyContent: 'center',
  },
  title: {
    fontSize: width * 0.06,
    marginBottom: height * 0.05,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
