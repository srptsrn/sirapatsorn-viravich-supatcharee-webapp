function buttonConfirm() {

    var userReplyConfirm;
    var userReplyCancel;
    var comfirm;

    if (confirm("กรุณาตรวจสอบข้อมูลให้ถูกต้อง หากกดยืนยันแล้วจะไม่สามารถเปลี่ยนแปลงได้")) {
        alert(userReplyConfirm = "ยืนยัน");
    } else {
        alert(userReplyCancel = "ยกเลิก");
    }

}