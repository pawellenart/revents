import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Image, Menu } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { logout } from '../authentication/authenticationSlice';
import { useSelector } from 'react-redux';

const SignedInMenu = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.authentication);

  return (
    <Menu.Item position="right">
      <Image
        avatar
        spaced="right"
        src={currentUser.photoURL || '/assets/user.png'}
      />
      <Dropdown pointing="top left" text={currentUser.email}>
        <Dropdown.Menu>
          <Dropdown.Item
            as={Link}
            to="/events/create"
            text="Create Event"
            icon="plus"
          />
          <Dropdown.Item text="My profile" icon="user" />
          <Dropdown.Item
            text="Sign out"
            icon="power"
            onClick={() => dispatch(logout())}
          />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
};

export default SignedInMenu;
