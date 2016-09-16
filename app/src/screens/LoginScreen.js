import React, { Component } from 'react';
import { AppRegistry, Dimensions, StyleSheet, View, Image, Navigator, TextInput, Picker, Item } from 'react-native';
import { Container, Header, Content, Button, Title, InputGroup, Icon, Text} from 'native-base';
import Spinner from 'react-native-loading-spinner-overlay';

export default class PaymentScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: ''
    };
  }

  render() {
    return (
      <Container>
        <Content>
          <View style={styles.mainView}>
            <TextInput
              style={styles.textInput}
              placeholder='Email'
              onChangeText={ (l) => this.setState({ login: l }) }
              keyboardType='email-address'
              />
            <TextInput
              style={styles.textInput}
              placeholder='Senha'
              secureTextEntry={true}
              onChangeText={ (p) => this.setState({ password: p }) }
              />
            <View style={{padding: 13}}>
              <Button info block
                onPress={ () => this._toMenu() }
                > Entrar </Button>
            </View>
          </View>
        </Content>
      </Container>
    );
  }

  _toMenu() {
    alert('Login efetuado!');
    this.props.navigator.resetTo({
      id: 'menu'
    });
  }

}

const styles = StyleSheet.create({
  mainView: {
    padding: 25,
    backgroundColor:'rgba(52,52,52,0.5)'
  },
  textInput: {

  }
});
