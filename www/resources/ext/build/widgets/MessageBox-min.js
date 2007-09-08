/*
 * Ext JS Library 1.1.1
 * Copyright(c) 2006-2007, Ext JS, LLC.
 * licensing@extjs.com
 * 
 * http://www.extjs.com/license
 */

Ext.MessageBox=function(){var J,A,Q,G;var O,E,H,K,N,B;var I,L,D;var C=function(R){J.hide();Ext.callback(A.fn,A.scope||window,[R,L.dom.value],1)};var F=function(){if(A&&A.cls){J.el.removeClass(A.cls)}if(G){Ext.TaskMgr.stop(G);G=null}};var M=function(R){var T=0;if(!R){I["ok"].hide();I["cancel"].hide();I["yes"].hide();I["no"].hide();J.footer.dom.style.display="none";return T}J.footer.dom.style.display="";for(var S in I){if(typeof I[S]!="function"){if(R[S]){I[S].show();I[S].setText(typeof R[S]=="string"?R[S]:Ext.MessageBox.buttonText[S]);T+=I[S].el.getWidth()+15}else{I[S].hide()}}}return T};var P=function(T,R,S){if(A&&A.closable!==false){J.hide()}if(S){S.stopEvent()}};return{getDialog:function(){if(!J){J=new Ext.BasicDialog("x-msg-box",{autoCreate:true,shadow:true,draggable:true,resizable:false,constraintoviewport:false,fixedcenter:true,collapsible:false,shim:true,modal:true,width:400,height:100,buttonAlign:"center",closeClick:function(){if(A&&A.buttons&&A.buttons.no&&!A.buttons.cancel){C("no")}else{C("cancel")}}});J.on("hide",F);Q=J.mask;J.addKeyListener(27,P);I={};var S=this.buttonText;I["ok"]=J.addButton(S["ok"],C.createCallback("ok"));I["yes"]=J.addButton(S["yes"],C.createCallback("yes"));I["no"]=J.addButton(S["no"],C.createCallback("no"));I["cancel"]=J.addButton(S["cancel"],C.createCallback("cancel"));O=J.body.createChild({html:"<span class=\"ext-mb-text\"></span><br /><input type=\"text\" class=\"ext-mb-input\" /><textarea class=\"ext-mb-textarea\"></textarea><div class=\"ext-mb-progress-wrap\"><div class=\"ext-mb-progress\"><div class=\"ext-mb-progress-bar\">&#160;</div></div></div>"});E=O.dom.firstChild;H=Ext.get(O.dom.childNodes[2]);H.enableDisplayMode();H.addKeyListener([10,13],function(){if(J.isVisible()&&A&&A.buttons){if(A.buttons.ok){C("ok")}else{if(A.buttons.yes){C("yes")}}}});K=Ext.get(O.dom.childNodes[3]);K.enableDisplayMode();N=Ext.get(O.dom.childNodes[4]);N.enableDisplayMode();var R=N.dom.firstChild;B=Ext.get(R.firstChild);B.setHeight(R.offsetHeight)}return J},updateText:function(S){if(!J.isVisible()&&!A.width){J.resizeTo(this.maxWidth,100)}E.innerHTML=S||"&#160;";var R=Math.max(Math.min(A.width||E.offsetWidth,this.maxWidth),Math.max(A.minWidth||this.minWidth,D));if(A.prompt){L.setWidth(R)}if(J.isVisible()){J.fixedcenter=false}J.setContentSize(R,O.getHeight());if(J.isVisible()){J.fixedcenter=true}return this},updateProgress:function(R,S){if(S){this.updateText(S)}B.setWidth(Math.floor(R*N.dom.firstChild.offsetWidth));return this},isVisible:function(){return J&&J.isVisible()},hide:function(){if(this.isVisible()){J.hide()}},show:function(T){if(this.isVisible()){this.hide()}var U=this.getDialog();A=T;U.setTitle(A.title||"&#160;");U.close.setDisplayed(A.closable!==false);L=H;A.prompt=A.prompt||(A.multiline?true:false);if(A.prompt){if(A.multiline){H.hide();K.show();K.setHeight(typeof A.multiline=="number"?A.multiline:this.defaultTextHeight);L=K}else{H.show();K.hide()}}else{H.hide();K.hide()}N.setDisplayed(A.progress===true);this.updateProgress(0);L.dom.value=A.value||"";if(A.prompt){J.setDefaultButton(L)}else{var S=A.buttons;var R=null;if(S&&S.ok){R=I["ok"]}else{if(S&&S.yes){R=I["yes"]}}J.setDefaultButton(R)}D=M(A.buttons);this.updateText(A.msg);if(A.cls){U.el.addClass(A.cls)}U.proxyDrag=A.proxyDrag===true;U.modal=A.modal!==false;U.mask=A.modal!==false?Q:false;if(!U.isVisible()){document.body.appendChild(J.el.dom);U.animateTarget=null;U.show(T.animEl)}return this},progress:function(S,R){this.show({title:S,msg:R,buttons:false,progress:true,closable:false,minWidth:this.minProgressWidth});return this},alert:function(U,T,S,R){this.show({title:U,msg:T,buttons:this.OK,fn:S,scope:R});return this},wait:function(S,R){this.show({title:R,msg:S,buttons:false,closable:false,progress:true,modal:true,width:300,wait:true});G=Ext.TaskMgr.start({run:function(T){Ext.MessageBox.updateProgress(((((T+20)%20)+1)*5)*0.01)},interval:1000});return this},confirm:function(U,T,S,R){this.show({title:U,msg:T,buttons:this.YESNO,fn:S,scope:R});return this},prompt:function(V,U,T,S,R){this.show({title:V,msg:U,buttons:this.OKCANCEL,fn:T,minWidth:250,scope:S,prompt:true,multiline:R});return this},OK:{ok:true},YESNO:{yes:true,no:true},OKCANCEL:{ok:true,cancel:true},YESNOCANCEL:{yes:true,no:true,cancel:true},defaultTextHeight:75,maxWidth:600,minWidth:100,minProgressWidth:250,buttonText:{ok:"OK",cancel:"Cancel",yes:"Yes",no:"No"}}}();Ext.Msg=Ext.MessageBox;