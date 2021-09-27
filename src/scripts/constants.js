import { useSelector } from 'react-redux';
export const emailRegex = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
export const contactRegex = new RegExp('([0-9]{1}|[0-9]{2}|[0-9]{3})[0-9]{10,12}');
export const baseUrl = 'http://localhost:4000/v1/';

export const AuthToken = () => {
  return useSelector(({ authReducer: { accessToken } }) => {
    return accessToken;
  });
};
