import { useSelector } from 'react-redux';

export const useMenu = () => {
  const { isOpen } = useSelector((state) => state.menu);

  return {
    isOpen,
  };
};
