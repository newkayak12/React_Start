const React  = require('react')
const { Component } = React

class Try extends Component {
    constructor(props) {
        super(props);
        // const filtered = this.props.filter()
        // this.state = {
        //
        // }
        //이렇게 할 수도 있고
    }

    render() {
        // const {try, result}= this.props
        console.log(this.props)
        return (
            <>
                <li>{this.props.try} / {this.props.result}</li>
            </>
        )
    }
}
module.exports = Try
