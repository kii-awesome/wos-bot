import { Events, Message } from 'discord.js';


export default {
    name: Events.MessageCreate,
    async execute(message: Message) {
        if (message.author.bot) return;

        if (message.content.toLowerCase().includes('test')) {
            await message.reply('Kii Ganteng');
        }
    }
};
