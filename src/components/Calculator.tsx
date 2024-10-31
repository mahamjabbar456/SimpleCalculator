'use client';

import { ChangeEvent, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Button } from "./ui/button";

const Calculator = () => {
   const [num1,setNum1] = useState<string>("");
   const [num2,setNum2] = useState<string>("");
   const [result,setResult] = useState<string>("");

   const handleNum1 = (e:ChangeEvent<HTMLInputElement>) => {
    setNum1(e.target.value);
   }

   const handleNum2 = (e:ChangeEvent<HTMLInputElement>) => {
    setNum2(e.target.value);
   }

   const add = () => {
    setResult((parseFloat(num1)+parseFloat(num2)).toString());
  }
  
  const subtract = () => {
    setResult((parseFloat(num1)-parseFloat(num2)).toString());
  }
  
  const multiply = () => {
    setResult((parseFloat(num1)*parseFloat(num2)).toString());
  }
  
  const division = () => {
    setResult((parseFloat(num1)/parseFloat(num2)).toString());
  }

  const clear = () => {
    setNum1("");
    setNum2("");
    setResult("");
  }

  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <Card className="max-w-md w-full p-6 shadow-lg rounded-xl">
        <CardHeader>

        <CardTitle className="font">Simple Calculator</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-5">
            <div className="space-y-2">
              <Label htmlFor="num1" className="font-bold">Number 1</Label>
              <Input
              id="num1"
              value={num1}
              type="number"
              placeholder="Enter a number"
              className="rounded-[50px] shadow-sm border-2 focus:border-black"
              onChange={handleNum1}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="num2" className="font-bold">Number 2</Label>
              <Input
              id="num2"
              value={num2}
              type="number"
              placeholder="Enter a number"
              className="rounded-[50px] shadow-sm border-2 focus:border-black"
              onChange={handleNum2}
              />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-5">
            <Button className="font-bold rounded-[50px] shadow-sm text-2xl" 
            onClick={add}
            variant="outline">+</Button>
            <Button className="font-bold rounded-[50px] shadow-sm text-2xl"
            onClick={subtract}
            variant="outline">-</Button>
            <Button className="font-bold rounded-[50px] shadow-sm text-2xl"
            onClick={multiply}
            variant="outline">*</Button>
            <Button className="font-bold rounded-[50px] shadow-sm text-2xl"
            onClick={division}
            variant="outline">/</Button>
          </div>
          <div className="space-y-2">
          <Label htmlFor="result" className="font-bold">Result</Label>
              <Input
              id="result"
              value={result}
              type="text"
              placeholder="Result"
              className="rounded-[50px] shadow-sm border-2 focus:border-black"
              readOnly
              />
          </div>
          <Button variant="outline" className="w-full rounded-[50px] font-bold" onClick={clear}>
            Clear
          </Button>
        </CardContent>
      </Card>
      
    </div>
  )
}

export default Calculator
