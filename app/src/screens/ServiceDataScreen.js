import React, { Component } from 'react';
import { AppRegistry, Dimensions, StyleSheet, View, Image, Navigator, TextInput } from 'react-native';
import { Container, Header, Content, Button, Title, InputGroup, Icon, Text} from 'native-base';

export default class ServiceDataScreen extends Component {

  render() {
    return (
      <Navigator
        renderScene={ () => this.renderScene() }
      />
    )
  }

  renderScene() {
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
            { this._getInputDataList() }
            <View style={styles.viewButton}>
              <Button block info> Próximo </Button>
            </View>
          </View>
        </Content>
      </Container>
    );
  }

  _getInputDataList() {
    var fields = [
      {
        label: 'Nome',
        specifications: {
          keyboardType: 'default'
        }
      },
      {
        label: 'Documento',
        specifications: {
          keyboardType: 'numeric'
        }
      },
      {
        label: 'Email',
        specifications: {
          keyboardType: 'email-address'
        }
      },
      {
        label: 'Telefone',
        specifications: {
          keyboardType: 'phone-pad'
        }
      }
    ];
    this.state = {
      fields: {}
    };
    return fields.map ( (field) => {
      this.state.fields[field.label] = '';
      return (
        <View key={field.label}>
          <Text>{field.label}</Text>
          <TextInput
            onChangeText={ (text) => this._setState(text, field.label) }
            keyboardType={field.specifications.keyboardType} />
        </View>
      );
    });

  }

  _setState(text, field) {
    this.state.fields[field] = text;
  }

  _back() {
    this.props.navigator.pop();
  }
}

const styles = StyleSheet.create({
  mainView: {
    padding: 25
  },
  viewButton: {
    marginTop: 15
  }
});
