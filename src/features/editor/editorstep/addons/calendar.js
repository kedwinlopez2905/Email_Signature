import React from "react";
import { useState } from "react";
import { Button, Collapse , Radio , Input , Slider , ColorPicker} from "antd";

const Calendar = () =>{
    const [color, setColor] = useState('#1677ff');
    const [value, setValue] = useState(1);
    const onChange = (e) => {
      console.log('radio checked', e.target.value);
      setValue(e.target.value);
    };
    return (
        <div className="mx-6">
        <div className="mt-8">
          <Button>Text</Button>
          <Button>Handwritten</Button>
        </div>
         
        <div className="mt-8">
            <Input placeholder="Input your text!"></Input>
        </div>
        <div className="mt-8">
            <Input placeholder="Input your CTA!"></Input>
        </div>
        <div className="mt-8">
            <Input placeholder="Input your Link!"></Input>
        </div>
        <div className="flex justify-between mt-8">
          <h1>Font Size</h1>
          <div className="w-72"><Slider defaultValue={0} disabled={''} /></div>
        </div>
        <div className="flex justify-between mt-8">
          <h1>Padding Top</h1>
          <div className="w-72"><Slider defaultValue={0} disabled={''} /></div>
        </div>
        <div className="flex justify-between mt-8 mb-8">
          <h1>Text Color</h1>
          <ColorPicker  value={color} onChange={setColor}/>
        </div>
        <div className="flex justify-between mt-8 mb-8">
          <h1>CTA color</h1>
          <ColorPicker  value={color} onChange={setColor}/>
        </div>
      </div>
    )
}
export default Calendar