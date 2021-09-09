import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import { Edit } from '@material-ui/icons';

import CommonButton from '../../../components/Button/Button';
import CustomTable from '../../../components/CustomTable';
import { VendorTitleContainer, VendorTitle, DeleteIcon } from './style';
function UsersList() {
  const tableData = [
    {
      id: 1,
      name: 'asad',
      email: 'asad@gmail.com',
      contact: '13131232',
    },
    {
      id: 2,
      name: 'kashan',
      email: 'kashan@gmail.com',
      contact: '13131232',
    },
    {
      id: 3,
      name: 'Baber',
      email: 'Baber@gamil.com',
      contact: '1309232',
    },
    {
      id: 4,
      name: 'sami',
      email: 'sami@gmail.com',
      contact: '23131232',
    },
    {
      id: 5,
      name: 'nasir',
      email: 'nasir@gmail.com',
      contact: '10901232',
    },
    {
      id: 6,
      name: 'Kashif',
      email: 'kashif@gamil.com',
      contact: '13131232',
    },
    {
      id: 7,
      name: 'yawar',
      email: 'yawar@gmail.com',
      contact: '13131232',
    },
  ];

  const editDelete = (
    <>
      <IconButton>
        <Edit />
      </IconButton>
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </>
  );
  const header = ['Id', 'Name', 'Email', 'Contact', 'Edit'];
  return (
    <>
      <VendorTitleContainer>
        <VendorTitle>Users</VendorTitle>
        <CommonButton property="Add Users" />
      </VendorTitleContainer>

      <CustomTable editDelete={editDelete} header={header} rows={tableData} />
    </>
  );
}

export default UsersList;
