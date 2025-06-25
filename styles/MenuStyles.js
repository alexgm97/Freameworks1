import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

const boxWidth = Math.min(width * 0.85, 450);
const fontTitle = Math.min(width * 0.07, 26);

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  contentBox: {
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 10,
    width: boxWidth,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    alignItems: 'center',
  },
  title: {
    fontSize: fontTitle,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  whiteBox: {
    backgroundColor: '#fff',
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  button: {
    width: '80%',
    marginVertical: 8,
  },
  spacer: {
    height: 12,
  },
  logoutButton: {
    marginTop: 16,
  },
  logoutText: {
    color: 'red',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
