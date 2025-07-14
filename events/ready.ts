import { Events } from "discord.js";
import type { Event } from "../models/Types";

const event: Event<'ready'> = {
    name: Events.ClientReady,
    once: true,
    execute(client) {
        console.log(`Ready! logged as ${client.user.tag}`)
    }
}

export default event;