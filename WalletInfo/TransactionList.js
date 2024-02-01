import React from 'react';
import {Text, View} from 'react-native';
import styles from './UserList.styles';

const TransactionList = ({walletData}) => {
  return (
    <>
      {walletData
        ?.slice(-3)
        .reverse()
        .map((ele, i) => {
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

export default TransactionList;
