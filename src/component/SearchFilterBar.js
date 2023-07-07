import { FaSearch } from "react-icons/fa";

export default function SearchFilterBar(props) {
  const searchChangeHandler = (event) => {
    props.onChangeSearch(event.target.value);
  };
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <section class="flex justify-between flex-wrap px-5 sm:px-14 md:px-28 py-12 dark:bg-dark-backgroundcolor dark:text-dark-textcolor ">
      <div class="relative inline-block w-full md:w-2/5 mb-10 md:m-0">
        <label class="text-lg ">
          <span class="absolute inset-y-0 left-0 flex items-center pl-10">
            <FaSearch />
          </span>
          <input
            class="dark:bg-dark-elementscolor dark:text-dark-textcolor dark:placeholder:text-dark-textcolor placeholder:text-slate-400 block bg-white w-full border-0 rounded-md py-2 pl-24 pr-3 shadow-lg  focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-lg"
            placeholder={props.placeholder}
            type="text"
            name="search"
            onChange={searchChangeHandler}
            value={props.searchResult}
          />
        </label>
      </div>

      <div>
        <select
          class="dark:bg-dark-elementscolor hover:border focus:border dark:text-dark-textcolor shadow-lg rounded px-14 text-left py-2 focus:outline-none sm:text-lg "
          onChange={dropdownChangeHandler}
          value={props.filterResult}
        >
          <option class="text-lg" value="No Filter">
            No Filter
          </option>
          <option class="text-lg" value="Africa">
            Africa
          </option>
          <option class="text-lg" value="Americas">
            Americas
          </option>
          <option class="text-lg" value="Asia">
            Asia
          </option>
          <option class="text-lg" value="Europe">
            Europe
          </option>
          <option class="text-lg" value="Oceania">
            Oceania
          </option>
          <option class="text-lg" value="Favorite">
            Favorite
          </option>
        </select>
      </div>
    </section>
  );
}
