
import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import { Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: width * 0.06,
  },
  title: {
    fontSize: width * 0.065,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  item: {
    fontSize: width * 0.04,
  },
  clearButton: {
    marginTop: height * 0.05, // 5% da altura da tela
    alignSelf: 'center',
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 8,
  },
  clearText: {
    color: 'white',
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBox: {
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
  },
  modalText: {
    fontSize: width * 0.04,
    textAlign: 'center',
    marginBottom: 20,
  },
  modalActions: {
    flexDirection: 'row',
    gap: 16,
  },
  modalBtn: {
    backgroundColor: '#2196F3',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  modalBtnText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
