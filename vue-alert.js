'use strict';
export default {
    install: function (Vue, options) {
    	Vue.prototype.alert=function(val){
            var isCloseAlert=document.getElementById('closeAlert')?true:false;

            if(isCloseAlert)return;

            var html="<div class='alert-box'>\
                        <h1>"+val.title+"</h1>\
                        <h2>"+val.content+"</h2>\
                        <div id='closeAlert' >确定</div>\
                     </div>"
            var app=document.getElementById('app');
         
            var body=document.getElementsByTagName('body')[0];
            var temp = document.createElement('div');
            temp.id='alertBox';
            
            body.style.overflow='hidden';
            temp.innerHTML=html;
            app.appendChild(temp);

            var closeAlert=document.getElementById('closeAlert');
            closeAlert.onclick = function(){
                
                var target=document.getElementById('alertBox');
                body.style.overflow='auto';
                app.removeChild(target)
            }

        }  
    }
}