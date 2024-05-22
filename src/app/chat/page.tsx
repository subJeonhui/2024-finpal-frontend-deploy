"use client";

import ChatItem from "@/components/chat/ChatItem";
import UserChat from "@/components/chat/ChatItem";
import axios from "axios";
import {useEffect, useState} from "react";

export default function ChatPage() {
    const [selectedChatId, setSelectedChatId] = useState<number | null>(null);
    const [chatList, setChatList] = useState<any[]>([]);
    const initChatList = async () => {
        const res = await axios.get("http://localhost:8000/chat/list");
        setChatList(res.data.data);
    };

    useEffect(() => {
        initChatList();
    }, []);

    const [chatItemList, setChatItemList] = useState<any[]>([]);
    const initChatItemList = async () => {
        const res = await axios.get(`http://localhost:8000/chat/${selectedChatId}`);
        setChatItemList(res.data.data.queries);
        console.log(
            "🚀 ~ initChatItemList ~ res.data.data.queries:",
            res.data.data.queries
        );
    };
    const newChat = () => {
        setSelectedChatId(null);
        setChatItemList([]);
    };

    const [isLoading, setIsLoading] = useState(false);
    const [query, setQuery] = useState<string>("");
    const send = async () => {
        setIsLoading(true);
        const res = await axios.post(`http://localhost:8000/chat/query`, {
            chat_id: selectedChatId,
            query,
        });
        setIsLoading(false);
        setChatItemList((prev) => [...prev, res.data.data]);
        setQuery("");
    };

    useEffect(() => {
        if (!selectedChatId) return;
        initChatItemList();
    }, [selectedChatId]);

    return (
        <>
            <div className="flex w-full h-full overflow-hidden">
                <div className="w-1/6 shadow h-full relative overflow-auto">
                    <div className="sticky top-0 p-2 cursor-pointer bg-[#F8F8F8]">
                        <div
                            className="flex hover:bg-[#ddd] py-2 px-4 rounded justify-between"
                            onClick={newChat}
                        >
                            <span>New Chat</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="p-2">
                        {chatList.filter((chat) => chat.queries.isEmpty === false ).map((chat) => (
                            <div
                                className="px-4 py-2 cursor-pointer hover:bg-[#ddd] rounded"
                                key={chat.id}
                                onClick={() => {
                                    setSelectedChatId(chat.id);
                                }}
                            >
                                {chat.queries[0]?.query}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col flex-1 relative ml-6 mr-6">
                    <div className="mx-auto w-full flex-1 flex-col gap-5 max-h-[85vh] overflow-auto h-full">
                        {chatItemList.map((chatItem) => (
                            <div key={chatItem.id}>
                                <ChatItem content={chatItem.query} type="me"/>
                                <ChatItem content={chatItem.answer} type="ai"/>
                            </div>
                        ))}
                    </div>
                    <div className="mx-auto max-w-screen-lg flex w-full gap-2 py-5">
                        <input
                            onKeyDown={(e) => {
                                if (e.code === "Enter") send();
                            }}
                            type="text"
                            className="border border-[#aaa] px-4 py-2 rounded flex-1"
                            placeholder="Enter your text ..."
                            value={query}
                            onChange={(e) => {
                                setQuery(e.target.value);
                            }}
                        />
                        <button
                            onClick={send}
                            type="button"
                            disabled={query.length === 0}
                            className="bg-[#7398e9] text-white py-2 px-4 rounded disabled:bg-[#ccc]"
                        >
                            전송
                        </button>
                    </div>
                </div>
            </div>
            {isLoading && (
                <div
                    className="fixed bg-[#0000006e] left-0 top-0 right-0 bottom-0 flex justify-center items-center w-full h-full">
                    <svg
                        aria-hidden="true"
                        className="w-14 h-14 animate-spin fill-[#2390f7] text-[#fff]"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                        />
                        <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                        />
                    </svg>
                </div>
            )}
        </>
    );
}
