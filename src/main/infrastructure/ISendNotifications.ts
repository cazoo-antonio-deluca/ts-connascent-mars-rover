export interface ISendNotifications {
    sendError(): void;
    send(notification: string): void;
}