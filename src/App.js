import './App.css';
import React , {Component} from "react";
import JSON from "./db.json"
import NewsList from "./components/news_list";
import {css} from "glamor";
import Header from './components/header';


class App extends Component {
 
 state = {
      news:JSON ,
      fillterd: []
 }

  getKeyword = (event) =>{
    const keyword = event.target.value;
    let fillterd = this.state.news.filter((item)=>{
return item.title.indexOf(keyword) > -1
    });
    this.setState({
      fillterd:fillterd
    })
  
  }

render(){
    let Newswhole = this.state.news;
    let Newsfillterd = this.state.fillterd;

    let news_item = css({
      padding: '10px',
      boxSizing: 'border-box',
      borderBottom: '2px solid red',
      borderTop: '2px solid red',
      borderRadius: '20px',
      borderLeft: '5px solid black',
      borderRight:'5px solid black'
    })

     return(
<>
<div {...news_item}  >
    <Header keywords={this.getKeyword}/>

    <NewsList news={this.state.fillterd.length === 0 ? Newswhole : Newsfillterd} />
</div>
</>
    )
  }
}
export default App;
