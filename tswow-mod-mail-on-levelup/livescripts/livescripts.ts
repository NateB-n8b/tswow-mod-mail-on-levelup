//Register the path here
import { RegisterPlayerLevelUpMailEvents } from "./mail/mail-on-levelup-every5";

// Register your events here!
export function Main(events: TSEvents) {
    RegisterPlayerLevelUpMailEvents(events);
}
