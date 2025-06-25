import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
  },
    input: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginBottom: 12,
    fontSize: 16,
    width: 300,
    alignSelf: 'center',
    textAlign: 'center'

    },

  button: {
    backgroundColor: '#1e90ff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    alignSelf: 'center',
    width: 120,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  resultBox: {
    marginTop: 30,
    alignItems: 'center',
  },
  city: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  temp: {
    fontSize: 48,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  desc: {
    fontSize: 16,
    fontStyle: 'italic',
    textTransform: 'capitalize',
  },
});
