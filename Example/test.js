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
      avatarCarrier: {
        avatar: 'https://facebook.github.io/react/img/logo_og.png',
        name: 'reactreara',
      },
      introInfo: {
        mainTitle: 'xiao麦麦',
        info: 'nice girlice girlice girlice girlice girlice girlice girlice girlice girlice girlice girlice girlice girlice girlice girl',
        detailImages: [
          'https://facebook.github.io/react/img/logo_og.png',
          'https://facebook.github.io/react/img/logo_og.png',
          'https://facebook.github.io/react/img/logo_og.png',
          'https://facebook.github.io/react/img/logo_og.png',
          'https://facebook.github.io/react/img/logo_og.png',
          'https://facebook.github.io/react/img/logo_og.png'],
      },
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
