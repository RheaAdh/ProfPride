import styled from 'styled-components/native';
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from '../components/Logo';
import Button from '../components/Button';

const landing = require(`../assets/landing.png`);

export default function Landing({navigation}) {
  return (
    <Styled.container>
        <Logo/>
        <Styled.mainImage source={landing} />
        <Button text="Manage Now!" onPress={()=>navigation.navigate('CustomerList')} />
    </Styled.container>
  );
}

const Styled = {
  container: styled(SafeAreaView)`
    flex: 1;
    padding: 30px;
    justify-content: space-between;
  `,
  mainImage: styled.Image`
    width: 250px;
    height: 250px;
    align-self: center;
  `,
};