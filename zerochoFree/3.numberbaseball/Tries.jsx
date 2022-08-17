const React = require('react')
const {Component} = React
class Tries extends  Component {

    render() {
        return (
            <li>
                {/* 이러면 부모 자식 관계가 생긴다. */}
                <b>{this.props.value[0]}</b><span>-</span>{this.props.value[1]}
                <div>컨텐츠1</div>
                <div>컨텐츠2</div>
                <div>컨텐츠3</div>
                <div>컨텐츠4</div>
            </li>
        )
    }
}
module.exports = Tries
