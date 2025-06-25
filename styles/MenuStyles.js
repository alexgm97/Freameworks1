
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
    marginBottom: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logoutButton: {
    marginTop: 40,
    alignSelf: 'center',
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 8,
  },
  logoutText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
