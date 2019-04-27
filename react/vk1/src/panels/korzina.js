import React from 'react';
import PropTypes from 'prop-types';
import { Panel, ListItem, Button, Group, Div, Avatar, PanelHeader, Textarea, FormLayoutGroup, Checkbox, List, Cell, View, FormLayout, Input, Select, Radio, Link } from '@vkontakte/vkui';
import json from '../json.json'

class Korzina extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        burgers: json
      }
    }
  
    onChange(e) {
      const { name, value } = e.currentTarget;
      this.setState({ [name]: value });
    }
  
    render() {
  
      return (
        <Div>
          У вас в корзине:
          {
            this.state.burgers && this.state.burgers.map((burger, i) => {
              if(burger.count !== 0){
                return <Group key={i}>
                <List>
                      <Cell before ={<img  src={burger.src} />}>
                      {burger.burger_type}
                      <br />
                        <Button id={i} onClick={(e) => this.props.deleteItem(e)}>Убрать один</Button>
                        <br />
                        Количество  - {burger.count}
                        <br />
                        Цена  - {burger.price*burger.count}
                        </Cell>
                        <Cell>
                    	
                </Cell>
                </List>
             </Group>
              }else{
                return null
              }
            })
          }
        </Div>
          

      );
    }
  }

export default Korzina;