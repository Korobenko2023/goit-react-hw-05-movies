import { useState } from "react";
import toast from "react-hot-toast";
import { SearchButton, SearchForm, SearchInput } from "./Searchbar.styled";

export const Searchbar = ({ setSearchParams }) => {
    const [query, setQuery] = useState('');
  
    const handleSearch = (e) => {
        setQuery(e.target.value.toLowerCase());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim() === '') {
            toast.error("Please fill the field!");
            return;
        }
        setSearchParams({ query });
        setQuery('');
    };
 
    return (
        <SearchForm onSubmit={handleSubmit}>
          <SearchInput
            name="searchQuery"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            value={query}
            onChange={handleSearch}
            />
          <SearchButton type="submit">Search</SearchButton>
        </SearchForm>
    );
};