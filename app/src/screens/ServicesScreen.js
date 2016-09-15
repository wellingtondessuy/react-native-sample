import React, { Component } from 'react';
import { AppRegistry, Dimensions, StyleSheet, View, Image, Navigator } from 'react-native';
import { Container, Header, Content, Button, Title, Icon, List, ListItem, Text, Thumbnail, Tabs} from 'native-base';

export default class ServicesScreen extends Component {

  render() {
    return (
      <Navigator
        renderScene={ () => this.renderScene() }
      />
    );
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
          <List>
            { this._getServicesTypes() }
          </List>
        </Content>
      </Container>
    );
  }

  _getServicesTypes() {
    var db = [
      {
        id: 1,
        name: 'Hamburguesa',
        services: [
          'Recarga'
        ]
      },
      {
        id: 2,
        name: 'Bourbon Shopping',
        services: [
          'Pagamento de Ticket'
        ]
      },
      {
        id: 3,
        name: 'Tri',
        services: [
          'Recarga'
        ]
      },
      {
        id: 4,
        name: 'Bem',
        services: [
          'Recarga'
        ]
      },
    ];
    var entity = db.find(function (item) { return item.id == this }, this.props.passProps.itemId);
    return entity.services.map ( (item) => {
      return (
        <ListItem button key={item} onPress={ () => this._toServiceData(item) }>
          <Text style={styles.textItem}>{item}</Text>
        </ListItem>
      );
    });
  }

  _toServiceData(item) {
    this.props.navigator.push({
      id: 'service_data',
      passProps: {
        item: item
      }
    });
  }

  _back() {
    this.props.navigator.pop();
  }
}

const styles = StyleSheet.create({
  textItem: {
    fontSize: 20
  }
});
