import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Menu } from 'semantic-ui-react';
import { modalOpen } from '../../app/common/modals/modalSlice';

const SignedOutMenu = () => {
  const dispatch = useDispatch();

  return (
    <Menu.Item position="right">
      <Button
        basic
        inverted
        content="Login"
        onClick={() => dispatch(modalOpen({ modalType: 'LoginForm' }))}
      />
      <Button
        basic
        inverted
        content="Register"
        style={{ marginLeft: '0.5em' }}
      />
    </Menu.Item>
  );
};

export default SignedOutMenu;
