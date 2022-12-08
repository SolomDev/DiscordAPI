        function sendMessage() {
          var request = new XMLHttpRequest();
          var name = document.getElementById("name").value;
          var email = document.getElementById("email").value;
          var type = document.getElementById("type").value;
          var issue = document.getElementById("issue").value;
          var inputstate = document.getElementById("inputstate").value;
  
          if (name !== "" && email !== "" && issue !== "") {
            document.getElementById("name").value = "#";
            document.getElementById("email").value = "";
            document.getElementById("type").value = "";
            document.getElementById("issue").value = "";
            document.getElementById("inputstate").value = "";
  
            request.open(
              "POST",
              "" //Webhook Link !!
            );
  
            request.setRequestHeader("Content-type", "application/json");
  
            var params = {
              // username: " Website Api ",
              content:
                "> **New Message!** <:njma:962802788667097098>" +

                "\n `-`** ID: **" +
                name +
                "\n** `-` User: **" +
                email +
                "**\n `-` Email: **" +
                type +
                "**\n `-` Service: **" +
                inputstate +
                "**\n `-` Message: **" +
                issue 
            };
  
            request.send(JSON.stringify(params));
            document.getElementById("notice2").innerHTML =
                      "Thank you for evaluating/reporting good luck.";//The Request is sent!
                      document.getElementById("notice").value = "";
            event.preventDefault();
          } else {
            event.preventDefault();
            document.getElementById("notice").innerHTML =
                      "All fields must be filled in to send the message!";//change this to whatever you want to use!
          }
        }
