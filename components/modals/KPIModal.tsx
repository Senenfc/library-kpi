'use client';

import { useRouter } from "next/navigation";
import mockData from '@/mockData/mockData.json';
import { useEffect, useState } from "react";
import IndicatorIcon from "@/components/icons/IndicatorIcon";

export default function KPIModal({ params }: { params: { id: string } }) {
    const router = useRouter();
    const { id } = params;

    const [textareaValue, setTextareaValue] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTextareaValue(e.target.value);
    };

    const kpi = mockData.kpis.find((kpi) => kpi.id === Number(id))

    // push new insight and clean text area
    const handleAddInsight = () => {
        const value = textareaValue.trim();
        if (value !== '') {
            kpi?.insights.push(value)
            setTextareaValue('');
        }
    };


    useEffect(() => {
        router.push(`/kpi/${id}`);
    }, [])

    if (!kpi) return <div>KPI not found</div>;

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center w-14 h-14 mb-4 rounded bg-[#f2f4f9]">
                <IndicatorIcon />
            </div>
            <h2 className="text-2xl font-normal">{kpi.title}</h2>
            <span className="mb-4 text-xs text-[#6e7d92]">{kpi.calculation}</span>
            <p className="mb-4 text-sm">{kpi.description}</p>
            <div className="flex flex-col items-center">
                <p className="text-sm font-medium">{kpi.createdAt}</p>
                <span className="mb-4 text-xs text-[#6e7d92]">Created At</span>
            </div>
            <ul>
                {kpi.insights.map((insight, index) => {
                    // index is a bad practice here, with more time I would put an id for insight
                    return <li key={index}>{insight}</li>;
                })}
            </ul>
            <textarea
                className="border rounded p-2 w-full"
                placeholder="Add insights here..."
                value={textareaValue}
                onChange={handleInputChange}
            />
            <button
                onClick={handleAddInsight}
                className="mt-2 p-1 bg-[#64738b] hover:bg-[#525f73] text-white text-sm rounded"
            >
                Add
            </button>
        </div>
    )
}