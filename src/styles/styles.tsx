import styled from "styled-components";

export const Container = styled.div`
  padding: 25px 0px 25px 25px;
  @media screen and (max-width: 650px) {
    padding: 20px;
  }
`;

export const NotesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px;
`;

export const EmptyMsgBox = styled.div`
  text-align: center;
  font-size: clamp(1.2rem, 2vw, 1.3rem);
  font-weight: 500;
`;

export const ButtonFill = styled.button`
  padding: 6px 20px;
  border-radius: 5px;
  border: none;
  background-color: var(--primary-color);
  transition: 250ms background-color ease-in-out;
  cursor: pointer;

  span {
    font-weight: 500;
    font-size: clamp(15px, 3.5vw, 0.7rem);
  }

  svg {
    display: inline-block;
    margin-bottom: -1px;
  }

  &:hover {
    background-color: #ffe4a7;
  }

  @media screen and (max-width: 600px) {
    padding: 6px 12px;
  }
`;

export const ButtonOutline = styled.button`
  padding: 5px 20px;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.05);
  transition: 250ms background-color ease-in-out;
  white-space: nowrap;
  cursor: pointer;

  span {
    font-weight: 500;
    font-size: clamp(15px, 3.5vw, 0.8rem);
  }
  border: none;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  @media screen and (max-width: 600px) {
    padding: 6px 12px;
  }
`;

export const NotesIconBox = styled.span`
  padding: 0 6px;
  cursor: pointer;

  svg {
    transition: 250ms color ease-in-out;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.5);
  }

  &:hover {
    svg {
      color: black;
    }
  }
`;
