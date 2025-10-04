import { Message as MessageType } from "@/types/chat";
import { Bot, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface MessageProps {
  message: MessageType;
}

const Message = ({ message }: MessageProps) => {
  const isAI = message.role === "assistant";

  return (
    <div
      className={cn(
        "flex gap-4 p-6 animate-in fade-in slide-in-from-bottom-4 duration-500",
        isAI ? "bg-ai-message" : "bg-card"
      )}
    >
      <div
        className={cn(
          "flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md",
          isAI
            ? "bg-gradient-primary text-primary-foreground"
            : "bg-user-message text-primary-foreground"
        )}
      >
        {isAI ? <Bot className="h-5 w-5" /> : <User className="h-5 w-5" />}
      </div>
      <div className="flex-1 space-y-2">
        <p className="text-sm font-medium leading-none">
          {isAI ? "Asistente IA" : "Tú"}
        </p>
        <p className="text-sm text-foreground/90 whitespace-pre-wrap">
          {message.content}
        </p>
        <p className="text-xs text-muted-foreground">
          {message.timestamp.toLocaleTimeString("es-ES", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      </div>
    </div>
  );
};

export default Message;
