(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[751],{4751:(Ce,pe,w)=>{"use strict";w.r(pe),w.d(pe,{RidehistoryModule:()=>_});var Y=w(4755),X=w(2480),B=w(5580),e=w(2223),V=w(1728);function le(o,p){if(1&o&&(e.TgZ(0,"span",4),e._uU(1),e.qZA()),2&o){const i=e.oxw();e.xp6(1),e.Oqu(i.data.wayPoints)}}function se(o,p){1&o&&(e.TgZ(0,"span",4),e._uU(1,"No way point"),e.qZA())}let ye=(()=>{class o{constructor(i,r,a){this.dialog=i,this.dialogRef=r,this.data=a,this.dataArray=[],this.map=null,this.polyline=null,this.startMarker=null,this.endMarker=null}ngOnInit(){this.dataArray=this.data,this.initMap()}initMap(){this.geocodeAddress(this.data.startLocation,i=>{this.geocodeAddress(this.data.endLocation,r=>{const a={center:i,zoom:14};this.map=new google.maps.Map(document.getElementById("map"),a),this.drawPolyline(i,r)})})}geocodeAddress(i,r){(new google.maps.Geocoder).geocode({address:i},(l,T)=>{"OK"===T?r(l[0].geometry.location):console.error("Geocode was not successful for the following reason: "+T)})}drawPolyline(i,r){this.polyline=new google.maps.Polyline({path:[i,r],geodesic:!0,strokeColor:"#0048ff",strokeOpacity:1,strokeWeight:3}),this.polyline.setMap(this.map);const l=new google.maps.LatLngBounds;l.extend(i),l.extend(r),this.map.fitBounds(l),this.addMarker(i,"Start Location"),this.addMarker(r,"End Location")}addMarker(i,r){const l=new google.maps.Marker({position:i,map:this.map,title:r});l.setMap(this.map),"Start Location"===r?this.startMarker=l:"End Location"===r&&(this.endMarker=l)}}return o.\u0275fac=function(i){return new(i||o)(e.Y36(B.uw),e.Y36(B.so),e.Y36(B.WI))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-ridehistorydialog"]],decls:62,vars:13,consts:[[1,"info-component"],[1,"ride-details-dialog"],[1,"ride-details","row","align-items-center"],[1,"details-key","col-sm-3","text-end"],[1,"details-value","col-sm-3","text-start"],["alt","user-profile",1,"details-key","col-sm-3","fit-image",3,"src"],["class","details-value col-sm-3 text-start",4,"ngIf","ngIfElse"],["noWayPoints",""],["alt","service-photo",1,"details-key","col-sm-3","fit-image",3,"src"],[1,"map-container","border"],["id","map"],["mat-dialog-actions",""],["mat-button","","mat-dialog-close","","cdkFocusInitial","",1,"info-button"]],template:function(i,r){if(1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h2"),e._uU(3,"Ride Details"),e.qZA(),e.TgZ(4,"div",2)(5,"span",3),e._uU(6,"Request ID :"),e.qZA(),e.TgZ(7,"span",4),e._uU(8),e.qZA()(),e.TgZ(9,"div",2)(10,"span",3),e._uU(11,"User ID :"),e.qZA(),e.TgZ(12,"span",4),e._uU(13),e.qZA()(),e.TgZ(14,"div",2)(15,"span",3),e._uU(16,"User Name :"),e.qZA(),e.TgZ(17,"span",4),e._uU(18),e.qZA(),e._UZ(19,"img",5),e.qZA(),e.TgZ(20,"div",2)(21,"span",3),e._uU(22,"Pickup Location:"),e.qZA(),e.TgZ(23,"span",4),e._uU(24),e.qZA()(),e.TgZ(25,"div",2)(26,"span",3),e._uU(27,"Drop-off Location:"),e.qZA(),e.TgZ(28,"span",4),e._uU(29),e.qZA()(),e.TgZ(30,"div",2)(31,"span",3),e._uU(32,"Way Point :"),e.qZA(),e.YNc(33,le,2,1,"span",6),e.YNc(34,se,2,0,"ng-template",null,7,e.W1O),e.qZA(),e.TgZ(36,"div",2)(37,"span",3),e._uU(38,"Service Type :"),e.qZA(),e.TgZ(39,"span",4),e._uU(40),e.qZA(),e._UZ(41,"img",8),e.qZA(),e.TgZ(42,"div",2)(43,"span",3),e._uU(44,"Total Distance :"),e.qZA(),e.TgZ(45,"span",4),e._uU(46),e.qZA()(),e.TgZ(47,"div",2)(48,"span",3),e._uU(49,"Estimatetd Time :"),e.qZA(),e.TgZ(50,"span",4),e._uU(51),e.qZA()(),e.TgZ(52,"div",2)(53,"span",3),e._uU(54,"Estimated Fare :"),e.qZA(),e.TgZ(55,"span",4),e._uU(56),e.qZA()(),e.TgZ(57,"div",9),e._UZ(58,"div",10),e.qZA()(),e.TgZ(59,"div",11)(60,"button",12),e._uU(61,"Ok"),e.qZA()()()),2&i){const a=e.MAs(35);e.xp6(8),e.Oqu(r.data._id),e.xp6(5),e.Oqu(r.data.userId),e.xp6(5),e.Oqu(r.data.userDetails.username),e.xp6(1),e.MGl("src","http://localhost:4000/",r.data.userDetails.profile,"",e.LSH),e.xp6(5),e.Oqu(r.data.startLocation),e.xp6(5),e.Oqu(r.data.endLocation),e.xp6(4),e.Q6J("ngIf",r.data.wayPoints&&r.data.wayPoints.length>0)("ngIfElse",a),e.xp6(7),e.Oqu(r.data.serviceType),e.xp6(1),e.MGl("src","http://localhost:4000/",r.data.vehicleDetails.vehicleImage,"",e.LSH),e.xp6(5),e.hij("",r.data.totalDistance," Km"),e.xp6(5),e.Oqu(r.data.estimateTime),e.xp6(5),e.hij("\u20b9 ",r.data.estimateFare,"")}},dependencies:[Y.O5,V.lW,B.ZT,B.H8],styles:[".info-component[_ngcontent-%COMP%]{overflow:hidden}.ride-details-dialog[_ngcontent-%COMP%]{text-align:center}.ride-details[_ngcontent-%COMP%]{margin-bottom:10px}.details-key[_ngcontent-%COMP%]{font-weight:700;white-space:nowrap}.details-value[_ngcontent-%COMP%]{white-space:nowrap}.info-button[_ngcontent-%COMP%]{padding:10px 20px;font-size:16px;border:none;border-radius:4px;background-color:#830fff;color:#fff;cursor:pointer}.fit-image[_ngcontent-%COMP%]{max-width:100px;max-height:100px;border-radius:50%}.map-container[_ngcontent-%COMP%]{width:90%;margin:20px auto}#map[_ngcontent-%COMP%]{width:100%;height:300px}@media (max-width: 767px){.ride-details-dialog[_ngcontent-%COMP%]{padding:20px}}"]}),o})();var g=w(3144);let ee=(()=>{class o{constructor(i){this.http=i,this.serverUrl="http://localhost:4000"}downlaodallData(i){return this.http.post(`${this.serverUrl}/downloadridehistory`,{alldataatonce:i})}}return o.\u0275fac=function(i){return new(i||o)(e.LFG(g.eN))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var N=w(34),oe=w(4146),ae=w(5102),te=w(3028),de=w.t(te,2);let fe=(()=>{class o{constructor(){this._papa=de}parse(i,r){return this._papa.parse(i,r)}unparse(i,r){return this._papa.unparse(i,r)}setLocalChunkSize(i){this._papa.LocalChunkSize=i}setRemoteChunkSize(i){this._papa.RemoteChunkSize=i}setDefaultDelimiter(i){this._papa.DefaultDelimiter=i}get badDelimiters(){return this._papa.BAD_DELIMITERS}get recordSeparator(){return this._papa.RECORD_SEP}get unitSeparator(){return this._papa.UNIT_SEP}get workersSupported(){return this._papa.WORKERS_SUPPORTED}}return o.\u0275fac=function(i){return new(i||o)},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var ne=w(6835),S=w(9401),ce=w(4333);function ge(o,p){1&o&&(e.TgZ(0,"div",23),e._uU(1," No Records Found "),e.qZA())}function _e(o,p){if(1&o&&(e.TgZ(0,"td"),e._uU(1),e.qZA()),2&o){const i=e.oxw().$implicit;e.xp6(1),e.Oqu(i.feedback)}}function he(o,p){1&o&&(e.TgZ(0,"td"),e._uU(1,"No feedback"),e.qZA())}const W=function(o,p){return{"badge-success":o,"badge-danger":p}};function v(o,p){if(1&o){const i=e.EpF();e.TgZ(0,"tr",18),e.NdJ("click",function(){const l=e.CHM(i).$implicit,T=e.oxw(2);return e.KtG(T.openInfoDialog(l))}),e.TgZ(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td",32),e._uU(8),e.qZA(),e.TgZ(9,"td",32),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.qZA(),e.TgZ(13,"td"),e._uU(14),e.qZA(),e.YNc(15,_e,2,1,"td",22),e.YNc(16,he,2,0,"td",22),e.TgZ(17,"td",33),e._uU(18),e.qZA()()}if(2&o){const i=p.$implicit,r=e.oxw(2);e.xp6(2),e.Oqu(i._id),e.xp6(2),e.Oqu(i.userDetails.username),e.xp6(2),e.Oqu(i.rideDate),e.xp6(2),e.Oqu(i.startLocation),e.xp6(2),e.Oqu(i.endLocation),e.xp6(2),e.Oqu(i.serviceType),e.xp6(2),e.Oqu(i.paymentOption),e.xp6(1),e.Q6J("ngIf",void 0!==i.feedback&&""!==i.feedback),e.xp6(1),e.Q6J("ngIf",void 0===i.feedback||""===i.feedback),e.xp6(1),e.Q6J("ngClass",e.WLB(11,W,7===i.ridestatus,3===i.ridestatus)),e.xp6(1),e.hij(" ",r.statusLabels[i.ridestatus]||"unknown"," ")}}const n=function(o,p,i){return{itemsPerPage:o,currentPage:p,totalItems:i}};function t(o,p){if(1&o){const i=e.EpF();e.TgZ(0,"div")(1,"div",24)(2,"div",25)(3,"div",26)(4,"table",27)(5,"thead",28)(6,"tr")(7,"th"),e._uU(8,"Req. ID"),e.qZA(),e.TgZ(9,"th"),e._uU(10,"Username"),e.qZA(),e.TgZ(11,"th"),e._uU(12,"Pick up Date"),e.qZA(),e.TgZ(13,"th"),e._uU(14,"Pick up Address"),e.qZA(),e.TgZ(15,"th"),e._uU(16,"Drop off Address"),e.qZA(),e.TgZ(17,"th"),e._uU(18,"Service Type"),e.qZA(),e.TgZ(19,"th"),e._uU(20,"Payment"),e.qZA(),e.TgZ(21,"th"),e._uU(22,"Feedback"),e.qZA(),e.TgZ(23,"th"),e._uU(24,"Status"),e.qZA()()(),e.TgZ(25,"tbody"),e.YNc(26,v,19,14,"tr",29),e.ALo(27,"paginate"),e.qZA()()()()(),e.TgZ(28,"div",30)(29,"pagination-controls",31),e.NdJ("pageChange",function(a){e.CHM(i);const l=e.oxw();return e.KtG(l.onPageChange(a))}),e.qZA()()()}if(2&o){const i=e.oxw();e.xp6(26),e.Q6J("ngForOf",e.xi3(27,3,i.ridesArray,e.kEZ(6,n,i.limit,i.currentPage,i.count))),e.xp6(3),e.Q6J("maxSize",5)("responsive",!0)}}let s=(()=>{class o{constructor(i,r,a,l,T,d,m){this._ridehistroy=i,this._confirmride=r,this._runningrequest=a,this._socket=l,this.papa=T,this.dialog=d,this.authService=m,this.ridesArray=[],this.statusLabels={3:"Cancelled",7:"Completed"},this.currentPage=1,this.limit=5,this.totalPages=0,this.paginatedRideData=[],this.startlocation="",this.endlocation="",this.paymentmode="",this.Fromdate="",this.Todate="",this.ridestatus=-1}ngOnInit(){this.getRideHistory(),this.aftercancelrideinrealtime(),this.ridestatusupdates()}getRideHistory(){this._socket.emitridehistory({page:this.currentPage,limit:this.limit,payment:this.paymentmode,fromdate:this.Fromdate,todate:this.Todate,status:this.ridestatus,startlocationsearch:this.startlocation,endlocationsearch:this.endlocation}),this._socket.listenridehistory().subscribe(r=>{console.log(r),this.ridesArray=r.myridehistory,this.totalPages=r.totalPages,this.count=r.totalCount})}onPageSizeChange(i){this.limit=parseInt(i.target.value),this.currentPage=1,this.updatePaginatedDrivers(),this.getRideHistory()}onPageChange(i){i>=1&&i<=this.totalPages&&(this.currentPage=i,this.updatePaginatedDrivers(),this.getRideHistory())}updatePaginatedDrivers(){const i=(this.currentPage-1)*this.limit;this.paginatedRideData=this.ridesArray.slice(i,i+this.limit)}clearFilter(){this.ridestatus=-1,this.paymentmode="",this.startlocation="",this.endlocation="",this.Fromdate="",this.Todate="",this.getRideHistory()}aftercancelrideinrealtime(){this._socket.listencancelride().subscribe(i=>{this.getRideHistory()})}ridestatusupdates(){this._socket.listeningrideupdates().subscribe(i=>{this.getRideHistory()})}downlaodallData(){this._ridehistroy.downlaodallData({payment:this.paymentmode,fromdate:this.Fromdate,todate:this.Todate,status:this.ridestatus,startlocationsearch:this.startlocation,endlocationsearch:this.endlocation}).subscribe({next:r=>{const l=this.convertToCSV(r.myridehistory),T=new Blob([l],{type:"text/csv"}),d="data_"+(new Date).getTime()+".csv",m=document.createElement("a");m.href=window.URL.createObjectURL(T),m.download=d,m.click()},error:r=>{console.log(r.error.message)}})}convertToCSV(i){const r=[["Req. Id","Username","User Email","Start Location","End Location","Way Points","Ride Date","Ride Time","Time","Service Type","Payment Option","Estimate Time","Estimate Fare","Ride Status"]];return i.forEach(l=>{r.push([l._id,l.userDetails?.username||"",l.userDetails?.useremail||"",l.startLocation||"",l.endLocation||"",l.wayPoints,l.rideDate||"",l.rideTime||"",l.time,l.serviceType,l.paymentOption,l.estimateTime,l.estimateFare||"",l.ridestatus||""])}),this.papa.unparse(r)}openInfoDialog(i){const r=new B.vA;r.disableClose=!1,r.autoFocus=!0,r.width="600px",r.data=i,this.dialog.open(ye,r)}resetTimer(){this.authService.resetInactivityTimer()}}return o.\u0275fac=function(i){return new(i||o)(e.Y36(ee),e.Y36(N.K),e.Y36(oe.s),e.Y36(ae.$),e.Y36(fe),e.Y36(B.uw),e.Y36(ne.e))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-ridehistory"]],decls:44,vars:11,consts:[[1,"container","mt-2"],[1,"filter-section"],["id","filter-dropdown",3,"ngModel","ngModelChange"],["value","-1"],[3,"value"],["value",""],["value","cash"],["value","card"],["type","date","id","search-input",3,"ngModel","ngModelChange"],["type","text","id","search-input","placeholder","Start Location...",3,"ngModel","ngModelChange"],["type","text","id","search-input","placeholder","End Location...",3,"ngModel","ngModelChange"],[1,"custom-select"],["id","pageSize",1,"m-2",3,"ngModel","ngModelChange","change"],["value","5"],["value","10"],["value","20"],["value","50"],["value","100"],[3,"click"],[1,"fa-solid","fa-download"],[1,"container","mt-4"],["class","no-records-label",4,"ngIf"],[4,"ngIf"],[1,"no-records-label"],[1,"parentFormContainer","p-4","border","rounded"],["id","tableContainer"],[1,"table-responsive"],[1,"table"],[1,"bg-light","text-dark"],[3,"click",4,"ngFor","ngForOf"],[1,"d-flex","justify-content-center","mt-4"],[3,"maxSize","responsive","pageChange"],[1,"fixed-width"],[1,"badge",3,"ngClass"]],template:function(i,r){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"select",2),e.NdJ("ngModelChange",function(l){return r.ridestatus=l}),e.TgZ(3,"option",3),e._uU(4,"Select Status"),e.qZA(),e.TgZ(5,"option",4),e._uU(6,"Cancelled"),e.qZA(),e.TgZ(7,"option",4),e._uU(8,"Completed"),e.qZA()(),e.TgZ(9,"select",2),e.NdJ("ngModelChange",function(l){return r.paymentmode=l}),e.TgZ(10,"option",5),e._uU(11,"Select Payment"),e.qZA(),e.TgZ(12,"option",6),e._uU(13,"Cash"),e.qZA(),e.TgZ(14,"option",7),e._uU(15,"Card"),e.qZA()(),e.TgZ(16,"input",8),e.NdJ("ngModelChange",function(l){return r.Fromdate=l}),e.qZA(),e.TgZ(17,"input",8),e.NdJ("ngModelChange",function(l){return r.Todate=l}),e.qZA(),e.TgZ(18,"input",9),e.NdJ("ngModelChange",function(l){return r.startlocation=l}),e.qZA(),e.TgZ(19,"input",10),e.NdJ("ngModelChange",function(l){return r.endlocation=l}),e.qZA(),e.TgZ(20,"div",11)(21,"select",12),e.NdJ("ngModelChange",function(l){return r.limit=l})("change",function(l){return r.onPageSizeChange(l)}),e.TgZ(22,"option",13),e._uU(23,"Select Page"),e.qZA(),e.TgZ(24,"option",13),e._uU(25,"5"),e.qZA(),e.TgZ(26,"option",14),e._uU(27,"10"),e.qZA(),e.TgZ(28,"option",15),e._uU(29,"20"),e.qZA(),e.TgZ(30,"option",16),e._uU(31,"50"),e.qZA(),e.TgZ(32,"option",17),e._uU(33,"100"),e.qZA()()(),e.TgZ(34,"button",18),e.NdJ("click",function(){return r.getRideHistory()}),e._uU(35,"Apply Filter"),e.qZA(),e.TgZ(36,"button",18),e.NdJ("click",function(){return r.clearFilter()}),e._uU(37,"Clear Filter"),e.qZA(),e.TgZ(38,"button",18),e.NdJ("click",function(){return r.downlaodallData()}),e._UZ(39,"i",19),e._uU(40,"Download"),e.qZA()()(),e.TgZ(41,"div",20),e.YNc(42,ge,2,0,"div",21),e.YNc(43,t,30,10,"div",22),e.qZA()),2&i&&(e.xp6(2),e.Q6J("ngModel",r.ridestatus),e.xp6(3),e.Q6J("value",3),e.xp6(2),e.Q6J("value",7),e.xp6(2),e.Q6J("ngModel",r.paymentmode),e.xp6(7),e.Q6J("ngModel",r.Fromdate),e.xp6(1),e.Q6J("ngModel",r.Todate),e.xp6(1),e.Q6J("ngModel",r.startlocation),e.xp6(1),e.Q6J("ngModel",r.endlocation),e.xp6(2),e.Q6J("ngModel",r.limit),e.xp6(21),e.Q6J("ngIf",0===r.ridesArray.length),e.xp6(1),e.Q6J("ngIf",r.ridesArray.length>0))},dependencies:[Y.mk,Y.sg,Y.O5,S.YN,S.Kr,S.Fj,S.EJ,S.JJ,S.On,ce.LS,ce._s],styles:[".badge[_ngcontent-%COMP%]{display:inline-block;padding:.25em .5em;margin:10px;font-size:1em;font-weight:700;border-radius:.25em}.badge-success[_ngcontent-%COMP%]{background-color:green;color:#fff}.badge-danger[_ngcontent-%COMP%]{background-color:red;color:#fff}.container_top[_ngcontent-%COMP%]{max-width:800px;margin:0 auto;padding:20px}.filter-section[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;margin-bottom:20px}#filter-dropdown[_ngcontent-%COMP%], #pageSize[_ngcontent-%COMP%]{padding:5px}#search-input[_ngcontent-%COMP%]{flex-grow:1;padding:5px}#search-button[_ngcontent-%COMP%]{padding:10px 15px;background-color:#2196f3;color:#fff;border:none;cursor:pointer}.no-records-label[_ngcontent-%COMP%]{text-align:center;font-size:24px;font-weight:700;color:red;margin-top:20%}"]}),o})();const u=[{path:"",component:s}];let c=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[X.Bz.forChild(u),X.Bz]}),o})();const f=[{path:"",component:s,pathMatch:"full"}];let _=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[Y.ez,c,X.Bz.forChild(f),S.u5,S.UX,ce.JX]}),o})()},3028:function(Ce,pe){var w,X;w=function B(){"use strict";var e=typeof self<"u"?self:typeof window<"u"?window:void 0!==e?e:{},V=!e.document&&!!e.postMessage,le=e.IS_PAPA_WORKER||!1,se={},ye=0,g={parse:function(n,t){var s=(t=t||{}).dynamicTyping||!1;if(v(s)&&(t.dynamicTypingFunction=s,s={}),t.dynamicTyping=s,t.transform=!!v(t.transform)&&t.transform,t.worker&&g.WORKERS_SUPPORTED){var u=function(){if(!g.WORKERS_SUPPORTED)return!1;var o,p,f=(o=e.URL||e.webkitURL||null,p=B.toString(),g.BLOB_URL||(g.BLOB_URL=o.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",p,")();"],{type:"text/javascript"})))),_=new e.Worker(f);return _.onmessage=ce,_.id=ye++,se[_.id]=_}();return u.userStep=t.step,u.userChunk=t.chunk,u.userComplete=t.complete,u.userError=t.error,t.step=v(t.step),t.chunk=v(t.chunk),t.complete=v(t.complete),t.error=v(t.error),delete t.worker,void u.postMessage({input:n,config:t,workerId:u.id})}var f,c=null;return"string"==typeof n?(n=65279===(f=n).charCodeAt(0)?f.slice(1):f,c=t.download?new oe(t):new te(t)):!0===n.readable&&v(n.read)&&v(n.on)?c=new de(t):(e.File&&n instanceof File||n instanceof Object)&&(c=new ae(t)),c.stream(n)},unparse:function(n,t){var s=!1,u=!0,c=",",f="\r\n",_='"',o=_+_,p=!1,i=null,r=!1;!function(){if("object"==typeof t){if("string"!=typeof t.delimiter||g.BAD_DELIMITERS.filter(function(d){return-1!==t.delimiter.indexOf(d)}).length||(c=t.delimiter),("boolean"==typeof t.quotes||"function"==typeof t.quotes||Array.isArray(t.quotes))&&(s=t.quotes),"boolean"!=typeof t.skipEmptyLines&&"string"!=typeof t.skipEmptyLines||(p=t.skipEmptyLines),"string"==typeof t.newline&&(f=t.newline),"string"==typeof t.quoteChar&&(_=t.quoteChar),"boolean"==typeof t.header&&(u=t.header),Array.isArray(t.columns)){if(0===t.columns.length)throw new Error("Option columns is empty");i=t.columns}void 0!==t.escapeChar&&(o=t.escapeChar+_),("boolean"==typeof t.escapeFormulae||t.escapeFormulae instanceof RegExp)&&(r=t.escapeFormulae instanceof RegExp?t.escapeFormulae:/^[=+\-@\t\r].*$/)}}();var a=new RegExp(ne(_),"g");if("string"==typeof n&&(n=JSON.parse(n)),Array.isArray(n)){if(!n.length||Array.isArray(n[0]))return l(null,n,p);if("object"==typeof n[0])return l(i||Object.keys(n[0]),n,p)}else if("object"==typeof n)return"string"==typeof n.data&&(n.data=JSON.parse(n.data)),Array.isArray(n.data)&&(n.fields||(n.fields=n.meta&&n.meta.fields||i),n.fields||(n.fields=Array.isArray(n.data[0])?n.fields:"object"==typeof n.data[0]?Object.keys(n.data[0]):[]),Array.isArray(n.data[0])||"object"==typeof n.data[0]||(n.data=[n.data])),l(n.fields||[],n.data||[],p);throw new Error("Unable to serialize unrecognized input");function l(d,m,D){var A="";"string"==typeof d&&(d=JSON.parse(d)),"string"==typeof m&&(m=JSON.parse(m));var q=Array.isArray(d)&&0<d.length,E=!Array.isArray(m[0]);if(q&&u){for(var M=0;M<d.length;M++)0<M&&(A+=c),A+=T(d[M],M);0<m.length&&(A+=f)}for(var h=0;h<m.length;h++){var y=q?d.length:m[h].length,Z=!1,x=q?0===Object.keys(m[h]).length:0===m[h].length;if(D&&!q&&(Z="greedy"===D?""===m[h].join("").trim():1===m[h].length&&0===m[h][0].length),"greedy"===D&&q){for(var C=[],P=0;P<y;P++)C.push(m[h][E?d[P]:P]);Z=""===C.join("").trim()}if(!Z){for(var b=0;b<y;b++)0<b&&!x&&(A+=c),A+=T(m[h][q&&E?d[b]:b],b);h<m.length-1&&(!D||0<y&&!x)&&(A+=f)}}return A}function T(d,m){if(null==d)return"";if(d.constructor===Date)return JSON.stringify(d).slice(1,25);var D=!1;r&&"string"==typeof d&&r.test(d)&&(d="'"+d,D=!0);var A=d.toString().replace(a,o);return(D=D||!0===s||"function"==typeof s&&s(d,m)||Array.isArray(s)&&s[m]||function(q,E){for(var M=0;M<E.length;M++)if(-1<q.indexOf(E[M]))return!0;return!1}(A,g.BAD_DELIMITERS)||-1<A.indexOf(c)||" "===A.charAt(0)||" "===A.charAt(A.length-1))?_+A+_:A}}};if(g.RECORD_SEP=String.fromCharCode(30),g.UNIT_SEP=String.fromCharCode(31),g.BYTE_ORDER_MARK="\ufeff",g.BAD_DELIMITERS=["\r","\n",'"',g.BYTE_ORDER_MARK],g.WORKERS_SUPPORTED=!V&&!!e.Worker,g.NODE_STREAM_INPUT=1,g.LocalChunkSize=10485760,g.RemoteChunkSize=5242880,g.DefaultDelimiter=",",g.Parser=S,g.ParserHandle=fe,g.NetworkStreamer=oe,g.FileStreamer=ae,g.StringStreamer=te,g.ReadableStreamStreamer=de,e.jQuery){var ee=e.jQuery;ee.fn.parse=function(n){var t=n.config||{},s=[];return this.each(function(f){if("INPUT"!==ee(this).prop("tagName").toUpperCase()||"file"!==ee(this).attr("type").toLowerCase()||!e.FileReader||!this.files||0===this.files.length)return!0;for(var _=0;_<this.files.length;_++)s.push({file:this.files[_],inputElem:this,instanceConfig:ee.extend({},t)})}),u(),this;function u(){if(0!==s.length){var _,o,p,i=s[0];if(v(n.before)){var r=n.before(i.file,i.inputElem);if("object"==typeof r){if("abort"===r.action)return"AbortError",_=i.file,o=i.inputElem,p=r.reason,void(v(n.error)&&n.error({name:"AbortError"},_,o,p));if("skip"===r.action)return void c();"object"==typeof r.config&&(i.instanceConfig=ee.extend(i.instanceConfig,r.config))}else if("skip"===r)return void c()}var a=i.instanceConfig.complete;i.instanceConfig.complete=function(l){v(a)&&a(l,i.file,i.inputElem),c()},g.parse(i.file,i.instanceConfig)}else v(n.complete)&&n.complete()}function c(){s.splice(0,1),u()}}}function N(n){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(t){var s=he(t);s.chunkSize=parseInt(s.chunkSize),t.step||t.chunk||(s.chunkSize=null),this._handle=new fe(s),(this._handle.streamer=this)._config=s}.call(this,n),this.parseChunk=function(t,s){if(this.isFirstChunk&&v(this._config.beforeFirstChunk)){var u=this._config.beforeFirstChunk(t);void 0!==u&&(t=u)}this.isFirstChunk=!1,this._halted=!1;var c=this._partialLine+t;this._partialLine="";var f=this._handle.parse(c,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var _=f.meta.cursor;this._finished||(this._partialLine=c.substring(_-this._baseIndex),this._baseIndex=_),f&&f.data&&(this._rowCount+=f.data.length);var o=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(le)e.postMessage({results:f,workerId:g.WORKER_ID,finished:o});else if(v(this._config.chunk)&&!s){if(this._config.chunk(f,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);f=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(f.data),this._completeResults.errors=this._completeResults.errors.concat(f.errors),this._completeResults.meta=f.meta),this._completed||!o||!v(this._config.complete)||f&&f.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),o||f&&f.meta.paused||this._nextChunk(),f}this._halted=!0},this._sendError=function(t){v(this._config.error)?this._config.error(t):le&&this._config.error&&e.postMessage({workerId:g.WORKER_ID,error:t,finished:!1})}}function oe(n){var t;(n=n||{}).chunkSize||(n.chunkSize=g.RemoteChunkSize),N.call(this,n),this._nextChunk=V?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(s){this._input=s,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(t=new XMLHttpRequest,this._config.withCredentials&&(t.withCredentials=this._config.withCredentials),V||(t.onload=W(this._chunkLoaded,this),t.onerror=W(this._chunkError,this)),t.open(this._config.downloadRequestBody?"POST":"GET",this._input,!V),this._config.downloadRequestHeaders){var s=this._config.downloadRequestHeaders;for(var u in s)t.setRequestHeader(u,s[u])}this._config.chunkSize&&t.setRequestHeader("Range","bytes="+this._start+"-"+(this._start+this._config.chunkSize-1));try{t.send(this._config.downloadRequestBody)}catch(f){this._chunkError(f.message)}V&&0===t.status&&this._chunkError()}},this._chunkLoaded=function(){var u;4===t.readyState&&(t.status<200||400<=t.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:t.responseText.length,this._finished=!this._config.chunkSize||this._start>=(null===(u=t.getResponseHeader("Content-Range"))?-1:parseInt(u.substring(u.lastIndexOf("/")+1))),this.parseChunk(t.responseText)))},this._chunkError=function(s){this._sendError(new Error(t.statusText||s))}}function ae(n){var t,s;(n=n||{}).chunkSize||(n.chunkSize=g.LocalChunkSize),N.call(this,n);var u=typeof FileReader<"u";this.stream=function(c){this._input=c,s=c.slice||c.webkitSlice||c.mozSlice,u?((t=new FileReader).onload=W(this._chunkLoaded,this),t.onerror=W(this._chunkError,this)):t=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var c=this._input;if(this._config.chunkSize){var f=Math.min(this._start+this._config.chunkSize,this._input.size);c=s.call(c,this._start,f)}var _=t.readAsText(c,this._config.encoding);u||this._chunkLoaded({target:{result:_}})},this._chunkLoaded=function(c){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(c.target.result)},this._chunkError=function(){this._sendError(t.error)}}function te(n){var t;N.call(this,n=n||{}),this.stream=function(s){return t=s,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var s,u=this._config.chunkSize;return u?(s=t.substring(0,u),t=t.substring(u)):(s=t,t=""),this._finished=!t,this.parseChunk(s)}}}function de(n){N.call(this,n=n||{});var t=[],s=!0,u=!1;this.pause=function(){N.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){N.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(c){this._input=c,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){u&&1===t.length&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):s=!0},this._streamData=W(function(c){try{t.push("string"==typeof c?c:c.toString(this._config.encoding)),s&&(s=!1,this._checkIsFinished(),this.parseChunk(t.shift()))}catch(f){this._streamError(f)}},this),this._streamError=W(function(c){this._streamCleanUp(),this._sendError(c)},this),this._streamEnd=W(function(){this._streamCleanUp(),u=!0,this._streamData("")},this),this._streamCleanUp=W(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function fe(n){var t,s,u,c=Math.pow(2,53),f=-c,_=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,o=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,p=this,i=0,r=0,a=!1,l=!1,T=[],d={data:[],errors:[],meta:{}};if(v(n.step)){var m=n.step;n.step=function(h){if(d=h,q())A();else{if(A(),0===d.data.length)return;i+=h.data.length,n.preview&&i>n.preview?s.abort():(d.data=d.data[0],m(d,p))}}}function D(h){return"greedy"===n.skipEmptyLines?""===h.join("").trim():1===h.length&&0===h[0].length}function A(){return d&&u&&(M("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+g.DefaultDelimiter+"'"),u=!1),n.skipEmptyLines&&(d.data=d.data.filter(function(h){return!D(h)})),q()&&function(){if(d)if(Array.isArray(d.data[0])){for(var y=0;q()&&y<d.data.length;y++)d.data[y].forEach(h);d.data.splice(0,1)}else d.data.forEach(h);function h(Z,x){v(n.transformHeader)&&(Z=n.transformHeader(Z,x)),T.push(Z)}}(),function(){if(!d||!n.header&&!n.dynamicTyping&&!n.transform)return d;function h(Z,x){var C,P=n.header?{}:[];for(C=0;C<Z.length;C++){var O=C,b=Z[C];n.header&&(O=C>=T.length?"__parsed_extra":T[C]),n.transform&&(b=n.transform(b,O)),b=E(O,b),"__parsed_extra"===O?(P[O]=P[O]||[],P[O].push(b)):P[O]=b}return n.header&&(C>T.length?M("FieldMismatch","TooManyFields","Too many fields: expected "+T.length+" fields but parsed "+C,r+x):C<T.length&&M("FieldMismatch","TooFewFields","Too few fields: expected "+T.length+" fields but parsed "+C,r+x)),P}var y=1;return!d.data.length||Array.isArray(d.data[0])?(d.data=d.data.map(h),y=d.data.length):d.data=h(d.data,0),n.header&&d.meta&&(d.meta.fields=T),r+=y,d}()}function q(){return n.header&&0===T.length}function E(h,y){return Z=h,n.dynamicTypingFunction&&void 0===n.dynamicTyping[Z]&&(n.dynamicTyping[Z]=n.dynamicTypingFunction(Z)),!0===(n.dynamicTyping[Z]||n.dynamicTyping)?"true"===y||"TRUE"===y||"false"!==y&&"FALSE"!==y&&(function(x){if(_.test(x)){var C=parseFloat(x);if(f<C&&C<c)return!0}return!1}(y)?parseFloat(y):o.test(y)?new Date(y):""===y?null:y):y;var Z}function M(h,y,Z,x){var C={type:h,code:y,message:Z};void 0!==x&&(C.row=x),d.errors.push(C)}this.parse=function(h,y,Z){if(n.newline||(n.newline=function(O,b){O=O.substring(0,1048576);var J=new RegExp(ne(b)+"([^]*?)"+ne(b),"gm"),I=(O=O.replace(J,"")).split("\r"),H=O.split("\n");if(1===I.length||1<H.length&&H[0].length<I[0].length)return"\n";for(var F=0,R=0;R<I.length;R++)"\n"===I[R][0]&&F++;return F>=I.length/2?"\r\n":"\r"}(h,n.quoteChar||'"')),u=!1,n.delimiter)v(n.delimiter)&&(n.delimiter=n.delimiter(h),d.meta.delimiter=n.delimiter);else{var C=function(O,b,J,I,H){var Q,F,R,U;H=H||[",","\t","|",";",g.RECORD_SEP,g.UNIT_SEP];for(var ie=0;ie<H.length;ie++){var k=H[ie],ue=0,K=0,re=0;R=void 0;for(var j=new S({comments:I,delimiter:k,newline:b,preview:10}).parse(O),$=0;$<j.data.length;$++)if(J&&D(j.data[$]))re++;else{var G=j.data[$].length;K+=G,void 0!==R?0<G&&(ue+=Math.abs(G-R),R=G):R=G}0<j.data.length&&(K/=j.data.length-re),(void 0===F||ue<=F)&&(void 0===U||U<K)&&1.99<K&&(F=ue,Q=k,U=K)}return{successful:!!(n.delimiter=Q),bestDelimiter:Q}}(h,n.newline,n.skipEmptyLines,n.comments,n.delimitersToGuess);C.successful?n.delimiter=C.bestDelimiter:(u=!0,n.delimiter=g.DefaultDelimiter),d.meta.delimiter=n.delimiter}var P=he(n);return n.preview&&n.header&&P.preview++,t=h,s=new S(P),d=s.parse(t,y,Z),A(),a?{meta:{paused:!0}}:d||{meta:{paused:!1}}},this.paused=function(){return a},this.pause=function(){a=!0,s.abort(),t=v(n.chunk)?"":t.substring(s.getCharIndex())},this.resume=function(){p.streamer._halted?(a=!1,p.streamer.parseChunk(t,!0)):setTimeout(p.resume,3)},this.aborted=function(){return l},this.abort=function(){l=!0,s.abort(),d.meta.aborted=!0,v(n.complete)&&n.complete(d),t=""}}function ne(n){return n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function S(n){var t,s=(n=n||{}).delimiter,u=n.newline,c=n.comments,f=n.step,_=n.preview,o=n.fastMode,p=t=null==n.quoteChar?'"':n.quoteChar;if(void 0!==n.escapeChar&&(p=n.escapeChar),("string"!=typeof s||-1<g.BAD_DELIMITERS.indexOf(s))&&(s=","),c===s)throw new Error("Comment character same as delimiter");!0===c?c="#":("string"!=typeof c||-1<g.BAD_DELIMITERS.indexOf(c))&&(c=!1),"\n"!==u&&"\r"!==u&&"\r\n"!==u&&(u="\n");var i=0,r=!1;this.parse=function(a,l,T){if("string"!=typeof a)throw new Error("Input must be a string");var d=a.length,m=s.length,D=u.length,A=c.length,q=v(f),E=[],M=[],h=[],y=i=0;if(!a)return L();if(n.header&&!l){var Z=a.split(u)[0].split(s),x=[],C={},P=!1;for(var O in Z){var b=Z[O];v(n.transformHeader)&&(b=n.transformHeader(b,O));var J=b,I=C[b]||0;for(0<I&&(P=!0,J=b+"_"+I),C[b]=I+1;x.includes(J);)J=J+"_"+I;x.push(J)}if(P){var H=a.split(u);H[0]=x.join(s),a=H.join(u)}}if(o||!1!==o&&-1===a.indexOf(t)){for(var Q=a.split(u),F=0;F<Q.length;F++){if(i+=(h=Q[F]).length,F!==Q.length-1)i+=u.length;else if(T)return L();if(!c||h.substring(0,A)!==c){if(q){if(E=[],re(h.split(s)),me(),r)return L()}else re(h.split(s));if(_&&_<=F)return E=E.slice(0,_),L(!0)}}return L()}for(var R=a.indexOf(s,i),U=a.indexOf(u,i),ie=new RegExp(ne(p)+ne(t),"g"),k=a.indexOf(t,i);;)if(a[i]!==t)if(c&&0===h.length&&a.substring(i,i+A)===c){if(-1===U)return L();U=a.indexOf(u,i=U+D),R=a.indexOf(s,i)}else if(-1!==R&&(R<U||-1===U))h.push(a.substring(i,R)),R=a.indexOf(s,i=R+m);else{if(-1===U)break;if(h.push(a.substring(i,U)),G(U+D),q&&(me(),r))return L();if(_&&E.length>=_)return L(!0)}else for(k=i,i++;;){if(-1===(k=a.indexOf(t,k+1)))return T||M.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:E.length,index:i}),$();if(k===d-1)return $(a.substring(i,k).replace(ie,t));if(t!==p||a[k+1]!==p){if(t===p||0===k||a[k-1]!==p){-1!==R&&R<k+1&&(R=a.indexOf(s,k+1)),-1!==U&&U<k+1&&(U=a.indexOf(u,k+1));var ue=j(-1===U?R:Math.min(R,U));if(a.substr(k+1+ue,m)===s){h.push(a.substring(i,k).replace(ie,t)),a[i=k+1+ue+m]!==t&&(k=a.indexOf(t,i)),R=a.indexOf(s,i),U=a.indexOf(u,i);break}var K=j(U);if(a.substring(k+1+K,k+1+K+D)===u){if(h.push(a.substring(i,k).replace(ie,t)),G(k+1+K+D),R=a.indexOf(s,i),k=a.indexOf(t,i),q&&(me(),r))return L();if(_&&E.length>=_)return L(!0);break}M.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:E.length,index:i}),k++}}else k++}return $();function re(z){E.push(z),y=i}function j(z){var Te=0;if(-1!==z){var ve=a.substring(k+1,z);ve&&""===ve.trim()&&(Te=ve.length)}return Te}function $(z){return T||(void 0===z&&(z=a.substring(i)),h.push(z),i=d,re(h),q&&me()),L()}function G(z){i=z,re(h),h=[],U=a.indexOf(u,i)}function L(z){return{data:E,errors:M,meta:{delimiter:s,linebreak:u,aborted:r,truncated:!!z,cursor:y+(l||0)}}}function me(){f(L()),E=[],M=[]}},this.abort=function(){r=!0},this.getCharIndex=function(){return i}}function ce(n){var t=n.data,s=se[t.workerId],u=!1;if(t.error)s.userError(t.error,t.file);else if(t.results&&t.results.data){var c={abort:function(){u=!0,ge(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:_e,resume:_e};if(v(s.userStep)){for(var f=0;f<t.results.data.length&&(s.userStep({data:t.results.data[f],errors:t.results.errors,meta:t.results.meta},c),!u);f++);delete t.results}else v(s.userChunk)&&(s.userChunk(t.results,c,t.file),delete t.results)}t.finished&&!u&&ge(t.workerId,t.results)}function ge(n,t){var s=se[n];v(s.userComplete)&&s.userComplete(t),s.terminate(),delete se[n]}function _e(){throw new Error("Not implemented.")}function he(n){if("object"!=typeof n||null===n)return n;var t=Array.isArray(n)?[]:{};for(var s in n)t[s]=he(n[s]);return t}function W(n,t){return function(){n.apply(t,arguments)}}function v(n){return"function"==typeof n}return le&&(e.onmessage=function(n){var t=n.data;if(void 0===g.WORKER_ID&&t&&(g.WORKER_ID=t.workerId),"string"==typeof t.input)e.postMessage({workerId:g.WORKER_ID,results:g.parse(t.input,t.config),finished:!0});else if(e.File&&t.input instanceof File||t.input instanceof Object){var s=g.parse(t.input,t.config);s&&e.postMessage({workerId:g.WORKER_ID,results:s,finished:!0})}}),(oe.prototype=Object.create(N.prototype)).constructor=oe,(ae.prototype=Object.create(N.prototype)).constructor=ae,(te.prototype=Object.create(te.prototype)).constructor=te,(de.prototype=Object.create(N.prototype)).constructor=de,g},void 0!==(X=w.apply(pe,[]))&&(Ce.exports=X)}}]);