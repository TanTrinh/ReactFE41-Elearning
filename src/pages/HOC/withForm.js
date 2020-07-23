import React from "react";

const withForm = (Component) => {
  class WrapperComponent extends React.Component {
    state = {
      count: 0,
    };

    handleClick = () => {
      this.setState((state) => {
        return {
          count: state.count + 1,
        };
      });
    };

    render() {
      return (
        <Component
          count={this.state.count}
          onClick={this.handleClick}
          name="Cybersoft"
        />
      );
    }
  }

  return WrapperComponent;
};

class ComponentA extends React.Component {
  //   state = {
  //     count: 0,
  //   };

  //   handleClick = () => {
  //     this.setState((state) => {
  //       return {
  //         count: state.count + 1,
  //       };
  //     });
  //   };
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <button onClick={this.props.onClick}>Click</button>
        <p>Count: {this.props.count}</p>
      </div>
    );
  }
}

export const ComponentAWithForm = withForm(ComponentA);

class ComponentB extends React.Component {
  //   state = {
  //     count: 0,
  //   };

  //   handleClick = () => {
  //     this.setState((state) => {
  //       return {
  //         count: state.count + 1,
  //       };
  //     });
  //   };
  render() {
    return (
      <div>
        <h4>{this.props.name}</h4>
        <button onClick={this.props.onClick}>Click</button>
        <p>Count: {this.props.count}</p>
      </div>
    );
  }
}

export const ComponentBWithForm = withForm(ComponentB);
