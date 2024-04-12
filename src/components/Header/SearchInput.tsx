import { useState } from "react";
import SearchIcon from "../../assets/svg/Search.svg?react";

type SearchInputProps = {
  onSearch: (searchTerm: string) => void;
};

export function SearchInput({ onSearch }: SearchInputProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

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
