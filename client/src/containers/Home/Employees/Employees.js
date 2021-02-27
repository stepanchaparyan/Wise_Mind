import React from 'react';
import PropTypes from 'prop-types';
import {
  EmployeesContainer,
  Container,
  Employee,
  TitleText,
  NameText,
  MainText,
  Overlay,
  Image
} from './EmployeesStyled';
import img from '../../../assets/photo.jpg';

const Employees = ({ titleText, employees }) => {
  const alt = 'image';

  return (
    <EmployeesContainer>
      <TitleText>{titleText?.text}</TitleText>
      <Employee>
        {employees.map(text => (
          <Container key={text?.title}>
            <Overlay>
              <Image src={img} alt={alt}></Image>
            </Overlay>
            <NameText>{text?.title}</NameText>
            <MainText>{text?.text}</MainText>
          </Container>
        ))}
      </Employee>
    </EmployeesContainer>
  );
};

Employees.propTypes = {
  employees: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      text: PropTypes.string,
      section: PropTypes.string.isRequired,
      _id: PropTypes.string.isRequired
    })
  ),
  titleText: PropTypes.shape({
    text: PropTypes.string,
    section: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired
  })
};

export default Employees;
