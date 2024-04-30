import type {Metadata} from "next";
import localFont from 'next/font/local'
import "./globals.css";
import NavigationBar from "@/app/components/NavigationBar";

const pretendard = localFont({
    src: [
        {
            path: '/fonts/Pretendard/Pretendard-Regular.otf',
            weight: '400',
        },
        {
            path: '/fonts/Pretendard/Pretendard-Bold.otf',
            weight: '700',
        },
    ],
    variable: '--font-pretendard',
})

export const metadata: Metadata = {
    title: "Finpal",
    description: "Chat with AI to manage your finances",
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
