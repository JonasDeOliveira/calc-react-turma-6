import React, { Component } from 'react'
import './Calculator.css'
import Button from '../components/Button/Button'
import Display from '../components/Display/Display'

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}

class Calculator extends Component {

    state = { ...initialState }

    clearMemory = () => { 
        this.setState({...initialState})
    }

    setOperation = (operation) => {
        console.log(this.state.current)
        if (this.state.current == 0) {
            this.setState({operation, current: 1, clearDisplay: true},  () => console.log(this.state))
        } else {
            console.log(this.state.operation)
            console.log(this.state.values)
            const equals = operation == '='
            const currentOperation = this.state.operation
            const values = [...this.state.values]

            switch(currentOperation) {
                case '+': 
                    values[0] += values[1]
                    break
                case '-': 
                    values[0] -= values[1]
                    break
                case '/': 
                    values[0] /= values[1]
                    break
                case '*': 
                    values[0] *= values[1]
                    break
                default:
                    values[0] = this.state.values[0]
            }

            values[1] = 0;

            this.setState({
                displayValue: values[0],
                operation: equals ? null : operation,
                values: [...values],
                current: equals ? 0 : 1,
                clearDisplay: !equals

            }, () => console.log(this.state))
            
        }
    }

    addDigit = (n) => {
        if (n == '.' && this.state.displayValue.includes('.')) {
            return
        }

        const clearDisplay = this.state.displayValue == '0' || this.state.clearDisplay
        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + n
        this.setState({displayValue, clearDisplay: false})

        if (n !== '.') {
            const i = this.state.current
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values]
            values[i] = newValue
            this.setState({values}, 
                () => console.log(this.state.values))
        }
        

    }

    render() {
        return (
            <div className="calculator">
                <Display value={this.state.displayValue}/>
                <Button label="AC" triple clear={this.clearMemory}/>
                <Button label="/" operation click={this.setOperation}/>
                <Button label="7" click={this.addDigit}/>
                <Button label="8" click={this.addDigit}/>
                <Button label="9" click={this.addDigit}/>
                <Button label="*" operation click={this.setOperation}/>
                <Button label="4" click={this.addDigit}/>
                <Button label="5" click={this.addDigit}/>
                <Button label="6" click={this.addDigit}/>
                <Button label="-" operation click={this.setOperation}/>
                <Button label="1" click={this.addDigit}/>
                <Button label="2" click={this.addDigit}/>
                <Button label="3" click={this.addDigit}/>
                <Button label="+" operation click={this.setOperation}/>
                <Button label="0" double click={this.addDigit}/>
                <Button label="." click={this.addDigit}/>
                <Button label="=" operation click={this.setOperation}/>
            </div>
        )
    }
}

export default Calculator