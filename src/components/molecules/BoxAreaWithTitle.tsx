import { Heading } from '@chakra-ui/react';
import { memo, ReactNode, VFC } from 'react';
import { BoxArea } from '../atoms/BoxArea';

type Props = {
  title: string;
  children: ReactNode;
  bg?: string | undefined;
};

export const BoxAreaWithTitle: VFC<Props> = memo((props) => {
  const { title, children, bg } = props;

  return (
    <BoxArea bg={bg} minH="240px" ps="10" pe="10" pt="5" pb="7">
      <Heading as="h1" size="md" textAlign="center" pb="5" color="gray.800">
        {title}
      </Heading>
      {children}
    </BoxArea>
  );
});
