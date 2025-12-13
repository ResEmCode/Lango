import { Flex, type FlexProps } from '../Flex/Flex';

type HStackProps = Omit<FlexProps, 'direction'>;

export const HStack = (props: HStackProps) => {
  const { align = 'center' } = props;

  return <Flex {...props} direction='column' align={align} />;
};
