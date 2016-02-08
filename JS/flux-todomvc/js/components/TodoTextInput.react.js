var React = require('react');
var ReactPropTypes = React.PropTypes;
var ENTER = 13;

var TodoTextInput = React.createClass({

    PropTypes: {
        className: ReactPropTypes.string,
        id: ReactPropTypes.string,
        placeholder: ReactPropTypes.string,
        onSave: ReactPropTypes.func.isRequired,
        value: ReactPropTypes.string
    },

    getInitialState() {
        return {
            value: this.props.value || ''
        };
    },

    render: function() {
        return (
            <input
            className= {this.props.className}
            id={this.props.id}
            placeholder = {this.props.placeholder}
            //onBlur = {this._save}
            onChange = {this._onChange}
            onKeyDown={this._onKeyDown}
            value = {this.state.value}
            autoFocus = {true}
            />
            );
    },

    _save: function() {
        this.props.onSave(this.state.value);
        this.setState({
            value: ''
        });
        // console.log("save",this.state.value);
        return;
    },

    _onChange: function(event) {
        this.setState({
            value: event.target.value
        });
        // console.log("change",this.state.value);
        return;
    },

    _onKeyDown: function(event) {
        if (event.keyCode === ENTER) {
            this._save();
        }
        return;
    }

});

module.exports = TodoTextInput;