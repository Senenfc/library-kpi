'use client'

import { useEffect, useState } from "react"
import SearchIcon from "./icons/SearchIcon"
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SearchBar() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const [search, setSearch] = useState(
        searchParams.get('search') || ''
    )

    useEffect(() => {
        const searchQuery = searchParams.get('search') || '';
        setSearch(searchQuery)
    }, [searchParams]);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchValue = e.target.value;
        setSearch(searchValue);
        
        // add or delete searchParams when searchBar changes
        if (searchValue === '') {
            router.replace(pathname);
        } else {
            router.push(`?search=${searchValue}`);
        }
    }

    return (
        <section className="relative flex items-center mb-4">
            <span className="absolute left-2 text-gray-500">
                <SearchIcon />
            </span>
            <input
                type="text"
                value={search}
                onChange={handleSearchChange}
                name="search"
                placeholder="Type to search..."
                className="border rounded text-xs font-light px-7 py-2 w-full"
            />
        </section>
    )
}