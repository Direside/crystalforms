var CardList = React.createClass({
render: function() {
  return (
    <ul>
        {this.props.data.map(function(result) {
          console.log(result.name);
          return
            <CardItem key={result.name} data={result} />;
        })}
    </ul>
  );
}
});

var CardItem = React.createClass({
  render: function(data) {
    console.log(data);
    return
      <div class='card'>{this.props.data.name}</div>;
  }
});
