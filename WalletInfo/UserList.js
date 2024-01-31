import React, {useEffect, useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import styles from './UserList.styles';

const UserList = () => {
  const [userData, setUserData] = useState([
    {
      value: 1,
      label: 'jane',
      walletBalance: 0,
      walletData: [],
    },
    {
      value: 2,
      label: 'John',
      walletBalance: 40,
      walletData: [
        {
          date: new Date(),
          amount: 40,
        },
      ],
    },
    {
      value: 3,
      label: 'Virat',
      walletBalance: 0,
      walletData: [],
    },
    {
      value: 4,
      label: 'Alex',
      walletBalance: 0,
      walletData: [],
    },
  ]);
  const [currentUser, setCurrentUser] = useState(null);
  const [value, setValue] = useState('');
  const [bal, setBal] = useState('');
  const [err, setError] = useState('');

  useEffect(() => {
    if (value !== '') {
      const tempArr = userData;
      const index = tempArr.findIndex(item => item.label === currentUser.label);
      setCurrentUser(userData[index]);
    }
  }, [userData, currentUser, value]);

  const onAddBalance = user => {
    setBal('');
    if (!bal) {
      setError('Please Enter Amount');
      return;
    }
    setError('');
    const tempArr = userData;
    const index = tempArr.findIndex(item => item.label === currentUser.label);
    const newAmount = user.walletBalance + bal;
    tempArr[index].walletData.push({
      date: new Date(),
      amount: bal,
    });
    tempArr[index].walletBalance = newAmount;
    setUserData([...tempArr]);
  };

  const addBalance = user => {
    return (
      <>
        <View style={styles.addBalanceView}>
          <TextInput
            value={bal.toString()}
            placeholder="Amount"
            keyboardType="number-pad"
            style={styles.textInput}
            onChangeText={txt => {
              setBal(parseInt(txt, 10));
            }}
          />
          <TouchableOpacity
            onPress={() => {
              onAddBalance(user);
            }}
            style={styles.btnContainer}>
            <Text style={styles.btnText}>Add Balance</Text>
          </TouchableOpacity>
        </View>
        {err && <Text>{err}</Text>}
      </>
    );
  };

  const listofTransaction = () => {
    return (
      <>
        {currentUser.walletData.map((ele, i) => {
          return (
            <View key={i} style={styles.itemView}>
              <Text style={styles.leftValue}>Amount: {ele.amount}</Text>
              <Text style={styles.rightValue}>
                {new Date(ele.date).toLocaleString()}
              </Text>
            </View>
          );
        })}
      </>
    );
  };

  const renderUserdetail = () => {
    return (
      <>
        {currentUser && currentUser.walletData.length ? (
          <>
            <View style={styles.detailsView}>
              <Text style={styles.nameStyle}>
                User Name: {currentUser.label}
              </Text>
              <Text style={styles.balanceStyle}>
                Total Balance: {currentUser.walletBalance}
              </Text>
            </View>
            {addBalance(currentUser)}
            <Text style={styles.listTitle}>Transaction List</Text>
            {listofTransaction()}
          </>
        ) : (
          <View>
            <Text style={styles.listTitle}> No Transaction History </Text>
            {addBalance(currentUser)}
          </View>
        )}
      </>
    );
  };

  return (
    <View style={styles.padding10}>
      <Dropdown
        data={userData}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select item"
        searchPlaceholder="Search..."
        value={value}
        onChange={item => {
          setValue(item);
          console.log('called', item);
          setCurrentUser(item);
        }}
      />
      {value !== '' && renderUserdetail()}
    </View>
  );
};

export default UserList;
