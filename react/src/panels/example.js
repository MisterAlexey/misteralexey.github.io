import React from 'react';
import PropTypes from 'prop-types';
import { Panel, ListItem, Button, Group, Div, Avatar, PanelHeader, Textarea, FormLayoutGroup, Checkbox, List, Cell, View, FormLayout, Input, Select, Radio, Link } from '@vkontakte/vkui';

class Example extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        email: '',
        purpose: ''
      }
  
      this.addressItems = [
        { label: 'Почтовый индекс', name: 'zip' },
        { label: 'Страна', name: 'country' },
        { label: 'Город', name: 'city' }
      ];
  
      this.onChange = this.onChange.bind(this);
    }
  
    onChange(e) {
      const { name, value } = e.currentTarget;
      this.setState({ [name]: value });
    }
  
    render() {
      const { email, purpose } = this.state;
  
      return (
          <Panel id={this.props.id} theme="white">
            <PanelHeader>Регистрация</PanelHeader>
            <FormLayout>
              <Input
                type="email"
                top="E-mail"
                name="email"
                value={email}
                onChange={this.onChange}
                status={email ? 'valid' : 'error'}
                bottom={email ? 'Электронная почта введена верно!' : 'Пожалуйста, введите электронную почту'}
              />
  
              <FormLayoutGroup top="Пароль" bottom="Пароль может содержать только латинские буквы и цифры.">
                <Input type="password"  placeholder="Введите пароль" />
                <Input type="password" placeholder="Повторите пароль" />
              </FormLayoutGroup>
  
              <Input top="Имя" />
              <Input top="Фамилия" />
  
              <Select top="Пол" placeholder="Выберите пол">
                <option value="m">Мужской</option>
                <option value="f">Женский</option>
              </Select>
  
              <FormLayoutGroup top="Тип документа">
                <Radio name="type">Паспорт</Radio>
                <Radio name="type">Загран</Radio>
              </FormLayoutGroup>
  
              {this.addressItems.map(({ label, name }) => (
                <Input type="text" name={name} key={name} top={label} />
              ))}
  
              <Select
                top="Цель поездки"
                placeholder="Выберите цель поездки"
                status={purpose ? 'valid' : 'error'}
                bottom={purpose ? '' : 'Пожалуйста, укажите цель поездки'}
                onChange={this.onChange}
                value={purpose}
                name="purpose"
              >
                <option value="0">Бизнес или работа</option>
                <option value="1">Индивидуальный туризм</option>
                <option value="2">Посещение близких родственников</option>
              </Select>
  
              <Textarea top="О себе" />
              
              <Checkbox>Согласен со всем <Link>этим</Link></Checkbox>
              <Button size="xl">Зарегистрироваться</Button>
            </FormLayout>
          </Panel>

      );
    }
  }

export default Example;
