import React from 'react';
import { toRoman } from '../actions/RomanHelperActions';
import * as appConstants from '../appConstants';
import Input from './common/Input';

class IntegerToRoman extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputInteger: "",
            outputRomanValue: ""
        };
    }

    updateChangeIntoText(event) {
        this.setState({ inputInteger: this.state.inputInteger + event.target.value }, () => {
            toRoman(this.state.inputInteger).then(result => {
                this.setState({ outputRomanValue: result === -1 ? appConstants.INVALID_INPUT : result });
            }).catch(error => {
                this.setState({ outputRomanValue: appConstants.ERROR_MESSAGE });
            });
        });
    }

    handleInputTextChange(event) {
        this.setState({ inputInteger: event.target.value }, () => {
            toRoman(this.state.inputInteger).then(result => {
                this.setState({ outputRomanValue: result === -1 ? appConstants.INVALID_INPUT : result });
            }).catch(error => {
                this.setState({ outputRomanValue: appConstants.ERROR_MESSAGE });
            });
        });
    }

    handleClearBtnClick() {
        this.setState({ inputInteger: "", outputRomanValue: "" });
    }

    handleSwitchBtnClick() {
        this.props.changeConverter("Roman");
    }

    render() {
        const elements = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
        let inputButtons = [];
        for (const [index, value] of elements.entries()) {
            inputButtons.push(<Input type="button" key={index} value={value} onClick={(e) => this.updateChangeIntoText(e)} />)
        }

        return (
            <div className="block_number">
                <h2>Integer To Roman Converter</h2>
                <form name="form_number">
                    <Input type="number" name="txtNumber" id="txtNumber" value={this.state.inputInteger} onChange={(e) => this.handleInputTextChange(e)} />
                    <br />
                    <label>Answer : <b>{this.state.outputRomanValue}</b></label>
                    <br />

                    {inputButtons}

                    <Input type="button" value="Clear" onClick={() => this.handleClearBtnClick()} />
                    <Input type="button" value="Switch" onClick={() => this.handleSwitchBtnClick()} />
                </form>
            </div>
        );
    }
}

export default IntegerToRoman;
