import React from 'react';
import { Link } from 'react-router-dom';
import {
  MenuItem,
  Image,
  Dropdown,
  DropdownMenu,
  DropdownItem,
} from 'semantic-ui-react';

export default function SignedIn({ signOut }) {
  return (
    <div>
      <MenuItem>
        <Image avatar spaced='right' src=''></Image>
        <Dropdown pointing='top left' text='sabır'>
          <DropdownMenu>
            <DropdownItem text='Bilgilerim' icon='info' />
            <DropdownItem text='Sepete Git' icon='sign-out' />
            <DropdownItem onClick={signOut} text='Çıkış Yap' icon='sign-out' />
          </DropdownMenu>
        </Dropdown>
      </MenuItem>
    </div>
  );
}
