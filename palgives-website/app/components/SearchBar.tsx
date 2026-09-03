'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FiSearch, FiX } from 'react-icons/fi';

export default function SearchBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('');
    const router = useRouter();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (query.trim()) {
            router.push(`/search?q=${encodeURIComponent(query)}`);
            setIsOpen(false);
            setQuery('');
        }
    }

    return (
        <div className="relative">
            <button onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-slate-700 hover:text-amber-500 transition-colors focus:outline-none"
                aria-label="Search"
            >
                <FiSearch className="w-5 h-5" />
            </button>
            {isOpen && (
                <form onSubmit={handleSearch} className="absolute right-0 top-12 z-50 flex items-center bg-white border border-gray-200 rounded-lg shadow-lg p-2 w-72 md:w-80">
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search..."
                        className="w-full px-3 py-1.5 text-sm text-gray-800 bg-transparent focus:outline-none"
                        autoFocus />

                        <button
            type="submit"
            className="p-1.5 text-slate-600 hover:text-amber-600"
          >
            <FiSearch className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="p-1.5 text-gray-400 hover:text-gray-600"
          >
            <FiX className="w-4 h-4" />
          </button>
                </form>
            )

            }
        </div>
    );

}