import React from 'react';
import { Button as ButtonNativeBase, IButtonProps, Heading } from 'native-base';


type Props = IButtonProps &  {
    tittle: string;
} 

export function Button( { tittle, ...rest }: Props) {
  return (
    <ButtonNativeBase
    bg="green.700"
    h={14}
    fontSize="sm"
    rounded="sm"
    _pressed={{ bg: "gray.500" }}

     {...rest}
     >
        <Heading color="white" fontSize="sm">
            {tittle}
        </Heading>
    </ButtonNativeBase>
  );
}