import * as React from 'react';
import {connect} from 'react-redux'
import {changeMessage} from '../actions/SampleActions';

interface HelloProps {
  compiler: string
  framework: string;
  onClick?: () => void;
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
class Hello extends React.Component<HelloProps, undefined> {
  render() {
    return (
      <div>
        <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
        <input ref='message'/>
        <button onClick={this.props.onClick}>click</button>
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    framework: state
  };
};

function mapDispatchToProps(dispatch: Function) {
  return {
    onClick: () => {
      dispatch(changeMessage('hi'));
    }
  };
}

// See http://stackoverflow.com/questions/38243652/react-redux-connect-issues-in-typescript
export default connect<{}, {}, HelloProps>(mapStateToProps, mapDispatchToProps)(Hello);
