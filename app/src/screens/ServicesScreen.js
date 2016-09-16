import React, { Component } from 'react';
import { AppRegistry, Dimensions, StyleSheet, View, Image, Navigator } from 'react-native';
import { Container, Header, Content, Button, Title, Icon, List, ListItem, Text, Thumbnail, Tabs} from 'native-base';

export default class ServicesScreen extends Component {

  render() {
    return (
      <Container>
    		<Header></Header>
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
        <ListItem button style={{padding: 12}} key={item} onPress={ () => this._toServiceData(item) }>
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
    height: 30,
    fontSize: 20
  }
});
