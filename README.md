# Web Application for Magen David Adom Spokesman Department (Angular 9 & Nodejs)

Developing web application for Magen David Adom - Spokesman Department,
that need to publish an accurate report, as fast as possible to the press.<br>
once message received by MDA Call Center, it will appear automatically  inside this web application - panel editor.



This web app enables the end user to get real time reports from the Israeli national emergency services, By offering to edit & use pre-made text pattern and title that fits with the relevant content entered by the user, all by fast and easy UI.
The messages can then be forwarded to the leading newsgroups, by WhatsApp and / or by mail.
<p align="center">
  <img width="260" src="https://github.com/MaorBachar/MDA-web-app-node.js-angular-9/blob/master/Web/src/assets/images/1.jpeg">
    <img width="260" src="https://github.com/MaorBachar/MDA-web-app-node.js-angular-9/blob/master/Web/src/assets/images/2.jpeg">
</p>


## Panel Editor:
once message received by MDA Call Center, it will appear automatically inside the text area editor.

### -pre-made text pattern:
by clicking on buttons below the text area it will replace automatically text to fit relevant content.
for example: "מד"א מוקד ארצי" will replace to "דוברות מד"א" or "דובר מד"א זכי הלר".

### -share to Email or Whatsapp:
by clicking on "send to email", the application will offer to the editor subject.
<br>
by clicking on "send to whatsapp", the application able to style your text, for example - adding bold.
<br>
<br>
## Archive system:
every message that received stored in database <b>(MongoDB)</b>, there is an option to merge up to 2 messages and by one click it will redirect the user to the editor.
<br>
<br>
## Auto-save message safety system:
this system checks if the user trying to edit message, any change will save for 10 minutes.
once user close the browser and entered again to the application, system will notify - there is message that saved for 10 minutes.
