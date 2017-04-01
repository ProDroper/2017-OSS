import React from 'react';
import MemoInfo from './MemoInfo';
import MemoCreate from './MemoCreate';
import { FormGroup,FormControl } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.css';

import update from 'react-addons-update';

export default class Memo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKey : -1,
      keyword: '',
      memoData: []
    };
      this.handleChange = this.handleChange.bind(this);
      this.handleClick = this.handleClick.bind(this);
      this.handleCreate = this.handleCreate.bind(this);
      this.handleRemove = this.handleRemove.bind(this);
      this.handleEdit = this.handleEdit.bind(this);
    }
/*
    componentWillMount(){
      const memoData = localStorage.memoData;
      if(memoData){
        this.setState({
          memoData: JSON.parse(memoData)
        });
      }
    }

    componentDidUpdate(prevProps, prevState){
      if(JSON.stringify(prevState.memoData) != JSON.stringify(this.state.memoData)) {
        localStorage.memoData = JSON.stringify(this.state.memoData);
      }
    }
*/
    handleChange(e){
      this.setState({
        keyword: e.target.value
      });
    }

    handleClick(key){
      this.setState({
        selectedKey : key
      });
    }

    handleCreate(memo){
      this.setState({
        memoData: update(this.state.memoData, { $push: [memo] })
      });
    }

    handleRemove(){
      if(this.state.selectedKey < 0){
        return;
      }
      this.setState({
        memoData: update(this.state.memoData,
          { $splice: [[this.state.selectedKey, 1]] }
        ),
        selectedKey: -1
      });
    }

    handleEdit(title, contents){
      this.setState({
        memoData: update(this.state.memoData,
          {
            [this.state.selectedKey] : {
              title: { $set: title },
              contents: { $set: contents }
            }
          })
      });
    }

    render() {
      const mapToComponents = (data) => {
        data.sort();
        data = data.filter(
          (memo) => {
            return memo.title.toLowerCase().indexOf(this.state.keyword) > -1;
          }
        );
        return data.map((memo, i) => {
          return (<MemoInfo
            memo={memo}
            key={i}
            onRemove={this.handleRemove}
            onEdit={this.handleEdit}
            onClick={() => this.handleClick(i)}/>);
        });
      };

    return (
      <div>
        <MemoCreate
          onCreate={this.handleCreate}
        />
        <FormGroup bsSize="xs">
          <FormControl
            type="text"
            placeholder="Search"
            name="keyword"
            placeholder="Search"
            value={this.state.keyword}
            onChange={this.handleChange}
          />
        </FormGroup>
        <div>{mapToComponents(this.state.memoData)}</div>
      </div>
    );
  }
}
