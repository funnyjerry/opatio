import React from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'
import Lottie from 'lottie-react-native'
import LOADING from "../common/reload.json"

const window = Dimensions.get('window');

export default class LottieScreen extends React.Component {
  state = {
    animation: null,
  };

  componentWillMount() {
    this._playAnimation();
  }

  render() {
    return (
      <View style={styles.animationContainer}>
        {this.state.animation && (
          <Lottie
            ref={animation => {
              this.animation = animation;
            }}
            style={{
              width: window.width,
              height: window.width / 3,
            }}
            source={this.state.animation}
          />
        )}
      </View>
    );
  }

  _playAnimation = () => {
    if (!this.state.animation) {
      this._loadAnimationAsync();
    } else {
      this.animation.reset();
      this.animation.play();
    }
  };

  _loadAnimationAsync = () => {
    this.setState({ animation: LOADING }, this._playAnimation);
  };
}

const styles = StyleSheet.create({
  animationContainer: {
    flex:1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    height:120,
  },
});
