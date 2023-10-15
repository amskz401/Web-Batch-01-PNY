function toggle_password() {
    let pass_field = document.getElementById("password_field");
    let type_attr = pass_field.getAttribute('type');
    if(type_attr == 'password'){
        pass_field.setAttribute('type', 'text');
    }
    else {
        pass_field.setAttribute('type', 'password');
    }
}

// let switch_md = document.querySelector("input[type='checkbox']");
// let switch_md = document.querySelector("input[type='checkbox']");
// let switch_md = document.querySelector("#switch_mode");
let switch_md = document.getElementById("switch_mode");

if(localStorage.getItem('switch') !== null && localStorage.getItem('switch') == 'on'){
    switch_md.value = 'on';
        document.querySelector("nav").classList.remove('bg-success');
        document.querySelector("nav").classList.add('bg-dark');
        mode.innerHTML = 'Light';
}

switch_md.addEventListener('change', function(){

    if(this.value == 'off'){

        switch_md.value = 'on';
        document.querySelector("nav").classList.remove('bg-success');
        document.querySelector("nav").classList.add('bg-dark');
        mode.innerHTML = 'Light';
        // setCookie('mode', switch_md.value, 2);
        localStorage.setItem('switch', switch_md.value);
    } else {
            switch_md.value = 'off';
            document.querySelector("nav").classList.remove('bg-dark');
            document.querySelector("nav").classList.add('bg-success');
            mode.innerHTML = 'Dark';
            localStorage.setItem('switch', switch_md.value);
    }
});

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

to display message only once
setTimeout(function() {
    alert('after two seconds');
}, 1000);

setInterval(function() {
    let d = new Date();
    document.write(d);
}, 1000);