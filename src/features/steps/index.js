import React, { useState } from "react";
import { Button, message, Steps, theme } from "antd";
import { Carousel } from "antd";
import TemplateHeader from "../../containers/TemplateHeader";
import InputText from "../../components/Input/InputText";
import SelectBox from "../../components/Input/SelectBox";
import Linkicon from "../../components/LinkIcon/linkicon";
import { Link } from "react-router-dom";
const steps = [
  {
    title: "Choice!",
    content: "Amazing choice!We'd love to know you better",
  },
  {
    title: "Nice to meet you!",
    content: "Select one category that best describes your industry",
  },
  {
    title: "You rock!",
    content: "You rock!",
  },
  {
    title: "Networks",
    content: "Select top 3 social networks you use",
  },
  {
    title: "Email",
    content: "Select email",
  },
];
const App = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const industry = [
    { name: "Marketing and Sales" },
    { name: "Real Estate and Construction", value: "1" },
    { name: "E-commerce" },
    { name: "Software and Internet" },
    { name: "HR and Recruiting Services" },
    { name: "Non-profit" },
    { name: "Education" },
  ];
  const rock_option = [
    { name: "Myself" },
    { name: "My company" },
    { name: "My client's signatures" },
  ];
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  const contentStyle = {
    lineHeight: "50px",
    textAlign: "center",
    // color: token.colorTextTertiary,
    // backgroundColor: token.colorFillAlter,
    // borderRadius: token.borderRadiusLG,
    // border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };
  return (
    <>
      <TemplateHeader />
      <div className="z-0 grid h-full grid-cols-2">
        <div className="h-full mr-12">
          <Carousel autoplay effect="fade" waitForAnimate={true}>
            <img src="carousel1.png" alt="this is carousel1" />
            {/* <img src="carousel2.png" alt="this is carousel2" /> */}
            {/* <img src="carousel3.webp" alt="this is carousel3" />
            <img src="carousel4.webp" alt="this is carousel4" />
            <img src="carousel5.webp" alt="this is carousel5" /> */}
          </Carousel>
        </div>
        <div className="mt-40 mr-6">
          <Steps current={current} items={items} />
          <div style={contentStyle}>
            {steps[current].content}
            {current === 0 && (
              <InputText
                type="text"
                placeholder={"What's your name?"}
                updateType="text"
                containerStyle="mt-4"
                labelTitle="Your Name:"
              />
            )}
            {current === 1 && (
              <div>
                <SelectBox
                  type="option"
                  placeholder={"Industry"}
                  updateType="text"
                  containerStyle="mt-4 w-full"
                  options={industry}
                  labelTitle="Industry"
                />
                <InputText
                  type="text"
                  placeholder={"What's your position?"}
                  updateType="text"
                  containerStyle="mt-4"
                  labelTitle="What's your position?"
                />
                <InputText
                  type="text"
                  placeholder={"Website(if you have one)"}
                  updateType="text"
                  containerStyle="mt-4"
                  labelTitle="Website(if you have one)"
                />
              </div>
            )}
            {current === 2 && (
              <div>
                <SelectBox
                  type="text"
                  placeholder={"How do you plan to use our solution?"}
                  updateType="text"
                  containerStyle="mt-4 w-full"
                  options={rock_option}
                  labelTitle="How do you plan to use our solution?"
                />
              </div>
            )}
            {current === 3 && (
              <div className="gap-3">
                <Linkicon imgurl={"./LinkIcon/facebook.png"} linkname={"Facebook"} />
                <Linkicon imgurl={"./LinkIcon/instagram.png"} linkname={"Instagram"} />
                <Linkicon imgurl={"./LinkIcon/youtube.png"} linkname={"Youtube"} />
                <Linkicon imgurl={"./LinkIcon/tiktok.png"} linkname={"Tiktok"} />
                <Linkicon imgurl={"./LinkIcon/twitter.png"} linkname={"Twitter"} />
                <Linkicon imgurl={"./LinkIcon/reddit.png"} linkname={"Reddit"} />
                <Linkicon imgurl={"./LinkIcon/pinterest.png"} linkname={"Pinterest"} />
                <Linkicon imgurl={"./LinkIcon/linked.png"} linkname={"Linked"} />
              </div>
            )}
            {current === 4 && (
              <div className="gap-3">
                <Linkicon imgurl={"./LinkIcon/gmail.png"} linkname={"Gmail"} />
                <Linkicon imgurl={"./LinkIcon/outlook.png"} linkname={"Outlook"} />
                <Linkicon imgurl={"./LinkIcon/applemail.png"} linkname={"Applemail"} />
                <Linkicon imgurl={"./LinkIcon/applemail.png"} linkname={"iphonemail"} />
                <Linkicon imgurl={"./LinkIcon/yahoo.png"} linkname={"Yahoo"} />
                <Linkicon imgurl={"./LinkIcon/thunderbird.png"} linkname={"thunderbird"} />
                <Linkicon imgurl={"./LinkIcon/google.png"} linkname={"Google Workspace"} />
                <Linkicon imgurl={"./LinkIcon/office.png"} linkname={"Microsoft office 365"} />
              </div>
            )}
          </div>
          <div
            style={{
              marginTop: 24,
            }}
          >
            {current > 0 && (
              <Button
                type="badge badge-primary"
                style={{
                  margin: "0 8px",
                }}
                onClick={() => prev()}
              >
                Previous
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button
                type="badge badge-primary"
                // onClick={() => message.success("Processing complete!")}
              >
              <Link to={"/editor"}>
                Get started
              </Link>
              </Button>
            )}
            {current < steps.length - 1 && (
              <Button type="badge badge-primary" onClick={() => next()}>
                Next
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
