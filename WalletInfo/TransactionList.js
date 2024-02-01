import React, {useEffect, useState} from 'react';
import {Animated, Text, View} from 'react-native';
import styles from './UserList.styles';

const RenderItem = ({ele, i}) => {
  const [animValue] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animValue, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [animValue]);

  if (i === 0) {
    return (
      <Animated.View
        style={[
          styles.itemView,
          {
            transform: [{scale: animValue}],
          },
        ]}>
        <Text style={styles.leftValue}>Amount: {ele.amount}</Text>
        <Text style={styles.rightValue}>
          {new Date(ele.date).toLocaleString()}
        </Text>
      </Animated.View>
    );
  }
  return (
    <View style={styles.itemView}>
      <Text style={styles.leftValue}>Amount: {ele.amount}</Text>
      <Text style={styles.rightValue}>
        {new Date(ele.date).toLocaleString()}
      </Text>
    </View>
  );
};

const TransactionList = ({walletData}) => {
  return (
    <>
      {walletData
        ?.slice(-3)
        .reverse()
        .map((ele, i) => {
          return <RenderItem key={ele.date.toISOString()} ele={ele} i={i} />;
        })}
    </>
  );
};

export default TransactionList;
