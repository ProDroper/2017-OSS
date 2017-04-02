import React from 'react';
import ReactDOM from 'react-dom';
import { Form,ButtonGroup,Button,Col,wellStyles,FormGroup,ControlLabel,FormControl } from 'react-bootstrap';

export default class MemoCreate extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
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
    const memo = {
      title: this.state.title,
      contents: this.state.contents
    };
    this.props.onCreate(memo);
    this.setState({
      title: '',
      contents: ''
    });
    ReactDOM.findDOMNode(this.titleInput).focus();
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
              <Col sm={10}>
                <FormControl
                  name="title"
                  type="text"
                  label="title"
                  placeholder="Title"
                  value={this.state.title}
                  onChange={this.handleChange}
                  ref={(input) => { this.titleInput=input; }} />
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
