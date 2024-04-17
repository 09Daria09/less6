import React, { PureComponent } from "react";

class Posts extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      comments: [],
      loading: false 
    };
  }

  componentDidMount() {
    const URL = "https://jsonplaceholder.typicode.com/";
    fetch(URL + 'posts')
      .then((data) => data.json())
      .then((data) => this.setState({
        posts:data,
        liading: false
    
    }))

    this.timerId = setInterval(()=>{
      fetch(URL + 'comments')
      .then((data) => data.json())
      .then((data) => this.setState({comments: data}))
    } , 2000)
  }

  componentWillUnmount(){
    clearInterval(this.timerId)
  }

  render() {
    let content = '';
    let contentComments = '';
    if(this.state.loading){
      content = <h2>Loading...</h2>
    }
    else{
      content = this.state.posts.map (item => <h3 key={item.id}>
        {item.title}</h3>)
        contentComments = this.state.comments.map (item => <h3 key={item.id}>
          {item.name}</h3>)
    }
    return (
    <>
    <h1>Posts</h1>
    <div className="row">{content}</div>
    <hr />
    <div>{contentComments}</div>
    </>
    );
  }
}
export default Posts;