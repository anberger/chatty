import React from 'react';
import { ListGroupItem, ListGroup, Badge, Tooltip} from 'react-bootstrap';
import moment from 'moment';

class ListMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      now : new moment(),
      timer: null
    }
  }

  createMarkup(item) {
    return {__html: item};
  };

  getTimespan(mom) {
    return moment(mom).from(this.state.now);
  }

  componentWillReceiveProps() {
    this.updateMoment();
  }

  updateMoment() {
    this.setState({
      now : new moment()
    })
  }

  componentDidMount(){
    if(!this.state.timer) {
      let timer = Meteor.setInterval(this.updateMoment.bind(this), 1000 * 30);

      this.setState({
        timer: timer
      });
    }
  }

  componentWillUnmount() {
    Meteor.clearInterval(this.state.timer);
    this.setState({
      timer: null
    });
  }

  render() {
    return (
      <ListGroup className="message-list">
        {this.props.messages.map((item) =>
          <ListGroupItem key={item._id}>
            <Badge className="badge-name">{item.username} wrote {this.getTimespan(item.createdAt)}</Badge>
            <div>{item.message}</div>
          </ListGroupItem>
        )}
      </ListGroup>
    );
  }
}

ListMessages.propTypes = {
  messages: React.PropTypes.array,
  autoScroll: React.PropTypes.bool
};

ListMessages.defaultProps = {};

export default ListMessages;