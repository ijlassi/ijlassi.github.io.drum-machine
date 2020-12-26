function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const data = [
{
  id: 'Heater-1',
  letter: 'A',
  src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },

{
  id: 'Heater-2',
  letter: 'Z',
  src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },

{
  id: 'Heater-3',
  letter: 'E',
  src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },

{
  id: 'Heater-4',
  letter: 'R',
  src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' },

{
  id: 'Clap',
  letter: 'B',
  src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },

{
  id: 'Open-HH',
  letter: 'U',
  src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },

{
  id: 'Kick-n-Hat',
  letter: 'I',
  src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },

{
  id: 'Kick',
  letter: 'O',
  src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },

{
  id: 'Closed-HH',
  letter: 'P',
  src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' }];



class DrumPad extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "handleKeyDown",










    e => {
      if (e.keyCode === this.props.letter.charCodeAt()) {
        this.audio.play();
        this.audio.currentTime = 0;
        this.props.handleDisplay(this.props.id);
      }
    });_defineProperty(this, "handleClick",

    () => {
      this.audio.play();
      this.audio.currentTime = 0;
      this.props.handleDisplay(this.props.id);
    });}componentDidMount() {document.addEventListener('keydown', this.handleKeyDown);window.focus();}componentWillUnmount() {document.removeEventListener('keydown', this.handleKeyDown);}


  render() {
    return /*#__PURE__*/(
      React.createElement("div", {
        className: "drum-pad",
        id: this.props.id,
        onClick: this.handleClick }, /*#__PURE__*/

      React.createElement("h1", null, this.props.letter), /*#__PURE__*/
      React.createElement("audio", {
        className: "clip",
        id: this.props.letter,
        src: this.props.src,
        ref: ref => this.audio = ref })));




  }}


class App extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "handleDisplay",




    display => this.setState({ display }));this.state = { display: 'Press a Key On The  Keyboard' };}
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "drum-machine" }, /*#__PURE__*/
      React.createElement("div", { id: "display" }, this.state.display), /*#__PURE__*/
      React.createElement("div", { id: "drum-pads" },
      data.map((i) => /*#__PURE__*/
      React.createElement(DrumPad, {
        id: i.id,
        letter: i.letter,
        src: i.src,
        handleDisplay: this.handleDisplay })))));




  }}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));