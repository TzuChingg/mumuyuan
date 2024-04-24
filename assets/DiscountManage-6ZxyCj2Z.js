import{S as F}from"./SelectList-7fhzU0Wq.js";import{B as V}from"./BackendFunctions-F3Dcg7iS.js";import{_ as C,r as u,o as c,c as r,a as t,s as b,b as i,d as v,F as x,t as m,v as B,w as D,e as g,h as k,j as L,T as j,p as I,f as U}from"./index-siXnFxwx.js";const T={components:{BackendFunctions:V,SelectList:F},data(){return{discount:[],downDiscount:[],thisPage:[],thisPage2:[],page:1,pg:12,select:"1",options:[{value:"1",label:"優惠券管理"},{value:"2",label:"下架優惠券"}],options2:[{value:"2",label:"下架優惠券"},{value:"1",label:"優惠券管理"}],dataForm:{name:"",image:"",point:"",calc:"",isLook:!1,description:""}}},computed:{startIndex(){return(this.page-1)*this.pg},endIndex(){return this.startIndex+this.pg}},methods:{prevPage(){this.page>1&&(this.page--,this.select==1?this.updateThisPage():this.select==2&&this.updatePage())},nextPage(){this.thisPage.length>=this.pg&&(this.page++,this.select==1?this.updateThisPage():this.select==2&&this.updatePage())},updateThisPage(){this.thisPage=this.discount.slice(this.startIndex,this.endIndex)},updatePage(){this.thisPage2=this.downDiscount.slice(this.startIndex,this.endIndex)},uploadFile(a){const s=a.target.files[0];this.dataForm.image=s},get(a){this.select=a},pushData(){this.$axios.post("/coupons",this.dataForm).then(()=>{location.reload()})},goDown(a){const s={isLook:!0};this.$axios.patch(`/coupons/${a}`,s).then(()=>{location.reload()})},goon(a){const s={isLook:!1};this.$axios.patch(`/coupons/${a}`,s).then(()=>{location.reload()})},update(a,s){const f={point:`${s}`};this.$axios.patch(`/coupons/${a}`,f)},del(a){this.$axios.delete(`/coupons/${a}`).then(()=>{location.reload()})}},mounted(){this.$axios.get("/coupons").then(a=>{a.data.forEach(s=>{s.isLook==!1?this.discount.push({title:s.name,point:s.point,id:s.id}):this.downDiscount.push({title:s.name,point:s.point,id:s.id}),this.updateThisPage(),this.updatePage()})})}},n=a=>(I("data-v-81aec28e"),a=a(),U(),a),M={class:"d-flex"},S={class:"sidebar border-5 pt-3 border-end d-flex bg-secondary flex-column"},q={key:0,class:"main"},E={class:"container mt-5"},N={class:"mt-3"},z={class:"row justify-content-between"},A=n(()=>t("div",{class:"col-2"},[t("button",{type:"button",class:"btn btn-primary","data-bs-toggle":"modal","data-bs-target":"#exampleModal"}," 新增優惠券 ")],-1)),G={class:"col-2"},H={class:"row row-cols-4 mt-2"},J={class:"card my-2 bg-light"},K={class:"cardbody"},O={class:"text-center mt-4"},Q={class:"row px-3 justify-content-center align-items-center py-3"},R=n(()=>t("div",{class:"col-4 fs-4"},[t("label",{for:"money",class:"ms-3"},"點數:")],-1)),W={class:"col-6"},X=["onUpdate:modelValue","placeholder"],Y={class:"row text-center align-items-center py-3"},Z={class:"col-6"},$=["data-bs-target"],tt={class:"col-6"},st=["data-bs-target"],et=["id"],ot={class:"modal-dialog"},at={class:"modal-content border-0"},dt=n(()=>t("div",{class:"modal-body fs-3"},"是否下架折價券?",-1)),nt={class:"modal-footer border-0"},it=n(()=>t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," 取消 ",-1)),lt=["onClick"],ct=["id"],rt={class:"modal-dialog"},bt={class:"modal-content border-0"},mt={class:"modal-body fs-3"},_t={class:"modal-footer border-0"},ht=n(()=>t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," 取消 ",-1)),pt=["onClick"],ut={class:"d-flex justify-content-center h-25 mt-3"},gt=["disabled"],ft={class:"fs-3 text-primary mx-3"},yt=["disabled"],vt={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},xt={class:"modal-dialog"},kt={class:"modal-content"},wt=n(()=>t("div",{class:"modal-header"},[t("h5",{class:"modal-title",id:"exampleModalLabel"},"折價券內容")],-1)),Pt={class:"modal-body bg-secondary"},Ft={class:"card border-0 bg-secondary"},Vt={class:"cardbody mt-4"},Ct={class:"d-flex h-25 justify-content-center mt-3"},Bt={class:"d-flex h-25 justify-content-center mt-5 mb-2"},Dt=n(()=>t("label",{for:"title",class:"fs-3 me-2"},"券名:",-1)),Lt={class:"d-flex h-25 justify-content-center mb-2"},jt=n(()=>t("label",{for:"point",class:"fs-3 me-2"},"點數:",-1)),It={class:"d-flex h-25 justify-content-center mb-2"},Ut=n(()=>t("label",{for:"money",class:"fs-3 me-2"},"折扣:",-1)),Tt={class:"d-flex h-25 justify-content-center mb-2"},Mt=n(()=>t("label",{for:"de",class:"fs-3 me-2"},"介紹:",-1)),St=n(()=>t("div",{class:"modal-footer"},[t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," 關閉 "),t("button",{type:"submit",class:"btn btn-primary"}," 新增 ")],-1)),qt={key:1,class:"main"},Et={class:"container mt-5"},Nt={class:"my-3"},zt={class:"row justify-content-end"},At={class:"col-2"},Gt={class:"row row-cols-4"},Ht={class:"card my-2 bg-light"},Jt={class:"cardbody"},Kt={class:"text-center mt-4"},Ot={class:"row px-3 text-center align-items-center py-1"},Qt=n(()=>t("div",{class:"col-6 fs-4"},[t("label",{for:"money",class:"ms-5"},"點數:")],-1)),Rt={class:"col-6 mt-2"},Wt={class:"me-6"},Xt={class:"row text-center align-items-center py-3"},Yt={class:"col-6"},Zt=["data-bs-target"],$t={class:"col-6"},ts=["data-bs-target"],ss=["id"],es={class:"modal-dialog"},os={class:"modal-content border-0"},as=n(()=>t("div",{class:"modal-body fs-3"},"是否上架折價券?",-1)),ds={class:"modal-footer border-0"},ns=n(()=>t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," 取消 ",-1)),is=["onClick"],ls=["id"],cs={class:"modal-dialog"},rs={class:"modal-content border-0"},bs=n(()=>t("div",{class:"modal-body fs-3"},"是否刪除折價券?",-1)),ms={class:"modal-footer border-0"},_s=n(()=>t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," 取消 ",-1)),hs=["onClick"],ps={class:"d-flex justify-content-center h-25 mt-3"},us=["disabled"],gs={class:"fs-3 text-primary mx-3"},fs=["disabled"];function ys(a,s,f,vs,o,d){const w=u("BackendFunctions"),y=u("select-list"),_=u("VField"),h=u("ErrorMessage"),P=u("VForm");return c(),r("div",M,[t("aside",S,[s[0]||(b(-1),s[0]=i(w),b(1),s[0])]),i(j,{name:"fade",mode:"out-in"},{default:v(()=>[o.select==1?(c(),r("main",q,[t("div",E,[t("div",N,[t("div",z,[A,t("div",G,[s[1]||(b(-1),s[1]=i(y,{options:o.options,onUpdata:d.get},null,8,["options","onUpdata"]),b(1),s[1])])])]),t("div",H,[(c(!0),r(x,null,k(o.thisPage,(e,l)=>(c(),r("div",{class:"col",key:l},[t("div",J,[t("div",K,[t("h4",O,m(e.title),1),t("div",Q,[R,t("div",W,[D(t("input",{"onUpdate:modelValue":p=>e.point=p,type:"number",id:"money",class:"form-control shadow-none",placeholder:e.point},null,8,X),[[B,e.point]])])]),t("div",Y,[t("div",Z,[t("button",{type:"button",class:"btn btn-danger ms-6","data-bs-toggle":"modal","data-bs-target":"#goDown"+l}," 下架 ",8,$)]),t("div",tt,[t("button",{type:"button",class:"btn btn-primary me-6","data-bs-toggle":"modal","data-bs-target":"#update"+l}," 修改 ",8,st)])])])]),t("div",{class:"modal fade",id:"goDown"+l,"data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"},[g(" 0 "),t("div",ot,[t("div",at,[dt,t("div",nt,[it,t("button",{type:"button",class:"btn btn-primary","data-bs-dismiss":"modal",onClick:p=>d.goDown(e.id)}," 確認 ",8,lt)])])])],8,et),t("div",{class:"modal fade",id:"update"+l,"data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"},[g(" 0 "),t("div",rt,[t("div",bt,[t("div",mt,"是否修改 "+m(e.title)+" 產品價錢?",1),t("div",_t,[ht,t("button",{type:"button",class:"btn btn-primary","data-bs-dismiss":"modal",onClick:p=>d.update(e.id,e.point)}," 確認 ",8,pt)])])])],8,ct)]))),128))]),t("div",ut,[t("button",{class:"btn btn-primary",onClick:s[2]||(s[2]=(...e)=>d.prevPage&&d.prevPage(...e)),disabled:o.page===1},"上一页",8,gt),t("strong",ft,m(o.page),1),t("button",{class:"btn btn-primary",onClick:s[3]||(s[3]=(...e)=>d.nextPage&&d.nextPage(...e)),disabled:o.thisPage.length<o.pg}," 下一页 ",8,yt)]),t("div",vt,[i(P,{onSubmit:d.pushData},{default:v(()=>[t("div",xt,[t("div",kt,[wt,t("div",Pt,[t("div",Ft,[t("div",Vt,[t("div",Ct,[i(_,{class:"form-control w-50",type:"file",id:"formFile",name:"圖片",onChange:d.uploadFile,rules:"required"},null,8,["onChange"]),i(h,{name:"圖片",class:"text-danger"})]),t("div",Bt,[Dt,i(_,{type:"text",id:"title",name:"券名",placeholder:"優惠券名稱",class:"form-control border-1 shadow-none w-50",rules:"required",modelValue:o.dataForm.name,"onUpdate:modelValue":s[4]||(s[4]=e=>o.dataForm.name=e)},null,8,["modelValue"]),i(h,{name:"券名",class:"text-danger"})]),t("div",Lt,[jt,i(_,{type:"text",id:"point",name:"點數",placeholder:"點數",class:"form-control border-1 shadow-none w-50",rules:"required|numeric",modelValue:o.dataForm.calc,"onUpdate:modelValue":s[5]||(s[5]=e=>o.dataForm.calc=e)},null,8,["modelValue"]),i(h,{name:"點數",class:"text-danger"})]),t("div",It,[Ut,i(_,{type:"text",id:"money",name:"折扣",placeholder:"折抵金額",class:"form-control border-1 shadow-none w-50",rules:"required|numeric",modelValue:o.dataForm.point,"onUpdate:modelValue":s[6]||(s[6]=e=>o.dataForm.point=e)},null,8,["modelValue"]),i(h,{name:"折扣",class:"text-danger"})]),t("div",Tt,[Mt,i(_,{as:"textarea",id:"description",name:"介紹",placeholder:"內容",class:"form-control border-1 shadow-none w-50",rules:"required",modelValue:o.dataForm.description,"onUpdate:modelValue":s[7]||(s[7]=e=>o.dataForm.description=e)},null,8,["modelValue"]),i(h,{name:"介紹",class:"text-danger"})])])])]),St])])]),_:1},8,["onSubmit"])])])])):o.select==2?(c(),r("main",qt,[t("div",Et,[t("div",Nt,[t("div",zt,[t("div",At,[s[8]||(b(-1),s[8]=i(y,{options:o.options2,onUpdata:d.get},null,8,["options","onUpdata"]),b(1),s[8])])])]),t("div",Gt,[(c(!0),r(x,null,k(o.thisPage2,(e,l)=>(c(),r("div",{class:"col",key:l},[t("div",Ht,[t("div",Jt,[t("h4",Kt,m(e.title),1),t("div",Ot,[Qt,t("div",Rt,[t("h4",Wt,m(e.point),1)])]),t("div",Xt,[t("div",Yt,[t("button",{type:"button",class:"btn btn-danger ms-6","data-bs-toggle":"modal","data-bs-target":"#goon"+l}," 上架 ",8,Zt)]),t("div",$t,[t("button",{type:"button",class:"btn btn-danger me-6","data-bs-toggle":"modal","data-bs-target":"#del"+l}," 刪除 ",8,ts)])])])]),t("div",{class:"modal fade",id:"goon"+l,"data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"},[g(" 0 "),t("div",es,[t("div",os,[as,t("div",ds,[ns,t("button",{type:"button",class:"btn btn-primary","data-bs-dismiss":"modal",onClick:p=>d.goon(e.id)}," 確認 ",8,is)])])])],8,ss),t("div",{class:"modal fade",id:"del"+l,"data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"},[g(" 0 "),t("div",cs,[t("div",rs,[bs,t("div",ms,[_s,t("button",{type:"button",class:"btn btn-primary","data-bs-dismiss":"modal",onClick:p=>d.del(e.id)}," 確認 ",8,hs)])])])],8,ls)]))),128))]),t("div",ps,[t("button",{class:"btn btn-primary",onClick:s[9]||(s[9]=(...e)=>d.prevPage&&d.prevPage(...e)),disabled:o.page===1},"上一页",8,us),t("strong",gs,m(o.page),1),t("button",{class:"btn btn-primary",onClick:s[10]||(s[10]=(...e)=>d.nextPage&&d.nextPage(...e)),disabled:o.thisPage.length<o.pg}," 下一页 ",8,fs)])])])):L("",!0)]),_:1})])}const Ps=C(T,[["render",ys],["__scopeId","data-v-81aec28e"]]);export{Ps as default};
