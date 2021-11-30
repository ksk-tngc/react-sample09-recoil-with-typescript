import { Button } from '@chakra-ui/react';
import { memo, ReactNode, VFC } from 'react';

type Props = {
  children: ReactNode;
  onClick?: () => void | undefined;
  disabled?: boolean | undefined;
};

export const PrimaryButton: VFC<Props> = memo((props) => {
  const { children, onClick, disabled } = props;

  return (
    <Button
      rounded="full"
      px="5"
      onClick={onClick}
      disabled={disabled}
      fontWeight="normal"
    >
      {children}
    </Button>
  );
});
