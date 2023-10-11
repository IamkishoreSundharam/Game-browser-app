import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface props {
  onSearchBarValue: (value: string) => void;
}
const SearchBar = ({ onSearchBarValue }: props) => {
  const inputText = useRef<HTMLInputElement | null>(null);
  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (inputText.current) onSearchBarValue(inputText.current.value);
        }}
      >
        <InputGroup>
          <InputLeftElement children={<BsSearch />} />
          <Input
            ref={inputText}
            borderRadius={"20px"}
            placeholder="Search Games..."
          />
        </InputGroup>
      </form>
    </>
  );
};

export default SearchBar;
