class EmailNotification {
  constructor(notificationId, createdTime, content, receiver) {
    this.notificationId = notificationId;
    this.createdTime = createdTime;
    this.content = content;
    this.receiver = receiver;
  }
  send() {
    console.log(`Notification has been sent to ${this.receiver}`);
  }
}

class SMSNotification {
    constructor(notificationId,createdTime,content,phoneNumber){
        this.notificationId = notificationId;
        this.createdTime = createdTime;
        this.content = content;
        this.phoneNumber = phoneNumber;
    }
    send(){
        console.log(`Notification has been sent to ${this.phoneNumber}`)
    }
}

let email1 = new EmailNotification("01",`${new Date()}`,"HI","PARN");
email1.send();

let sms1 = new SMSNotification("01",`${new Date()}`,"HI","0869975475")
sms1.send();