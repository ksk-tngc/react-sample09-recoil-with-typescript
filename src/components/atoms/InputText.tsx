import { Input } from '@chakra-ui/react';
import { ChangeEventHandler, memo, VFC } from 'react';

type Props = {
  placeholder?: string | undefined;
  value?: string | undefined;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
};

export const InputText: VFC<Props> = memo((props) => {
  const { placeholder, value, onChange } = props;

  return (
    <Input
      placeholder={placeholder}
      bg="white"
      w="300px"
      rounded="full"
      value={value}
      onChange={onChange}
    />
  );
});
