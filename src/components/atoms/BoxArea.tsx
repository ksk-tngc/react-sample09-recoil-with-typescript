import { Box } from '@chakra-ui/react';
import { memo, ReactNode, VFC } from 'react';

type Props = {
  children: ReactNode;
  bg?: string;
  minH?: string;
  pt?: string;
  pb?: string;
  ps?: string;
  pe?: string;
};

export const BoxArea: VFC<Props> = memo((props) => {
  const {
    children,
    bg = undefined,
    minH = undefined,
    pt = '4',
    pb = '4',
    ps = '5',
    pe = '5',
  } = props;

  return (
    <Box
      pt={pt}
      pb={pb}
      ps={ps}
      pe={pe}
      bg={bg}
      minW="520px"
      minH={minH}
      rounded="lg"
    >
      {children}
    </Box>
  );
});
