import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  padding10: {
    padding: 10,
  },
  addBalanceView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'gray',
    marginRight: 10,
    height: 50,
  },
  btnContainer: {
    marginVertical: 10,
    padding: 15,
    backgroundColor: 'gray',
    justifyContent: 'center',
    borderRadius: 5,
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
  detailsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  itemView: {
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  nameStyle: {
    fontWeight: 'bold',
    fontSize: 16,
    flex: 1,
    textAlign: 'left',
  },
  balanceStyle: {
    fontWeight: 'bold',
    fontSize: 16,
    flex: 1,
    textAlign: 'right',
  },
  leftValue: {
    fontWeight: 'bold',
    fontSize: 16,
    width: '30%',
    alignSelf: 'flex-start',
  },
  rightValue: {
    fontWeight: 'bold',
    fontSize: 14,
    width: '60%',
    alignSelf: 'center',
    textAlign: 'right',
  },
  listTitle: {
    fontWeight: '500',
    paddingTop: 10,
    alignSelf: 'center',
    fontSize: 20,
  },
});
