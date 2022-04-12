import styled from 'styled-components';

const SeeMore = styled.div`
  border: 2px solid rgb(37, 37, 37);
  font-family: SUIT-SemiBold;
  border-radius: 80px;
  color: rgb(37, 37, 37);
  height: 90px;
  display: table-cell;
  vertical-align: middle;
  font-size: 22px;
  width: 180px;
  height: 75px;
  margin-top: 40px;
  &:hover {
    background: black;
    color: white;
  }
  @media screen and (max-width: 770px) {
    font-size: 18px;
    height: 50px;
    width: 130px;
  }
  @media screen and (max-width: 500px) {
    font-size: 17px;
    height: 50px;
    width: 130px;
  }
`;

export default SeeMore;
