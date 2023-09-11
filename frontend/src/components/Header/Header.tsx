import React from 'react';
import { HiSearch } from 'react-icons/hi';
import { useSelector, useDispatch } from 'react-redux';

import ShoppingCart from '../ShoppingCart';
import UserSession from '../UserSession';

import { RootState } from 'src/core/store';
import { setSearch } from 'src/core/store/slices/data';

const Header = (): React.JSX.Element => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.userData);

  const filterSearch = (text: string) => {
    dispatch(setSearch(text));
  };

  return (
    <header className="sticky top-0 z-30 w-full px-20 py-4 backdrop-blur-md bg-white/50 shadow-lg border-b border-black">
      <div className="flex flex-wrap justify-between items-center">
        <h1 className="uppercase text-2xl font-bold drop-shadow-lg">
          E-Commerce React
        </h1>
        <div className="flex justify-center items-center text-black bg-white border border-black rounded-full drop-shadow-lg p-2">
          <HiSearch className="h-5 w-5 mr-2" />
          <input
            onChange={(e) => filterSearch(e.target.value)}
            placeholder="Buscar"
          ></input>
        </div>

        <div className="flex justify-end items-center space-x-4">
          <ShoppingCart />
          <UserSession user={user} />
        </div>
      </div>
    </header>
  );
};

export default Header;
