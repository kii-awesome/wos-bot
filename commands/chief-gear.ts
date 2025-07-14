import { SlashCommandBuilder, ChatInputCommandInteraction, EmbedBuilder, AutocompleteInteraction, } from 'discord.js';
import type { Command } from '../models/Types';
import { gearLevels } from '../models/Chiefgear';

const chiefGear: Command = {
    data: new SlashCommandBuilder()
        .setName('chief-gear')
        .setDescription('Calculate chief gear')
        .addNumberOption((option) =>
            option
                .setName('amount')
                .setDescription('the number of items you want to count')
                .setRequired(true)
                .setChoices(
                    { name: '1', value: 1 },
                    { name: '2', value: 2 },
                    { name: '3', value: 3 },
                    { name: '4', value: 4 },
                    { name: '5', value: 5 },
                    { name: '6', value: 6 }
                )
        )
        .addStringOption((option) =>
            option
                .setName('from')
                .setDescription('from level')
                .setRequired(true)
                .setAutocomplete(true)
        )
        .addStringOption((option) =>
            option
                .setName('to')
                .setDescription('to level')
                .setRequired(true)
                .setAutocomplete(true)
        )
        .addNumberOption((option) =>
            option
                .setName('hardened-alloy')
                .setDescription('Your Alloy')
                .setRequired(false)
                .setAutocomplete(false)
        )
        .addNumberOption((option) =>
            option
                .setName('polishing-polution')
                .setDescription('Your Polishing Solution')
                .setRequired(false)
                .setAutocomplete(false)
        )
        .addNumberOption((option) =>
            option
                .setName('design-plans')
                .setDescription('Your Design Plans')
                .setRequired(false)
                .setAutocomplete(false)
        )
        .addNumberOption((option) =>
            option
                .setName('lunar-amber')
                .setDescription('Your Lunar Amber')
                .setRequired(false)
                .setAutocomplete(false)
        ) as SlashCommandBuilder,

    async execute(interaction: ChatInputCommandInteraction) {
        await interaction.deferReply();

        const user = interaction.user;
        const amount = interaction.options.getNumber('amount', true);
        const from = interaction.options.getString('from', true);
        const to = interaction.options.getString('to', true);
        const currentAlloy = interaction.options.getNumber('hardened-alloy') ?? 0;
        const currentPolish = interaction.options.getNumber('polishing-polution') ?? 0;
        const currentDesign = interaction.options.getNumber('design-plans') ?? 0;
        const currentLunar = interaction.options.getNumber('lunar-amber') ?? 0;

        const start = gearLevels.find((l) => l.level === from);
        const end = gearLevels.find((l) => l.level === to);

        if (!start || !end) {
            await interaction.editReply({ content: 'Level not founds.' });
            return;
        }

        if (start.order > end.order) {
            await interaction.editReply({ content: 'The starting level must be smaller than the upgrade level.' });
            return;
        }

        const range = gearLevels.slice(start.order, end.order + 1);
        const entry = {
            hardenedAlloy: 0,
            polishingSolution: 0,
            designPlans: 0,
            lunarAmber: 0,
        };

        for (const lvl of range) {
            entry.hardenedAlloy += lvl.hardenedAlloy;
            entry.polishingSolution += lvl.polishingSolution;
            entry.designPlans += lvl.designPlans;
            entry.lunarAmber += lvl.lunarAmber;
        }

        // final
        entry.hardenedAlloy = Math.max(entry.hardenedAlloy - currentAlloy, 0) * amount;
        entry.polishingSolution = Math.max(entry.polishingSolution - currentPolish, 0) * amount;
        entry.designPlans = Math.max(entry.designPlans - currentDesign, 0) * amount;
        entry.lunarAmber = Math.max(entry.lunarAmber - currentLunar, 0) * amount;

        const embed = new EmbedBuilder()
            .setTitle(`Upgrade Gear Chief`)
            .setThumbnail('https://whiteoutdata.com/wp-content/uploads/2024/04/chief-gear-whiteout-survival-300x255.webp')
            .setColor(0x3498db)

        let description = `Hey <@${user.id}>, You want to upgrade **${amount}** Chief Gear from Tier **${start.tier.toUpperCase()}** ${'⭐'.repeat(start.stars)} to **${end.tier.toUpperCase()}** ${'⭐'.repeat(end.stars)}.\n`

        embed.setDescription(description);

        let fields = [];

        if (currentAlloy > 0 || currentPolish > 0 || currentDesign > 0 || currentLunar > 0) {
            fields.push(
                { name: '**You have:**', value: '', inline: false },
                { name: '- Hardened Alloy', value: currentAlloy.toLocaleString(), inline: true },
                { name: '- Polishing Solution', value: currentPolish.toLocaleString(), inline: true },
                { name: '- Design Plans', value: currentDesign.toLocaleString(), inline: true },
                { name: '- Lunar Amber', value: currentLunar.toLocaleString(), inline: true },
                { name: '', value: '\u200b', inline: false },
            );
        }

        fields.push(
            { name: '**Items you need:**', value: '', inline: false },
            { name: '- Hardened Alloy', value: entry.hardenedAlloy.toLocaleString(), inline: true },
            { name: '- Polishing Solution', value: entry.polishingSolution.toLocaleString(), inline: true },
            { name: '- Design Plans', value: entry.designPlans.toLocaleString(), inline: true },
            { name: '- Lunar Amber', value: entry.lunarAmber.toLocaleString(), inline: true },
            { name: '', value: '\u200b', inline: false }
        );

        embed.setFooter({
            text: '~King Jawir',
        });

        embed.addFields(fields);

        await interaction.editReply({ embeds: [embed] });
    },

    autocomplete: async (interaction: AutocompleteInteraction) => {
        const focused = interaction.options.getFocused();
        const suggestions = gearLevels
            .filter((lvl) => lvl.level.includes(focused.toLowerCase()))
            .map((lvl) => ({ name: lvl.tier.toUpperCase() + '⭐'.repeat(lvl.stars), value: lvl.level }));

        await interaction.respond(suggestions.slice(0, 25));
    }

};

export default chiefGear;
