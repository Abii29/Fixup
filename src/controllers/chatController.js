const Chat = require('../models/Chat');

// Send a message
const sendMessage = async (req, res) => {
    try {
        const { receiverId, message } = req.body;
        const senderId = req.user.userId;  // Extract sender ID from token

        const chat = new Chat({ senderId, receiverId, message });
        await chat.save();

        res.status(201).json({ message: "Message sent successfully", chat });
    } catch (error) {
        res.status(500).json({ message: "Error sending message", error: error.message });
    }
};

// Get chat history between two users
const getChatHistory = async (req, res) => {
    try {
        const { userId1, userId2 } = req.params;

        const chats = await Chat.find({
            $or: [
                { senderId: userId1, receiverId: userId2 },
                { senderId: userId2, receiverId: userId1 }
            ]
        }).sort({ timestamp: 1 });

        res.status(200).json(chats);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving chat history", error: error.message });
    }
};

module.exports = { sendMessage, getChatHistory };
