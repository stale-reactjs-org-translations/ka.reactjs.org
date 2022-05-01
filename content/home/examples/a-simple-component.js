class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        გამარჯობა, {this.props.name}
      </div>
    );
  }
}

ReactDOM.render(
  <HelloMessage name="თამარ" />,
  document.getElementById('hello-example')
);