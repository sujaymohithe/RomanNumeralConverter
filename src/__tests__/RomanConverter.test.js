import React from 'react';
import { shallow, mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';
import ConsumerHomeContainer from '../containers/RomanConverterContainer';
import Header from '../components/Header';
import IntegerToRoman from '../components/IntegerToRoman';
import RomanToInteger from '../components/RomanToInteger';
import { toRoman, fromRoman } from '../actions/RomanHelperActions'

Enzyme.configure({ adapter: new Adapter() });

describe('<RomanConverterContainer/> container', () => {
    it('renders the roman converter home container', () => {
        const wrapper = shallow(
            <ConsumerHomeContainer />);
        expect(wrapper.length).toEqual(1);
    })
})

describe('<Header/> component', () => {
    it('renders the header component', () => {
        const wrapper = shallow(
            <Header />);
        expect(wrapper.length).toEqual(1);
    })

    it('renders the header logo', () => {
        const component = shallow(
            <Header />);
        const wrapper = component.find(`[data-test='Logo']`);
        expect(wrapper.text() == "OPTIO PAY ROMAN CONVERTER");
    })
})

describe('<IntegerToRoman/> component', () => {
    it('renders the IntegerToRoman component', () => {
        const wrapper = shallow(
            <IntegerToRoman />);
        expect(wrapper.length).toEqual(1);
    })

    it('renders the textbox in IntegerToRoman component', () => {
        const wrapper = shallow(
            <IntegerToRoman />);
        expect(wrapper.find('#txtNumber').length).toEqual(1);
    })

    it('renders the all input elements in IntegerToRoman component', () => {
        const wrapper = shallow(
            <IntegerToRoman />);
        expect(wrapper.find('Input').length).toEqual(13);
    })

    it('should respond to change event and change the state of the IntegerToRoman Component', () => {
        const wrapper = shallow(<IntegerToRoman />);
        wrapper.find('#txtNumber').simulate('change', { target: { name: 'txtNumber', value: '123' } });
        expect(wrapper.state('inputInteger')).toEqual('123');
    })

    it('test button click event in IntegerToRoman Component', () => {
        const mockCallBack = jest.fn();
        const button = shallow((<input type="button" onClick={mockCallBack}>Ok!</input>));
        button.simulate('click');
        expect(mockCallBack.mock.calls.length).toEqual(1);
    })

    it('test toRoman function for valid input', () => {
        return toRoman('1990').then(result => {
            expect(result).toBe('MCMXC');
        })
    })

    it('test toRoman function for invalid input', () => {
        return toRoman('40000').catch(error => {
            expect(error).toBe(-1);
        })
    })

})

describe('<RomanToInteger/> component', () => {
    it('renders the RomanToInteger component', () => {
        const wrapper = shallow(
            <RomanToInteger />);
        expect(wrapper.length).toEqual(1);
    })

    it('renders the textbox in RomanToInteger component', () => {
        const wrapper = shallow(
            <RomanToInteger />);
        expect(wrapper.find('#txtRoman').length).toEqual(1);
    })

    it('renders the all input elements in RomanToInteger component', () => {
        const wrapper = shallow(
            <RomanToInteger />);
        expect(wrapper.find('Input').length).toEqual(16);
    })

    it('should respond to change event and change the state of the RomanToInteger Component', () => {
        const wrapper = shallow(<RomanToInteger />);
        wrapper.find('#txtRoman').simulate('change', { target: { name: 'txtRoman', value: 'V' } });
        expect(wrapper.state('inputRoman')).toEqual('V');
    })

    it('test button click event in RomanToInteger Component', () => {
        const mockCallBack = jest.fn();
        const button = shallow((<input type="button" onClick={mockCallBack}>Ok!</input>));
        button.simulate('click');
        expect(mockCallBack.mock.calls.length).toEqual(1);
    })

    it('test fromRoman function', () => {
        return fromRoman('MCMXC').then(result => {
            expect(result).toBe(1990);
        })
    })

    it('test fromRoman function for invalid input', () => {
        return fromRoman('A').catch(error => {
            expect(error).toBe(-1);
        })
    })

})