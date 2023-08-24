import styled from "styled-components";

export const Box = styled.div`
  width: clamp(250px, 95%, 750px);
  background-color: white;
  color: black;
  border-radius: 10px;
  padding: 20px 18px 25px;

  .createNote__create-btn {
    display: flex;
    justify-content: flex-end;
  }
`;

export const TopBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .createNote__title {
    font-weight: 600;
    font-size: clamp(1.4rem, 3vw, 1rem);
  }
  .createNote__close-btn {
    svg {
      font-size: 1.6rem;
    }
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  margin: 20px 0 10px;
  padding: 10px 0;
  user-select: none;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.2);
  text-indent: 15px;
  font-size: clamp(1rem, 2vw, 1rem);
  transition: 250ms box-shadow ease-in;
  &::placeholder {
    font-size: 16px;
  }
`;

export const AddedTagsBox = styled.div`
  margin: 12px 0 30px;
  display: flex;

  div {
    display: flex;
    align-items: center;
    border: none;
    background-color: rgba(0, 0, 0, 0.1);
    color: rgba(0, 0, 0, 0.7);
    padding: 4px 10px;
    border-radius: 10px;
    font-size: 13px;
    font-weight: 500;
    margin-right: 10px;
    span {
      display: flex;
      align-items: center;
    }
    .createNote__tag {
      margin-right: 3px;
    }
    .createNote__tag-remove {
      cursor: pointer;
      padding: 2px;
    }
  }
`;
export const OptionsBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0 25px;

  select {
    font-size: clamp(14px, 1.5vw, 0.5rem);
    padding: 5px 10px;
    user-select: none;
    outline: none;
    border: none;
    border: 1px solid #c4c4c4;
    border-radius: 5px;
  }
  label {
    font-size: clamp(14px, 1.5vw, 0.5rem);
  }
`;
