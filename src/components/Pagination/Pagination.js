import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import styled from 'styled-components';

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  // calculating # of pages & storing
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Wrapper>
      <span onClick={() => (currentPage > 1 ? paginate(currentPage - 1) : 1)}>
        <ChevronLeftIcon />
      </span>
      <span
        onClick={() =>
          currentPage < pageNumbers.length ? paginate(currentPage + 1) : 1
        }
      >
        <ChevronRightIcon />
      </span>
    </Wrapper>
  );
};

export default Pagination;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: whitesmoke;
  width: 70px;
  border-radius: 5px;
  border: 2px solid #373e47;
  margin: 20px auto;
  padding: 4px 6px;

  @media (max-width: 500px) {
    margin: 10px auto;
  }

  .MuiSvgIcon-root {
    font-size: 2rem;
    cursor: pointer;

    :hover {
      color: #373e47;
    }
  }
`;
