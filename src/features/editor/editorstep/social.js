import React from "react";
import TitleCard from "../../../components/Cards/TitleCard";
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Input, Form, Space ,Button } from "antd";
const Social = () => {
    return (
        <TitleCard title={"Social"}>
            <Input placeholder="Find us here:" defaultValue={"Find us here:"} style={{marginBottom:"20px"}} />
            <Form
            name="dynamic_form_nest_item"
            // onFinish={onFinish}
            style={{
                marginTop: "5",
                maxWidth: "w-full",
            }}
            autoComplete="off"
            >
                <Form.List name="users">
                    {(fields, { add, remove }) => (
                    <>
                        {fields.map(({ key, name, ...restField }) => (
                        <Space
                            key={key}
                            style={{
                            // display: 'flex',
                            marginBottom: 8,
                            }}
                            align="baseline"
                            >
                            <Form.Item
                                {...restField}
                                name={[name, 'last']}
                                rules={[
                                    {
                                    required: true,
                                    message: 'Missing last name',
                                    },
                                ]}
                                >
                                <Input placeholder="Field value" />
                            </Form.Item>
                            <MinusCircleOutlined onClick={() => remove(name)} />
                        </Space>
                        ))}
                        <Form.Item>
                        <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                            Add field
                        </Button>
                        </Form.Item>
                    </>
                    )}
                </Form.List>
            </Form>
            <div className="mt-12">
                <span className="inline-block">Gallery</span>
                <div className="mt-2 divider"></div>
            </div>
            <Input placeholder="Search" style={{marginBottom:"20px"}}></Input>
            <div className="flex">
                    <i className="icon-facebook" title="facebook"></i>
                <span><img src="./LinkIcon/linked.png" alt="" className="w-12 h-12 "/> <i className="icon-product-hunt" title="facebook"></i></span>
                <span><img src="./LinkIcon/facebook.png" alt="" className="w-12 h-12"/></span>
                <span><img src="./LinkIcon/instagram.png" alt="" className="w-12 h-12"/></span>
                <span><img src="./LinkIcon/youtube.png" alt="" className="w-12 h-12"/></span>
                <span><img src="./LinkIcon/tiktok.png" alt="" className="w-12 h-12"/></span>
                <span><img src="./LinkIcon/twitter.png" alt="" className="w-12 h-12"/></span>
                <span><img src="./LinkIcon/reddit.png" alt="" className="w-12 h-12"/></span>
                <span><img src="./LinkIcon/pinterest.png" alt="" className="w-12 h-12"/></span>
            </div>
            
        </TitleCard>
    )
}

export default Social;