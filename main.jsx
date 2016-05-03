var CardItem = React.createClass({
  render: function() {
    return (
      <div className={this.props.data.colour + ' card'}>
                <div className='cardTitle'>
                  <div className='title'>{this.props.data.name}</div>
                  <div className='numbers'>{this.props.data.numbers.toString()}</div>
                </div>
                <div className='symbol'>{this.props.data.symbol}</div>
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

class CardList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {data: this.props.data, versions: this.props.versions};
       this.switchVersion = this.switchVersion.bind(this);
    }
    switchVersion() {
    var selectBox = document.getElementById("versionChange");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
      this.setState({data: cards[selectedValue]});
    }
    render() {
        return (<div>
             {this.state.data.map(function(result) {
                return <CardItem key={result.name} data={result}/>;
            })}
            <span>Version </span>
            <select id="versionChange" onChange={this.switchVersion}>
            {this.state.versions.map((result) => {
                return <option key={result} value={result}>{result}</option>
            })}
            </select>
            </div>
            );
   }
}


ReactDOM.render(
    <CardList data={cards["0.3"]} versions={Object.keys(cards)}/>,
    document.getElementById('container')
);
