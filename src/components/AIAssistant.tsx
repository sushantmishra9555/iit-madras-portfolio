import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Sparkles, FolderOpen, Code2, FileText, Mail, Bot, User } from "lucide-react";
import { getAIResponse } from "@/lib/ai-logic";

interface Message {
    id: number;
    text: string;
    isBot: boolean;
}

const quickActions = [
    { label: "Show my projects", icon: FolderOpen, action: "projects" },
    { label: "What tech do I use?", icon: Code2, action: "tech" },
    { label: "View my resume", icon: FileText, action: "resume" },
    { label: "Contact me", icon: Mail, action: "contact" },
];

const AIAssistant = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [messages, setMessages] = useState<Message[]>([]);
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Show widget after scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            }
        };

        window.addEventListener("scroll", handleScroll);
        // Also show after 3 seconds regardless
        const timer = setTimeout(() => setIsVisible(true), 3000);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(timer);
        };
    }, []);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping, isOpen]);

    const processResponse = (userText: string, actionOverride?: string) => {
        setIsTyping(true);

        // Simulate thinking time (random between 600ms and 1500ms)
        const delay = Math.random() * 900 + 600;

        setTimeout(() => {
            const aiData = getAIResponse(actionOverride || userText);

            const botMessage: Message = {
                id: Date.now() + 1,
                text: aiData.text,
                isBot: true,
            };

            setMessages(prev => [...prev, botMessage]);
            setIsTyping(false);

            if (aiData.action) {
                handleAction(aiData.action);
            }
        }, delay);
    };

    const handleAction = (action: string) => {
        setTimeout(() => {
            switch (action) {
                case "scroll-projects":
                    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" });
                    break;
                case "scroll-skills":
                    document.getElementById("skills")?.scrollIntoView({ behavior: "smooth", block: "start" });
                    break;
                case "scroll-contact":
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
                    break;
                case "open-resume":
                    window.open("/resume.pdf", "_blank");
                    break;
            }
        }, 500);
    };

    const handleQuickAction = (action: string) => {
        const label = quickActions.find(a => a.action === action)?.label || "";

        const userMessage: Message = {
            id: Date.now(),
            text: label,
            isBot: false,
        };

        setMessages(prev => [...prev, userMessage]);

        // Map quick actions to keywords for our AI logic
        let query = action;
        if (action === "tech") query = "skills stack";
        if (action === "projects") query = "show projects";
        if (action === "resume") query = "download resume";
        if (action === "contact") query = "contact email";

        processResponse(query);
    };

    const handleSend = () => {
        if (!inputValue.trim()) return;

        const userMessage: Message = {
            id: Date.now(),
            text: inputValue,
            isBot: false,
        };

        setMessages(prev => [...prev, userMessage]);
        const textToSend = inputValue;
        setInputValue("");

        processResponse(textToSend);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <AnimatePresence>
                {isOpen ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className="w-80 md:w-96 bg-zinc-900 rounded-2xl shadow-2xl overflow-hidden border border-yellow-500/20 flex flex-col max-h-[600px]"
                    >
                        {/* Header */}
                        <div className="p-4 bg-gradient-to-r from-yellow-500/10 to-amber-500/10 backdrop-blur-sm border-b border-yellow-500/10">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center shadow-lg">
                                        <Bot className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
                                            AI Assistant
                                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                        </h3>
                                        <p className="text-xs text-muted-foreground">
                                            Online | Portfolio Expert
                                        </p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 rounded-full hover:bg-black/5 transition-colors"
                                >
                                    <X className="w-5 h-5 text-muted-foreground" />
                                </button>
                            </div>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[300px] bg-black/20">
                            {messages.length === 0 && !isTyping && (
                                <div className="text-center py-8">
                                    <div className="w-16 h-16 bg-yellow-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Sparkles className="w-8 h-8 text-yellow-500" />
                                    </div>
                                    <p className="text-sm font-medium text-foreground">
                                        Hi! I'm Sushant's AI Assistant.
                                    </p>
                                    <p className="text-xs text-muted-foreground mt-1">
                                        Ask me about projects, skills, or experience!
                                    </p>
                                </div>
                            )}

                            {messages.map((msg) => (
                                <motion.div
                                    key={msg.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex ${msg.isBot ? "justify-start" : "justify-end"}`}
                                >
                                    <div className={`flex items-end gap-2 max-w-[85%] ${msg.isBot ? "flex-row" : "flex-row-reverse"}`}>
                                        <div className={`w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center ${msg.isBot ? "bg-yellow-900/50" : "bg-primary/10"
                                            }`}>
                                            {msg.isBot ? (
                                                <Bot className="w-3.5 h-3.5 text-yellow-400" />
                                            ) : (
                                                <User className="w-3.5 h-3.5 text-primary" />
                                            )}
                                        </div>
                                        <div
                                            className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${msg.isBot
                                                    ? "bg-zinc-800 text-white shadow-sm border border-zinc-700"
                                                    : "bg-primary text-primary-foreground shadow-md"
                                                } ${msg.isBot ? "rounded-tl-none" : "rounded-tr-none"}`}
                                        >
                                            {msg.text}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}

                            {isTyping && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex justify-start"
                                >
                                    <div className="flex items-end gap-2">
                                        <div className="w-6 h-6 rounded-full bg-yellow-900/50 flex items-center justify-center">
                                            <Bot className="w-3.5 h-3.5 text-yellow-400" />
                                        </div>
                                        <div className="bg-zinc-800 px-4 py-3 rounded-2xl rounded-tl-none shadow-sm border border-zinc-700 flex gap-1">
                                            <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
                                            <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
                                            <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-bounce" />
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Quick Actions & Input */}
                        <div className="bg-zinc-900 border-t border-white/10">
                            {messages.length < 2 && (
                                <div className="p-3 border-b border-border overflow-x-auto">
                                    <div className="flex gap-2 min-w-max">
                                        {quickActions.map((action) => (
                                            <button
                                                key={action.action}
                                                onClick={() => handleQuickAction(action.action)}
                                                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-muted-foreground bg-secondary/50 hover:bg-secondary hover:text-foreground rounded-full transition-colors border border-border"
                                            >
                                                <action.icon className="w-3 h-3" />
                                                {action.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="p-3">
                                <div className="flex gap-2 relative">
                                    <input
                                        type="text"
                                        value={inputValue}
                                        onChange={(e) => setInputValue(e.target.value)}
                                        onKeyPress={(e) => e.key === "Enter" && handleSend()}
                                        placeholder="Ask about projects, skills..."
                                        className="flex-1 pl-4 pr-12 py-2.5 text-sm bg-secondary/30 rounded-full border border-border focus:outline-none focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/50 transition-all placeholder:text-muted-foreground"
                                    />
                                    <button
                                        onClick={handleSend}
                                        disabled={!inputValue.trim() || isTyping}
                                        className="absolute right-1.5 top-1.5 p-1.5 bg-yellow-500 hover:bg-yellow-600 disabled:opacity-50 disabled:hover:bg-yellow-500 text-white rounded-full transition-all shadow-sm"
                                    >
                                        <Send className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ) : (
                    <motion.button
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsOpen(true)}
                        className="relative w-14 h-14 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full shadow-xl flex items-center justify-center group z-50"
                    >
                        <span className="absolute inset-0 rounded-full bg-yellow-400 animate-ping opacity-20" />
                        <span className="absolute inset-0 rounded-full bg-yellow-400 animate-pulse opacity-40" />
                        <MessageCircle className="w-7 h-7 text-white drop-shadow-md" />

                        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-popover text-popover-foreground text-xs font-medium rounded-xl opacity-0 group-hover:opacity-100 transition-all shadow-lg border border-border pointer-events-none whitespace-nowrap translate-x-2 group-hover:translate-x-0">
                            Chat with AI Assistant
                        </span>
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AIAssistant;
