import React from 'react';
import PropTypes from 'prop-types';
import { Panel, ListItem, Button, Group, Div, Avatar, PanelHeader, Textarea, FormLayoutGroup, Checkbox, List, Cell, View, FormLayout, Input, Select, Radio, Link } from '@vkontakte/vkui';

class Korzina extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {

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
          
        </Div>
          

      );
    }
  }

export default Korzina;
