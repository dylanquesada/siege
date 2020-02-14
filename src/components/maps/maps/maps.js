import React, { Component } from "react";
import Level from "../level/level";
class Maps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maps: [
        {
          name: "Oregon",
          levels: [
            {
              name: "basement",
              imgPath: "../../images/maps/Siege_Oregon_Layout_1.jpg"
            },
            {
              name: "1F",
              imgPath: "../../images/maps/Siege_Oregon_Layout_2.jpg"
            },
            {
              name: "2F",
              imgPath: "../../images/maps/Siege_Oregon_Layout_3.jpg"
            },
            {
              name: "3F",
              imgPath: "../../images/maps/Siege_Oregon_Layout_4.jpg"
            }
          ]
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <h2>maps</h2>
        {this.state.maps.map(map => {
          return (
            <div>
              <Level levels={map.levels}></Level>
              {/* <img src={map.imgPath} className="App-logo" alt="logo" />
              <p>{map.name}</p> */}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Maps;
