import React, { useState } from 'react';
import { ColorPicker } from 'antd';
import TitleCard from "../../../components/Cards/TitleCard";
import { Slider , Radio } from "antd"
const Design = () => {
    const [color, setColor] = useState('#1677ff');
    const [value, setValue] = useState(1);
    const onChange = (e) => {
      console.log('radio checked', e.target.value);
      setValue(e.target.value);
    };
    return (
        <TitleCard title={"General styles"}>
            <div className='flex justify-between mt-8'>
                <h1>Font Size</h1>
                <div className='w-80'>
                  <Slider defaultValue={0} disabled={''} />
                </div>
            </div>
            <div className='flex justify-between mt-8'>
                <h1>Templates Color</h1>
                <ColorPicker value={color} onChange={setColor} />
            </div>
            <div className='flex justify-between mt-8'>
                <h1>Text Color</h1>
                <ColorPicker value={color} onChange={setColor} />
            </div>
            <div className="mt-12">
                <span className="inline-block">Social icons</span>
                <div className="mt-2 divider"></div>
            </div>
            <div className='flex justify-between w-full'>
                {/* <Radio.Group onChange={onChange} value={value}> */}
                    <Radio value={1}>Branded</Radio>
                    <Radio value={2}>Colored</Radio>
                    <Radio value={3}>Outline</Radio>
                {/* </Radio.Group> */}
            </div>
            <div className='flex justify-between mt-8'>
                <h1>Size</h1>
                <div className='w-80'>
                  <Slider defaultValue={0} disabled={''} />
                </div>
            </div>
            <div className='flex justify-between mt-8'>
                <h1>Shape</h1>
                <div className='w-80'>
                  <Slider defaultValue={0} disabled={''} />
                </div>
            </div>
            <div className='flex justify-between mt-8'>
                <h1>Icon color</h1>
                <div className='w-80'>
                  <Slider defaultValue={0} disabled={''} />
                </div>
            </div>
        </TitleCard>
    )
}

export default Design;