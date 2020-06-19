import React from 'react';
import {StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
  stretch: {
    flex: 1,
  },
  center: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export const Box = ({ children, ...props }) => {
  return (
    <View style={{ width: '100%' }} {...props}>{children}</View>
  )
}

export const Flex = ({ children, align = 'stretch' }) => {
  return (
    <View style={styles[align]}>{children}</View>
  )
}

