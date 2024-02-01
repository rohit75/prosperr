import React from 'react';
import {Text} from 'react-native';
import styles from './UserList.styles';

const Title = ({text}) => {
  return <Text style={styles.listTitle}>{text}</Text>;
};

export default Title;
