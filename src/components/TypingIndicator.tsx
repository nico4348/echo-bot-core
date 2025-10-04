import { Bot } from "lucide-react";

const TypingIndicator = () => {
  return (
    <div className="flex gap-4 p-6 bg-ai-message animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md bg-gradient-primary text-primary-foreground">
        <Bot className="h-5 w-5" />
      </div>
      <div className="flex-1 space-y-2">
        <p className="text-sm font-medium leading-none">Asistente IA</p>
        <div className="flex gap-1 items-center">
          <div className="w-2 h-2 bg-foreground/60 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="w-2 h-2 bg-foreground/60 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="w-2 h-2 bg-foreground/60 rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;
