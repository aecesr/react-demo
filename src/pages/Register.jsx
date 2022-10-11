import React from "react";
import { Button, Form, Input, message } from "antd";
import "./less/login.less";
import ImageUrl from "../assets/images/banner2.jpg";
import { Link } from "react-router-dom";
import { RegisterApi } from "../request/api";
import { useNavigate } from "react-router-dom";
export default function Register() {
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log(values);
    // RegisterApi({
    //   username: values.username,
    //   password: values.password,
    // }).then((res) => {
    //   console.log(res);
    // });
    message.success("注册成功！");
    setTimeout(() => navigate("/login"), 1000);
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
          autoComplete="off"
        >
          <Form.Item
            name="username"
            label="账号"
            hasFeedback
            rules={[
              {
                required: true,
                message: "请输入账号!",
              },
            ]}
          >
            <Input placeholder="请输入账号" />
          </Form.Item>

          <Form.Item
            name="password"
            label="密码"
            rules={[
              {
                required: true,
                message: "请输入密码",
              },
            ]}
            hasFeedback
          >
            <Input.Password placeholder="请输入密码" />
          </Form.Item>
          <Form.Item
            name="confirm"
            label="确认密码"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "请确认密码!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("密码不一致!"));
                },
              }),
            ]}
          >
            <Input.Password placeholder="确认密码" />
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
