import React from 'react';
import PropTypes from 'prop-types';
import { Panel, ListItem, Button, Group, Div, Avatar, PanelHeader, List, Cell } from '@vkontakte/vkui';

class NewPanel extends React.Component{
	constructor(props){
		super(props)
		this.state = {

		}
	}
	render(){
		return(
			<Panel id={this.props.id}>
                <PanelHeader>New Panel</PanelHeader>
                <Div>
                    <Button level='commerce' size='xl' onClick={this.props.go} data-to='persik'>Go to persik</Button>
                </Div>
                <Div>
                    <Button level='commerce' size='xl' onClick={this.props.go} data-to='home'>Go to home</Button>
                </Div>
            </Panel>
		)
		
	}
}

export default NewPanel;
