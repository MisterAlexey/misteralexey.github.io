import React from 'react';
import PropTypes from 'prop-types';
import { Panel, ListItem, Button, Group, Div, Avatar, PanelHeader, List, Cell } from '@vkontakte/vkui';
import json from '../json.json'

class Home extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			burgers: json
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
				{
					this.props.burgers && this.props.burgers.map((burger,i) => 
					<Group key={i}>
						<List>
							<Cell before ={<img  src={burger.src} />}>
							{burger.burger_type}
							<br />
							{burger.descrition}
							<br />
							Цена - {burger.price} рублей
							<br />
							<Button id={i} onClick={(e) => this.props.addItem(e)}>Добавить один в корзину</Button>
							</Cell>
						</List>
					</Group>
					)
				}
			</Panel>
		)
		
	}
}

export default Home;