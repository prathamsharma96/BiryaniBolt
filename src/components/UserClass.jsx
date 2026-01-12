import React from "react";

class UserClasss extends React.Component {
  constructor(props) {
    super(props);
    console.log("Props in UserClasss:", props);
    this.state = {
      count: 0,
      count2: 1,
    };
  }

  render() {
    const { name, location } = this.props;
    const { count, count2 } = this.state;
    return (
      <div className="user-class">
        <h1>count :{count}</h1>
        <h1>count2:{count2}</h1>

        <button onClick={() => this.setState({ count: count + 1 })}>
          Increase Count
        </button>
        <button onClick={() => this.setState({ count2: count2 + 1 })}>
          Increase Count2
        </button>
        <h1>{name}</h1>
        <h2>{location}</h2>
        <p>This is a class-based React component.</p>
      </div>
    );
  }
}

export default UserClasss;
