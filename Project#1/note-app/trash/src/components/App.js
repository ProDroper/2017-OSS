import React from 'react';
import Memo from './Memo';
import Calendar from './Calendar';
import ReactCountdownClock from 'react-countdown-clock';

import { wellStyles,Form,ControlLabel,Button,ButtonGroup,ListGroup,ListGroupItem,Tab,Row,Col,Accordion,Panel,Nav,NavItem,FormGroup,FormControl,PageHeader } from 'react-bootstrap';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLogin : false,
      isJoinus : false,
      isTimer : true
    };
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.doJoinus = this.doJoinus.bind(this);
    this.notJoinus = this.notJoinus.bind(this);
    this.timergo = this.timergo.bind(this);
    this.timerstop = this.timerstop.bind(this);
  }

  login(e) {
    this.setState({
      isLogin : true
    });
  }

  logout(e) {
    this.setState({
      isLogin : false
    });
  }

  doJoinus(e) {
    this.setState({
      isJoinus : true
    });
  }

  notJoinus(e) {
    this.setState({
      isJoinus : false
    });
  }
  timergo(e) {
    this.setState({
      isTimer : true
    });
  }

  timerstop(e) {
    this.setState({
      isTimer : false
    });
  }

  render(){
    const login = {
      height: 180
    };
    const joinus = {
      height: 100
    };
    const timerheight = {
      height: 280
    };
    const margin = {
      margin: 1
    };
    const joinusform = (
      <div>
        <div style={joinus}>
        </div>
        <div>
          <Col smOffset={3} sm={6}>
            <h3> 강의노트 회원가입 </h3>
            <div className="well" style={wellStyles}>
              <Row className="show-grid">
                <Form horizontal>
                  <FormGroup>
                    <Col componentClass={ControlLabel} sm={2} smOffset={2}>
                      아이디
                    </Col>
                    <Col sm={6}>
                      <FormControl type="text" placeholder="아이디" />
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Col componentClass={ControlLabel} sm={2} smOffset={2}>
                      비밀번호
                    </Col>
                    <Col sm={6}>
                      <FormControl type="password" placeholder="비밀번호" />
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Col componentClass={ControlLabel} sm={2} smOffset={2}>
                      이름
                    </Col>
                    <Col sm={6}>
                      <FormControl type="text" placeholder="이름" />
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Col componentClass={ControlLabel} sm={2} smOffset={2}>
                      학교
                    </Col>
                    <Col sm={6}>
                      <FormControl type="text" placeholder="학교" />
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Col componentClass={ControlLabel} sm={2} smOffset={2}>
                      학과
                    </Col>
                    <Col sm={6}>
                      <FormControl type="text" placeholder="학과" />
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Col componentClass={ControlLabel} sm={2} smOffset={2}>
                      학번
                    </Col>
                    <Col sm={6}>
                      <FormControl type="text" placeholder="학번" />
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Col smOffset={7} sm={4}>
                      <ButtonGroup>
                        <Button type="submit" onClick={this.notJoinus} style={margin}>
                          로그인
                        </Button>
                        <Button type="submit" onClick={this.notJoinus} style={margin}>
                          회원가입
                        </Button>
                      </ButtonGroup>
                    </Col>
                  </FormGroup>
                </Form>
              </Row>
            </div>
          </Col>
        </div>
      </div>
    );

    const loginform = (
      <div>
        <div style={login}>
        </div>
        <div>
          <Col smOffset={3} sm={6}>
            <h3> 강의노트 로그인 </h3>
            <div className="well" style={wellStyles}>
              <Row className="show-grid">
                <Form horizontal>
                  <FormGroup>
                    <Col componentClass={ControlLabel} sm={2} smOffset={2}>
                      아이디
                    </Col>
                    <Col sm={6}>
                      <FormControl type="text" placeholder="아이디" />
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Col componentClass={ControlLabel} sm={2} smOffset={2}>
                      비밀번호
                    </Col>
                    <Col sm={6}>
                      <FormControl type="password" placeholder="비밀번호" />
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Col smOffset={7} sm={4}>
                      <ButtonGroup>
                        <Button type="submit" onClick={this.login} style={margin}>
                          로그인
                        </Button>
                        <Button type="submit" onClick={this.doJoinus} style={margin}>
                          회원가입
                        </Button>
                      </ButtonGroup>
                    </Col>
                  </FormGroup>
                </Form>
              </Row>
            </div>
          </Col>
        </div>
      </div>
    );

    const timer =
      this.state.isTimer ? <Button onClick={this.timerstop}>Go</Button> :
      <Button onClick={this.timergo}>Stop</Button>;

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
                    <NavItem eventKey="timer">
                      타이머
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
                <Tab.Pane eventKey="timer">
                  <Row>
                    <PageHeader>타이머</PageHeader>
                  </Row>
                  <div style={timerheight}>
                    <ReactCountdownClock seconds={60}
                                 color="#000"
                                 alpha={0.9}
                                 size={300}
                                 paused={this.state.isTimer} />
                  </div>
                  <Col smOffset={3} sm={6}>
                    {timer}
                  </Col>
                </Tab.Pane>
                <Tab.Pane eventKey="info">
                  <Row>
                    <PageHeader>내정보</PageHeader>
                    <Col sm={10} smOffset={1}>
                      <Panel collapsible defaultExpanded header="내 정보">
                        <ListGroup fill>
                          <ListGroupItem>아이디 : {}</ListGroupItem>
                          <ListGroupItem>이름 : 박성우</ListGroupItem>
                          <ListGroupItem>학교 : 한양대학교</ListGroupItem>
                          <ListGroupItem>학과 : 컴퓨터공학과</ListGroupItem>
                          <ListGroupItem>학번 : 2016003481</ListGroupItem>
                        </ListGroup>
                      </Panel>
                    </Col>
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="logout">
                  <Row>
                    <PageHeader>로그아웃</PageHeader>
                  </Row>
                  <Col sm={2} smOffset={5}>
                    <Button bsStyle="danger" onClick={this.logout}>로그아웃</Button>
                  </Col>
                </Tab.Pane>
                <Tab.Pane eventKey="2016/2/1">
                  <Row>
                    <PageHeader>오픈소스SW기초<small>&nbsp;&nbsp;&nbsp;&nbsp;신정규교수님</small></PageHeader>
                  </Row>
                  <Col sm={10} smOffset={1}>
                    <Memo/>
                  </Col>
                </Tab.Pane>
                <Tab.Pane eventKey="2016/2/2">
                  <Row>
                    <PageHeader>시스템프로그래밍기초<small>&nbsp;&nbsp;&nbsp;&nbsp;도경구교수님</small></PageHeader>
                  </Row>
                  <Col sm={10} smOffset={1}>
                    <Memo/>
                  </Col>
                </Tab.Pane>
                <Tab.Pane eventKey="2016/2/3">
                  <Row>
                    <PageHeader>프로그래밍설계방법론<small>&nbsp;&nbsp;&nbsp;&nbsp;김광교수님</small></PageHeader>
                  </Row>
                  <Col sm={10} smOffset={1}>
                    <Memo/>
                  </Col>
                </Tab.Pane>
                <Tab.Pane eventKey="2017/1/1">
                  <Row>
                    <PageHeader>오픈소스개발<small>&nbsp;&nbsp;&nbsp;&nbsp;신정규교수님</small></PageHeader>
                  </Row>
                  <Col sm={10} smOffset={1}>
                    <Memo/>
                  </Col>
                </Tab.Pane>
                <Tab.Pane eventKey="2017/1/2">
                  <Row>
                    <PageHeader>자료구조론<small>&nbsp;&nbsp;&nbsp;&nbsp;조성현교수님</small></PageHeader>
                  </Row>
                  <Col sm={10} smOffset={1}>
                    <Memo/>
                  </Col>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    )
    const first = (
      this.state.isJoinus ? joinusform : loginform
    )
    const view = (
      this.state.isLogin ? note : first
    )
    return (
      <div>
        {view}
      </div>
    );
  }
}

export default App;