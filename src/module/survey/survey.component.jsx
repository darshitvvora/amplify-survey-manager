import React from 'react';
import { Form, Input, Button } from 'antd';
import httpService from '../../services/http.service'

const { TextArea } = Input;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const SurveyComponent = (props) => {
  const onFinish = values => {
    console.log('Success:', values);
    httpService.post("https://5wagdbvitc.execute-api.ap-south-1.amazonaws.com/default/analyzeSentiment",values).then(res => {
      console.log("res");
    }).catch(err => console.log(err));
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
       <Form.Item
        label="Survey ID"
        name="surveyid"
        rules={[{ required: true, message: 'Please input your survey id!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Please input your name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Feedback"
        name="feedback"
        rules={[{ required: true, message: 'Please input your feedback!' }]}
      >
      <TextArea rows={4} />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SurveyComponent;