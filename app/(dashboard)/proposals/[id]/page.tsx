"use client";

import { useState } from "react";
import { Overview, CastVote, Votes } from "@/components/proposals";
interface TimelineEvent {
    label: string;
    date: string;
    time: string;
}

export default function ProposalPage() {
    // const [selectedVote, setSelectedVote] = useState<"yes" | "no" | "abstain" | null>(null);

    const [isVote, setIsVote] = useState(false);

    const timeline: TimelineEvent[] = [
        { label: "Date queued", date: "06/03/2025", time: "20:05 AM" },
        { label: "Start date", date: "07/03/2025", time: "20:05 AM" },
        { label: "End date", date: "10/03/2025", time: "20:05 AM" },
    ];


    return (
        <main className="max-w-[1200px] mx-auto px-5 lg:px-[36px] py-8">
            <h1 className="text-3xl font-bold mb-4">Campaign proposal voting</h1>

            {/* Navigation */}
            <div className="border-b mb-8">
                <nav className="flex items-center ">
                    <button className={`text-purple-600 b pb-4 pr-4 ${!isVote && "border-b-2 border-purple-600"}`} onClick={() => setIsVote(false)}>
                        Overview
                    </button>
                    <button className={`text-gray-600 pb-4 px-4 flex items-center gap-2 ${isVote && "border-b-2 border-purple-600"}`} onClick={() => setIsVote(true)}>
                        Votes <span className="bg-purple-600 text-white text-sm px-2 rounded-full">5</span>
                    </button>
                </nav>
            </div>

            <div className="grid lg:grid-cols-[1fr_400px] gap-8">
                <div>
                    {
                        isVote ? (
                            <Votes />
                        ) : (
                            <Overview />
                        )
                    }
                </div>
                <CastVote timeline={timeline} />
            </div>
        </main>
    );
}
