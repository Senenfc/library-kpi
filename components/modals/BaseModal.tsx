'use client';

import { ElementRef, useEffect, useRef } from "react";
import LinkIcon from "../icons/LinkIcon";
import CloseIcon from "../icons/CloseIcon";
import FavIcon from "../icons/FavIcon";
import { useRouter } from "next/navigation";

export default function BaseModal({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const dialogRef = useRef<ElementRef<"dialog">>(null);

    // this effect open the modal when call component
    useEffect(() => {
        if (!dialogRef.current?.open) {
            dialogRef.current?.showModal();
        }
    }, []);

    // on close return to last url
    const onClose = () => {
        router.back();
    }

    return (
        <section>
            <dialog
                ref={dialogRef}
                onClose={onClose}
                className="flex flex-col relative h-auto w-full max-w-[400px] sm:max-w-[600px] p-6 pt-8 rounded"
            >
                <div className="flex absolute space-between right-2.5 top-2.5">
                    <button
                        className="mr-2"
                        // copy url to the clipboard to share it
                        onClick={() => navigator.clipboard.writeText(window.location.href)}
                    >
                        <LinkIcon />
                    </button>
                    <button className="text-sm" onClick={onClose}>
                        <CloseIcon />
                    </button>
                </div>
                <div>{children}</div>
                <button className="w-full mt-auto bg-black text-white text-sm rounded">
                    <div className="flex w-full items-center justify-center p-1">
                        <FavIcon />
                        <span className="ml-1 text-xs font-medium">Favorite item</span>
                    </div>
                </button>
            </dialog>
        </section>
    )
}