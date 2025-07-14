import { Events, Message, AttachmentBuilder } from 'discord.js';
import { readdirSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  name: Events.MessageCreate,
  async execute(message: Message) {
    if (message.author.bot) return;

    if (message.author.id == "934015758785212436" && message.content.toLowerCase().includes('pap')) {
      const folderPath = path.join(__dirname, '../assets');
      console.log('📂 Looking for images:', folderPath);

      let files: string[];
      try {
        files = readdirSync(folderPath).filter(file =>
          /\.(png|jpe?g|gif)$/i.test(file)
        );
      } catch (err) {
        console.error(err);
        await message.reply('🤫');
        return;
      }

      if (files.length === 0) {
        await message.reply('🤫');
        return;
      }

      const randomFile = files[Math.floor(Math.random() * files.length)];
      const filePath = path.join(folderPath, randomFile);
      const attachment = new AttachmentBuilder(filePath);

      await message.reply({ files: [attachment] });
    }
  }
};
