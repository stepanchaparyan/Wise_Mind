import React from 'react';
import PropTypes from 'prop-types';
import { CoreValesContainer, LeftPart, RightPart, ButtonStyled, Title } from './CoreValuesStyled';

const CoreValues = ({ textsList }) => {
  const { texts, loading, error } = textsList;

  return (
    <CoreValesContainer>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          {texts.map((text, i) => {
            if (i === 0) {
              return (
                <LeftPart key={text.title}>
                  <Title>{text.title}</Title>
                  <div>{text.text}</div>
                  <ButtonStyled>Read More</ButtonStyled>
                </LeftPart>
              );
            }
          })}
          <RightPart>
            {texts.map((text, i) => {
              if (i > 0) {
                return (
                  <div key={text.title}>
                    <div>{text.title}</div>
                    <div>{text.text}</div>
                  </div>
                );
              }
            })}
          </RightPart>
        </>
      )}
    </CoreValesContainer>
  );
};

CoreValues.propTypes = {
  textsList: PropTypes.shape({
    texts: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        _id: PropTypes.string.isRequired
      })
    ).isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.any
  }).isRequired
};

export default CoreValues;
