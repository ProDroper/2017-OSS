import React from 'react';
import ReactDOM from 'react-dom';

import { Form,ButtonGroup,Button,Col,wellStyles,FormGroup,ControlLabel,FormControl } from 'react-bootstrap';

export default class MemoCreate extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      date: '',
      contents: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleChange(e) {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  handleClick() {
      if(this.state.date === ''){
          var date = new Date();
          var day = date.getDate();
          var month = date.getMonth() + 1;
          var year = date.getFullYear();
          var options = {year: undefined, month: undefined, day: undefined, hour: "2-digit", minute: "2-digit" };
          var time = date.toLocaleTimeString("en-US",options);
          this.setState({
              date: year + '년 ' + month + '월 ' + day + '일 ' + time
          });
      }
      if(this.state.title !== '' && this.state.date !== '' && this.state.contents !== '') {
        const memo = {
            title: this.state.title,
            date: this.state.date,
            contents: this.state.contents
        };
        this.props.onCreate(memo);
        this.setState({
            title: '',
            date: '',
            contents: ''
        });
        ReactDOM.findDOMNode(this.titleInput).focus();
    }
    else {
      alert("비어있는 입력 칸이 존재합니다.")
    }
  }

  handleKeyPress(e) {
    if(e.charCode === 13) {
      this.handleClick();
    }
  }

  render() {
    return (
      <div>
        <div className="well" style={wellStyles}>
          <Form horizontal>
            <FormGroup >
              <Col componentClass={ControlLabel} sm={2}>
              Title
              </Col>
              <Col sm={5}>
                <FormControl
                    name="title"
                    type="text"
                    label="title"
                    placeholder="Title"
                    value={this.state.title}
                    onChange={this.handleChange}
                    ref={(input) => { this.titleInput=input; }} />
              </Col>
              <Col componentClass={ControlLabel} sm={1}>
                Date
              </Col>
              <Col sm={4}>
                <FormControl
                    name="date"
                    type="text"
                    label="date"
                    placeholder="YY.MM.DD"
                    value={this.state.date}
                    onChange={this.handleChange} />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col componentClass={ControlLabel} sm={2}>
                Contents
              </Col>
                <Col sm={10}>
                  <FormControl
                    name="contents"
                    type="text"
                    label="contents"
                    placeholder="Contents"
                    value={this.state.contents}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                  />
                </Col>
            </FormGroup>
            <br/>
            <ButtonGroup vertical block>
              <Button bsStyle="primary" bsSize="small" onClick={this.handleClick}>Submit</Button>
            </ButtonGroup>
          </Form>
        </div>
      </div>
    )
  }
}

MemoCreate.propTypes = {
  onCreate: React.PropTypes.func
};

MemoCreate.defaultProps = {
  onCreate : () => { console.error('onCreate not defined')}
};
