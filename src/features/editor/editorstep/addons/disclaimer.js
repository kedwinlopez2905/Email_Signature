import React from "react";
import { useState } from "react";
import { Button, Collapse , Radio , Input , Slider , ColorPicker } from "antd";
import TextAreaInput from "../../../../components/Input/TextAreaInput"

const Disclaimer = () =>{
    const [color, setColor] = useState('#1677ff');
    const [value, setValue] = useState(1);
    const onChange = (e) => {
      setValue(e.target.value);
    };
    return (
        <div className="mx-6">
            <TextAreaInput/>
            <div className="flex justify-between mt-8">
                <h1>Font Size</h1>
                <div className="w-72"><Slider defaultValue={0} disabled={''} /></div>
            </div>
            <div className="flex justify-between mt-8">
                <h1>Width</h1>
                <div className="w-72"><Slider defaultValue={0} disabled={''} /></div>
            </div>
            <div className="flex justify-between my-8">
                <h1>Font Color</h1>
                <ColorPicker  value={color} onChange={setColor}/>
            </div>
      </div>
    )
}
export default Disclaimer