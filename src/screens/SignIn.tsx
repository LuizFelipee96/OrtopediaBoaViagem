import { useState } from 'react';
import { VStack, Heading, Icon, useTheme, useControllableState } from 'native-base';
import { Envelope, Key } from 'phosphor-react-native';
import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';

import Logo from '../assets/obv1.svg';
import { Input } from '../components/input';
import { Button } from '../components/Button';

 
export function SignIn() {

    const [email, setEmail] = useState('Luiz');
    const [password, setPassword] = useState('');


    const { colors } = useTheme();

    function HandleSignIn() {
        if(! email || !password) {
            return Alert.alert('Entrar', 'Informe e-mail e senha.')
        }
    }

    return (
        <VStack flex={1} alignItems="center" bg="black" px={8} pt= {24}>
            <Logo />
            
            <Heading color="gray.100" fontSize="xl" mt={20} mb={6}>
                Acesse sua Conta
            </Heading>

        <Input 
        placeholder="E-mail"
        mb={4}
        InputLeftElement={<Icon as={<Envelope color={colors.gray[300]} />} ml={4} />}
        onChangeText={setEmail}
        />

        <Input placeholder="Senha" 
        mb={8}
        InputLeftElement={<Icon as={<Key color={colors.gray[300]} />} ml={4} />}
        secureTextEntry
        onChangeText={setPassword}
        />
        
        <Button tittle="Entrar" w="full" onPress={HandleSignIn} />
        

        </VStack>
    
    ) 
}