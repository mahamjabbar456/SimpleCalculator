'use client';
// Import necessary hooks from React
import { useState,ChangeEvent } from "react";

// Import custom UI components from the UI directory
import { Card,CardHeader,CardTitle,CardDescription,CardContent } from "./ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

// Default export of the CalculatorComponent function
const Calculator = () => {
    // State hooks for managing input numbers and the result
    const [num1,setnum1] = useState<string>("");
    const [num2,setnum2] = useState<string>("");
    const [result,setResult] = useState<string>("");

    // Handler for updating num1 state on input change
    const handleNum1Change = (e: ChangeEvent<HTMLInputElement>):void => {
        setnum1(e.target.value);
    }

    // Handler for updating num2 state on input change
    const handleNum2Change = (e: ChangeEvent<HTMLInputElement>):void => {
        setnum2(e.target.value);
    }

    // Function to perform addition and set the result
    const add = () : void =>{
        setResult((parseFloat(num1) + parseFloat(num2)).toString());
    }

    // Function to perform subtraction and set the result
    const subtract = () : void =>{
        setResult((parseFloat(num1) - parseFloat(num2)).toString());
    }

    // Function to perform multiplication and set the result
    const multiply = () : void =>{
        setResult((parseFloat(num1) * parseFloat(num2)).toString());
    }

    // Function to perform division and set the result
    const divide = () : void =>{
        if(parseFloat(num2) !== 0){
            setResult((parseFloat(num1) / parseFloat(num2)).toString());
        }else{
            setResult("Error : Division by Zero.");
        }
    }

    const clear = () =>{
        setnum1("");
        setnum2("");
        setResult("");
    }
  return (
    <div className="bg-black flex justify-center h-screen items-center">
        {/* Center the calculator within the screen */}
       <Card className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        {/* Card header with title */}
          <CardHeader>
            <CardTitle className="font-bold">
                Simple Calculator
            </CardTitle>
          </CardHeader>
            {/* Card content including inputs, buttons, and result display */}
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="num1" className="font-bold">Number 1</Label>
                  <Input
                  type="number"
                  id="num1"
                  placeholder="Enter a number"
                  value={num1}
                  onChange={handleNum1Change}
                  className="rounded-2xl hover:border-black"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="num2" className="font-bold">Number 2</Label>
                  <Input
                  type="number"
                  id="num2"
                  placeholder="Enter a number"
                  value={num2}
                  onChange={handleNum2Change}
                  className="rounded-2xl hover:border-black"
                  />
                </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
                <Button
                variant="outline"
                className="rounded-2xl text-center font-bold text-2xl"
                onClick={add}
                >
                    +
                </Button>
                <Button
                variant="outline"
                className="rounded-2xl text-center font-bold text-2xl"
                onClick={subtract}
                >
                    -
                </Button>
                <Button
                variant="outline"
                className="rounded-2xl text-center font-bold text-2xl"
                onClick={multiply}
                >
                    *
                </Button>
                <Button
                variant="outline"
                className="rounded-2xl text-center font-bold text-2xl"
                onClick={divide}
                >
                    /
                </Button>
            </div>
            {/* Display the result */}
            <div className="space-y-2">
                <Label htmlFor="result" className="font-bold">
                    Result
                </Label>
                <Input
                id="result"
                type="text"
                value={result}
                placeholder="Result"
                className="rounded-2xl"
                readOnly
                />
            </div>
            {/* Clear button to reset inputs and result */}
            <Button variant="outline"
            className="w-full rounded-2xl font-bold" onClick={clear}
            >
                Clear
            </Button>
          </CardContent>
       </Card>
    </div>
  )
}

export default Calculator
