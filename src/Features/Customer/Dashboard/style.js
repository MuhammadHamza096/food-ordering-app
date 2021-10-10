import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';

export const VendorGrid = styled(Grid)`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  ${({ theme }) => `
  ${theme.breakpoints.down('sm')} {
    display: block;
    margin: auto;
  }
  `};
`;

export const Filter = styled.div`
  height: 124px;
`;
export const Div = styled.div`
  padding-right: 30px;
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;
export const OrderHeading = styled(Typography)`
  font-weight: 700;
  margin-left: 40px;
`;

export const OrderRef = styled(Typography)`
  color: lightgrey;
  padding-left: 10px;
  padding-top: 8px;
  font-size: 18px;
`;
export const OrderDetails = styled.div`
  display: flex;
`;
export const UserInfo = styled.div`
  padding-right: 40px;
`;
export const FirstTab = styled.div`
  padding-right: 30px;
`;
export const vendorCard = styled.div`
  display: flex;
  flex-direction: row;
`;

export const vendorCardItem = styled.div`
  display: flex;
  padding: 10px;
  text-align: center;
  box-shadow: 0 0 10px rgb(0 0 0 / 20%);
  margin: 20px;
  height: 204px;
  width: 167px;
`;
