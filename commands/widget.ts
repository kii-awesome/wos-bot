import { EmbedBuilder, SlashCommandBuilder } from "discord.js";
import type { Command } from "../models/Types";
import { widgetLevels } from "../models/Widget";

const widget: Command = {
    data: new SlashCommandBuilder()
        .setName('widget')
        .setDescription('widgets calculation')
        .addNumberOption((option) =>
            option
                .setName('from')
                .setDescription('from level. Example: 1 , 2 , 3')
                .setRequired(true)
        )
        .addNumberOption((option) =>
            option
                .setName('to')
                .setDescription('to level. Example: 4, 5 , 6')
                .setRequired(true)
        ) as SlashCommandBuilder,
    async execute(interaction) {
        await interaction.deferReply();

        const user = interaction.user.id;
        const from = interaction.options.getNumber('from', true);
        const to = interaction.options.getNumber('to', true);

        const start = widgetLevels.find((l) => l.level == from);
        const end = widgetLevels.find((l) => l.level == to);

        if (!start || !end) {
            await interaction.editReply({ content: 'Level not founds.' });
            return;
        }

        if (start > end) {
            await interaction.editReply({ content: 'The starting level must be smaller than the upgrade level.' });
            return;
        }

        const range = widgetLevels.slice(start.level, end.level)
        const entry = {
            widget: 0
        }

        for (const lvl of range) {
            entry.widget += lvl.widget
        }

        const embed = new EmbedBuilder()
            .setTitle('Upgrade Widget Hero')
            .setThumbnail('https://whiteoutdata.com/wp-content/uploads/2024/04/widget-whiteout-survival-300x253.webp')
            .setColor(0x3498db)
            .setDescription(`Hey <@${user}>, You want to upgrade Widgets from Level **${start.level}** to **${end.level}**.\n`)
            .setFields(
                { name: '**Items you need:**', value: '', inline: false },
                { name: 'Widgets', value: `${entry.widget}`, inline: true },
            )

        await interaction.editReply({ embeds: [embed] })
    }
}

export default widget;