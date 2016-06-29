import React from 'react';
import AddChatMessage from './AddMessage';
import ChatMessageList from './ChatMessageList';
import { Checkbox } from 'react-bootstrap';
import { animateScroll } from 'react-scroll';
import Waiting from './../common/Waiting';

class ChatMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      autoScroll: false,
      loaded: false
    }
  }

  handleAutoScrollChange() {
    this.setState({
      autoScroll: !this.state.autoScroll
    })
  }

  componentWillReceiveProps() {
    if(this.state.autoScroll) {

      // Scroll to bottom
      Meteor.setTimeout(() => {
        animateScroll.scrollToBottom();
      }, 300);
    }
  }

  renderAutoscroll() {
    return (<Checkbox onChange={this.handleAutoScrollChange.bind(this)} checked={this.state.autoScroll}>
      Autoscroll
    </Checkbox>);
  }

  render() {
    if(this.props.room){
      return (<Waiting isLoading={this.props.loading}>
        <div id="chat-messages">
          <h4>Welcome in chat: <strong>{this.props.room.name}</strong></h4>

          <ChatMessageList messages={this.props.messages} />

          <AddChatMessage roomId={this.props.room._id} />

          {this.renderAutoscroll()}
        </div>
      </Waiting>)
    }
    return (
      <div>
        <h4>Please select a channel</h4>
      </div>
    )
  }
}

ChatMessages.propTypes = {
  room: React.PropTypes.object,
  messages: React.PropTypes.array,
  loading: React.PropTypes.bool,
  exist: React.PropTypes.bool
};

ChatMessages.defaultProps = {};

export default ChatMessages;