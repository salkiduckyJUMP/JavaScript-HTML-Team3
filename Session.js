// Viewbag, User Check, Session tokens

function User(userName, password){
    this.userName = userName;
    this.password = password;
}

function setLinksIndex(){
    var sessionUser = sessionStorage.getItem("user");
    var sessionPass = sessionStorage.getItem("password");   
    
    if (sessionUser != null) {
        var newButton = document.getElementById("log");
        newButton.className ="logout show";
        newButton.innerHTML = "Logout";
        newButton.onclick=logout;
        
        var parameters = location.search.split("?");
        if(parameters != null){
            if(parameters[2] == "Logout"){
                sessionStorage.clear();
                location.reload();
            }
            else{
                document.getElementById("displayName").innerHTML = "Welcome" + "&emsp;" + sessionUser;
                
                var join = "../Index/Index.html?" + sessionUser;
                document.getElementById("indexPage").href = join;
            
                var join = "../greg/greg.html?" + sessionUser;
                document.getElementById("gregPage").href = join;
            
                var join = "../Omran/Omran_webpage.html?" + sessionUser;
                document.getElementById("omranPage").href = join;
            
                var join = "../Rebecca/RebeccaPage.html?" + sessionUser;
                document.getElementById("rebeccaPage").href = join;
            }
        }
    }
}

function setLinksOthers(){
    var parameters = location.search.split("?");

    if(parameters[1] != undefined){
        var newButton = document.getElementById("log");
        newButton.className ="logout show";

        document.getElementById("displayName").innerHTML = "Logged in as:" + "&emsp;"+ parameters[1];
        
        var join = "../Index/Index.html?" + parameters[1];
        document.getElementById("indexPage").href = join;

        var join = "../greg/greg.html?" + parameters[1];
        document.getElementById("gregPage").href = join;

        var join = "../Omran/Omran_webpage.html?" + parameters[1];
        document.getElementById("omranPage").href = join;

        var join = "../Rebecca/RebeccaPage.html?" + parameters[1];
        document.getElementById("rebeccaPage").href = join;
    }
    else{
        var loggedIn = document.getElementById("displayName");
        loggedIn.className = "hidden";
    }
}

function checkUser(){
    document.getElementById("sb1");
    var tryUser = document.getElementById("uID").value;
    var tryPass = document.getElementById("pID").value;
    
    this.alert("Login Successful: Welcome " + tryUser);
    sessionStorage.setItem("user", tryUser);
    sessionStorage.setItem("password", tryPass);  
}

function logout(){
    sure = confirm("Are you sure you want to logout?");
    if(sure){
        alert("Goodbye! See you next time!");
        goToHome();
    }
    else{
        return;
    }
}

function goToHome(){
    window.location.replace("../Index/Index.html?Page?Logout");
}