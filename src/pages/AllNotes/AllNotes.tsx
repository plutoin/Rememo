import { ChangeEvent, useState } from "react";

import { useAppDispatch, useAppSelector } from "../../hooks/redux";

import getAllNotes from "../../utils/getAllNotes";

import { toggleFiltersModal } from "../../store/modal/modalSlice";

import { ButtonOutline, Container, EmptyMsgBox } from "../../styles/styles";
import { Box, InputBox, TopBox } from "./AllNotes.styles";
import { FiltersModal } from "../../components";

export default function AllNotes() {
  const dispatch = useAppDispatch();
  const { mainNotes } = useAppSelector((state) => state.notesList);
  const { viewFiltersModal } = useAppSelector((state) => state.modal);

  const [filter, setFilter] = useState<string>("");
  const [searchInput, setSearchInput] = useState<string>("");

  const filterHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  const clearHandler = () => {
    setFilter("");
  };

  return (
    <Container>
      {viewFiltersModal && (
        <FiltersModal
          handleFilter={filterHandler}
          handleClear={clearHandler}
          filter={filter}
        />
      )}
      {mainNotes.length === 0 ? (
        <EmptyMsgBox>NO NOTES</EmptyMsgBox>
      ) : (
        <>
          <TopBox>
            <InputBox>
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Enter a note title"
              />
            </InputBox>

            <div className="notes__filter-btn">
              <ButtonOutline
                onClick={() => dispatch(toggleFiltersModal(true))}
                className="nav__btn"
              >
                <span>Filter</span>
              </ButtonOutline>
            </div>
          </TopBox>

          <Box>
            {/* Notes */}
            {getAllNotes(mainNotes, filter)}
          </Box>
        </>
      )}
    </Container>
  );
}
