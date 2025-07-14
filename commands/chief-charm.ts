import { SlashCommandBuilder, EmbedBuilder, AutocompleteInteraction, } from 'discord.js';
import type { Command } from '../models/Types';
import { charmLevels } from '../models/Chiefcharm';

const chiefCharm: Command = {
    data: new SlashCommandBuilder()
        .setName('chief-charm')
        .setDescription('Calculate chief charm')
        .addNumberOption((option) =>
            option
                .setName('amount')
                .setDescription('the number of items you want to count')
                .setMinValue(1)
                .setRequired(true)
        )
        .addNumberOption((option) =>
            option
                .setName('from')
                .setDescription('from level')
                .setRequired(true)
                .setAutocomplete(true)
        )
        .addNumberOption((option) =>
            option
                .setName('to')
                .setDescription('to level')
                .setRequired(true)
                .setAutocomplete(true)
        )
        .addNumberOption((option) =>
            option
                .setName('charm-guides')
                .setDescription('Your Charm Guides')
                .setRequired(false)
                .setAutocomplete(false)
        )
        .addNumberOption((option) =>
            option
                .setName('charm-design')
                .setDescription('Your Charm Design')
                .setRequired(false)
                .setAutocomplete(false)
        )
        .addNumberOption((option) =>
            option
                .setName('jewel-secrets')
                .setDescription('Your Jewel Secrets')
                .setRequired(false)
                .setAutocomplete(false)
        ) as SlashCommandBuilder,
    async execute(interaction) {
        await interaction.deferReply();

        const user = interaction.user;
        const amount = interaction.options.getNumber('amount', true);
        const from = interaction.options.getNumber('from', true);
        const to = interaction.options.getNumber('to', true);
        const currentGuides = interaction.options.getNumber('charm-guides') ?? 0;
        const currentDesign = interaction.options.getNumber('charm-design') ?? 0;
        const currentJewel = interaction.options.getNumber('jewel-secrets') ?? 0;

        const start = charmLevels.find((l) => l.level == from);
        const end = charmLevels.find((l) => l.level == to);

        if (!start || !end) {
            await interaction.editReply({ content: 'Level not founds.' });
            return;
        }

        if (start > end) {
            await interaction.editReply({ content: 'The starting level must be smaller than the upgrade level.' });
            return;
        }

        const range = charmLevels.slice(start.level, end.level);
        const entry = {
            charmGuides: 0,
            charmDesign: 0,
            jewelScrets: 0,
        }

        for (const lvl of range) {
            entry.charmGuides += lvl.charmDesign;
            entry.charmDesign += lvl.charmDesign;
            entry.jewelScrets += lvl.jewelScrets;
        }

        // final
        entry.charmGuides = Math.max(entry.charmGuides - currentGuides, 0) * amount;
        entry.charmDesign = Math.max(entry.charmDesign - currentDesign, 0) * amount;
        entry.jewelScrets = Math.max(entry.jewelScrets - currentJewel, 0) * amount;

        const embed = new EmbedBuilder()
            .setTitle('Upgrade Chief Charms')
            .setThumbnail('https://whiteoutdata.com/wp-content/uploads/2024/05/chief-charms-level-16-infantry.webp')
            .setColor(0x3498db)

        let description = `Hey <@${user.id}>, You want to upgrade **${amount}** Chief Charm from Level **${start.level}** to **${end.level}**.\n`;

        embed.setDescription(description);

        let fields = [];

        if (currentGuides > 0 || currentDesign > 0 || currentJewel > 0) {
            fields.push(
                { name: '**You have:**', value: '', inline: false },
                { name: 'Charm Guides', value: `${currentGuides}`, inline: true },
                { name: 'Charm Design', value: `${currentDesign}`, inline: true },
                { name: 'Jewel Secrets', value: `${currentJewel}`, inline: true },
                { name: '', value: '\u200b', inline: false }
            );
        }

        fields.push(
            { name: '**Items you need:**', value: '', inline: false },
            { name: 'Charm Guides', value: `${entry.charmGuides}`, inline: true },
            { name: 'Charm Design', value: `${entry.charmDesign}`, inline: true },
            { name: 'Jewel Secrets', value: `${entry.jewelScrets}`, inline: true },
            { name: '', value: '\u200b', inline: false }
        );

        embed.addFields(fields);

        await interaction.editReply({ embeds: [embed] });
    },

    autocomplete: async (interaction: AutocompleteInteraction) => {
        const suggestions = charmLevels
            .filter((lvl) => lvl.level)
            .map((lvl) => ({ name: `${lvl.level}`, value: lvl.level }));

        await interaction.respond(suggestions.slice(0, 25));
    }
}

export default chiefCharm;