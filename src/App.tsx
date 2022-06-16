import React, { FC, useEffect, useState } from 'react';
import {
  Button,
  Card,
  Col,
  Divider,
  Form,
  Input,
  Row,
  Select,
  Switch,
  Tooltip,
} from 'antd';
import { FormInstance } from 'antd';
import { FormListFieldData } from 'antd/lib/form/FormList';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { GearUser, Role } from './api';
import { allRole, userRoles } from './fakeData';
const RoleFormItem: FC<{
  roles: Role[];
  form: FormInstance;
  field: FormListFieldData;
}> = ({ roles, form, field }) => {
  const [role, setRole] = useState<Role>();
  const handleRoleChange = (roleName: string) => {
    setRole(roles.find(({ name }) => name === roleName));
    // console.log(roles.find(({ name }) => name === roleName));
    // updateRoles(roleName);
  };

  useEffect(() => {
    handleRoleChange(form.getFieldValue(['roles', field.name, 'role']));
  }, [field]);

  return (
    <Row gutter={8} className="flex-auto">
      <Col flex="0 0 150px">
        <Form.Item
          {...field}
          name={[field.name, 'role']}
          fieldKey={['role']}
          style={{ margin: 0 }}
          rules={[{ required: true, message: 'Role is required!' }]}
        >
          <Select placeholder="Select role" onChange={handleRoleChange}>
            {roles.map((item) => (
              <Select.Option key={item.name} value={item.name}>
                <Tooltip title={item.description} placement="right">
                  {item.title}
                </Tooltip>
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </Col>
    </Row>
  );
};

const App: FC<{ obj?: GearUser }> = ({ obj }) => {
  const [loading, setLoading] = useState(true);
  const [form] = Form.useForm();
  const [allRoles, setRoles] = useState<Role[]>([]);

  const loadInitialData = () => {
    setRoles(allRole);
    setLoading(false);
  };

  const handleUserChange = () => {
    if (!obj) {
      form.setFieldsValue({ roles: [] });
      return;
    }

    const roles = userRoles.filter(({ isBaseRole }) => isBaseRole);
    form.setFieldsValue({ roles });
  };

  useEffect(() => {
    loadInitialData();
  }, []);

  useEffect(() => {
    const roles = userRoles.filter(({ isBaseRole }) => isBaseRole);
    form.setFieldsValue({ roles });
  }, [obj]);

  return (
    <Card bordered={false} bodyStyle={{ padding: 0 }} loading={loading}>
      <Form form={form} labelCol={{ flex: '0 0 73px' }}>
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please input name!' }]}
        >
          <Input placeholder="Input Name" />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input Email!' }]}
        >
          <Input
            readOnly={!!obj}
            disabled={!!obj}
            type="email"
            placeholder="Input Email"
          />
        </Form.Item>
        <Form.Item label="Locked" name="locked" valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item name="avatar" noStyle>
          <Input type="hidden" />
        </Form.Item>
        <Form.List name="roles">
          {(fields, { add, remove }) => (
            <>
              <Divider orientation="left" plain>
                Roles
              </Divider>
              {fields.map((field) => (
                <div key={field.key} className="flex mb-2">
                  <RoleFormItem roles={allRoles} form={form} field={field} />
                  <Button
                    danger
                    type="text"
                    icon={<DeleteOutlined />}
                    className="flex-initial ml-auto"
                    onClick={() => remove(field.name)}
                  />
                </div>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  Add role
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
      </Form>
    </Card>
  );
};

export default App;
