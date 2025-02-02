const ConversationMessage = require("../Models/ConversationMessageModel");
const Conversation = require("../Models/ConversationModel");


exports. CreateMessage = async (req, res) => {
    try {
        let {  token_user, message } = req.body;

        if (!token_user){
            return res.status(404).json({ error: "token_user Required" });
        }else if(!message){
            return res.status(404).json({ error: "message Required" });
        }
        let conversation;

           

            conversation = new Conversation({
                
                date_start: new Date(),
                status: "active",
                count_user: [token_user]
            });

            await conversation.save();
        

            if (!conversation.count_user.includes(token_user)) {
                conversation.count_user.push(token_user);
            }

            await conversation.save();
        


        
        const newMessage = new ConversationMessage({
            token_conversation:conversation.token_conversation,
            token_user:token_user,
            message:message,
            is_read: "no",
           
        });

        await newMessage.save();

        return res.status(201).json({ success: true, conversation, message: newMessage });
    } catch (error) {
        console.error("Error creating message:", error);
        return res.status(500).json({ error: "Erro in  Createing the message" });
    }
};


