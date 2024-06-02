import React, { Component } from 'react';

class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Yelzhan Akylbay',
      email: 'yelzhan.akylbay@narxoz.kz'
    };
  }

  render() {
    return (
      <div className="user-info">
        <h2>Информация о пользователе</h2>
        <p><strong>Имя:</strong> {this.state.name}</p>
        <p><strong>Email:</strong> {this.state.email}</p>
      </div>
    );
  }
}

export default UserInfo;