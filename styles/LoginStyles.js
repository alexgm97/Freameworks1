
import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

const inputWidth = Math.min(width * 0.8, 400);
const fontTitle = Math.min(width * 0.07, 26);

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  formBox: {
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 10,
    width: '100%',
    maxWidth: 450,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  title: {
    fontSize: fontTitle,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 16,
    width: inputWidth,
    alignSelf: 'center',
  },
  button: {
    width: '60%',
    alignSelf: 'center',
  },
});
