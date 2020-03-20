import React from 'react';
import { fromRoman } from '../actions/RomanHelperActions';
import * as appConstants from '../appConstants';
import Input from './common/Input';

class RomanToInteger extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputRoman: "",
            outputIntegerValue: ""
        };
    }

    updateChangeIntoText(event) {
        this.setState({ inputRoman: this.state.inputRoman + event.target.value }, () => {
            fromRoman(this.state.inputRoman).then(result => {
                this.setState({ outputIntegerValue: result === 0 ? appConstants.INVALID_ROMAN_INPUT : result });
            }).catch(error => {
                this.setState({ outputIntegerValue: appConstants.ERROR_MESSAGE });
            });
        });
    }

    handleInputTextChange(event) {
        this.setState({ inputRoman: event.target.value }, () => {
            fromRoman(this.state.inputRoman).then(result => {
                this.setState({ outputIntegerValue: result === 0 ? appConstants.INVALID_ROMAN_INPUT : result });
            }).catch(error => {
                this.setState({ outputIntegerValue: appConstants.ERROR_MESSAGE });
            });
        });
    }

    handleClearBtnClick() {
        this.setState({ inputRoman: "", outputIntegerValue: "" });
    }

    handleSwitchBtnClick() {
        this.props.changeConverter("Integer");
    }

    render() {
        const elements = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC',
            'C', 'CD', 'D', 'CM', 'M'];
        let inputButtons = [];
        for (const [index, value] of elements.entries()) {
            inputButtons.push(<Input type="button" key={index} value={value} onClick={(e) => this.updateChangeIntoText(e)} />)
        }

        return (
            <div className="block_roman">
                <h2>Roman To Integer Converter</h2>
                <form name="form_roman">
                    <Input type="text" name="txtRoman" id="txtRoman" value={this.state.inputRoman} onChange={(e) => this.handleInputTextChange(e)} />
                    <br />
                    <label>Answer : <b>{this.state.outputIntegerValue}</b></label>
                    <br />

                    {inputButtons}

                    <Input type="button" value="Clear" onClick={() => this.handleClearBtnClick()} />
                    <Input type="button" value="Switch" onClick={() => this.handleSwitchBtnClick()} />
                </form>
            </div>
        );
    }
}

export default RomanToInteger;
