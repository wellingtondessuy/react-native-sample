import React, { Component } from 'react';
import { AppRegistry, Dimensions, StyleSheet, View, Image, Navigator, TextInput, Picker, Item } from 'react-native';
import { Container, Header, Content, Button, Title, InputGroup, Icon, Text} from 'native-base';
import Spinner from 'react-native-loading-spinner-overlay';

export default class PaymentScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      issuer: '',
      month: '',
      year: '',
    };
  }

  render() {
    return (

      <Container>
    		<Header>
          <Button transparent onPress={ () => this._back() }>
              <Icon name='ios-arrow-back' />
          </Button>
          <Title>S2Payment</Title>
        </Header>
        <Content>
          <View style={styles.mainView}>
            <View style={{flexDirection: 'row'}}>
              <View>
                <Text>Valor</Text>
                <TextInput
                  style={styles.textInputValue}
                  keyboardType='numeric'
                  />
              </View>
              <View style={styles.viewIssuer}>
                <Text>Bandeira</Text>
                <Picker
                  style={styles.pickerIssuer}
                  selectedValue={this.state.issuer}
                  onValueChange={(i) => this.setState({issuer: i})}
                  mode="dropdown">
                  <Picker.Item label="Visa" value="visa" />
                  <Picker.Item label="Mastercard" value="mastercard" />
                  <Picker.Item label="American Express" value="amex" />
                  <Picker.Item label="Diners" value="diners" />
                  <Picker.Item label="Discover" value="discover" />
                  <Picker.Item label="JCB" value="jcb" />
                  <Picker.Item label="Aura" value="aura" />
                </Picker>
              </View>
            </View>
            <Text>Cartão de crédito</Text>
            <TextInput
              keyboardType='numeric'
              />
            <Text>Validade</Text>
            <View style={styles.viewValidate}>
              <Picker
                style={styles.picker}
                selectedValue={this.state.month}
                onValueChange={(m) => this.setState({month: m})}
                mode="dropdown">
                <Picker.Item label="01" value="01" />
                <Picker.Item label="02" value="02" />
                <Picker.Item label="03" value="03" />
                <Picker.Item label="04" value="04" />
                <Picker.Item label="05" value="05" />
                <Picker.Item label="06" value="06" />
                <Picker.Item label="07" value="07" />
                <Picker.Item label="08" value="08" />
                <Picker.Item label="09" value="09" />
                <Picker.Item label="10" value="10" />
                <Picker.Item label="11" value="11" />
                <Picker.Item label="12" value="12" />
              </Picker>
              <Picker
                style={styles.picker}
                selectedValue={this.state.year}
                onValueChange={(y) => this.setState({year: y})}
                mode="dropdown">
                <Picker.Item label="2021" value="2021" />
                <Picker.Item label="2020" value="2020" />
                <Picker.Item label="2019" value="2019" />
                <Picker.Item label="2018" value="2018" />
                <Picker.Item label="2017" value="2017" />
                <Picker.Item label="2016" value="2016" />
              </Picker>
            </View>
            <Text>Nome no cartão</Text>
            <TextInput/>
            <Text>Código de segurança</Text>
            <TextInput
              keyboardType='numeric'
              />
            <View style={styles.viewButton}>
              <Button bordered danger style={styles.buttons} onPress={ () => this._cancel() }> Cancelar </Button>
              <Button success style={styles.buttons} onPress={ () => this._toMenu() }> Finalizar </Button>
            </View>
          </View>
        </Content>
      </Container>
    );
  }

  _toMenu() {
    alert('Pagamento efetuado!');
    this.props.navigator.resetTo({
      id: 'menu'
    });
  }

  _cancel() {
    this.props.navigator.popN(2);
  }

}

const styles = StyleSheet.create({
  mainView: {
    padding: 25
  },
  viewButton: {
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'flex-end'
  },
  buttons: {
    margin: 10
  },
  viewValidate: {
    flexDirection: 'row',
    flex: 1
  },
  picker: {
    width: 125,
  },
  textInputValue: {
    width: 130,
  },
  viewIssuer: {
    marginLeft: 15,
  },
  pickerIssuer: {
    width: 140,
  },
});
