<?php
if($_POST["message"]) {
    mail("icosentino@directo.com.ar", "Form to email message", $_POST["message"], "From: an@email.address");
}
?>