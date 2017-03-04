import * as React from 'react';
import {connect} from 'react-redux'
import {changeMessageAsync} from '../actions/SampleActions';

interface HelloProps {
  compiler: string
  framework: string;
  changeMessageAsync?: () => void;
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
class Hello extends React.Component<HelloProps, undefined> {
  constructor(props: HelloProps) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  // Mapping ref types.
  // See http://stackoverflow.com/questions/33796267/how-to-use-refs-in-react-with-typescript
  refs: {
    [key: string]: (Element);
    message: (HTMLInputElement);
  }

  render() {
    return (
      <div>
        <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
        <input ref='message'/>
        <button onClick={this.onClick}>click</button>
      </div>
    );
  }

  onClick() {
    let message = this.refs.message.value;
    this.props.changeMessageAsync();
  }
}

function mapStateToProps(state: any) {
  return {
    framework: state
  };
};

const mapDispatchToProps = {
  changeMessageAsync
};

// See http://stackoverflow.com/questions/38243652/react-redux-connect-issues-in-typescript
export default connect<{}, {}, HelloProps>(mapStateToProps, mapDispatchToProps)(Hello);
