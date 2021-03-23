email.init('jones.angie@gmail.com', 'password', 'smtp.gmail.com', 465, true, 9000);
var mail = email.getLastEmail(60, 'test me', 5000);
log.info(mail);