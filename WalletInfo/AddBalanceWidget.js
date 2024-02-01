import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './UserList.styles';

const AddBalanceWidget = ({user, onAddBalance}) => {
  const [amount, setAmount] = useState('');
  const [err, setError] = useState('');

  // To check basic validation and add new transaction against user
  const onAddBalancePress = () => {
    if (!amount) {
      setError('Please Enter Amount');
      return;
    }
    setAmount('');
    setError('');
    onAddBalance(user, amount);
  };

  return (
    <>
      <View style={styles.addBalanceView}>
        <TextInput
          value={amount.toString()}
          placeholder="Amount"
          keyboardType="numeric"
          inputMode="numeric"
          style={styles.textInput}
          onChangeText={txt => {
            const filteredText = txt.replace(/[^0-9]/g, '');
            setAmount(filteredText ? parseInt(filteredText, 10) : filteredText);
          }}
        />
        <TouchableOpacity
          onPress={onAddBalancePress}
          style={styles.btnContainer}>
          <Text style={styles.btnText}>Add Balance</Text>
        </TouchableOpacity>
      </View>
      {err && <Text>{err}</Text>}
    </>
  );
};

export default AddBalanceWidget;
