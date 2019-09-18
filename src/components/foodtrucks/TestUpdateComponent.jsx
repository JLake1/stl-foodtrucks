import React, {Component} from 'react'

class TestUpdateComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
 
        }
 

    }

    sendData = () => {
            // this.props.parentCallback("")
            console.log(this.props.parentCallback)
            return "ABC"
    }

   componentDidMount() {

        this.sendData("DEF")

   }

 

    render() { 
        return (
            <div className="test">
                <button onClick={this.sendData}>BUTTON</button>
            </div>
        )
    }
}

export default TestUpdateComponent