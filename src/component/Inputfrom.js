import React from 'react';

class Inputfrom extends React.Component{
    constructor(){
        super()
        this.state = {
            name : ""
            }
        this.onHandleChange = this.onHandleChange.bind(this);
          }
          onHandleChange(e) {
              this.setState({name: e.target.value})
          }

    render(){
        return(
            <div>
                <input
                    type="text"
                    onChange={this.onHandleChange}
                    placeholder="name"
                    style={styles}

                />
                <button>OK</button>
                <p>{this.state.name}</p>
            </div>

    )
    }
}
let styles = {
    width: "300px"
}


export default Inputfrom;