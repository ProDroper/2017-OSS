import React from 'react';
import { wellStyles,Col,Form,ButtonGroup,Button,Panel,FormGroup,ControlLabel,FormControl } from 'react-bootstrap';

export default class MemoInfo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isEdit : false,
      title: '',
      contents: ''
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleToggle(){
    if(!this.state.isEdit) {
      this.setState({
        title: this.props.memo.title,
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
    this.props.onEdit(this.state.contents, this.state.contents);
  }

  render() {
    const title = (
      <h3>{this.props.memo.title}</h3>
    );
    const details = (
      <div>
        <Panel header={title}>
          {this.props.memo.contents}
        </Panel>
      </div>);
    const edit = (
      <div>
        <p>
          <div className="well" style={wellStyles}>
            <Form horizontal>
              <FormGroup>
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
                  />
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
                      componentClass="textarea"
                      value={this.state.contents}
                      onChange={this.handleChange}
                    />
                  </Col>
              </FormGroup>
            </Form>
          </div>
        </p>
      </div>
    )
    const view = this.state.isEdit ? edit : details;
    return (
      <div onClick={this.props.onClick}>
        {view}
        <button onClick={this.handleToggle}>
        {this.state.isEdit ? 'OK' : 'Edit'}</button>
        <button onClick={this.props.onRemove}>Remove</button>
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
