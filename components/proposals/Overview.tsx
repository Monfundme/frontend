import { Share2, User } from "lucide-react";

export default function Overview() {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Raise for the LA wildfire victims</h2>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    Active
                </span>
            </div>

            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-purple-500 grid place-content-center text-white">
                        <User className="text-white  size-[20] " />
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <span className="font-medium ">{"0x1234567890123456789012345678901234567890".slice(0, 4)}...{"0x1234567890123456789012345678901234567890".slice(-4)}</span>
                        </div>
                        <p className="text-sm text-gray-500">On Monfundme • 5 days ago </p>
                    </div>
                </div>
                <button className="flex items-center gap-2 text-gray-600">
                    <Share2 className="w-5 h-5" /> Share
                </button>
            </div>

            <div className="space-y-6">
                <div>
                    <h3 className="font-semibold mb-2">Authour: Nono (from MonFundMe platform)</h3>
                    <h3 className="font-semibold mb-4">Date: 08/03/2025</h3>
                </div>

                <div>
                    <h3 className="font-semibold mb-4">Campaign summary</h3>
                    <p className="text-gray-600 leading-relaxed">
                        Thousands of families have lost their homes, belongings, and sense of security due to the devastating LA wildfires. By supporting this campaign, you&apos;re helping provide emergency aid, shelter, and resources to those in need. Every vote and contribution brings them one step closer to recovery and rebuilding their lives. The impact of the LA wildfires is devastating, but we have the power to make a difference. Your vote can help raise awareness, mobilise support, and fund life-saving aid for displaced families. Every vote and donation matters—join us in bringing relief, recovery, and a fresh start to those affected.
                    </p>
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span>10 votes</span>
                    <span>•</span>
                    <span>5hr left</span>
                </div>
            </div>
        </div>
    )
}