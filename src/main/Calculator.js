import React, { Component } from 'react'
import './Calculator.css'
import Button from '../components/Button/Button'
import Display from '../components/Display/Display'

const initialState = {
    displayValue: '0'
}

class Calculator extends Component {

    state = { ...initialState }

    clearMemory = () => { 
        this.setState({...initialState})
    }

    addDigit = (n) => {
        const displayValue = n
        this.setState({displayValue})
    }

    render() {
        return (
            <div className="calculator">
                <Display value={this.state.displayValue}/>
                <Button label="AC" triple clear={this.clearMemory}/>
                <Button label="/" operation/>
                <Button label="7" click={this.addDigit}/>
                <Button label="8" click={this.addDigit}/>
                <Button label="9" click={this.addDigit}/>
                <Button label="*" operation/>
                <Button label="4" click={this.addDigit}/>
                <Button label="5" click={this.addDigit}/>
                <Button label="6" click={this.addDigit}/>
                <Button label="-" operation/>
                <Button label="1" click={this.addDigit}/>
                <Button label="2" click={this.addDigit}/>
                <Button label="3" click={this.addDigit}/>
                <Button label="+" operation/>
                <Button label="0" double click={this.addDigit}/>
                <Button label="."/>
                <Button label="=" operation/>
            </div>
        )
    }
}

export default Calculator