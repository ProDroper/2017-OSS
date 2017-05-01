import React from 'react';
import Memo from './Memo';
import Memo2 from './Memo2';
import Memo3 from './Memo3';
import Memo4 from './Memo4';
import Memo5 from './Memo5';
import Calendar from './Calendar';
import ReactCountdownClock from 'react-countdown-clock';
import AnalogClock, { Themes } from 'react-analog-clock';
import update from 'react-addons-update';

import { wellStyles,Form,ControlLabel,Button,ButtonGroup,ListGroup,ListGroupItem,Tab,Row,Col,Accordion,Panel,Nav,NavItem,FormGroup,FormControl,PageHeader } from 'react-bootstrap';


class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            memberdata :[
                { id: "admin", pw: "admin", name: "박성우", sch: "한양대학교", study: "컴퓨터공학과", num: "2016003481" }
            ],
            idx : 0,
            isLogin : false,
            isJoinus : false,
            isTimer : true,
            myid: '',
            mypw: '',
            id: '',
            pw: '',
            name: '',
            sch: '',
            study: '',
            num: '',
            name_e: '',
            sch_e: '',
            study_e: '',
            num_e: '',
            color: "white"
        };
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.doJoinus = this.doJoinus.bind(this);
        this.notJoinus = this.notJoinus.bind(this);
        this.timergo = this.timergo.bind(this);
        this.timerstop = this.timerstop.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.getInital = this.getInital.bind(this);
        this.changecolor = this.changecolor.bind(this);

    }

    getInital(){
        this.setState({
            color: "white"
        });
    }

    changecolor(){
        this.setState({
            color: "skyblue"
        });
    }

    handleEdit(){
        if(this.state.name_e !== '' && this.state.sch_e !== '' && this.state.study_e !== '' && this.state.num_e !== '') {
            this.setState({
                memberdata: update(this.state.memberdata,
                    {
                        [this.state.idx]: {
                            id: {$set: this.state.myid},
                            pw: {$set: this.state.mypw},
                            name: {$set: this.state.name_e},
                            sch: {$set: this.state.sch_e},
                            study: {$set: this.state.study_e},
                            num: {$set: this.state.num_e}
                        }
                    })
            });
        }
        else{
            alert("비어있는 항목이 있습니다.")
        }
    }

    handleChange(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    handleCreate(member){
        this.setState({
            memberdata: update(this.state.memberdata, { $push: [member] })
        });
    }

    handleClick() {
        if(this.state.pw.length < 6) {
            alert("비밀번호가 너무 짧습니다.")
        }
        else if(this.state.id !== '' && this.state.name !== '' && this.state.sch !== '' && this.state.study !== '' && this.state.num !== ''){
            const member = {
                id: this.state.id,
                pw: this.state.pw,
                name: this.state.name,
                sch: this.state.sch,
                study: this.state.study,
                num: this.state.num
            };
            this.handleCreate(member);
            this.setState({
                id: '',
                pw: '',
                name: '',
                sch: '',
                study: '',
                num: ''
            });
            this.setState({
                isJoinus: false
            });
        }
        else {
            alert("비어있는 항목이 있습니다.")
        }
    }
    componentWillMount(){
        const memberdata = localStorage.memberdata;
        if(memberdata){
            this.setState({
                memberdata: JSON.parse(memberdata)
            });
        }
    }

    componentDidUpdate(prevProps, prevState){
        if(JSON.stringify(prevState.memberdata) !== JSON.stringify(this.state.memberdata)) {
            localStorage.memberdata = JSON.stringify(this.state.memberdata);
        }
    }

    login(e) {
        this.state.memberdata.map((member, i) => {
            if((member.id === this.state.myid) && (member.pw === this.state.mypw))
            {
                return (
                    this.setState({
                        isLogin : true,
                        idx : i
                    })
                );
            }
            return (
                alert("아이디 또는 비밀번호가 존재하지 않습니다")
            );
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
        var style = { backgroundColor: this.state.color };

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
        const all = {
            height: 200
        };
        const joinusform = (
            <div>
              <div style={joinus}>
              </div>
              <div>
                <Col smOffset={3} sm={6}>
                  <h3> 숙제노트 회원가입 </h3>
                  <div className="well" style={wellStyles}>
                    <Row className="show-grid">
                      <Form horizontal>
                        <FormGroup>
                          <Col componentClass={ControlLabel} sm={2} smOffset={2}>
                            아이디
                          </Col>
                          <Col sm={6}>
                            <FormControl type="text" placeholder="아이디" name="id" value={this.state.id} onChange={this.handleChange} />
                          </Col>
                        </FormGroup>
                        <FormGroup>
                          <Col componentClass={ControlLabel} sm={2} smOffset={2}>
                            비밀번호
                          </Col>
                          <Col sm={6}>
                            <FormControl type="password" placeholder="비밀번호 (6자리 이상)" name="pw" value={this.state.pw} onChange={this.handleChange} />
                          </Col>
                        </FormGroup>
                        <FormGroup>
                          <Col componentClass={ControlLabel} sm={2} smOffset={2}>
                            이름
                          </Col>
                          <Col sm={6}>
                            <FormControl type="text" placeholder="이름" name="name" value={this.state.name} onChange={this.handleChange} />
                          </Col>
                        </FormGroup>
                        <FormGroup>
                          <Col componentClass={ControlLabel} sm={2} smOffset={2}>
                            학교
                          </Col>
                          <Col sm={6}>
                            <FormControl type="text" placeholder="학교" name="sch" value={this.state.sch} onChange={this.handleChange} />
                          </Col>
                        </FormGroup>
                        <FormGroup>
                          <Col componentClass={ControlLabel} sm={2} smOffset={2}>
                            학과
                          </Col>
                          <Col sm={6}>
                            <FormControl type="text" placeholder="학과" name="study" value={this.state.study} onChange={this.handleChange} />
                          </Col>
                        </FormGroup>
                        <FormGroup>
                          <Col componentClass={ControlLabel} sm={2} smOffset={2}>
                            학번
                          </Col>
                          <Col sm={6}>
                            <FormControl type="text" placeholder="학번" name="num" value={this.state.num} onChange={this.handleChange} />
                          </Col>
                        </FormGroup>
                        <FormGroup>
                          <Col smOffset={7} sm={4}>
                            <ButtonGroup>
                              <Button type="submit" onClick={this.notJoinus} style={margin}>
                                로그인
                              </Button>
                              <Button type="submit" onClick={this.handleClick} style={margin}>
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
                  <h3> 숙제노트 로그인 </h3>
                  <div className="well" style={wellStyles}>
                    <Row className="show-grid">
                      <Form horizontal>
                        <FormGroup>
                          <Col componentClass={ControlLabel} sm={2} smOffset={2}>
                            아이디
                          </Col>
                          <Col sm={6}>
                            <FormControl type="text" placeholder="아이디" name="myid" value={this.state.myid} onChange={this.handleChange} />
                          </Col>
                        </FormGroup>
                        <FormGroup>
                          <Col componentClass={ControlLabel} sm={2} smOffset={2}>
                            비밀번호
                          </Col>
                          <Col sm={6}>
                            <FormControl type="password" placeholder="비밀번호" name="mypw" value={this.state.mypw} onChange={this.handleChange} />
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

        const first = (
            this.state.isJoinus ? joinusform : loginform
        )
        const note = (
            <div style={style} >
                <Tab.Container id="left-tabs-example" defaultActiveKey="calendar">
                    <Row className="clearfix">
                        <Col sm={2}>
                            <br/>
                            <h4>&nbsp;&nbsp;&nbsp;{this.state.memberdata[this.state.idx].name}  {this.state.memberdata[this.state.idx].num}</h4>
                            <h5>&nbsp;&nbsp;&nbsp;&nbsp;{this.state.memberdata[this.state.idx].sch} {this.state.memberdata[this.state.idx].study}</h5>
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
                                        <NavItem eventKey="clock">
                                            시계
                                        </NavItem>
                                        <NavItem eventKey="info">
                                            내정보
                                        </NavItem>
                                        <NavItem eventKey="setting">
                                            설정
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
                            <Button href="http://portal.hanyang.ac.kr">한양대학교 포탈 바로가기</Button>
                            <div style={all}/>
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
                                <Tab.Pane eventKey="clock">
                                    <Row>
                                        <PageHeader>시계</PageHeader>
                                    </Row>
                                    <Col smOffset={3} sm={6}>
                                        <AnalogClock theme={Themes.light} width={400} />
                                    </Col>
                                </Tab.Pane>
                                <Tab.Pane eventKey="setting">
                                    <Row>
                                        <PageHeader>설정</PageHeader>
                                    </Row>
                                    <Col smOffset={3} sm={6}>
                                        <h6>수정하실 경우 자동으로 로그아웃 됩니다</h6>
                                        <Form horizontal>
                                            <FormGroup>
                                                <Col componentClass={ControlLabel} sm={2} smOffset={2}>
                                                    이름
                                                </Col>
                                                <Col sm={6}>
                                                    <FormControl type="text" placeholder="이름" name="name_e" value={this.state.name_e} onChange={this.handleChange} />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup>
                                                <Col componentClass={ControlLabel} sm={2} smOffset={2}>
                                                    학교
                                                </Col>
                                                <Col sm={6}>
                                                    <FormControl type="text" placeholder="학교" name="sch_e" value={this.state.sch_e} onChange={this.handleChange} />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup>
                                                <Col componentClass={ControlLabel} sm={2} smOffset={2}>
                                                    학과
                                                </Col>
                                                <Col sm={6}>
                                                    <FormControl type="text" placeholder="학과" name="study_e" value={this.state.study_e} onChange={this.handleChange} />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup>
                                                <Col componentClass={ControlLabel} sm={2} smOffset={2}>
                                                    학번
                                                </Col>
                                                <Col sm={6}>
                                                    <FormControl type="text" placeholder="학번" name="num_e" value={this.state.num_e} onChange={this.handleChange} />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup>
                                                <Col smOffset={9} sm={2}>
                                                    <ButtonGroup>
                                                        <Button type="submit" onClick={this.handleEdit} style={margin}>
                                                            수정
                                                        </Button>
                                                    </ButtonGroup>
                                                </Col>
                                            </FormGroup>
                                        </Form>
                                        <ButtonGroup>
                                            <Button type="submit" onClick={this.getInital} style={margin}>
                                                배경 흰색
                                            </Button>
                                            <Button type="submit" onClick={this.changecolor} style={margin}>
                                                배경 하늘색
                                            </Button>
                                        </ButtonGroup>
                                    </Col>
                                </Tab.Pane>
                                <Tab.Pane eventKey="info">
                                    <Row>
                                        <PageHeader>내정보</PageHeader>
                                        <Col sm={10} smOffset={1}>
                                            <Panel collapsible defaultExpanded header="내 정보">
                                                <ListGroup fill>
                                                    <ListGroupItem>아이디 : {this.state.memberdata[this.state.idx].id}</ListGroupItem>
                                                    <ListGroupItem>이름 : {this.state.memberdata[this.state.idx].name}</ListGroupItem>
                                                    <ListGroupItem>학교 : {this.state.memberdata[this.state.idx].sch}</ListGroupItem>
                                                    <ListGroupItem>학과 : {this.state.memberdata[this.state.idx].study}</ListGroupItem>
                                                    <ListGroupItem>학번 : {this.state.memberdata[this.state.idx].num}</ListGroupItem>
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
                                        <Memo2/>
                                    </Col>
                                </Tab.Pane>
                                <Tab.Pane eventKey="2016/2/3">
                                    <Row>
                                        <PageHeader>프로그래밍설계방법론<small>&nbsp;&nbsp;&nbsp;&nbsp;김광교수님</small></PageHeader>
                                    </Row>
                                    <Col sm={10} smOffset={1}>
                                        <Memo3/>
                                    </Col>
                                </Tab.Pane>
                                <Tab.Pane eventKey="2017/1/1">
                                    <Row>
                                        <PageHeader>오픈소스개발<small>&nbsp;&nbsp;&nbsp;&nbsp;신정규교수님</small></PageHeader>
                                    </Row>
                                    <Col sm={10} smOffset={1}>
                                        <Memo4/>
                                    </Col>
                                </Tab.Pane>
                                <Tab.Pane eventKey="2017/1/2">
                                    <Row>
                                        <PageHeader>자료구조론<small>&nbsp;&nbsp;&nbsp;&nbsp;조성현교수님</small></PageHeader>
                                    </Row>
                                    <Col sm={10} smOffset={1}>
                                        <Memo5/>
                                    </Col>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        )
        const view = (
            this.state.isLogin ? note : first
        )
        return (
            <div>
              <div>
                  {view}
              </div>
            </div>
        );
    }
}

export default App;
