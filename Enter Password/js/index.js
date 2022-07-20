//CREATE SHOW AND HIDE PASS FUNCS. WE CAN ADD THIS FUNCS TO EYE ICONS
const showPassword = ()=>{
    let eyeOn = document.getElementById('eyeOn');
    let eyeOff = document.getElementById('eyeOff');
    let input = document.getElementById('password');
    eyeOn.classList.remove('d-none');
    eyeOff.classList.add('d-none');
    
    input.setAttribute('type','text');
    input.setAttribute('placeholder','Enter your password');
}
const hidePassword = () => {
    let eyeOn = document.getElementById('eyeOn');
    let eyeOff = document.getElementById('eyeOff');
    let input = document.getElementById('password');
    eyeOff.classList.remove('d-none');
    eyeOn.classList.add('d-none');
    input.setAttribute('type','password');
    input.setAttribute('placeholder','•••••••••••••••••••');
}
//CREATE INSERT AFTER FUNCTION
const insertAfter = (newNode, existingNode) => {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}
document.addEventListener('DOMContentLoaded',()=>{
    // ADD EVENT LISTENER FOR TRACKİNG CLICK TO INPUT GROUP WITH THAT WAY WE CAN FOCUS TO INPUT
    /* document.getElementById('passwordContainer').addEventListener('click',e=>{
        document.querySelector('#password[type=password]').focus();;
    }); */
    // ADD CLICK LISTENER TO EYE ON/OFF ICONS
    document.getElementById('eyeOn').addEventListener('click',hidePassword);
    document.getElementById('eyeOff').addEventListener('click',showPassword);
    document.getElementById('password').onfocus = e=>{
        e.target.setAttribute('placeholder','');
    };
    document.getElementById('password').onblur = e=>{
        e = e.target;
        if(e.value === '' || e.value === null){
            e.setAttribute('placeholder','•••••••••••••••••••');
        }
    }
    let switchBoxes = document.querySelectorAll('.switch-box');
    switchBoxes.forEach(switchBox=>{
        
        switchBox.classList.add('d-none');
        let newSwitch = document.createElement('span');
        let toggle = document.createElement('toggle');

        const toggleClick = e => {
            switchBox.checked = !switchBox.checked;
            toggle.classList.toggle('active');
        };

        toggle.classList.add('toggle');
        newSwitch.addEventListener('click',e=>{toggleClick();});
        newSwitch.classList.add('custom-switch');
        newSwitch.appendChild(toggle);
        insertAfter(newSwitch,switchBox);
    });
});