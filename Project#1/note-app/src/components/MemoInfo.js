import React from 'react';
import { wellStyles,Col,Form,ButtonGroup,Button,Panel,FormGroup,ControlLabel,FormControl } from 'react-bootstrap';

export default class MemoInfo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isEdit : false,
      title: '',
      date: '',
      contents: ''
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleToggle(){
    if(!this.state.isEdit) {
      this.setState({
        title: this.props.memo.title,
        date: this.props.memo.date,
        contents: this.props.memo.contents
      });
    } else {
      this.handleEdit();
    }
    this.setState({
      isEdit: !this.state.isEdit
    });
  }

  handleChange(e) {
      let nextState = {};
      nextState[e.target.name] = e.target.value;
      this.setState(nextState);
  }

  handleEdit(){
    this.props.onEdit(this.state.title, this.state.date, this.state.contents);
  }

  handleKeyPress(e) {
    if(e.charCode === 13) {
      this.handleToggle();
    }
  }

  render() {
    const title = (
      <div>
        <h3>{this.props.memo.title}</h3>
        <h6>{this.props.memo.date}</h6>
      </div>
    );
    const details = (
      <div>
        <Panel header={title}>
          <p>
          {this.props.memo.contents}
          </p>
        </Panel>
      </div>);
    const edit = (
      <div>
        <p>
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
            </Form>
          </div>
        </p>
      </div>
    )
    const view = this.state.isEdit ? edit : details;
    const submitedit =
      this.state.isEdit ? <Button bsStyle="primary" onClick={this.handleToggle}>Submit</Button> :
      <Button bsStyle="warning" onClick={this.handleToggle}>Edit</Button>;

    return (
      <div className="well" style={wellStyles} onClick={this.props.onClick} >
        {view}
        <ButtonGroup>
        {submitedit}
        <Button bsStyle="danger" onClick={this.props.onRemove}>Remove</Button>
        </ButtonGroup>
      </div>
    );
  }
}

MemoInfo.defaultProps = {
  memo: {
    title : '',
    contents : ''
  },
  onRemove: () => { console.error('onRemove not defined'); },
  onEdit: () => { console.error('onRemove not defined'); }
}
MemoInfo.propTypes = {
  memo: React.PropTypes.object,
  onRemove: React.PropTypes.func,
  onEdit: React.PropTypes.func

}
