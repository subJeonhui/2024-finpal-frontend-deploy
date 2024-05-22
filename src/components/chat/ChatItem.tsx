interface ChatItemProps {
  type: "me" | "ai";
  content: string;
}

export default function ChatItem(props: ChatItemProps) {
  return (
    <div className="flex flex-col gap-1 mb-4">
      <div className="flex gap-2 items-center">
        {props.type === "me" ? (
          <div className="bg-[#eee] rounded-full p-2">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        ) : (
          <img src="assets/finpal-icon.svg" className="w-9 h-9" />
        )}

        <span className="font-bold">
          {props.type === "me" ? "You" : "FinPal"}
        </span>
      </div>
      <p className="pl-11">{props.content}</p>
    </div>
  );
}
