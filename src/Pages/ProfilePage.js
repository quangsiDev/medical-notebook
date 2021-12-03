import React from 'react'
import { Form, Input, Button, Select, DatePicker } from 'antd';
const { Option } = Select;
const layout = {
    labelCol: {
        span: 4,
    },
    wrapperCol: {
        span: 12,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

export default function ProfilePage() {

    const [form] = Form.useForm();

    const onGenderChange = (value) => {
        switch (value) {
            case 'male':
                form.setFieldsValue({
                    note: 'Hi, man!',
                });
                return;

            case 'female':
                form.setFieldsValue({
                    note: 'Hi, lady!',
                });
                return;

            case 'other':
                form.setFieldsValue({
                    note: 'Hi there!',
                });
        }
    };

    const onFinish = (values) => {
        console.log(values);
    };

    const onReset = () => {
        form.resetFields();
    };

    const onFill = () => {
        form.setFieldsValue({
            note: 'Hello world!',
            gender: 'male',
        });
    };
    return (
        <div className="flex justify-center items-center h-full w-full ">
            <Form {...layout} form={form} name="control-hooks" onFinish={onFinish} className="w-full">
                < Form.Item
                    name="note"
                    label="Tên"
                    rules={
                        [
                            {
                                required: true,
                            },
                        ]}
                >
                    <Input />
                </ Form.Item>
                <Form.Item
                    name="gender"
                    label="Gender"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select
                        placeholder="Giới tính"
                        onChange={onGenderChange}
                        allowClear
                    >
                        <Option value="male">Nam</Option>
                        <Option value="feNam">Nữ</Option>
                        <Option value="other">Khác</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    noStyle
                    shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
                >
                    {({ getFieldValue }) =>
                        getFieldValue('gender') === 'other' ? (
                            <Form.Item
                                name="customizeGender"
                                label="Customize Gender"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        ) : null
                    }
                </Form.Item>
                <Form.Item label="Ngày sinh">
                    <DatePicker />
                </Form.Item>
                <Form.Item
                    name="note"
                    label="Số điện thoại"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item name={['user', 'introduction']} label="Thói quen">
                    <Input.TextArea />
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit" className=" bg-blue-theme rounded-md border-none font-medium px-5 w-24">
                        Lưu
                    </Button>
                    {/* <Button htmlType="button" onClick={onReset}>
                        Reset
                    </Button> */}
                    {/* <Button type="link" htmlType="button" onClick={onFill}>
                        Fill form
                    </Button> */}
                </Form.Item>
            </Form >
        </div >
    )
}
