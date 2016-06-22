
            function myFunction()
            {
                var dag;
                switch (new Date().getDay()) 
                {
                case 0:
                dag = "Zondag";
                break;
                case 1:
                dag = "Maandag";
                break;
                case 2:
                dag = "Dinsdag";
                break;
                case 3:
                dag = "Woensdag";
                break;
                case 4:
                dag = "Donderdag";
                break;
                case 5:
                dag = "Vrijdag";
                break;
                case  6:
                dag = "Zaterdag";
                break;
                }
            document.getElementById("demo1").innerHTML = "Vandaag is het " + dag;
                {
                    var myVar = setInterval(myTimer ,1000);
                function myTimer() {
        var d = new Date();
        document.getElementById("demo2").innerHTML = "Het is " + d.toLocaleTimeString();
                }
                }
            }
