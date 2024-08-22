import React from "react";
import { Collapse } from 'antd';
import TitleCard from "../../../components/Cards/TitleCard";
const Addons = () => {
  const signoff = [
    {
      key: "1",
      label: "Sign-off",
      children: <button onClick={()=>console.log("r")}>r</button>,
    },
  ];
  const mypage = [
    {
      key: "1",
      label: "MyPage",
      children: <button onClick={()=>console.log("r")}>r</button>,
    },
  ];
  const event = [
    {
      key: "1",
      label: "Event & Calendar",
      children: <button onClick={()=>console.log("r")}>r</button>,
    },
  ];
  const Social = [
    {
      key: "1",
      label: "social",
      children: <button onClick={()=>console.log("r")}>r</button>,
    },
  ];
  const CTA = [
    {
      key: "1",
      label: "CTA",
      children: <button onClick={()=>console.log("r")}>r</button>,
    },
  ];
  const Market = [
    {
      key: "1",
      label: "MarketPlace&Retail",
      children: <button onClick={()=>console.log("r")}>r</button>,
    },
  ];
  const Disclaimer = [
    {
      key: "1",
      label: "disclaimer",
      children: <button onClick={()=>console.log("r")}>r</button>,
    },
  ];
  const Video = [
    {
      key: "1",
      label: "Video conference",
      children: <button onClick={()=>console.log("r")}>r</button>,
    },
  ];
  const message = [
    {
      key: "1",
      label: "Green Message",
      children: <button onClick={()=>console.log("r")}>r</button>,
    },
  ];
  
  const onChange = () => {
    console.log("onchange");
  }
  return (
    <div>
        <TitleCard title={"Added addons"}>
            <div className="mt-12">
                <span className="inline-block">Available addons</span>
                <div className="mt-2 divider"></div>
            </div>
            <Collapse onChange={onChange} items={signoff}/>
            <Collapse onChange={onChange} items={mypage}/>
            <Collapse onChange={onChange} items={event}/>
            <Collapse onChange={onChange} items={Social}/>
            <Collapse onChange={onChange} items={CTA}/>
            <Collapse onChange={onChange} items={Market}/>
            <Collapse onChange={onChange} items={Disclaimer}/>
            <Collapse onChange={onChange} items={Video}/>
            <Collapse onChange={onChange} items={message}/>

        </TitleCard>
    </div>
  )
};

export default Addons;
