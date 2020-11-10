import { Realtime } from 'ably';
//Ably API KEY
const ABLY_API_KEY = "KwcY4Q.brGwSg:KW5zCw6784CDXTFX"
export default function initAbly ( name ){
    ///https://www.ably.io/documentation/core-features/authentication
console.log("changeeeeeee")
    const ablyObj = new Realtime({ key: ABLY_API_KEY, clientId: name });
    let channel;
    if (ablyObj) {
      channel = ablyObj?.channels.get('general');
      channel.presence.enterClient(ablyObj?.auth.clientId);
    }
    console.log('INSTANCE-->',ablyObj);
    return ablyObj;
}