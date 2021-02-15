import React from 'react';
import { CoreValesContainer, LeftPart, RightPart } from './CoreValuesStyled';

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
                <LeftPart>
                  <div>{text.title}</div>
                  <div>{text.text}</div>
                </LeftPart>
              );
            } else {
              return (
                <RightPart>
                  {texts.map((text, i) => {
                    if (i !== 0) {
                      return (
                        <>
                          <div>{text.title}</div>
                          <div>{text.text}</div>
                        </>
                      );
                    }
                  })}
                </RightPart>
              );
            }
          })}
        </>
      )}
    </CoreValesContainer>
  );
};

export default CoreValues;
