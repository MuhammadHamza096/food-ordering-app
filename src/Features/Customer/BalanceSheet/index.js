import React from 'react';

import { Box } from '@mui/system';

import CustomTable from '../../../components/CustomTable';
import Loader from '../../../components/Loader';
import { FetchBalances } from './request';

const UserBalanceSheet = () => {
  const { data, isFetching } = FetchBalances();

  const header = ['Sno', 'Vendor', 'Balance'];

  return isFetching ? (
    <Loader />
  ) : (
    <Box mt={8}>
      <CustomTable cellWidth="30%" header={header} rows={data} tablewidth="50%" />;
    </Box>
  );
};

export default UserBalanceSheet;
