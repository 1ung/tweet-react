// console.log(tweets);
class Tweet extends React.Component {
  render() {
    return (
    <div>
      <h3>{this.props.name}</h3>
      <p>{this.props.post}</p>
    </div>  
    );
  }
}

class List extends React.Component {
  render() {
    let listOfTweets = this.props.tweets.map((tweet, index) => {
      return <Tweet key={tweet.id} name={tweet.user.name} post={tweet.text}></Tweet>;
    });
      return (
        <div>
        {listOfTweets}
        </div>
      );
    }
}

ReactDOM.render(
  <List tweets={tweets} />,
  document.getElementById('root')
);