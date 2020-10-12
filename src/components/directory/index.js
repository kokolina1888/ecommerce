import React, { Component } from 'react';
import './styles.scss'
import MenuItem from '../menu-item'

class Directory extends Component {
    constructor(){
        super()
        this.state = {
          sections: [
            {
              title: "hats",
              imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
              id: 1,
              linkUrl: "hats"
            },
            {
              title: "jackets",
              imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
              id: 2,
              linkUrl: ""
            },
            {
              title: "sneakers",
              imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
              linkUrl: "",
              id: 3
            },
            {
              title: "womens",
              imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
              size: "large",
              linkUrl: "",
              id: 4
            },
            {
              title: "mens",
              imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
              size: "large",
              linkUrl: "",
              id: 5
            },
          ],
        };
    }
    render() {
        return (
            <div className="directory-menu">
               {this.state.sections.map(({ id, ...otherSectionProps }) => (
              <MenuItem key={id} {...otherSectionProps}/>
        ))}
            </div>
        );
    }
}

export default Directory;