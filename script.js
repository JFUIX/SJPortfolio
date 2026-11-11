document.getElementById('enquiry-form').addEventListener('submit',function(event){event.preventDefault();var v=function(i){return document.getElementById(i).value.trim()};
if(!v('n')||!v('e')||!v('m')){alert('Please add your name, email and goals.');return}\nvar email=document.getElementById('e');if(!email.checkValidity()){email.reportValidity();email.focus();return}
var body='Name: '+v('n')+'\nEmail: '+v('e')+'\nPhone / WhatsApp: '+(v('phone')||'Not provided')+'\nBusiness: '+v('b')+'\nService: '+v('s')+'\n\n'+v('m');
location.href='mailto:serenj.business@gmail.com?subject='+encodeURIComponent('New enquiry from '+v('n'))+'&body='+encodeURIComponent(body)});
