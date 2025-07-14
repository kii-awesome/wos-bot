import { SlashCommandBuilder } from "discord.js";
import type { Command } from "../models/Types";

const tes: Command = {
    data: new SlashCommandBuilder()
        .setName("slash-test")
        .setDescription("test commands"),
    async execute(intercation) {
        await intercation.reply("tes tes!");
    },
};

export default tes;