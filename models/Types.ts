import { AutocompleteInteraction, ChatInputCommandInteraction, Client, Collection, SlashCommandBuilder, type ClientEvents } from "discord.js";

export interface Command {
  data: SlashCommandBuilder;
  execute: (interacation: ChatInputCommandInteraction) => Promise<void>;
  autocomplete?: (interaction: AutocompleteInteraction) => Promise<void>;
}

export interface Event<K extends keyof ClientEvents> {
  name: K;
  once?: boolean;
  execute: (...args: ClientEvents[K]) => void | Promise<void>;
}

export interface ExtendedClient extends Client {
  commands: Collection<string, Command>;
}