import React from 'react';
import NewsItem from './news_list_item';


const styles ={
    div:{
    color:'black',
    fontStyle: 'bold',
    fontSize: '18px'
  },
  word:{
    color:'black',
    fontStyle: 'italic',
    fontSize: '50px'
  }
}


const NewsList = (props) =>{

const items = props.news.map((item) =>{
    return (
<NewsItem key={item.id} item={item}/>

       
    )
})

    return (
    
    <div style = {styles.div}> {items} 
    
    </div>
    

    )
}
export default NewsList;