import React from "react";
import { useState } from "react";
import { Button, Collapse , Radio , Input , Slider , ColorPicker} from "antd";

const Mypage = () =>{
    const [color, setColor] = useState('#1677ff');
    const [value, setValue] = useState(1);
    const onChange = (e) => {
      console.log('radio checked', e.target.value);
      setValue(e.target.value);
    };
    return (
        <div className="mx-6 mt-4">
        <h1>Check out and refresh MyPage - your link-in bio and personal web space</h1>
        <div className="grid grid-cols-2 mt-4">
          <Radio value={1}>Happy Holidays!</Radio>
          <Radio value={2}>Kind regards,</Radio>
          <div className="my-2">
            <Radio value={3}>Custom text</Radio>
          </div>
        </div>   
        <Input placeholder="Input your text!"></Input>
        <div className="flex justify-between mt-4">
          <h1>Font family</h1>
            <select >
              <option>Aria</option>
              <option>Aria</option>
              <option>Aria</option>
            </select>
        </div>
        <div className="flex justify-between mt-4">
          <h1>Font Size</h1>
          <div className="w-72"><Slider defaultValue={0} disabled={''} /></div>
        </div>
        <div className="flex justify-between mt-4">
          <h1>Font Color</h1>
          <ColorPicker  value={color} onChange={setColor}/>
        </div>
      </div>
    )
}
export default Mypage