var CardItem = React.createClass({
  render: function() {
    return (
      <div className={this.props.data.colour + ' card'}>
                <div className='cardTitle'>{this.props.data.name} - {this.props.data.numbers.toString()}</div>
                <img className='cardImage' src={'./img/' + this.props.data.art} />
                <div className='cardAbilities'>
                  {this.props.data.abilities.map(function(ability) {
                     return (
                       <div className='cardAbility' key={ability.name}><strong>{ability.name}</strong> - {ability.text}</div>
                     )
                  })}
                </div>
      </div>
    )
  }
});

var CardList = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.data.map(function(result) {
           return <CardItem key={result.name} data={result}/>;
        })}
      </div>
    );
  }
});


ReactDOM.render(
    <CardList data={cards} />,
    document.getElementById('container')
);
