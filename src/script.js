// Sidebar Menu (mobile)
const sideMenu = document.getElementById('sideMenu');

const openMenu = () => {
    sideMenu.style.right = '0'; 
}

const closeMenu = () => {
    sideMenu.style.right = '-200px';
}

// Form Submit button to google-sheet script
// code downloaded from GitHub
const scriptURL = 'https://script.google.com/macros/s/AKfycbw39qILECH0O-v5at43Lq-ygY9-a1rzSqlX_Qi731dnQtvK32kh9Q3lFmllllARSsIk/exec'
            const form = document.forms['submit-to-google-sheet']
            const msg = document.getElementById('msg')
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => {
                    msg.innerHTML = 'Message Sent Successfully!'
                    setTimeout(function(){
                        msg.innerHTML = ''
                    },5000)
                    form.reset()
                })
                .catch(error => console.error('Error!', error.message))
            })