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
				<PanelHeader>Home Panel</PanelHeader>
				<Group>
					{this.props.fetchedUser && 
					<List>
						<Cell before ={<Avatar size={40} src={this.props.fetchedUser.photo_200} />}>
							
							{this.props.fetchedUser.first_name+' '+this.props.fetchedUser.last_name}
						</Cell>
						<Cell>
							Date of birthday - {this.props.fetchedUser.bdate}
						</Cell>
						<Cell>
							Пол - {this.props.fetchedUser.sex === 2? 'Мужской': 'Женский'}
						</Cell>
						<Cell>
							Страна - {this.props.fetchedUser.country.title}
						</Cell>
						<Cell>
							Город - {this.props.fetchedUser.city.title}
						</Cell>
					</List>
					}
					<Div>
						<Button level='commerce' size='xl' onClick={this.props.go} data-to='persik'>Перейти на persik</Button>
					</Div>
					<Div>
						<Button level='commerce' size='xl' onClick={this.props.go} data-to='new_panel'>Перейти на другую панель</Button>
					</Div>
					<Div>
						<Button level='commerce' size='xl' onClick={this.props.go} data-to='example'>Перейти на другую панель</Button>
					</Div>
					
				</Group>
			</Panel>
		)
		
	}
}

export default Home;
