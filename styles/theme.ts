import { DefaultTheme } from "styled-components";

const theme : DefaultTheme = {
  colors:{
    primary: "#2F274C",
    secondary: "#8886A1",
    primaryButton: '#8D7B7C',
    secondaryButton: '#BA8586',
    navFontColor : '#fff',
    tetiary: '#F2F3EE',
    main: '#5D6E91',
    yellow: '#F9964f',
    gray: '#EEEDED',
    mainBlur:'#E7F0F9',
    mainThick:'#121B46',
  },
  view : {
    mobile: `(max-width: 767px)`,
    tablet: `(max-width: 1024px)`,
    desktop: `(min-width: 1025px)`
  },
  flex : {
    column : 'display: flex; flex-direction:column; align-items: center; justify-content: space-between; ',
    row : 'display: flex; align-items: center; justify-content: space-between;',    
  },
  fonts: {
    material: "Roboto",
    default: "Montserrat"
  },
  border_box: `box-sizing:border-box;`
};



export default theme;