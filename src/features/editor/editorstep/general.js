import React, { useState } from "react";
import TitleCard from "../../../components/Cards/TitleCard";
import InputText from "../../../components/Input/InputText";
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Space } from 'antd';

const General = () => {
    return (
        <TitleCard title={"General"}>
            <InputText
            type="text"
            defaultValue={""}
            updateType="name"
            containerStyle="mt-4 rounded-full"
            labelTitle="Name"
            updateFormValue={""}
            />
            <InputText
            type="text"
            defaultValue={""}
            updateType="company"
            containerStyle="mt-4 rounded-full"
            labelTitle="Company"
            updateFormValue={""}
            />
            <InputText
            type="text"
            defaultValue={""}
            updateType="position"
            containerStyle="mt-4 rounded-full"
            labelTitle="Position"
            updateFormValue={""}
            />
            <InputText
            type="text"
            defaultValue={""}
            updateType="department"
            containerStyle="mt-4 rounded-full"
            labelTitle="Department"
            updateFormValue={""}
            />
            <div className="mt-12">
                <span className="inline-block">Contacts</span>
                <div className="mt-2 divider"></div>
            </div>
            <Form
            name="dynamic_form_nest_item"
            // onFinish={onFinish}
            style={{
                maxWidth: 600,
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
                        display: 'flex',
                        marginBottom: 8,
                        }}
                        align="baseline"
                    >
                        <Form.Item
                        {...restField}
                        name={[name, 'first']}
                        rules={[
                            {
                            required: true,
                            message: 'Missing first name',
                            },
                        ]}
                        >
                        <Input placeholder="Title" />
                        </Form.Item>
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
                        <Input placeholder="Email or address" />
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
                <span className="inline-block">Custom fields</span>
                <div className="mt-2 divider"></div>
            </div>
            <Form
            name="dynamic_form_nest_item"
            // onFinish={onFinish}
            style={{
                maxWidth: 600,
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
                            display: 'flex',
                            marginBottom: 8,
                            }}
                            align="baseline"
                        >
                            <Form.Item
                            {...restField}
                            name={[name, 'first']}
                            rules={[
                                {
                                required: true,
                                message: 'Missing first name',
                                },
                            ]}
                            >
                            <Input placeholder="Field name" />
                            </Form.Item>
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
        </TitleCard>
    )
}
export default General;