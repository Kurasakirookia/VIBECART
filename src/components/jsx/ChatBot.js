import React, { useState } from 'react';
import "../css/Chatbot.css";

const ChatBot = () => {
    const [messages, setMessages] = useState([]); // Holds the conversation messages
    const [input, setInput] = useState(''); // Tracks the user's input

    const sendMessage = async () => {
        if (input.trim() === '') return; // Don't send empty messages

        const userMessage = { text: input, sender: 'user' };
        setMessages([...messages, userMessage]); // Add the user's message to the chat
        setInput(''); // Clear the input field

        try {
            const response = await fetch(
                'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyCXo2MrhllSpOZ_3-XujVDnwvdQbWT2UE8',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        contents: [
                            {
                                parts: [
                                    {
                                        text: input, // User's input as the message
                                    },
                                ],
                            },
                        ],
                    }),
                }
            );

            const data = await response.json(); // Parse the JSON response

            // Extract the bot's reply from the API response
            if (data.contents && data.contents[0]?.parts[0]?.text) {
                const botMessage = {
                    text: data.contents[0].parts[0].text,
                    sender: 'bot',
                };
                setMessages((prevMessages) => [...prevMessages, botMessage]); // Add the bot's message to the chat
            } else {
                setMessages((prevMessages) => [
                    ...prevMessages,
                    { text: 'Sorry, I didn’t understand that.', sender: 'bot' },
                ]);
            }
        } catch (error) {
            console.error('Error:', error);
            setMessages((prevMessages) => [
                ...prevMessages,
                { text: 'An error occurred while connecting to the server.', sender: 'bot' },
            ]);
        }
    };

    return (
        // <div className='chatbot_container' style={{ border: '1px solid black', padding: '10px', width: '300px' }}>
        //     <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
        //         {messages.map((msg, idx) => (
        //             <div key={idx} style={{ textAlign: msg.sender === 'user' ? 'right' : 'left' }}>
        //                 <p>{msg.text}</p>
        //             </div>
        //         ))}
        //     </div>
        //     <input
        //         type="text"
        //         value={input}
        //         onChange={(e) => setInput(e.target.value)}
        //         placeholder="Type a message..."
        //     />
        //     <button onClick={sendMessage}>Send</button>
        // </div>
        <div className="chat_bot_container" style={{ position: "absolute", left: "90%", top: "60%" }}>
        <div
          className="msgbox"
          style={{
            maxHeight: "300px",
            overflowY: "auto",
          }}
        >
          {messages.map((msg, idx) => (
            <div
              key={idx}
              style={{ textAlign: msg.sender === "user" ? "right" : "left" }}
            >
              <p className="">{msg.text}</p>
            </div>
          ))}
        </div >
    <div className='input'>
        <input
          className='input_text'
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
    </div>
      </div>
    );
};

export default ChatBot;
