import React from 'react';
import Memo from './Memo';
import { Tab,Row,Col,Accordion,Panel,Nav,NavItem,FormGroup,FormControl,PageHeader } from 'react-bootstrap';

class App extends React.Component {
  render(){
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
          </Col>
          <Col sm={10}>
            <Tab.Content animation>
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
              </Tab.Pane>
              <Tab.Pane eventKey="2016/2/3">
                <Row>
                  <PageHeader>프로그래밍설계방법론<small>&nbsp;&nbsp;&nbsp;&nbsp;김광교수님</small></PageHeader>
                </Row>
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

export default App;
