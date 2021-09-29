import styled from 'styled-components';

const ButtonRating = ({ label, className }) => {
  return <StyledButton className={className}> {label}</StyledButton>;
};

export default ButtonRating;

//building button for each rating
const StyledButton = styled.button`
  border-radius: 5px;
  padding: 12px 8px;
  color: white;
  width: 140px;
  margin: 0px 35px;
  border: 2px solid #373e47;
  background-color: #373e47;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 4px, rgba(0, 0, 0, 0.24) 0px 2px 4px;

  @media (max-width: 768px) {
    margin: 15px 0;
  }
  :hover {
    background-color: whitesmoke;
    border: 1px solid black;
    color: black;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }

  // button highlight onClick
  &.active {
    border: 1px solid whitesmoke;
  }
`;
