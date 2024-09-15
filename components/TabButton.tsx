'use client';

import { usePathname, useRouter } from "next/navigation";

export default function TabButton({ text, path }: { text: string, path: string }) {
    const router = useRouter();
    const pathname = usePathname();

    return (
        <button
            className={pathname === path ? 'w-full bg-white text-black p-1 rounded' : 'w-full'}
            onClick={() => router.push(path)}
        >
            {text}
        </button>
    )
}