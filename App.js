import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  AppOpenAd,
  InterstitialAd,
  RewardedAd,
  BannerAd,
  TestIds,
  BannerAdSize,
} from 'react-native-google-mobile-ads';

const App = () => {
  return (
    <View style={{position: 'absolute', bottom: 0, alignSelf: 'center'}}>
      <BannerAd size={BannerAdSize.BANNER} unitId={TestIds.BANNER} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
