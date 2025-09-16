import React, { useState, useEffect, useRef } from 'react';
import type { Chat } from '@google/genai';
import { createChat } from '../services/geminiService';
import type { ChatMessage } from '../types';

const SpeakingPartner: React.FC<{ language: 'en' | 'vi'; translations: any; }> = ({ language, translations }) => {
    const [chat, setChat] = useState<Chat | null>(null);
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [userInput, setUserInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const chatEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const initChat = async () => {
            const newChat = createChat();
            setChat(newChat);
            setIsLoading(true);
            try {
                const response = await newChat.sendMessage({ message: "Hello! What would you like to talk about today?" });
                setMessages([{ role: 'model', text: response.text }]);
            } catch (error) {
                console.error("Failed to start chat:", error);
                setMessages([{ role: 'model', text: "Sorry, I'm having trouble starting our conversation. Please try refreshing the page." }]);
            } finally {
                setIsLoading(false);
            }
        };
        initChat();
    }, []);
    
    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!userInput.trim() || !chat || isLoading) return;

        const userMessage: ChatMessage = { role: 'user', text: userInput };
        setMessages(prev => [...prev, userMessage]);
        setUserInput('');
        setIsLoading(true);

        try {
            const stream = await chat.sendMessageStream({ message: userInput });
            let modelResponse = '';
            setMessages(prev => [...prev, { role: 'model', text: '' }]); // Add empty model message

            for await (const chunk of stream) {
                modelResponse += chunk.text;
                setMessages(prev => {
                    const newMessages = [...prev];
                    newMessages[newMessages.length - 1] = { role: 'model', text: modelResponse + '...' };
                    return newMessages;
                });
            }
             setMessages(prev => {
                    const newMessages = [...prev];
                    newMessages[newMessages.length - 1] = { role: 'model', text: modelResponse };
                    return newMessages;
                });
        } catch (error) {
            console.error("Error sending message:", error);
            setMessages(prev => [...prev, { role: 'model', text: "I'm sorry, I encountered an error. Could you please repeat that?" }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto h-full flex flex-col animate-fade-in p-4 sm:p-0 py-6">
            <div className="text-center mb-6">
                 <i className="fa-solid fa-comments text-4xl text-emerald-500 mb-3"></i>
                <h1 className="text-3xl font-bold">AI Speaking Partner</h1>
                <p className="text-slate-500 dark:text-slate-400 mt-2">Practice your English conversation with Sparky, your friendly AI tutor!</p>
            </div>

            <div className="card-glass flex-grow flex flex-col overflow-hidden">
                <div className="flex-1 p-6 space-y-4 overflow-y-auto custom-scrollbar">
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex items-start gap-3 ${msg.role === 'user' ? 'justify-end' : ''}`}>
                            {msg.role === 'model' && (
                                <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-500 flex-center flex-shrink-0">
                                    <i className="fa-solid fa-robot"></i>
                                </div>
                            )}
                             <div className={`max-w-xs md:max-w-md px-4 py-2 rounded-2xl ${
                                msg.role === 'user' 
                                ? 'bg-blue-600 text-white rounded-br-lg' 
                                : 'bg-slate-100 dark:bg-slate-700 rounded-bl-lg'
                             }`}>
                                <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                            </div>
                        </div>
                    ))}
                     {isLoading && messages.length > 0 && messages[messages.length-1].role === 'user' &&(
                        <div className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-500 flex-center flex-shrink-0">
                               <i className="fa-solid fa-robot"></i>
                            </div>
                            <div className="px-4 py-3 bg-slate-100 dark:bg-slate-700 rounded-2xl rounded-bl-lg">
                                <div className="flex items-center gap-2">
                                    <span className="h-2 w-2 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                    <span className="h-2 w-2 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                    <span className="h-2 w-2 bg-slate-400 rounded-full animate-bounce"></span>
                                </div>
                            </div>
                        </div>
                    )}
                    <div ref={chatEndRef} />
                </div>
                
                <form onSubmit={handleSendMessage} className="p-4 border-t border-slate-200/50 dark:border-slate-700/50">
                    <div className="flex items-center gap-2">
                        <input
                            type="text" value={userInput} onChange={(e) => setUserInput(e.target.value)}
                            placeholder="Type your message..."
                            className="form-input !rounded-full"
                            disabled={isLoading}
                        />
                        <button type="submit" disabled={isLoading || !userInput.trim()}
                            className="w-10 h-10 flex-shrink-0 btn btn-primary !rounded-full">
                            <i className="fa-solid fa-paper-plane"></i>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SpeakingPartner;
