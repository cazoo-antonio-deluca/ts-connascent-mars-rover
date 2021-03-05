import {IMessageReceivedBus} from "./IMessageReceivedBus";
import {ISendNotificationBus} from "./ISendNotificationBus";
import {IProcessMessages} from "../IProcessMessages";
import {ISendNotifications} from "../ISendNotifications";

export class ServiceBus implements IMessageReceivedBus, ISendNotificationBus {

    private marsRoverController!: IProcessMessages;
    private marsRoverSender!: ISendNotifications;

    constructor(marsRoverController: IProcessMessages, marsRoverSender: ISendNotifications) {
        this.marsRoverController = marsRoverController;
        this.marsRoverSender = marsRoverSender;
    }

    NotifyMessageReceived(rebuiltMessage: string): void {
        this.marsRoverController.process(rebuiltMessage);
    }

    NotifyError(): void {
        this.marsRoverSender.sendError();
    }

    NotifyExecution(finalState: string): void {
        this.marsRoverSender.send(finalState);
    }



}