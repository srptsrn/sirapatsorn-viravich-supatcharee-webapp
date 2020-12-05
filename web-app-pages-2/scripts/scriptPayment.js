function buttonConfirm() {

    var userReplyConfirm;
    var userReplyCancel;
    var comfirm;
    // alert(comfirm);

    // // if (userReply == true) {
    // //     alert("ยืนยันข้อมูล")
    // // }
    // if (comfirm("กรุณาตรวจสอบข้อมูลให้ถูกต้อง หากกดยืนยันแล้วจะไม่สามารถเปลี่ยนแปลงได้") == true) {
    //     userReply = "ยืนยัน"
    // } else {
    //     userReply = "ยกเลิก"
    // }
    // alert(userReply);

    if (confirm("กรุณาตรวจสอบข้อมูลให้ถูกต้อง หากกดยืนยันแล้วจะไม่สามารถเปลี่ยนแปลงได้")) {
        alert(userReplyConfirm = "ยืนยัน");
    } else {
        alert(userReplyCancel = "ยกเลิก");
    }

}