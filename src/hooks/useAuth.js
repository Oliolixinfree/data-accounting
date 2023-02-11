import { useSelector } from 'react-redux';

export const useAuth = () => {
  const { email, token, id, displayName } = useSelector((state) => state.user);

  return {
    // isAuth: !!email,
    isAuth: true,
    email,
    token,
    id,
    displayName,
  };
};
