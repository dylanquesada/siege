import React, { Component } from "react";
class Level extends Component {
  constructor(props) {
    super(props);
    this.state = {
      levels: this.props.levels
    };
  }

  render() {
    return (
      <div>
        <h2>levels</h2>
        {this.state.levels.map(level => {
          return (
            <div>
              <img src={level.imgPath} className="map-level" alt="" />
              <p>{level.name}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Level;
