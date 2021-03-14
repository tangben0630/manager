import { Form, Input, Button, Checkbox } from 'antd';
import { useHistory } from 'react-router'
import axios from 'axios'
import styles from './login.module.css'
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 10,
    span: 16,
  },
};

export const Login = () => {
  const history = useHistory()
  const onFinish = async (values) => {
    // console.log(values, 'values');

    // const res = await axios.post('http://123.56.149.216:8080/auth/register', {
    //   email: values.username,
    //   password: values.password,
    //   confirmPassword: true,
    //   headers: {
    //     'x-icode': '3D50B8E3B1DFC232'
    //   }
    // })
    // console.log('===');
    setTimeout(() => {
      // history.push('/login')
    }, 500);

  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className={styles['form']}>
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
        </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
