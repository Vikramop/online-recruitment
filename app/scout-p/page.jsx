'use client';

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { data } from '@Data/data';
import { Combobox, Transition } from '@headlessui/react';
import { useState } from 'react';

const page = () => {
  // const { data: session } = useSession({
  //   required: true,
  //   onUnauthenticated() {
  //     redirect('/signin?callbackUrl=/ScoutClient');
  //   },
  // });
  const [search, setSearch] = useState('');

  return (
    <section className="py-24">
      <div className="purple_gradient justify-center text-center mb-10">
        <h1> Scout Your Clients </h1>
      </div>
      <form className="flex items-center ml-10">
        <label for="simple-search" className="sr-only">
          Search
        </label>
        <div className="relative w-1/2">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="simple-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for your Clients"
            required
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
          <span className="sr-only">Search</span>
        </button>
      </form>
      {/* data render */}
      <div className="container mx-auto py-20 px-8">
        <div className="grid lg:grid-cols-3 gap-6 md:grid:cols-2">
          {data
            .filter((item) => {
              return search.toLowerCase() === ''
                ? item
                : item.role.toLowerCase().includes(search) ||
                    item.country.toLowerCase().includes(search);
            })
            .map((item) => (
              <div className="shadow-lg rounded-lg bg-gray-900">
                <img className="rounded-t-lg" src="/assets/images/man.jpg" />
                <div className="pl-5 flex" key={item.id}>
                  <div>
                    <h2 className="text-3xl font-bold text-purple-700 mb-3">
                      {item.first_name}
                    </h2>
                    <h3 className="font-bold text-purple-300">{item.email}</h3>
                    <h3 className="font-bold mb-2 text-xl text-purple-300">
                      {item.role}
                    </h3>
                  </div>

                  <div className="ml-2  text-2xl font-bold  text-purple-500">
                    <h3>{item.country}</h3>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      {/* {data.map((item) => {
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src="/assets/images/man.jpg"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{item.first_name}</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #winter
            </span>
          </div>
        </div>
        
      })} */}
    </section>
  );
};

export default page;
