import React from 'react';

class AwesomeComponent extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {likes_count: 0};
    this.on_like = this.on_like.bind(this);
  }

  on_like()
  {
    const new_likes_count = this.state.likes_count + 1;

    this.setState({likes_count: new_likes_count});
  }

  render()
  {
    return (
      <div>
        Likes : <span>{this.state.likes_count}</span>
        <div><button onClick={this.on_like}>Like Me</button></div>
      </div>
    );
  }
}

export default AwesomeComponent;
