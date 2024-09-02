import React, { useState } from "react";
import { Link } from "react-router-dom";
import TemplateHeader from "../../containers/TemplateHeader";
import TitleCard from "../../components/Cards/TitleCard";
import General from "../../features/editor/editorstep/general";
import Image from "../../features/editor/editorstep/image";
import Social from "../../features/editor/editorstep/social";
import Addons from "../../features/editor/editorstep/addons";
import Design from "../../features/editor/editorstep/design";
import Templates from "../../features/editor/editorstep/templates";
// import InputText from "../../components/Input/InputText";
// import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Space } from "antd";
// import { convertLegacyProps } from "antd/es/button";
import Card_2 from "../../components/Cards/Card_2";
const App = () => {
  const [display, setDisplay] = useState("");
  const general = () => {
    setDisplay("general");
  };
  const image = () => {
    setDisplay("image");
  };
  const social = () => {
    setDisplay("social");
    console.log(display);
  };
  const addons = () => {
    setDisplay("addons");
    console.log(display);
  };
  const design = () => {
    setDisplay("design");
    console.log(display);
  };
  const templates = () => {
    setDisplay("templates");
    console.log(display);
  };

  return (
    <>
      <TemplateHeader />
      <div className="flex justify-center gap-4 mt-12 badge-base">
        <Button onClick={() => general()}>
          <img src="./editor/general.gif " alt="" className="w-4 h-4" />
          General
        </Button>
        <Button onClick={() => image()}>
          <img src="./editor/photo.gif" alt="" className="w-4 h-4" />
          Images
        </Button>
        <Button onClick={() => social()}>
          <img src="./editor/social-media.gif " alt="" className="w-4 h-4" />
          Social
        </Button>
        <Button onClick={() => addons()}>
          <img src="./editor/addons.gif " alt="" className="w-4 h-4" />
          Addons
        </Button>
        <Button onClick={() => design()}>
          <img src="./editor/digital-art.gif " alt="" className="w-4 h-4" />
          Design
        </Button>
        <Button onClick={() => templates()}>
          <img src="./editor/templates.gif " alt="" className="w-4 h-4" />
          Templates
        </Button>
      </div>
      <div className="z-0 grid h-full grid-cols-2 mx-24 mt-8">
        <div className="mr-20">
          {display === "general" && (
            <div>
              <General />
            </div>
          )}
          {display === "image" && (
            <div>
              <Image />
            </div>
          )}
          {display === "social" && (
            <div>
              <Social />
            </div>
          )}
          {display === "addons" && (
            <div>
              <Addons />
            </div>
          )}
          {display === "design" && (
            <div>
              <Design />
            </div>
          )}
          {display === "templates" && (
            <div>
              <Templates />
            </div>
          )}
        </div>
        <div className="mt-20 ml-24">
          <div className="sticky top-20">
            {/* <TitleCard title={"Signature preview"}> */}
            <Card_2 />
            <Link to={"/register"}>
              <label className="mt-8">
                <div className="inline-block float-right mt-8">
                  <button className="px-6 normal-case btn btn-sm badge badge-secondary">
                    Save and Sign Up
                  </button>
                </div>
              </label>
            </Link>
            {/* </TitleCard> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
