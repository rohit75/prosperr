import React from 'react';
import {Text, View} from 'react-native';
import styles from './UserList.styles';
import AddBalanceWidget from './AddBalanceWidget';
import TransactionList from './TransactionList';
import Title from './Title';

const UserDetail = ({currentUser, onAddBalance}) => {
  return (
    <>
      {currentUser && currentUser.walletData.length ? (
        <>
          <Title text={'User Details'} />
          <View style={styles.detailsView}>
            <Text style={styles.nameStyle}>
              Last Transaction: {currentUser.lastAddedAmount}
            </Text>
            <Text style={styles.balanceStyle}>
              Total Balance: {currentUser.walletBalance}
            </Text>
          </View>
          <AddBalanceWidget user={currentUser} onAddBalance={onAddBalance} />
          <Title text={'Transaction List'} />
          <TransactionList walletData={currentUser.walletData} />
        </>
      ) : (
        <>
          <Title text={'No Transaction History'} />
          <AddBalanceWidget user={currentUser} onAddBalance={onAddBalance} />
        </>
      )}
    </>
  );
};

export default UserDetail;
