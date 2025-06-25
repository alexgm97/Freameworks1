
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
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  label: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: width * 0.04,
  },
  slider: {
    width: '100%',
    height: 40,
    marginBottom: 20,
  },
  link: {
    marginTop: 20,
    alignItems: 'center',
  },
  linkText: {
    color: 'blue',
    textDecorationLine: 'underline',
    fontSize: width * 0.04,
  },
});
