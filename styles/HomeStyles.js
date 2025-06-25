
import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

const fontTitle = Math.min(width * 0.06, 24);

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  contentBox: {
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 10,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    width: '100%',
    maxWidth: 400,
  },
  title: {
    fontSize: fontTitle,
    marginBottom: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
