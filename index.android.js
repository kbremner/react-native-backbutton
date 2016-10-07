const WEBVIEW_REF = "WEBVIEW_REF";
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  WebView
} from 'react-native';

class ReactNativeBackButton extends Component {
  constructor(props) {
    super(props);
    this.state = { canGoBack: false };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topbar}>
          <TouchableOpacity
            disabled={!this.state.canGoBack}
            onPress={this.onBack.bind(this)}
            >
            <Text style={this.state.canGoBack ? styles.topbarText : styles.topbarTextDisabled}>Go Back</Text>
          </TouchableOpacity>
        </View>
        <WebView
          ref={WEBVIEW_REF}
          style={{flex: 1}}
          onNavigationStateChange=
            {this.onNavigationStateChange.bind(this)}
          source={{uri: 'https://google.com'}}
          /> 
      </View>
    );
  }

  onBack() {
    this.refs[WEBVIEW_REF].goBack();
  }

  onNavigationStateChange(navState) {
    this.setState({
      canGoBack: navState.canGoBack
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  topbar: {
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topbarTextDisabled: {
    color: 'gray'
  }
});

AppRegistry.registerComponent('ReactNativeBackButton', () => ReactNativeBackButton);
