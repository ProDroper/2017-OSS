import React from 'react';
import update from 'react-addons-update'
import ReactDOM from 'react-dom';
import { Button,Modal } from 'react-bootstrap';
import { Contacts,ContactCreator,Popover,Tooltip,OverlayTrigger,ButtonToolbar,Pagination,Navbar,FormGroup,FormControl,PageHeader,Tab,Col,Row,Nav,NavItem,Accordion,Panel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';


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
