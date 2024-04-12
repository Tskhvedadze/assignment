import { useState } from "react";
import SearchIcon from "../../assets/svg/Search.svg?react";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { ButtonPrimary } from "../Buttons/ButtonPrimary";

type SearchInputProps = {
  onSearch: (searchTerm: string) => void;
};

export function SearchInput({ onSearch }: SearchInputProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const breakpoint = useMediaQuery();

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  if (breakpoint === "mobile") {
    return (
      <ButtonPrimary className=" p-[14px]">
        <SearchIcon />
      </ButtonPrimary>
    );
  }

  return (
    <form
      onSubmit={submitHandler}
      className="flex items-center bg-primary_light py-[14px] px-[16px] rounded-full"
    >
      <input
        type="text"
        placeholder="ძიება"
        className="w-full outline-none bg-transparent"
        value={searchTerm}
        onChange={onChangeHandler}
      />
      <button type="submit">
        <SearchIcon />
      </button>
    </form>
  );
}
