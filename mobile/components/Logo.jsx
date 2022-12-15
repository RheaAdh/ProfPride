import styled from 'styled-components/native';

const logo = require(`../assets/logo.png`);

export default function Logo() {
    return (
        <Styled.container>
            <Styled.logo source={logo} />
            <Styled.tagline>Room stay for professionals</Styled.tagline>
        </Styled.container>
    );
}

const Styled = {
  container: styled.View``,
  tagline: styled.Text`
    align-self: center;
    margin-top: 10;
    font-family: 'fira-sans';
    color: #1B1B1B;
    font-size: 13;
  `,
  logo: styled.Image`
    width: 73px;
    height: 58px;
    align-self: center;
  `,
};