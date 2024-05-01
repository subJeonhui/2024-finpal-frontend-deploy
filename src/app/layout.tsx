import type {Metadata} from "next";
import localFont from 'next/font/local'
import "./globals.css";
import NavigationBar from "@/components/NavigationBar";

const pretendard = localFont({
    src: [
        {
            path: '../../public/assets/fonts/Pretendard/Pretendard-Regular.otf',
            weight: '400',
        },
        {
            path: '../../public/assets/fonts/Pretendard/Pretendard-Bold.otf',
            weight: '700',
        },
    ],
    variable: '--font-pretendard',
})

export const metadata: Metadata = {
    title: "Finpal",
    description: "Chat with AI to manage your finances",
    icons: {
        icon: "/assets/finpal-icon.svg",
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko-kr">
        <body className={pretendard.className}>
        <NavigationBar/>
        {children}
        </body>
        </html>
    );
}
