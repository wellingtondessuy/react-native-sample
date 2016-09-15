import React, { Component } from 'react';
import { AppRegistry, Dimensions, StyleSheet, View, Image, Navigator, ListView } from 'react-native';
import { Container, Header, Content, Button, Title, Icon, List, ListItem, Text, Thumbnail, Tabs} from 'native-base';

export default class MenuScreen extends Component {

  render() {
    return (
      <Navigator
        renderScene={ () => this.renderScene() }
      />
    );
  }

  renderScene(route, navigator) {
    return (
    	<Container>
    		<Header>
          <Title>S2Payment</Title>
        </Header>
        <Content>
          <List>
            { this._listItems() }
          </List>
        </Content>
      </Container>
    );
  }

  _listItems() {
    var listItems = [
      {
        id: 1,
        option: 'Hamburguesa'
      },
      {
        id: 2,
        option: 'Bourbon Shopping'
      },
      {
        id: 3,
        option: 'Tri'
      },
      {
        id: 4,
        option: 'Bem'
      },
    ];
    return listItems.map( (item) => {
      return (
        <ListItem button key={item.id} onPress={ () => this._toServices(item.id) }>
          <Text style={styles.textItem}>{item.option}</Text>
        </ListItem>
      )
    });
  }

  _toServices(itemId) {
    this.props.navigator.push({
      id: 'services',
      passProps: {
        itemId: itemId
      }
    });
  }

}

const styles = StyleSheet.create({
  textItem: {
    fontSize: 20
  }
});
