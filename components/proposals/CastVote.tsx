import { CheckCircle, XCircle, Clock } from "lucide-react";
import { useState } from "react";

interface TimelineEvent {
    label: string;
    date: string;
    time: string;
}

export default function CastVote({ timeline }: { timeline: TimelineEvent[] }) {
    const [selectedVote, setSelectedVote] = useState<string>("");
    return (
        <div className="space-y-8">
            {/* Voting Section */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-6">Cast your vote here</h3>

                <div className="space-y-3 mb-8">
                    <button
                        onClick={() => setSelectedVote("yes")}
                        className={`w-full flex items-center hover:bg-green-50 transition-all duration-300 justify-between p-3 rounded-lg border ${selectedVote === "yes" ? "border-green-500 bg-green-50" : "border-gray-200"}`}
                    >
                        <span className="flex items-center gap-2">
                            <p>Yes</p>
                            <CheckCircle className={`w-5 h-5 ${selectedVote === "yes" ? "text-green-500" : "text-gray-300"}`} />
                        </span>

                        <p>{"80%"}</p>
                    </button>

                    <button
                        onClick={() => setSelectedVote("no")}
                        className={`w-full flex items-center hover:bg-red-50 transition-all duration-300 justify-between p-3 rounded-lg border ${selectedVote === "no" ? "border-red-500 bg-red-50" : "border-gray-200"}`}
                    >
                        <span className="flex items-center gap-2">
                            <p>No</p>
                            <XCircle className={`w-5 h-5 ${selectedVote === "no" ? "text-red-500" : "text-gray-300"}`} />
                        </span>

                        <p>{"20%"}</p>
                    </button>
                </div>

            </div>

            {/* Timeline Section */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                    <Clock className="w-5 h-5" /> Timeline
                </h3>

                <div className="space-y-6">
                    {timeline.map((event, index) => (
                        <div key={index} className="relative pl-6 border-l-2 border-gray-200 last:border-l-0">
                            <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-gray-200"></div>
                            <p className="font-medium mb-1">{event.label}</p>
                            <p className="text-sm text-gray-600">{event.date} • {event.time}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}