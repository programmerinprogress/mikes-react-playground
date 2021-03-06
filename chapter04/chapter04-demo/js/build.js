const AnalogueDisplay = props => {
  let date = new Date(props.time);
  let dialStyle = {
    position: 'relative',
    top: 0,
    left: 0,
    width: 200,
    height: 200,
    borderRadius: 10,
    borderStyle: 'solid',
    borderColor: 'black'
  };
  let secondHandStyle = {
    position: 'relative',
    top: 100,
    left: 100,
    border: '1px solid red',
    width: '40%',
    height: 1,
    transform: 'rotate(' + (date.getSeconds() / 60 * 360 - 90).toString() + 'deg)',
    transformOrigin: '0% 0%',
    backgroundColor: 'red'
  };
  let minuteHandStyle = {
    position: 'relative',
    top: 100,
    left: 100,
    border: '1px solid grey',
    width: '40%',
    height: 3,
    transform: 'rotate(' + (date.getMinutes() / 60 * 360 - 90).toString() + 'deg)',
    transformOrigin: '0% 0%',
    backgroundColor: 'grey'
  };
  let hourHandStyle = {
    position: 'relative',
    top: 92,
    left: 106,
    border: '1px solid grey',
    width: '20%',
    height: 7,
    transform: 'rotate(' + (date.getHours() / 12 * 360 - 90).toString() + 'deg)',
    transformOrigin: '0% 0%',
    backgroundColor: 'grey'
  };
  return React.createElement(
    'div',
    null,
    React.createElement(
      'div',
      { style: dialStyle },
      React.createElement('div', { style: secondHandStyle }),
      React.createElement('div', { style: minuteHandStyle }),
      React.createElement('div', { style: hourHandStyle })
    )
  );
};
let inputValue = 'Texas';
class AntiPattern extends React.Component {
    render() {
        this.inputValue = 'South Africa';
        return React.createElement(
            'div',
            null,
            this.props.inputValue,
            inputValue,
            this.inputValue
        );
    }
}
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.launchClock();
        this.state = {
            currentTime: new Date()
        };
    }
    launchClock() {
        setInterval(() => {
            this.setState({
                currentTime: new Date()
            });
        }, 1000);
    }
    render() {
        return React.createElement(
            "div",
            null,
            React.createElement(DigitalDisplay, { time: this.state.currentTime.toLocaleString() }),
            React.createElement(AnalogueDisplay, { time: this.state.currentTime })
        );
    }
}
const DigitalDisplay = props => {
    return React.createElement(
        "span",
        null,
        props.time
    );
};
class GoodbyeWorld extends React.Component {
    render() {
        let redText = { color: 'red', backgroundColor: 'grey' };
        let butt = this.props.butt;
        return React.createElement(
            'div',
            null,
            React.createElement(
                'h2',
                { style: redText },
                'Goodbye world!'
            ),
            React.createElement(
                'h3',
                null,
                'Butt is ',
                butt ? butt : 'fine'
            )
        );
    }
}
class HelloWorld extends React.Component {
  render() {
    return React.createElement(
      "h1",
      this.props,
      "Hello ",
      this.props.frameworkname,
      " world!!!"
    );
  }
}
ReactDOM.render(React.createElement(
  'div',
  null,
  React.createElement(Clock, null)
), document.getElementById('content'));
