import React, { useState } from "react";
import { Modal } from "antd";
import { Form, Input, Button, Select } from "antd";
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

export const ModalAddParent = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const onFinish = (values) => {};

  return (
    <>
      <div className="flex space-x-3">
        <button
          onClick={showModal}
          className="bg-green-700 h-10 px-3 rounded text-white"
        >
          Thêm bố
        </button>

        <button
          onClick={showModal}
          className="bg-red-700 h-10 px-3 rounded text-white"
        >
          Thêm mẹ
        </button>
      </div>

      <Modal
        title="Nhập thông tin của bố và mẹ"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          {...layout}
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
        </Form>
      </Modal>
    </>
  );
};
