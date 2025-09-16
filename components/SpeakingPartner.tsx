import React, { useState, useEffect, useRef } from 'react';
import { createChat } from '../services/geminiService';
import type { ChatMessage } from '../types';
import type { Chat, GenerateContentResponse } from '@google/genai';

const SpeakingPartner: React.FC = () => {
  const [chat, setChat] = useState<Chat | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const isMounted = useRef(true);


  useEffect(() => {
    isMounted.current = true;
    try {
      const newChat = createChat();
      setChat(newChat);
      setMessages([{ role: 'model', text: "Hello! I'm Sparky, your friendly English tutor. What would you like to talk about today? 😊" }]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not initialize AI chat partner.');
    }
    return () => { isMounted.current = false; };
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading || !chat) return;

    const userMessage: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setError(null);

    try {
      let response: GenerateContentResponse;
      if (chat.sendMessageStream) {
        const stream = await chat.sendMessageStream({ message: userMessage.text });
        let fullResponseText = '';
        let modelMessage: ChatMessage = { role: 'model', text: '' };
        setMessages(prev => [...prev, modelMessage]);

        for await (const chunk of stream) {
            if (!isMounted.current) return;
            fullResponseText += chunk.text;
            setMessages(prev => {
                const newMessages = [...prev];
                newMessages[newMessages.length - 1] = { role: 'model', text: fullResponseText + '...' };
                return newMessages;
            });
        }
        setMessages(prev => {
            const newMessages = [...prev];
            newMessages[newMessages.length - 1] = { role: 'model', text: fullResponseText };
            return newMessages;
        });

      } else { // Fallback for non-streaming
        response = await chat.sendMessage({ message: userMessage.text });
        const modelMessage: ChatMessage = { role: 'model', text: response.text };
        setMessages(prev => [...prev, modelMessage]);
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred.';
      setError(errorMessage);
      setMessages(prev => [...prev, { role: 'model', text: `Sorry, I encountered an error: ${errorMessage}` }]);
    } finally {
        if (isMounted.current) {
            setIsLoading(false);
        }
    }
  };

  return (
    <div className="h-full flex flex-col max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 animate-fade-in">
        <div className="text-center mb-6">
            <i className="fa-solid fa-comments text-5xl text-blue-500 mb-4"></i>
            <h1 className="text-4xl font-bold">Speaking Partner</h1>
            <p className="mt-2 text-lg text-slate-600 dark:text-slate-400">Practice your English with Sparky the AI tutor!</p>
        </div>
        <div className="card-glass flex-grow flex flex-col p-0">
            <div className="flex-grow p-6 overflow-y-auto space-y-4">
                {messages.map((msg, index) => (
                    <div key={index} className={`flex items-end gap-3 ${msg.role === 'user' ? 'justify-end' : ''}`}>
                        {msg.role === 'model' && <i className="fa-solid fa-robot text-2xl text-blue-500 mb-2"></i>}
                        <div className={`max-w-md lg:max-w-lg p-3 rounded-2xl ${msg.role === 'user' ? 'bg-blue-500 text-white rounded-br-none' : 'bg-slate-200 dark:bg-slate-700 rounded-bl-none'}`}>
                            <p className="text-sm leading-relaxed">{msg.text}</p>
                        </div>
                    </div>
                ))}
                {isLoading && messages[messages.length-1].role === 'user' && (
                     <div className="flex items-end gap-3">
                        <i className="fa-solid fa-robot text-2xl text-blue-500 mb-2"></i>
                        <div className="max-w-md lg:max-w-lg p-3 rounded-2xl bg-slate-200 dark:bg-slate-700 rounded-bl-none">
                            <p className="text-sm leading-relaxed"><i className="fa-solid fa-spinner animate-spin"></i></p>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>
            {error && <div className="p-4 border-t dark:border-slate-700 text-center text-red-500">{error}</div>}
            <div className="p-4 border-t border-slate-200 dark:border-slate-700">
                <form onSubmit={handleSend} className="flex items-center gap-4">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="form-input flex-grow"
                        placeholder="Type your message..."
                        disabled={isLoading || !chat}
                    />
                    <button type="submit" className="btn btn-primary btn-icon" disabled={isLoading || !input.trim() || !chat}>
                        <i className="fa-solid fa-paper-plane"></i>
                    </button>
                </form>
            </div>
        </div>
    </div>
  );
};

export default SpeakingPartner;
