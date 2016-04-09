var CardItem = React.createClass({
  render: function() {
    return (
      <div className={this.props.data.colour + ' card'}>
                <div className='cardTitle'>{this.props.data.name}</div>
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

this.changeFunc(index)

class CardList extends React.Component {
constructor() {
  super();
  this.state = {data: this.props.data};
  this._changeData() = this._changeData.bind(this);
}
 _changeData(index) {
  this.setState({data: cards[index]})
},
  render() {
    return (
      <div>
        {this.state.data.map(function(result) {
           return <CardItem key={result.name} data={result}/>;
        })}
        <Button changeFunc={this.changeData.bind(this)}>BUTTON</button>
      </div>
    );
  }
}


ReactDOM.render(
    <CardList data={cards} />,
    document.getElementById('container')
);
