import "@/styles/global.css";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: {
		absolute: "Koa API inside Next.JS",
		template: "%s | Koa API inside Next.JS"
	},
	description: "Koa API inside Next.JS"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head></head>
			<body>{children}</body>
		</html>
	);
}
