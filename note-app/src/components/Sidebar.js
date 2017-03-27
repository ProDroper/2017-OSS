import React from 'react';
import update from 'react-addons-update'
import ReactDOM from 'react-dom';
import { Button,Modal } from 'react-bootstrap';
import { Popover,Tooltip,OverlayTrigger,ButtonToolbar,Pagination,Navbar,FormGroup,FormControl,PageHeader,Tab,Col,Row,Nav,NavItem,Accordion,Panel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

class Contacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contactData: [
                {name: "Abet", phone: "010-0000-0001"},
                {name: "Betty", phone: "010-0000-0002"},
                {name: "Charlie", phone: "010-0000-0003"},
                {name: "David", phone: "010-0000-0004"}
            ],
            selectedKey: -1,
            selected: {
                name: "",
                phone: ""
            }
        };
    }

    _insertContact(name, phone){
        let newState = React.addons.update(this.state, {
            contactData: {
                $push: [{"name": name, "phone": phone}]
            }
        });
        this.setState(newState);
    }

    _onSelect(key){
        if(key==this.state.selectedKey){
            console.log("key select cancelled");
            this.setState({
                selectedKey: -1,
                selected: {
                    name: "",
                    phone: ""
                }
            });
            return;
        }

        this.setState({
            selectedKey: key,
            selected: this.state.contactData[key]
        });
        console.log(key + " is selected");
    }

    _isSelected(key){
        if(this.state.selectedKey == key){
            return true;
        }else{
            return false;
        }
    }

    _removeContact(){
        if(this.state.selectedKey==-1){
            console.log("contact not selected");
            return;
        }

        this.setState({
            contactData: React.addons.update(
                this.state.contactData,
                {
                    $splice: [[this.state.selectedKey, 1]]
                }
            ),
            selectedKey: -1
        });
    }

    _editContact(name, phone){
        this.setState({
            contactData: React.addons.update(
                this.state.contactData,
                {
                    [this.state.selectedKey]: {
                        name: { $set: name },
                        phone: { $set: phone }
                    }
                }
            ),
            selected: {
                name: name,
                phone: phone
            }
        });
    }

    render(){
        return(
            <div>
                <h1>Contacts</h1>
                <ul>
                    {this.state.contactData.map((contact, i) => {
                        return (<ContactInfo name={contact.name}
                                            phone={contact.phone}
                                              key={i}
                                       contactKey={i}
                                       isSelected={this._isSelected.bind(this)(i)}
                                         onSelect={this._onSelect.bind(this)}/>);
                    })}
                </ul>
                <ContactCreator onInsert={this._insertContact.bind(this)}/>
                <ContactRemover onRemove={this._removeContact.bind(this)}/>
                <ContactEditor onEdit={this._editContact.bind(this)} contact={this.state.selected}/>
            </div>
        );
    }
}


class ContactInfo extends React.Component {

    handleClick(){
        this.props.onSelect(this.props.contactKey);
    }

    render() {

        let getStyle = isSelect => {
            if(!isSelect) return;

            let style = {
                fontWeight: 'bold',
                backgroundColor: '#4efcd8'
            };

            return style;
        };

        return(
            <li style={getStyle(this.props.isSelected)}
                onClick={this.handleClick.bind(this)}>
                {this.props.name} {this.props.phone}
            </li>
        );
    }
}

class ContactCreator extends React.Component {
    constructor(props) {
        super(constructor);
        // Configure default state
        this.state = {
            name: "",
            phone: ""
        };
    }

    handleClick(){
        this.props.onInsert(this.state.name, this.state.phone);
        this.setState({
            name: "",
            phone: ""
        });
    }

    handleChange(e){
        var nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    render() {
        return (
            <div>
                <p>
                    <input type="text"
                        name="name"
                        placeholder="name"
                        value={this.state.name}
                        onChange={this.handleChange.bind(this)}/>

                    <input type="text"
                        name="phone"
                        placeholder="phone"
                        value={this.state.phone}
                        onChange={this.handleChange.bind(this)}/>
                    <button onClick={this.handleClick.bind(this)}>
                    Insert
                    </button>
                </p>
            </div>
        );
    }
}

class ContactRemover extends React.Component {
    handleClick() {
        this.props.onRemove();
    }

    render() {
        return (
            <button onClick={this.handleClick.bind(this)}>
                Remove selected contact
            </button>
        );
    }
}


class ContactEditor extends React.Component {
    constructor(props) {
        super(constructor);
        // Configure default state
        this.state = {
            name: "",
            phone: ""
        };
    }

    handleClick(){
        if(!this.props.isSelected){
            console.log("contact not selected");

            return;
        }

        this.props.onEdit(this.state.name, this.state.phone);
    }

    handleChange(e){
        var nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            name: nextProps.contact.name,
            phone: nextProps.contact.phone
        });
    }

    render() {
        return (
            <div>
                <p>
                    <input type="text"
                        name="name"
                        placeholder="name"
                        value={this.state.name}
                        onChange={this.handleChange.bind(this)}/>

                    <input type="text"
                        name="phone"
                        placeholder="phone"
                        value={this.state.phone}
                        onChange={this.handleChange.bind(this)}/>
                    <button onClick={this.handleClick.bind(this)}>
                    Edit
                    </button>
                </p>
            </div>
        );
    }
}

const modalInstance = (
  <div className="static-modal" style="height">
    <Modal.Dialog>
      <Modal.Header>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        One fine body...
      </Modal.Body>

      <Modal.Footer>
        <Button>Close</Button>
        <Button bsStyle="primary">Save changes</Button>
      </Modal.Footer>

    </Modal.Dialog>
  </div>
);

const Example = React.createClass({
  getInitialState() {
    return { showModal: false };
  },

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },

  render() {
    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );
    const tooltip = (
      <Tooltip id="modal-tooltip">
        wow.
      </Tooltip>
    );

    return (
      <div>
        <p>Click to get the full Modal experience!</p>

        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={this.open}
        >
          Launch demo modal
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

            <h4>Popover in a modal</h4>
            <p>there is a <OverlayTrigger overlay={popover}><a href="#">popover</a></OverlayTrigger> here</p>

            <h4>Tooltips in a modal</h4>
            <p>there is a <OverlayTrigger overlay={tooltip}><a href="#">tooltip</a></OverlayTrigger> here</p>
            <FormGroup>
              <FormControl type="text" placeholder="Search" />
              <Button onClick={this.close}>Close</Button>
            </FormGroup>


            <h4>Overflowing text to show scroll behavior</h4>
            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
});


const PaginationBasic = React.createClass({
  getInitialState() {
    return {
      activePage: 1
    };
  },

  handleSelect(eventKey) {
    this.setState({
      activePage: eventKey
    });
  },

  render() {
    return (
      <div>
        <Pagination
          bsSize="medium"
          items={10}
          activePage={this.state.activePage}
          onSelect={this.handleSelect} />
        <br />
      </div>
    );
  }
});

class Sidebar extends React.Component {
    // constructor(props) {
    //    super(props);
    //    this.state = {
    //       header: "Header Initial state",
    //       subheader: "Content Initial State"
    //   };
    // }
    // updateHeader(text){
    //   this.setState({
    //       header: "Header has changed",
    //       subheader: "Header has changed"
    //   });
    // }
   render() {
    //  let text = (
    //     <div>
          // <PageHeader>{this.state.header}<small>{this.state.subheader}</small></PageHeader>
    //       <button onClick={this.updateHeader.bind(this)}>Update</button>
    //     </div>
    //  )
      return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row className="clearfix">
            <Col sm={2}>
              <br></br>
              <h4>&nbsp;&nbsp;&nbsp;박 성우  2016003481</h4>
              <h5>&nbsp;&nbsp;&nbsp;&nbsp;한양대학교 컴퓨터공학과</h5>
              <br></br>
              <Accordion>
                <Panel header="2016년도 2학기" eventKey="1">
                <Nav bsStyle="pills" stacked>
                  <NavItem eventKey="2016/2/1">
                    오픈소스SW기초
                  </NavItem>
                  <NavItem eventKey="2016/2/2">
                    시스템프로그래밍기초
                  </NavItem>
                  <NavItem eventKey="2016/2/3">
                    프로그래밍설계방법론
                  </NavItem>
                </Nav>
                </Panel>
                <Panel header="2017년도 1학기" eventKey="2">
                  <Nav bsStyle="pills" stacked>
                    <NavItem eventKey="2017/1/1">
                      오픈소스 개발
                    </NavItem>
                    <NavItem eventKey="2017/1/2">
                      자료구조론
                    </NavItem>
                  </Nav>
                </Panel>
              </Accordion>
              <FormGroup bsSize="xs">
                <FormControl type="text" placeholder="Search" />
              </FormGroup>
            </Col>
            <Col sm={10}>
              <Tab.Content animation>
                <Tab.Pane eventKey="2016/2/1">
                  <Row>
                    <Col sm={10}>
                      <PageHeader>오픈소스SW기초<small>&nbsp;&nbsp;&nbsp;&nbsp;신정규교수님</small></PageHeader>
                    </Col>
                    <Col sm={2}>
                      <Button bsStyle="primary">EDIT</Button>
                      <Button bsStyle="danger">DEL</Button>
                    </Col>
                  </Row>
                  <Example />
                  <Contacts/>
                  <ContactCreator />
                  <PaginationBasic />
                </Tab.Pane>
                <Tab.Pane eventKey="2016/2/2">
                  <Row>
                    <Col sm={10}>
                      <PageHeader>시스템프로그래밍기초<small>&nbsp;&nbsp;&nbsp;&nbsp;도경구교수님</small></PageHeader>
                    </Col>
                    <Col sm={2}>
                      <Button bsStyle="primary">EDIT</Button>
                      <Button bsStyle="danger">DEL</Button>
                    </Col>
                  </Row>
                  <PaginationBasic />
                </Tab.Pane>
                <Tab.Pane eventKey="2016/2/3">
                  <Row>
                    <Col sm={10}>
                      <PageHeader>프로그래밍설계방법론<small>&nbsp;&nbsp;&nbsp;&nbsp;김광교수님</small></PageHeader>
                    </Col>
                    <Col sm={2}>
                      <Button bsStyle="primary">EDIT</Button>
                      <Button bsStyle="danger">DEL</Button>
                    </Col>
                  </Row>
                  <PaginationBasic />
                </Tab.Pane>
                <Tab.Pane eventKey="2017/1/1">
                  오픈소스 개발
                </Tab.Pane>
                <Tab.Pane eventKey="2017/1/2">
                  자료구조론
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      );
   }
}

export default Sidebar;
