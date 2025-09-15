
import React, { useState, useEffect, useRef, useCallback } from 'react';
import type { Chat } from '../types';
import { createChat } from '../services/geminiService';
import type { ChatMessage } from '../types';

const SpeakingPartner: React.FC = () => {
    const [chat, setChat] = useState<Chat | null>(null);
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [userInput, setUserInput] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const initializeChat = async () => {
            const initialChat = await createChat();
            setChat(initialChat);
            setMessages([{ role: 'model', text: "Hi there! I'm Sparky, your AI speaking partner. Let's chat about anything you like! What's on your mind today? 😊" }]);
        };
        initializeChat();
    }, []);

    const scrollToBottom = useCallback(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, []);

    useEffect(() => {
        scrollToBottom();
    }, [messages, scrollToBottom]);

    const handleSend = useCallback(async () => {
        if (!userInput.trim() || !chat || isLoading) return;

        const newUserMessage: ChatMessage = { role: 'user', text: userInput };
        setMessages(prev => [...prev, newUserMessage]);
        setUserInput('');
        setIsLoading(true);

        try {
            const result = await chat.sendMessageStream({ message: userInput });
            const response = result.response.text();
            setMessages(prev => [...prev, { role: 'model', text: response }]);
        } catch (error) {
            console.error('Error sending message:', error);
            setMessages(prev => [...prev, { role: 'model', text: "I'm sorry, I encountered an error. Could you try again?" }]);
        } finally {
            setIsLoading(false);
        }
    }, [chat, userInput, isLoading]);
    
    const MessageBubble: React.FC<{ message: ChatMessage }> = ({ message }) => {
        const isUser = message.role === 'user';
        return (
            <div className={`flex items-end gap-2 ${isUser ? 'justify-end' : 'justify-start'}`}>
                {!isUser && <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-lg flex-shrink-0"><i className="fa-solid fa-robot"></i></div>}
                <div className={`max-w-md px-4 py-3 rounded-2xl ${isUser ? 'bg-blue-600 text-white rounded-br-none' : 'bg-white text-gray-800 rounded-bl-none shadow-sm'}`}>
                    <p>{message.text}</p>
                </div>
            </div>
        );
    };

    return (
        <div className="max-w-3xl mx-auto h-full flex flex-col">
            <div className="text-center mb-6">
                <h2 className="text-4xl font-extrabold text-gray-800">AI Speaking Partner</h2>
                <p className="text-gray-500 mt-2">Practice your English conversation with Sparky, your friendly AI tutor!</p>
            </div>

            <div className="flex-1 bg-gray-100 rounded-2xl p-6 overflow-y-auto flex flex-col gap-4">
                {messages.map((msg, index) => <MessageBubble key={index} message={msg} />)}
                {isLoading && messages[messages.length-1].role === 'user' && (
                     <div className="flex items-end gap-2 justify-start">
                        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-lg flex-shrink-0"><i className="fa-solid fa-robot"></i></div>
                        <div className="px-4 py-3 rounded-2xl bg-white text-gray-800 rounded-bl-none shadow-sm">
                           <div className="flex gap-1.5">
                               <span className="h-2 w-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                               <span className="h-2 w-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                               <span className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"></span>
                           </div>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            <div className="mt-6">
                <div className="flex gap-4 items-center bg-white p-2 rounded-xl shadow-lg">
                    <input
                        type="text"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="Type your message..."
                        className="flex-1 bg-transparent p-2 outline-none border-none"
                        disabled={isLoading}
                    />
                    <button className="p-3 w-20 h-12 bg-gray-200 rounded-lg text-gray-600 hover:bg-gray-300 transition-colors">
                        <i className="fa-solid fa-microphone"></i>
                    </button>
                    <button onClick={handleSend} disabled={isLoading || !userInput.trim()} className="p-3 w-20 h-12 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-300">
                        <i className="fa-solid fa-paper-plane"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SpeakingPartner;
