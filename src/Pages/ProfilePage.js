import React, { useEffect } from "react";
import { Form, Input, Button, Select, DatePicker } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { postAPI, putAPI } from "../services/axiosCofig";
import { getUserInforAction } from "../redux/reducer/userReducer";
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
  const dispatch = useDispatch();
  const userInfor = useSelector((state) => state.userReducer.userInfor);
  const [form] = Form.useForm();

  useEffect(() => {
    dispatch(getUserInforAction());
  }, []);

  const onGenderChange = (value) => {
    // switch (value) {
    //   case "male":
    //     form.setFieldsValue({
    //       note: "Hi, man!",
    //     });
    //     return;
    //   case "female":
    //     form.setFieldsValue({
    //       note: "Hi, lady!",
    //     });
    //     return;
    //   case "other":
    //     form.setFieldsValue({
    //       note: "Hi there!",
    //     });
    // }
  };
  const updateUser = async (data) => {
    console.log(data);
    const jsonData = JSON.stringify(data);
    console.log(jsonData);
    const res = await putAPI("user", data);
    console.log(res);
    dispatch(getUserInforAction());
  };
  const onFinish = (values) => {
    console.log({ ...userInfor, ...values });
    var userInforNew = { ...userInfor, ...values };

    userInforNew.birthDay = userInforNew.birthDay.format();
    userInforNew.avatar = "";
    userInforNew.lifeStyle = "";
    updateUser(userInforNew);
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({
      note: "Hello world!",
      gender: "male",
    });
  };
  useEffect(() => {
    form.setFieldsValue({
      name: userInfor?.name,
      account: userInfor?.account,
      address: userInfor?.address,
      email: userInfor?.email,
      phone: userInfor?.phone,
      height: userInfor?.height,
      weight: userInfor?.weight,
    });
  }, []);
  return (
    <div className="flex justify-center items-center h-full w-full ">
      <Form
        {...layout}
        form={form}
        name="control-hooks"
        onFinish={onFinish}
        className="w-full"
      >
        <Form.Item
          name="account"
          label="Tài khoản"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="name"
          label="Tên"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="gender"
          label="Gender"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select placeholder="Giới tính" onChange={onGenderChange} allowClear>
            <Option value="0">Nam</Option>
            <Option value="1">Nữ</Option>
          </Select>
        </Form.Item>
        <Form.Item
          noStyle
          shouldUpdate={(prevValues, currentValues) =>
            prevValues.gender !== currentValues.gender
          }
        >
          {({ getFieldValue }) =>
            getFieldValue("gender") === "other" ? (
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
        <Form.Item label="Ngày sinh" name="birthDay">
          <DatePicker />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Số điện thoại"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="address"
          label="Địa chỉ"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="weight"
          label="Cân nặng"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="height"
          label="Chiều cao"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        {/* <Form.Item name={["user", "introduction"]} label="Thói quen">
          <Input.TextArea />
        </Form.Item> */}
        <Form.Item {...tailLayout}>
          <Button
            type="primary"
            htmlType="submit"
            className=" bg-blue-theme rounded-md border-none font-medium px-5 w-24"
          >
            Lưu
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
