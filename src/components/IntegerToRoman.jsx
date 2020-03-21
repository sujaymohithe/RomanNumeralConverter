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

    //function to update the textbox #txtNumber value using state whenever input buttons are clicked
    //Also for every button click, toRoman-API method is invoked to get the roman numeral result
    updateChangeIntoText(event) {
        this.setState({ inputInteger: this.state.inputInteger + event.target.value },
            () => {
                toRoman(this.state.inputInteger).then(result => {
                    this.setState({
                        outputRomanValue: result
                    });
                }).catch(error => {
                    this.setState({
                        outputRomanValue: error === -1 ?
                            appConstants.INVALID_INPUT : appConstants.ERROR_MESSAGE
                    });
                });
            });
    }

    //function to update the textbox #txtNumber value using state whenever user inputs into textbox
    //Also for every text input into #txtNumber, toRoman-API method is invoked to get the roman numeral result
    handleInputTextChange(event) {
        this.setState({ inputInteger: event.target.value }, () => {
            toRoman(this.state.inputInteger).then(result => {
                this.setState({
                    outputRomanValue: result
                });
            }).catch(error => {
                this.setState({
                    outputRomanValue: error === -1 ?
                        appConstants.INVALID_INPUT : appConstants.ERROR_MESSAGE
                });
            });
        });
    }

    //function to clear value in #txtNumber when clear button is clicked
    handleClearBtnClick() {
        this.setState({ inputInteger: "", outputRomanValue: "" });
    }

    //function to switch converter to RomanToInteger using parent props method changeConverter
    handleSwitchBtnClick() {
        this.props.changeConverter("Roman");
    }

    render() {
        //inputs numeral buttons from 0 to 9
        const elements = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
        let inputButtons = [];
        for (const [index, value] of elements.entries()) {
            inputButtons.push(<Input type="button" key={index}
                value={value} onClick={(e) => this.updateChangeIntoText(e)} />)
        }

        return (
            <div className="block_number">
                <h2>Integer To Roman Converter</h2>
                <form name="form_number">
                    {/* render textbox for input */}
                    <Input type="number" name="txtNumber" id="txtNumber"
                        value={this.state.inputInteger} onChange={(e) => this.handleInputTextChange(e)} />
                    <br />
                    <label>Answer : <b>{this.state.outputRomanValue}</b></label>
                    <br />
                    {/* render input numeral buttons 0 to 9*/}
                    {inputButtons}
                    {/* render clear and switch button */}
                    <Input type="button" value="Clear" onClick={() => this.handleClearBtnClick()} />
                    <Input type="button" value="Switch" onClick={() => this.handleSwitchBtnClick()} />
                </form>
            </div>
        );
    }
}

export default IntegerToRoman;
