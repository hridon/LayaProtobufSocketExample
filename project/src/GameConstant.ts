export default class GameConstant{
    /**
     * Proto消息类型
     */
    public static MESSAGEPROTOTYPE = {
        HEARTBEAT:{
            type:'HeartBeat',
            id:0,
            action:'-1'
        },
        REQ_LOGIN:{
            type:'Req_Login',
            id:0x0401,
            action:'userAction'
        },
        RESP_LOGIN:{
            type:'Resp_Login',
            id:-0x0401,
            action:'-1'
        },
        REQ_USEREXIT:{
            type:'Req_UserExit',
            id:0x0402,
            action:'-1'
        },
        RESP_USEREXIT:{
            type:'Resp_UserExit',
            id:-0x0402,
            action:'-1'
        },
        REQ_USERINFO :{
            type:'Req_UserInfo',
            id:0x0403,
            action:'userAction'
        },
        RESP_USERINFO:{
            type:'Resp_UserInfo',
            id:-0x0403,
            action:'-1'
        },
        REQ_ROOMCONFIG:{
            type:'Req_RoomConfig',
            id:0x0404,
            action:'roomAction'
        },
        RESP_ROOMCONFIG:{
            type:'Resp_RoomConfig',
            id:-0x0404,
            action:'-1'
        },
        REQ_JOINROOM:{
            type:'Req_JoinRoom',
            id:0x0405,
            action:'roomAction'
        },
        RESP_JOINROOM:{
            type:'Resp_JoinRoom',
            id:-0x0405,
            action:'-1'
        },
        REQ_LEFTROOM:{
            type:'Req_LeftRoom',
            id:0x0801,
            action:'-1'
        },
        RESP_LEFTROOM:{
            type:'Resp_LeftRoom',
            id:-0x0801,
            action:'-1'
        },
        RESP_FLUSHFISH:{
            type:'Resp_flushFish',
            id:-0x0802,
            action:'-1'
        }
    }
    /**
     * Protobuf 解析模版
     */
    public static PROTOBUFTEMPLATE = [
        {
            type:'constNumber',
            write:'writeInt32',
            read:'getInt32',
            constNumber:0xabef0101,
            key:'sign'
        },
        {
            type:'keyLength',
            write:'writeInt32',
            read:'getInt32',
            key:'data'
        },
        {
            type:'keyInt',
            write:'writeInt32',
            read:'getInt32',
            key:'id'
        },
        {
            type:'keyLength',
            write:'writeInt32',
            read:'getInt32',
            key:'action'
        },
        {
            type:'key',
            write:'writeUTFBytes',
            read:'getUTFBytes',
            key:'action'
        },
        {
            type:'keyBuffer',
            write:'writeArrayBuffer',
            read:'getUint8Array',
            key:'data'
        }
    ]
    /**
     * Protobuf消息Id对应
     */
    public static PROTOBUFMESSAGEIDLIST = {}
}