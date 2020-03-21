import React from 'react';
import IntegerToRoman from '../components/IntegerToRoman';
import RomanToInteger from '../components/RomanToInteger';

class RomanConverterContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showIntegerToRomanFormat: true
        }
    }

    //function to toggle the converter from and to Roman
    //this function is avaiable to child components using props
    changeConverter(type) {
        if (type === "Roman") {
            this.setState({ showIntegerToRomanFormat: false });
        }
        else {
            this.setState({ showIntegerToRomanFormat: true });
        }
    }

    //render function renders IntegerToRoman or RomanToInteger based on state
    render() {
        return (<>
            {this.state.showIntegerToRomanFormat ?
                (<IntegerToRoman changeConverter={(e) => this.changeConverter(e)} />) :
                (<RomanToInteger changeConverter={(e) => this.changeConverter(e)} />)}
            <div className="notes">
                <b>Hints</b>
                <ul>
                    <li>The largest number you can write in Roman numerals is 3,999 which is MMMCMXCIX.</li>
                    <li>Use switch button to toggle between ToRoman and FromRoman converter.</li>
                    <li>Use clear button to clear the input value entered.</li>
                    <li>Refer below chart for better understanding -
                        <br /><b> I - 1, V - 5, X - 10, L - 50, C - 100, D - 500, M - 1000</b>
                    </li>
                </ul>
            </div>
        </>
        );
    }
}

export default RomanConverterContainer;
