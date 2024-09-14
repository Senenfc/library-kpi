import React from "react";
import { Kpi } from "../types/kpi.types";
import IndicatorIcon from "./icons/IndicatorIcon";
import Link from "next/link";

export default function Card({ resource }: { resource: Kpi }) {
    return <section className="bg-white border border-1 rounded text-xs max-w-[500px] hover:bg-[#f7f9ff]">
        <Link
            href={`/kpi/${resource.id}`}
            passHref
        >
            <div className="flex p-2 gap-4">
                <div className="flex items-center justify-center min-w-[70px] rounded bg-[#f2f4f9]">
                    <IndicatorIcon />
                </div>
                <div className="flex flex-col gap-1 text-black">
                    <p className="font-medium">{resource.title}</p>
                    <p>{resource.description}</p>
                    <span className="text-[#6e7d92]">{resource.createdAt}</span>
                </div>
            </div>
        </Link>
    </section>
}