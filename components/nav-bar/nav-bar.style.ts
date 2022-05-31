import styled, { css } from "styled-components";
import Link from 'next/link'
import { Container } from "../global";


export const NavBar = styled.nav` 
font-size: 18px;
position: sticky;
top: 0;
z-index: 999;
height: 80px;
background-color: ${(props:any) => props.theme.colors.primary};
/* box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.5); */
display: flex;
justify-content: center;
align-items: center;
`;

export const NavLink = styled.a`
font-size: 18px;
font-color: ${(props:any) => props.theme.colors.navFontColor};
`

export const NavbarContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    height: 80px;
${Container};
`;

export const NavbarMenuContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    align-items: left;
    height: 80px;
`

export const NavButton = styled.button`
  /* Adapt the colors based on primary prop */
  background-color: ${(props:any) => props.theme.colors.secondaryButton};
  color: ${(props: any) => props.theme.colors.navFontColor};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${(props:any) => props.theme.colors.secondaryButton};
  border-radius: 3px;
`;



