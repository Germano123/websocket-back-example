import { MessageBody, SubscribeMessage, WebSocketGateway } from "@nestjs/websockets";

@WebSocketGateway()
export class EventsGateway {

    @SubscribeMessage('chat')
    onMesssage(@MessageBody() body: any): string {
        console.log(body);
        
        return body;
    }

}
