import { Text } from '@chakra-ui/react';

type MenuItemProps = {
  children: string | React.ReactNode;
};

export const MenuItem: React.FC<MenuItemProps> = ({ children }) => {
  return (
    <Text color="#666666" fontSize="18px">
      {children}
    </Text>
  );
};
