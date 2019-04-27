import React from 'react';
import connect from '@vkontakte/vkui-connect';
import '@vkontakte/vkui/dist/vkui.css';
import { Panel, ListItem, Button, Epic, Tabbar, TabbarItem, Div, PanelHeader,  List,  View} from '@vkontakte/vkui';
import Home from './panels/Home';
import Korzina from './panels/korzina';
import json from './json.json'
import Icon28More from '@vkontakte/icons/dist/28/more'
import Icon28Newsfeed from '@vkontakte/icons/dist/28/newsfeed'

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			activeStory: 'home',
			korzina_label: [],
			burger: json,
			burger_value: 0
		};
		this.onStoryChange = this.onStoryChange.bind(this);
		this.addItem = this.addItem.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
	}

	componentDidMount() {
		connect.subscribe((e) => {
			switch (e.detail.type) {
				case 'VKWebAppGetUserInfoResult':
					console.log(e.detail.data)
					this.setState({ fetchedUser: e.detail.data });
					break;
				default:
					console.log(e.detail.type);
			}
		});
		connect.send('VKWebAppGetUserInfo', {});
	}

	onStoryChange (e) {
		this.setState({ activeStory: e.currentTarget.dataset.story })
	  }
	
	addItem(e){
		let i = e.currentTarget.id
		var tmp = this.state.burger; tmp[i].count++;
		this.setState ({
			burger: tmp,
			burger_value: this.state.burger_value + 1
		})
	}
	deleteItem (e){
		let i = e.currentTarget.id
		var tmp = this.state.burger; tmp[i].count--;
		this.setState ({
			burger: tmp,
			burger_value: this.state.burger_value -1
		})
	}
	
	render() {
		return (
			<Epic activeStory={this.state.activeStory} tabbar={
				<Tabbar>
				  <TabbarItem
					onClick={this.onStoryChange}
					selected={this.state.activeStory === 'home'}
					data-story="home"
					text="Новости"
				  ><Icon28Newsfeed /></TabbarItem>
				  <TabbarItem
					onClick={this.onStoryChange}
					selected={this.state.activeStory === 'korzina'}
					data-story="korzina"
					text="Корзина"
					label={this.state.burger_value !== 0 ? this.state.burger_value : null}
				  ><Icon28More /></TabbarItem>
				</Tabbar>
			  }>
				<View id="home" activePanel="home">
				  <Panel id="home">
					<PanelHeader>Ресторан</PanelHeader>
					<Home id="home" fetchedUser={this.state.fetchedUser} go={this.go} addItem={this.addItem} burgers={this.state.burger} />
				  </Panel>
				</View>
				<View id="korzina" activePanel="korzina">
				  <Panel id="korzina">
					<PanelHeader>Корзина</PanelHeader>
					<Korzina id="korzina" burger_value={this.state.burger_value} deleteItem={this.deleteItem} fetchedUser={this.state.fetchedUser} go={this.go} />
				  </Panel>
				</View>
			  </Epic>
		);
	}
}

export default App;