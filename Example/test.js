import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Introducitonitem from '@zdy/react-native-introducitonitem';

export default class Test extends React.Component {
  render() {
    const IntroducitonItemProps = {
      avatar: 'https://img3.doubanio.com/img/fmadmin/large/31905.jpg',
      name: 'reactreara',
      mainTitle: 'xiao麦麦',
      info: 'nice girlice girlice girlice girlice girlice girlice girlice girlice girlice girlice girlice girlice girlice girlice girl',
      detailImages: [
        'https://img3.doubanio.com/img/fmadmin/large/31905.jpg',
        'https://img3.doubanio.com/img/fmadmin/large/31905.jpg',
        'https://img3.doubanio.com/img/fmadmin/large/31905.jpg',
        'https://img3.doubanio.com/img/fmadmin/large/31905.jpg',
        'https://img3.doubanio.com/img/fmadmin/large/31905.jpg',
        'https://img3.doubanio.com/img/fmadmin/large/31905.jpg'],
      bottomInfo: 'hahaha',
    }
    return (
      <View style={styles.container}>
        <Text>Introducitonitem show bellow.</Text>
        <Introducitonitem {...IntroducitonItemProps} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
