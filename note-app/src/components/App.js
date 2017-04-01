import React from 'react';
import Memo from './Memo';
import Calendar from './Calendar';
import { Form,ControlLabel,Checkbox,Button,ButtonGroup,ListGroup,ListGroupItem,Tab,Row,Col,Accordion,Panel,Nav,NavItem,FormGroup,FormControl,PageHeader } from 'react-bootstrap';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLogin : false
    };
    this.login = this.login.bind(this);
  }

  login(e) {
    this.setState({
      isLogin : true
    });
  }

  render(){
    const formInstance = (
      <div>
        <Form horizontal>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
              아이디
            </Col>
            <Col sm={10}>
              <FormControl type="text" placeholder="ID" />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
              비밀번호
            </Col>
            <Col sm={10}>
              <FormControl type="password" placeholder="Password" />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Checkbox>Remember me</Checkbox>
            </Col>
          </FormGroup>
          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button type="submit" onClick={this.login}>
                Sign in
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );

    const note = (
      <div>
        <Tab.Container id="left-tabs-example" defaultActiveKey="calendar">
          <Row className="clearfix">
            <Col sm={2}>
              <br/>
              <h4>&nbsp;&nbsp;&nbsp;박 성우  2016003481</h4>
              <h5>&nbsp;&nbsp;&nbsp;&nbsp;한양대학교 컴퓨터공학과</h5>
              <br/>
              <Accordion>
                <Panel header="Home" eventKey="0">
                  <Nav bsStyle="pills" stacked>
                    <NavItem eventKey="calendar">
                      캘린더
                    </NavItem>
                    <NavItem eventKey="info">
                      내정보
                    </NavItem>
                    <NavItem eventKey="logout">
                      로그아웃
                    </NavItem>
                  </Nav>
                </Panel>
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
            </Col>
            <Col sm={10}>
              <Tab.Content animation>
                <Tab.Pane eventKey="calendar">
                  <Row>
                    <PageHeader>캘린더</PageHeader>
                  </Row>
                  <Calendar/>
                </Tab.Pane>
                <Tab.Pane eventKey="info">
                  <Row>
                    <PageHeader>내정보</PageHeader>
                    <Panel collapsible defaultExpanded header="내 정보">
                      <ListGroup fill>
                        <ListGroupItem>아이디 : {}</ListGroupItem>
                        <ListGroupItem>이름 : 박성우</ListGroupItem>
                        <ListGroupItem>학교 : 한양대학교</ListGroupItem>
                        <ListGroupItem>학번 : 2016003481</ListGroupItem>
                      </ListGroup>
                    </Panel>
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="logout">
                  <Row>
                    <PageHeader>로그아웃</PageHeader>
                  </Row>
                  <Button bsStyle="danger">로그아웃</Button>
                </Tab.Pane>
                <Tab.Pane eventKey="2016/2/1">
                  <Row>
                    <PageHeader>오픈소스SW기초<small>&nbsp;&nbsp;&nbsp;&nbsp;신정규교수님</small></PageHeader>
                  </Row>
                  <Memo/>
                </Tab.Pane>
                <Tab.Pane eventKey="2016/2/2">
                  <Row>
                    <PageHeader>시스템프로그래밍기초<small>&nbsp;&nbsp;&nbsp;&nbsp;도경구교수님</small></PageHeader>
                  </Row>
                  <Memo/>
                </Tab.Pane>
                <Tab.Pane eventKey="2016/2/3">
                  <Row>
                    <PageHeader>프로그래밍설계방법론<small>&nbsp;&nbsp;&nbsp;&nbsp;김광교수님</small></PageHeader>
                  </Row>
                  <Memo/>
                </Tab.Pane>
                <Tab.Pane eventKey="2017/1/1">
                  <Row>
                    <PageHeader>오픈소스개발<small>&nbsp;&nbsp;&nbsp;&nbsp;신정규교수님</small></PageHeader>
                  </Row>
                  <Memo/>
                </Tab.Pane>
                <Tab.Pane eventKey="2017/1/2">
                  <Row>
                    <PageHeader>자료구조론<small>&nbsp;&nbsp;&nbsp;&nbsp;교수님</small></PageHeader>
                  </Row>
                  <Memo/>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    )
    const view = (
      this.state.isLogin ? note : formInstance
    )
    return (
      <div>
        {view};
      </div>
    );
  }
}

export default App;
