import React from 'react';
import PropTypes from 'prop-types';
import { ButtonStyled } from './ButtonStyled';

const Button = ({
  text,
  to,
  textcolor,
  texthovercolor,
  backgroundcolor,
  backgroundhovercolor,
  withborder
}) => {
  return (
    <ButtonStyled
      textcolor={textcolor}
      texthovercolor={texthovercolor}
      backgroundcolor={backgroundcolor}
      backgroundhovercolor={backgroundhovercolor}
      withborder={withborder}
      to={to}
    >
      {text}
    </ButtonStyled>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  textcolor: PropTypes.string,
  texthovercolor: PropTypes.string,
  backgroundcolor: PropTypes.string,
  backgroundhovercolor: PropTypes.string,
  withborder: PropTypes.bool,
  to: PropTypes.string
};

Button.defaultProps = {
  to: '/',
  textcolor: 'white',
  texthovercolor: 'black',
  backgroundcolor: 'gray',
  backgroundhovercolor: 'lightGray',
  withborder: false
};

export default Button;
