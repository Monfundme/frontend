import type { Metadata } from "next";
import { Geist, Geist_Mono,DM_Sans, Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Nav } from "@/components/general";
import Web3Provider from "@/web3/config";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const dmSans = DM_Sans({
	variable:"--font-dm-sans",
	subsets:["latin"]
})


const nohemi = localFont({
  src: "../public/fonts/Nohemi-Medium.otf",
  variable: "--font-nohemi",
});

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Monfudme",
	description: "Crowdfundig just got easier",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${dmSans.variable} ${nohemi.variable} ${inter.variable} antialiased`}>
				<Web3Provider>
					{/* <Nav /> */}
					{children}
				</Web3Provider>
			</body>
		</html>
	);
}
