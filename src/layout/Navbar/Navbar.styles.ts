import styled from "styled-components";

export const StyledNav = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  border-bottom: 2px solid #f1f3f4;
  padding: 0 30px;

  .nav__menu {
    display: none;
  }

  @media screen and (max-width: 950px) {
    padding: 0 15px;
    .nav__menu {
      display: block;
      flex-basis: 5%;
      margin: 8px 10px 0px 0px;
      svg {
        font-size: 1.65rem;
        cursor: pointer;
      }
    }
  }
`;

export const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .nav__page-title {
    font-weight: 600;
    font-size: 1.3rem;
  }

  @media screen and (max-width: 950px) {
    margin-top: 7px;
  }
`;
