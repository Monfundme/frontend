import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
<<<<<<< HEAD
import { Nav, Footer } from "@/components/general";
=======
import { Nav } from "@/components/general";
import Web3Provider from "@/components/web3/config";
>>>>>>> 47529f7356aa35aeb06d83c094366cfc4c016a7a

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
<<<<<<< HEAD
	title: "Monfudme",
	description: "Crowdfundig just got easier",
=======
  title: "Monfudme",
  description: "Crowdfundig just got easier",
>>>>>>> 47529f7356aa35aeb06d83c094366cfc4c016a7a
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
<<<<<<< HEAD
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<Nav />
				{children}
				<Footer />
			</body>
		</html>
	);
=======
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Web3Provider>
          <Nav />
          {children}
        </Web3Provider>
      </body>
    </html>
  );
>>>>>>> 47529f7356aa35aeb06d83c094366cfc4c016a7a
}
