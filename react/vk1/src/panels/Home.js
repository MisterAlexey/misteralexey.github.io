import React from 'react';
import PropTypes from 'prop-types';
import { Panel, ListItem, Button, Group, Div, Avatar, PanelHeader, List, Cell } from '@vkontakte/vkui';

class Home extends React.Component{
	constructor(props){
		super(props)
		this.state = {

		}
	}
	render(){
		return(
			<Panel id = {this.props.id}>
				<Group>
					<List>
						<Cell before ={<img src='http://nv.prines.ru/preview.php?src=/logos/125.jpg&w=133&h=106&q=80' />}>
						Бургер Томск
						</Cell>
					</List>
				</Group>
				<Group>
					<List>
						<Cell before ={<img  src='https://nv.prines.ru/preview.php?src=/upload/images/9-1430286274.png&w=251&h=167&q=80' />}>
						Длиннобургер
						<br />
						<Button onClick={() => this.addItem()}>Добавить один в корзину</Button>
						</Cell>
					</List>
				</Group>
			</Panel>
		)
		
	}
}

export default Home;
