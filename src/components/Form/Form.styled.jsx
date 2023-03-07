import styled from '@emotion/styled';

export const ContactForm = styled.form`
  padding-top: 20px;
  width: 300px;
  height: 300px;
  button {
    display: block;
    font-size: 18px;
    width: 150px;
    margin: 0 auto;
    margin-top: 30px;
    border-radius: 5px;
    background-color: white;
    border-style: none;

    cursor: pointer;
    :hover {
      background-color: gold;
    }
  }
`;
export const Name = styled.label`
  font-size: 18px;

  display: block;
  width: 300px;
  padding-bottom: 20px;
  margin: 0 auto;
  input {
    width: 300px;
    display: block;
    margin: 0 auto;
    :hover {
      border-color: gold;
    }
  }
`;
export const Number = styled.label`
  font-size: 18px;
  display: block;
  width: 300px;
  padding-bottom: 20px;
  margin: 0 auto;
  input {
    width: 300px;
    display: block;
    margin: 0 auto;
    :hover {
      border-color: gold;
    }
  }
`;