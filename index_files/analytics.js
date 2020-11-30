var bda = document.getElementsByTagName('body')[0];
var gas1 = document.createElement("script")
gas1.src = 'https://www.googletagmanager.com/gtag/js?id=UU-142385482-4'
gas1.async = true

var gas2 = document.createElement("script")
gas2.innerHTML = "  window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'UU-142385482-4');"

bda.appendChild(gas1)
bda.appendChild(gas2)