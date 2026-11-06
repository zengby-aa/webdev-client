"use client";

import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import CounterBroken from "./CounterBroken";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import PropDrilling from "./PropDrilling";
import Effect from "./Effect";

export default function Lab4() {
  const sayHello = (message: string) => {
    alert(message);
  };
  const sayMyName = () => {
    alert("Baoyuan");
  };
  const saySample = () => {
    alert("Sample from parent");
  };

  return (
    <div id="wd-lab4">
      <h2>Lab 4</h2>
      <ClickEvent />
      <PassingDataOnEvent />
      <PassingFunctions
        message="Hello from Lab 4"
        theFunction={sayHello}
        theNameFunction={sayMyName}
        theOtherFunction={saySample}
      />
      <CounterBroken />
      <Counter />
      <BooleanStateVariables />
      <StringStateVariables />
      <DateStateVariable /> 
      <ObjectStateVariable />
      <ArrayStateVariable />
      <ParentStateComponent />
      <PropDrilling />
      <Effect />
    </div>
  );
}
