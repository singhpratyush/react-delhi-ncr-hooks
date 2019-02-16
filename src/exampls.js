import React from 'react';

export default class extends React.Component {
  componentDidMount() {
    this.listenToUserProfile(this.props.user.id);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.user.id !== newProps.user.id) {
      this.unsubscribeToUserProfile(this.props.user.id);
      this.listenToUserProfile(newProps.user.id);
    }
  }

  componentWillUnmount() {
    this.unsubscribeToUserProfile(this.props.user.id);
  }

  ...
}
