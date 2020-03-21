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

    //function to update the textbox #txtRoman value using state whenever roman input buttons are clicked
    //Also for every button click, fromRoman-API method is invoked to get the integer result
    updateChangeIntoText(event) {
        this.setState({ inputRoman: this.state.inputRoman + event.target.value },
            () => {
                fromRoman(this.state.inputRoman).then(result => {
                    this.setState({
                        outputIntegerValue: result
                    });
                }).catch(error => {
                    this.setState({
                        outputIntegerValue: error === -1 ?
                            appConstants.INVALID_ROMAN_INPUT : appConstants.ERROR_MESSAGE
                    })
                });
            });
    }

    //function to update the textbox #txtRoman value using state whenever user inputs into textbox
    //Also for every text input into #txtRoman, fromRoman-API method is invoked to get the integer result
    handleInputTextChange(event) {
        this.setState({ inputRoman: event.target.value }, () => {
            fromRoman(this.state.inputRoman).then(result => {
                this.setState({
                    outputIntegerValue: result
                });
            }).catch(error => {
                this.setState({
                    outputIntegerValue: error === -1 ?
                        appConstants.INVALID_ROMAN_INPUT : appConstants.ERROR_MESSAGE
                })
            });
        });
    }

    //function to clear value in #txtRoman when clear button is clicked
    handleClearBtnClick() {
        this.setState({ inputRoman: "", outputIntegerValue: "" });
    }

    //function to switch converter to IntegerToRoman using parent props method changeConverter
    handleSwitchBtnClick() {
        this.props.changeConverter("Integer");
    }

    render() {
        //inputs roman numeral buttons
        const elements = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC',
            'C', 'CD', 'D', 'CM', 'M'];
        let inputButtons = [];
        for (const [index, value] of elements.entries()) {
            inputButtons.push(<Input type="button" key={index} value={value}
                onClick={(e) => this.updateChangeIntoText(e)} />)
        }

        return (
            <div className="block_roman">
                <h2>Roman To Integer Converter</h2>
                <form name="form_roman">
                    {/* render textbox for input */}
                    <Input type="text" name="txtRoman" id="txtRoman"
                        value={this.state.inputRoman} onChange={(e) => this.handleInputTextChange(e)} />
                    <br />
                    <label>Answer : <b>{this.state.outputIntegerValue}</b></label>
                    <br />
                    {/* render input roman numeral buttons*/}
                    {inputButtons}
                    {/* render clear and switch button */}
                    <Input type="button" value="Clear" onClick={() => this.handleClearBtnClick()} />
                    <Input type="button" value="Switch" onClick={() => this.handleSwitchBtnClick()} />
                </form>
            </div>
        );
    }
}

export default RomanToInteger;
