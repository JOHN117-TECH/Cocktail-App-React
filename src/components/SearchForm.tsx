import { FormEvent, useEffect, useRef } from 'react';
import { useGlobalContext } from '../context/Context';
const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef<HTMLInputElement | null>(null); // Change the type of the ref

  useEffect(() => {
    if (searchValue.current) {
      searchValue.current.focus();
    }
  }, []);

  function searchCocktail() {
    if (searchValue.current) {
      setSearchTerm(searchValue.current.value);
    }
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name"></label>
          <input
            type="text"
            name="name"
            id="name"
            ref={searchValue}
            onChange={searchCocktail}
            placeholder="Search cocktail.."
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
