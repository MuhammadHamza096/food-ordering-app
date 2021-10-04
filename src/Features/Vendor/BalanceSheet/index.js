import React from 'react';

import { Box } from '@mui/system';
import { useHistory } from 'react-router';

import CustomTable from '../../../components/CustomTable';
import Loader from '../../../components/Loader';
import RouteNames from '../../../routes/RouteNames';
import { FetchBalances } from './requests';

const BalanceSheet = () => {
  const { isLoading, data } = FetchBalances();

  const header = ['No', 'User', 'Vendor', 'Balance', 'Edit'];

  const history = useHistory();
  const { editBalanceSheet } = RouteNames;

  const onEdit = ({ id }) => {
    history.push({
      pathname: editBalanceSheet,
      search: '?id=' + id,
    });
  };

  return isLoading ? (
    <Loader />
  ) : (
    <Box mt={4}>
      <CustomTable cellWidth="30%" header={header} isEditDelete onEdit={onEdit} rows={data} tablewidth="70%" />;
    </Box>
  );
};

export default BalanceSheet;
