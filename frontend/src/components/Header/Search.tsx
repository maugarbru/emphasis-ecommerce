import React from 'react';
import { HiSearch, HiX } from 'react-icons/hi';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from 'src/core/store';
import { setSearch } from 'src/core/store/slices/data';

const Search = (): React.JSX.Element => {
  const dispatch = useDispatch();
  const { search } = useSelector((state: RootState) => state.data);

  const filterSearch = (text: string) => {
    dispatch(setSearch(text));
  };

  return (
    <div className="w-[200px] flex justify-between items-center text-black bg-white border border-black rounded-full drop-shadow-lg p-2">
      <div className="flex items-center">
        <HiSearch className="h-5 w-5 mr-2" />
        <input
          className="max-w-[50%]"
          value={search}
          onChange={(e) => filterSearch(e.target.value)}
          placeholder="Buscar"
        ></input>
      </div>

      {Boolean(search?.length) && (
        <button
          className="flex justify-center items-center rounded-full bg-gray-500 text-white"
          onClick={() => filterSearch('')}
        >
          <HiX className="h-5 w-5" />
        </button>
      )}
    </div>
  );
};

export default Search;
