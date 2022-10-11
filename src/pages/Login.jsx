import React from "react";
import { Button, Form, Input } from "antd";
import "./less/login.less";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import ImageUrl from "../assets/images/banner2.jpg";
import { Link } from "react-router-dom";
export default function Login() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="login">
      <div className="login_box">
        <img src={ImageUrl} className="login_box_img" />
        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "请输入账号!",
              },
            ]}
          >
            <Input
              placeholder="请输入账号"
              prefix={<UserOutlined size="large" />}
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "请输入密码!",
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined size="large" />}
              placeholder="请输入密码"
            />
          </Form.Item>
          <Form.Item>
            <Link to={"/register"}>还没账号？立即注册</Link>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
