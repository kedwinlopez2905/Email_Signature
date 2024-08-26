import React from "react";
import { useState } from "react";
import { Button, Collapse, Radio, Input, Slider, ColorPicker } from "antd";
import TextAreaInput from "../../../../components/Input/TextAreaInput";

const Message = () => {
  const [color, setColor] = useState("#1677ff");
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <div className="mx-6">
      <div className="grid grid-cols-6 gap-6 mt-8">
        <a className="flex justify-center p-1 border rounded-lg" href="https://google.com">
          <img src="https://img.mysignature.io/addons/v2/none.png" alt="" />
        </a>
        <a className="flex justify-center p-1 border rounded-lg" href="https://google.com">
          <img src="https://img.mysignature.io/addons/v2/green-earth.png" alt="" />
        </a>
        <a className="flex justify-center p-1 border rounded-lg" href="https://google.com">
          <img src="https://img.mysignature.io/addons/v2/recycling.png" alt="" />
        </a>
        <a className="flex justify-center p-1 border rounded-lg" href="https://google.com">
          <img src="https://img.mysignature.io/addons/v2/tree.png" alt="" />
        </a>
        <a className="flex justify-center p-1 border rounded-lg" href="https://google.com">
          <img src="https://img.mysignature.io/addons/v2/leaf.png" alt="" />
        </a>
        <a className="flex justify-center p-1 border rounded-lg" href="https://google.com">
          <img src="https://img.mysignature.io/addons/v2/leaves.png" alt="" />
        </a>
        <a className="flex justify-center p-1 border rounded-lg" href="https://google.com">
          <img src="https://img.mysignature.io/addons/v2/hand-leaves.png" alt="" />
        </a>
        <a className="flex justify-center p-1 border rounded-lg" href="https://google.com">
          <img src="https://img.mysignature.io/addons/v2/hand-earth.png" alt="" />
        </a>
        <a className="flex justify-center p-1 border rounded-lg" href="https://google.com">
          <img src="https://img.mysignature.io/addons/v2/letter.png" alt="" />
        </a>
      </div>
      <div className="mt-8">
      <TextAreaInput
        placeholder={
          "Please consider the environment before printing this email"
        }
      ></TextAreaInput>
      </div>
      <div className="flex justify-between mt-8">
        <h1>Font Size</h1>
        <div className="mb-8 w-72">
          <Slider defaultValue={0} disabled={""} />
        </div>
      </div>
    </div>
  );
};
export default Message;
