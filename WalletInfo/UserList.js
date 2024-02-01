import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import styles from './UserList.styles';
import UserDetail from './UserDetails';
import Title from './Title';
import data from './Contants/dummy.json';

const UserList = () => {
  const [userData, setUserData] = useState(data);
  const [currentUser, setCurrentUser] = useState(null);

  // To get index of current user in array
  const getIndex = (arr, user) => {
    return arr.findIndex(item => item.label === user.label);
  };

  useEffect(() => {
    if (currentUser) {
      const index = getIndex(userData, currentUser);
      setCurrentUser(userData[index]);
    }
  }, [userData, currentUser]);

  // To add new transaction in walletData
  function onAddBalance(user, amt) {
    const tempArr = userData;
    const index = getIndex(tempArr, currentUser);

    tempArr[index].walletData.push({
      date: new Date(),
      amount: amt,
    });
    tempArr[index].walletBalance = user.walletBalance + amt;
    tempArr[index].lastAddedAmount = amt;
    setUserData([...tempArr]);
  }

  return (
    <View style={styles.padding10}>
      <Title text={'Select User'} />
      <Dropdown
        data={userData}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select item"
        searchPlaceholder="Search..."
        value={currentUser}
        selectedTextStyle={styles.leftValue}
        onChange={item => {
          setCurrentUser(item);
        }}
      />
      {currentUser && (
        <UserDetail onAddBalance={onAddBalance} currentUser={currentUser} />
      )}
    </View>
  );
};

export default UserList;
