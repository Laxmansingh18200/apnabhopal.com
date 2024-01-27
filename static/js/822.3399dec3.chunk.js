"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[822],{514:function(e,t,s){s.d(t,{zx:function(){return x},Jg:function(){return m},Ei:function(){return p},II:function(){return u},x1:function(){return h},aV:function(){return v},h1:function(){return b},xv:function(){return I}});var l=s(593),i=s(738),r=s(791),n=s(184),a=["children","className","leftIcon","rightIcon","shape","size","variant","color"],x=function(e){var t=e.children,s=e.className,r=void 0===s?"":s,x=e.leftIcon,c=e.rightIcon,o=(e.shape,e.size,e.variant,e.color,(0,i.Z)(e,a));return(0,n.jsxs)("button",(0,l.Z)((0,l.Z)({className:"".concat(r)},o),{},{children:[!!x&&x,t,!!c&&c]}))},c=function(e){var t=e.errors,s=void 0===t?[]:t,l=e.className,i=void 0===l?"":l;return(null===s||void 0===s?void 0:s.length)>0&&(0,n.jsx)("div",{className:"text-red-500 text-left text-xs w-full mt-1 ".concat(i),children:s.join(", ")})},o=["inputClassName","className","name","children","label","errors","shape","size","variant","color","id","onChange"],m=r.forwardRef((function(e,t){var s=e.inputClassName,r=void 0===s?"":s,a=e.className,x=void 0===a?"":a,m=e.name,d=void 0===m?"":m,p=e.children,f=e.label,u=void 0===f?"":f,g=e.errors,h=void 0===g?[]:g,j=(e.shape,e.size,e.variant,e.color,e.id),v=void 0===j?"checkbox_id":j,N=e.onChange,w=(0,i.Z)(e,o);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:x,children:[(0,n.jsx)("input",(0,l.Z)((0,l.Z)({className:"".concat(r),ref:t,type:"checkbox",name:d,onChange:function(e){var t;N&&N(null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.checked)}},w),{},{id:v})),(0,n.jsx)("label",{htmlFor:v,children:u})]}),(0,n.jsx)(c,{errors:h}),p]})})),d=["className","src","alt"],p=function(e){var t=e.className,s=e.src,r=void 0===s?"defaultNoData.png":s,a=e.alt,x=void 0===a?"testImg":a,c=(0,i.Z)(e,d);return(0,n.jsx)("img",(0,l.Z)((0,l.Z)({className:t,src:r,alt:x},c),{},{loading:"lazy"}))},f=["wrapClassName","className","name","placeholder","type","children","errors","label","prefix","suffix","onChange","shape","size","variant","color"],u=r.forwardRef((function(e,t){var s=e.wrapClassName,r=void 0===s?"":s,a=e.className,x=void 0===a?"":a,o=e.name,m=void 0===o?"":o,d=e.placeholder,p=void 0===d?"":d,u=e.type,g=void 0===u?"text":u,h=(e.children,e.errors),j=void 0===h?[]:h,v=e.label,N=void 0===v?"":v,w=e.prefix,b=e.suffix,y=e.onChange,k=(e.shape,e.size,e.variant,e.color,(0,i.Z)(e,f));return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"".concat(r," \n               \n               \n              "),children:[!!N&&N,!!w&&w,(0,n.jsx)("input",(0,l.Z)({ref:t,className:"".concat(x," bg-transparent border-0"),type:g,name:m,onChange:function(e){var t;y&&y(null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value)},placeholder:p},k)),!!b&&b]}),!!j&&(0,n.jsx)(c,{errors:j})]})})),g=["className"],h=function(e){var t=e.className,s=(0,i.Z)(e,g);return(0,n.jsx)("div",(0,l.Z)({className:t},s))},j=["children","className"],v=function(e){var t=e.children,s=e.className,r=(0,i.Z)(e,j);return(0,n.jsx)("div",(0,l.Z)((0,l.Z)({className:s},r),{},{children:t}))},N=s(890),w=["className","activeCss","inactiveCss","sliderRef","count","activeIndex","selectedWrapperCss","unselectedWrapperCss"],b=function(e){var t=e.className,s=e.activeCss,a=e.inactiveCss,x=e.sliderRef,c=void 0===x?null:x,o=e.count,m=e.activeIndex,d=e.selectedWrapperCss,p=void 0===d?"":d,f=e.unselectedWrapperCss,u=void 0===f?"":f,g=(0,i.Z)(e,w),h=r.useState(0),j=(0,N.Z)(h,2),v=j[0],b=j[1];return r.useEffect((function(){var e,t,s=null===c||void 0===c||null===(e=c.current)||void 0===e||null===(t=e.state)||void 0===t?void 0:t.itemsInSlide;b(s)}),[c]),(0,n.jsx)("div",(0,l.Z)((0,l.Z)({className:t},g),{},{children:Array(o).fill(0).map((function(e,t){var l=m>=t*v&&m<(t+1)*v;return(0,n.jsx)("div",{className:"".concat(l?p:u," "),children:(0,n.jsx)("span",{className:"".concat(l?s:a," slider-indicator"),onClick:function(){var e;return null===c||void 0===c||null===(e=c.current)||void 0===e?void 0:e.slideTo(t*v)}})},"indicator"+t)}))}))},y=["children","className","size","as"],k={txtInterSemiBold24WhiteA700:"font-inter font-semibold",txtInterRegular14Black900:"font-inter font-normal",txtInterSemiBold18WhiteA70087:"font-inter font-semibold",txtInterSemiBold48:"font-inter font-semibold",txtInterRegular12WhiteA700:"font-inter font-normal",txtInterRegular18Black90087:"font-inter font-normal",txtInterRegular14Bluegray900:"font-inter font-normal",txtInterSemiBold24:"font-inter font-semibold",txtInterRegular14Black90087:"font-inter font-normal",txtInterSemiBold36Black900:"font-inter font-semibold",txtPoppinsRegular28:"font-normal font-poppins",txtPoppinsBold14:"font-bold font-poppins",txtPoppinsRegular10:"font-normal font-poppins",txtInterSemiBold14Black90090:"font-inter font-semibold",txtPoppinsRegular12:"font-normal font-poppins",txtInterSemiBold10:"font-inter font-semibold",txtPoppinsRegular10Black90087:"font-normal font-poppins",txtInterRegular16Black900:"font-inter font-normal",txtInterRegular14Black9007f:"font-inter font-normal",txtInterSemiBold48Black900:"font-inter font-semibold",txtPoppinsMedium16:"font-medium font-poppins",txtInterSemiBold14Bluegray900:"font-inter font-semibold",txtInterBold18:"font-bold font-inter",txtInterRegular12Black9007f:"font-inter font-normal",txtInterSemiBold18Black900:"font-inter font-semibold",txtInterRegular10:"font-inter font-normal",txtInterSemiBold36:"font-inter font-semibold",txtInterBold36:"font-bold font-inter",txtInterBold14:"font-bold font-inter",txtInterSemiBold14:"font-inter font-semibold",txtInterSemiBold12:"font-inter font-semibold",txtInterSemiBold18Black90087:"font-inter font-semibold",txtInterSemiBold18:"font-inter font-semibold",txtPoppinsRegular14:"font-normal font-poppins",txtPoppinsRegular15:"font-normal font-poppins",txtPoppinsRegular17:"font-normal font-poppins",txtInterRegular12WhiteA70087:"font-inter font-normal",txtInterRegular18Black900:"font-inter font-normal",txtPoppinsSemiBold20:"font-poppins font-semibold",txtInterBold18WhiteA700:"font-bold font-inter",txtInterRegular12:"font-inter font-normal",txtInterRegular18Black9007f:"font-inter font-normal",txtInterSemiBold10Black900:"font-inter font-semibold",txtInterRegular14:"font-inter font-normal",txtInterSemiBold12WhiteA700:"font-inter font-semibold",txtInterRegular16:"font-inter font-normal",txtInterRegular18:"font-inter font-normal"},I=function(e){var t=e.children,s=e.className,r=void 0===s?"":s,a=e.size,x=e.as,c=(0,i.Z)(e,y),o=x||"p";return(0,n.jsx)(o,(0,l.Z)((0,l.Z)({className:"text-left ".concat(r," ").concat(a&&k[a])},c),{},{children:t}))}},822:function(e,t,s){s.r(t);s(791);var l=s(871),i=s(514),r=s(184);t.default=function(){var e=(0,l.s0)();return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"bg-white-A700 flex flex-col font-inter gap-[50px] items-center justify-start mx-auto w-full",children:[(0,r.jsx)("header",{className:"flex items-center justify-center md:px-5 w-full",children:(0,r.jsx)("div",{className:"bg-bluegray-900 flex flex-row items-center justify-center p-[26px] sm:px-5 w-full",children:(0,r.jsxs)("div",{className:"flex md:flex-col flex-row md:gap-5 items-center justify-center w-[94%]",children:[(0,r.jsx)(i.xv,{className:"text-4xl sm:text-[32px] md:text-[34px] text-white-A700 tracking-[-0.50px]",size:"txtInterSemiBold36",children:"Neuzy"}),(0,r.jsxs)("div",{className:"flex md:flex-col flex-row gap-6 items-center justify-center md:ml-[0] ml-[173px] w-[47%] md:w-full",children:[(0,r.jsx)(i.xv,{className:"text-lg text-white-A700 tracking-[-0.50px]",size:"txtInterSemiBold18",children:"Sport"}),(0,r.jsx)(i.xv,{className:"text-lg text-white-A700 tracking-[-0.50px]",size:"txtInterSemiBold18",children:"Health"}),(0,r.jsx)(i.xv,{className:"text-lg text-white-A700 tracking-[-0.50px]",size:"txtInterSemiBold18",children:"Political"}),(0,r.jsx)(i.xv,{className:"text-lg text-white-A700 tracking-[-0.50px]",size:"txtInterSemiBold18",children:"Business"}),(0,r.jsx)(i.xv,{className:"text-lg text-white-A700 tracking-[-0.50px]",size:"txtInterSemiBold18",children:"Finance"}),(0,r.jsx)(i.xv,{className:"text-lg text-white-A700 tracking-[-0.50px]",size:"txtInterSemiBold18",children:"Life"}),(0,r.jsx)(i.xv,{className:"text-lg text-white-A700 tracking-[-0.50px]",size:"txtInterSemiBold18",children:"Entertainment"})]}),(0,r.jsxs)("div",{className:"flex flex-row items-center justify-between md:ml-[0] ml-[214px] w-[15%] md:w-full",children:[(0,r.jsx)(i.Ei,{className:"common-pointer h-6 w-6",src:"images/img_search.svg",alt:"search",onClick:function(){return e("/search")}}),(0,r.jsx)(i.x1,{className:"bg-white-A700 h-[26px] w-px"}),(0,r.jsxs)("div",{className:"flex flex-row gap-5 items-center justify-between w-[56%]",children:[(0,r.jsx)(i.xv,{className:"common-pointer text-sm text-white-A700 tracking-[-0.50px]",size:"txtInterRegular14",onClick:function(){return e("/login")},children:"Login"}),(0,r.jsx)(i.xv,{className:"common-pointer text-sm text-white-A700 tracking-[-0.50px]",size:"txtInterRegular14",onClick:function(){return e("/register")},children:"Register"})]})]})]})})}),(0,r.jsxs)("div",{className:"flex flex-col items-center justify-start w-full",children:[(0,r.jsxs)("div",{className:"flex flex-col gap-10 items-center justify-start max-w-[944px] mx-auto md:px-5 w-full",children:[(0,r.jsx)(i.xv,{className:"text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center tracking-[-0.50px] w-3/4 sm:w-full",size:"txtInterSemiBold36Black900",children:"Subscribe now for the latest and exclusive information alerts"}),(0,r.jsx)(i.xv,{className:"leading-[35.00px] text-black-900_7f text-center text-lg tracking-[-0.50px] w-full",size:"txtInterRegular18Black9007f",children:(0,r.jsx)(r.Fragment,{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."})})]}),(0,r.jsxs)("div",{className:"flex flex-col font-poppins gap-[50px] items-center justify-start max-w-[1140px] mt-[50px] mx-auto md:px-5 w-full",children:[(0,r.jsxs)("div",{className:"bg-white-A700 flex flex-row gap-[30px] items-center justify-center sm:pr-5 pr-[39px] rounded-[22px] w-1/5 md:w-full",children:[(0,r.jsx)(i.zx,{className:"bg-bluegray-900 cursor-pointer leading-[normal] min-w-[111px] py-[17px] rounded-lg text-[10px] text-center text-white-A700 tracking-[0.83px]",children:"MONTHLY"}),(0,r.jsx)(i.xv,{className:"text-[10px] text-black-900 tracking-[0.83px]",size:"txtPoppinsRegular10",children:"YEARLY"})]}),(0,r.jsxs)(i.aV,{className:"sm:flex-col flex-row md:gap-10 gap-[60px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full",orientation:"horizontal",children:[(0,r.jsxs)("div",{className:"border border-bluegray-900 border-solid flex flex-1 flex-col items-start justify-end p-9 sm:px-5 w-full",children:[(0,r.jsx)(i.xv,{className:"ml-1 md:ml-[0] mt-[11px] sm:text-2xl md:text-[26px] text-[28px] text-black-900",size:"txtPoppinsRegular28",children:"Starter"}),(0,r.jsxs)("div",{className:"flex flex-row items-end justify-start ml-1 md:ml-[0] mt-7 w-[52%] md:w-full",children:[(0,r.jsx)(i.xv,{className:"text-4xl sm:text-[32px] md:text-[34px] text-black-900 tracking-[-0.50px]",size:"txtInterSemiBold36Black900",children:"$20"}),(0,r.jsx)(i.xv,{className:"ml-[5px] mt-[17px] text-[17px] text-black-900_87",size:"txtPoppinsRegular17",children:"/month"})]}),(0,r.jsx)(i.x1,{className:"bg-gray-200 h-px ml-1 md:ml-[0] mt-4 w-[98%]"}),(0,r.jsxs)("div",{className:"flex flex-col font-poppins items-start justify-start ml-1 md:ml-[0] mt-6",children:[(0,r.jsx)(i.xv,{className:"text-[15px] text-black-900_a2",size:"txtPoppinsRegular15",children:"Access All News"}),(0,r.jsx)(i.xv,{className:"mt-6 text-[15px] text-black-900_a2",size:"txtPoppinsRegular15",children:"Latest News Notification"}),(0,r.jsx)(i.xv,{className:"mt-[25px] text-[15px] text-black-900_a2",size:"txtPoppinsRegular15",children:"Send News Articles"}),(0,r.jsx)(i.xv,{className:"mt-[25px] text-[15px] text-black-900_a2",size:"txtPoppinsRegular15",children:"Latest Movie Recommendation"}),(0,r.jsx)(i.xv,{className:"mt-[27px] text-[15px] text-black-900_a2",size:"txtPoppinsRegular15",children:"Updated News"})]}),(0,r.jsx)(i.zx,{className:"border border-bluegray-900 border-solid cursor-pointer font-inter leading-[normal] min-w-[260px] ml-1 md:ml-[0] mt-6 py-[15px] text-bluegray-900 text-center text-lg tracking-[-0.50px]",children:"Subscribe"})]}),(0,r.jsxs)("div",{className:"border border-bluegray-900 border-solid flex flex-1 flex-col gap-[50px] items-center justify-end p-9 sm:px-5 w-full",children:[(0,r.jsx)(i.xv,{className:"mt-[7px] sm:text-2xl md:text-[26px] text-[28px] text-black-900",size:"txtPoppinsRegular28",children:"MOST POPULAR"}),(0,r.jsxs)("div",{className:"flex flex-col items-start justify-start w-[98%] md:w-full",children:[(0,r.jsx)(i.xv,{className:"sm:text-2xl md:text-[26px] text-[28px] text-black-900",size:"txtPoppinsRegular28",children:"Pro"}),(0,r.jsxs)("div",{className:"flex flex-row gap-2 items-end justify-start mt-7 w-[62%] md:w-full",children:[(0,r.jsx)(i.xv,{className:"text-4xl sm:text-[32px] md:text-[34px] text-black-900 tracking-[-0.50px]",size:"txtInterSemiBold36Black900",children:"$100"}),(0,r.jsx)(i.xv,{className:"mt-[17px] text-[17px] text-black-900_87",size:"txtPoppinsRegular17",children:"/month"})]}),(0,r.jsx)(i.x1,{className:"bg-gray-200 h-px mt-4 w-full"}),(0,r.jsxs)("div",{className:"flex flex-col font-poppins items-start justify-start mt-6",children:[(0,r.jsx)(i.xv,{className:"text-[15px] text-black-900_a2",size:"txtPoppinsRegular15",children:"Access All News"}),(0,r.jsx)(i.xv,{className:"mt-6 text-[15px] text-black-900_a2",size:"txtPoppinsRegular15",children:"Latest News Notification"}),(0,r.jsx)(i.xv,{className:"mt-[25px] text-[15px] text-black-900_a2",size:"txtPoppinsRegular15",children:"Send News Articles"}),(0,r.jsx)(i.xv,{className:"mt-[25px] text-[15px] text-black-900_a2",size:"txtPoppinsRegular15",children:"Latest Movie Recommendation"}),(0,r.jsx)(i.xv,{className:"mt-[27px] text-[15px] text-black-900_a2",size:"txtPoppinsRegular15",children:"Updated News"})]}),(0,r.jsx)(i.zx,{className:"bg-bluegray-900 cursor-pointer font-inter leading-[normal] min-w-[260px] mt-6 py-[15px] text-center text-lg text-white-A700 tracking-[-0.50px]",children:"Subscribe"})]})]}),(0,r.jsxs)("div",{className:"border border-bluegray-900 border-solid flex flex-1 flex-col items-start justify-end p-9 sm:px-5 w-full",children:[(0,r.jsx)(i.xv,{className:"ml-1 md:ml-[0] mt-[13px] sm:text-2xl md:text-[26px] text-[28px] text-black-900",size:"txtPoppinsRegular28",children:"Enterprise"}),(0,r.jsxs)("div",{className:"flex flex-row items-end justify-start ml-1 md:ml-[0] mt-[22px] w-[61%] md:w-full",children:[(0,r.jsx)(i.xv,{className:"text-4xl sm:text-[32px] md:text-[34px] text-black-900 tracking-[-0.50px]",size:"txtInterSemiBold36Black900",children:"$200"}),(0,r.jsx)(i.xv,{className:"ml-[3px] mt-[17px] text-[17px] text-black-900_87",size:"txtPoppinsRegular17",children:"/month"})]}),(0,r.jsx)(i.x1,{className:"bg-gray-200 h-px ml-1 md:ml-[0] mt-4 w-[98%]"}),(0,r.jsxs)("div",{className:"flex flex-col font-poppins items-start justify-start ml-1 md:ml-[0] mt-6",children:[(0,r.jsx)(i.xv,{className:"text-[15px] text-black-900_a2",size:"txtPoppinsRegular15",children:"Access All News"}),(0,r.jsx)(i.xv,{className:"mt-6 text-[15px] text-black-900_a2",size:"txtPoppinsRegular15",children:"Latest News Notification"}),(0,r.jsx)(i.xv,{className:"mt-[25px] text-[15px] text-black-900_a2",size:"txtPoppinsRegular15",children:"Send News Articles"}),(0,r.jsx)(i.xv,{className:"mt-[25px] text-[15px] text-black-900_a2",size:"txtPoppinsRegular15",children:"Latest Movie Recommendation"}),(0,r.jsx)(i.xv,{className:"mt-[27px] text-[15px] text-black-900_a2",size:"txtPoppinsRegular15",children:"Updated News"})]}),(0,r.jsx)(i.xv,{className:"border border-bluegray-900 border-solid ml-1 md:ml-[0] mt-6 sm:px-5 px-[35px] py-[15px] text-bluegray-900 text-lg tracking-[-0.50px]",size:"txtInterRegular18",children:"Contact"})]})]})]}),(0,r.jsx)("div",{className:"flex flex-col font-inter items-center justify-start max-w-[1294px] mt-[120px] mx-auto pb-[34px] md:px-5 w-full",children:(0,r.jsxs)("div",{className:"flex flex-col gap-[49px] items-center justify-start w-full",children:[(0,r.jsxs)("div",{className:"flex flex-col gap-7 items-center justify-start rounded-lg w-full",children:[(0,r.jsxs)("div",{className:"flex sm:flex-col flex-row md:gap-10 items-start justify-between rounded-lg w-full",children:[(0,r.jsxs)(i.xv,{className:"mb-0.5 text-4xl sm:text-[32px] md:text-[34px] text-black-900 tracking-[-0.50px]",size:"txtInterSemiBold36Black900",children:["Hot Topic News"," "]}),(0,r.jsx)(i.zx,{className:"common-pointer bg-bluegray-900 cursor-pointer font-semibold leading-[normal] min-w-[122px] sm:mt-0 mt-[5px] py-3 rounded-lg text-center text-sm text-white-A700 tracking-[-0.50px]",onClick:function(){return e("/allblog")},children:"View All"})]}),(0,r.jsx)(i.x1,{className:"bg-black-900_7f h-px w-full"})]}),(0,r.jsxs)(i.aV,{className:"sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full",orientation:"horizontal",children:[(0,r.jsx)("div",{className:"flex flex-1 flex-col items-center justify-start w-full",children:(0,r.jsxs)("div",{className:"flex flex-col gap-[22px] items-start justify-start w-full",children:[(0,r.jsx)("div",{className:"bg-cover bg-no-repeat flex flex-col h-[246px] items-center justify-start w-full",style:{backgroundImage:"url('images/img_group38_13.png')"},children:(0,r.jsxs)("div",{className:"bg-gradient  flex flex-col md:gap-10 gap-[162px] justify-end p-[17px] w-full",children:[(0,r.jsx)(i.II,{name:"language One",placeholder:"Entertaiment ",className:"font-bold leading-[normal] p-0 placeholder:text-white-A700 text-left text-white-A700 text-xs tracking-[0.12px] w-full",wrapClassName:"bg-deep_purple-A700 md:ml-[0] ml-[267px] mr-1.5 mt-1.5 px-[15px] py-[5px] w-[29%]"}),(0,r.jsx)(i.xv,{className:"mr-[267px] text-white-A700 text-xs tracking-[-0.50px]",size:"txtInterRegular12WhiteA700",children:"Ukraine, 24 april 2022"})]})}),(0,r.jsxs)("div",{className:"flex flex-col items-center justify-start w-full",children:[(0,r.jsxs)(i.xv,{className:"text-black-900 text-lg tracking-[-0.50px] w-full",size:"txtInterSemiBold18Black900",children:["Zelensky accuses Russia of worst crimes since WW2"," "]}),(0,r.jsx)(i.xv,{className:"leading-[25.00px] text-black-900_87 text-xs tracking-[-0.50px] w-full",size:"txtPoppinsRegular12",children:"The Ukrainian leader says Russia must face an international trial as he calls for the country to be thrown off the UN Security Council."})]}),(0,r.jsx)(i.zx,{className:"common-pointer bg-black-900 cursor-pointer flex items-center justify-center min-w-[151px] ml-3 md:ml-[0] pl-[30px] py-2.5 rounded-lg",onClick:function(){return e("/sigleblog")},rightIcon:(0,r.jsx)(i.Ei,{className:"h-[18px] ml-[5px] mr-[30px] my-2.5",src:"images/img_upload.svg",alt:"upload"}),children:(0,r.jsx)("div",{className:"leading-[normal] sm:pl-5 text-left text-sm text-white-A700 tracking-[-0.50px]",children:"Read More"})})]})}),(0,r.jsx)("div",{className:"flex flex-1 flex-col items-center justify-start w-full",children:(0,r.jsxs)("div",{className:"flex flex-col gap-[21px] items-start justify-start w-full",children:[(0,r.jsx)("div",{className:"bg-cover bg-no-repeat flex flex-col h-[247px] items-center justify-start w-full",style:{backgroundImage:"url('images/img_group38_14.png')"},children:(0,r.jsxs)("div",{className:"bg-gradient  flex flex-col md:gap-10 gap-[167px] justify-end p-4 w-full",children:[(0,r.jsx)(i.zx,{className:"bg-orange-A700 cursor-pointer font-bold leading-[normal] min-w-[78px] md:ml-[0] ml-[300px] mr-2 mt-2 py-[5px] text-center text-white-A700 text-xs tracking-[0.12px]",children:"Finance"}),(0,r.jsx)(i.xv,{className:"mr-[269px] text-white-A700 text-xs tracking-[-0.50px]",size:"txtInterRegular12WhiteA700",children:"Ukraine, 24 april 2022"})]})}),(0,r.jsxs)("div",{className:"flex flex-col items-center justify-start w-full",children:[(0,r.jsxs)(i.xv,{className:"text-black-900 text-lg tracking-[-0.50px] w-full",size:"txtInterSemiBold18Black900",children:["Zelensky accuses Russia of worst crimes since WW2"," "]}),(0,r.jsx)(i.xv,{className:"leading-[25.00px] text-black-900_87 text-xs tracking-[-0.50px] w-full",size:"txtPoppinsRegular12",children:"The Ukrainian leader says Russia must face an international trial as he calls for the country to be thrown off the UN Security Council."})]}),(0,r.jsx)(i.zx,{className:"common-pointer bg-black-900 cursor-pointer flex items-center justify-center min-w-[151px] pl-[30px] py-2.5 rounded-lg",onClick:function(){return e("/sigleblog")},rightIcon:(0,r.jsx)(i.Ei,{className:"h-[18px] ml-[5px] mr-[30px] my-2.5",src:"images/img_upload.svg",alt:"upload"}),children:(0,r.jsx)("div",{className:"leading-[normal] sm:pl-5 text-left text-sm text-white-A700 tracking-[-0.50px]",children:"Read More"})})]})}),(0,r.jsx)("div",{className:"flex flex-1 flex-col items-center justify-start w-full",children:(0,r.jsxs)("div",{className:"flex flex-col gap-[22px] items-start justify-start w-full",children:[(0,r.jsx)("div",{className:"bg-cover bg-no-repeat flex flex-col h-[246px] items-center justify-start w-full",style:{backgroundImage:"url('images/img_group38_15.png')"},children:(0,r.jsxs)("div",{className:"bg-gradient  flex flex-col md:gap-10 gap-[162px] justify-end p-[17px] w-full",children:[(0,r.jsx)(i.zx,{className:"bg-red-900 cursor-pointer font-bold leading-[normal] min-w-[78px] md:ml-[0] ml-[298px] mr-1.5 mt-1.5 py-[5px] text-center text-white-A700 text-xs tracking-[0.12px]",children:"Political"}),(0,r.jsx)(i.xv,{className:"mr-[267px] text-white-A700 text-xs tracking-[-0.50px]",size:"txtInterRegular12WhiteA700",children:"Ukraine, 24 april 2022"})]})}),(0,r.jsxs)("div",{className:"flex flex-col items-center justify-start w-full",children:[(0,r.jsxs)(i.xv,{className:"text-black-900 text-lg tracking-[-0.50px] w-full",size:"txtInterSemiBold18Black900",children:["Zelensky accuses Russia of worst crimes since WW2"," "]}),(0,r.jsx)(i.xv,{className:"leading-[25.00px] text-black-900_87 text-xs tracking-[-0.50px] w-full",size:"txtPoppinsRegular12",children:"The Ukrainian leader says Russia must face an international trial as he calls for the country to be thrown off the UN Security Council."})]}),(0,r.jsx)(i.zx,{className:"common-pointer bg-black-900 cursor-pointer flex items-center justify-center min-w-[151px] pl-[30px] py-2.5 rounded-lg",onClick:function(){return e("/sigleblog")},rightIcon:(0,r.jsx)(i.Ei,{className:"h-[18px] ml-[5px] mr-[30px] my-2.5",src:"images/img_upload.svg",alt:"upload"}),children:(0,r.jsx)("div",{className:"leading-[normal] sm:pl-5 text-left text-sm text-white-A700 tracking-[-0.50px]",children:"Read More"})})]})})]})]})}),(0,r.jsx)("footer",{className:"flex font-inter items-center justify-center mt-[120px] md:px-5 w-full",children:(0,r.jsx)("div",{className:"bg-black-900 flex flex-col items-center justify-center p-[60px] md:px-10 sm:px-5 w-full",children:(0,r.jsxs)("div",{className:"flex flex-col gap-[53px] items-center justify-center w-[98%] md:w-full",children:[(0,r.jsxs)("div",{className:"flex md:flex-col flex-row md:gap-10 items-start justify-between w-full",children:[(0,r.jsxs)("div",{className:"flex flex-col gap-[22px] items-start justify-start",children:[(0,r.jsx)(i.xv,{className:"text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[-0.50px]",size:"txtInterSemiBold24WhiteA700",children:"Neuzy"}),(0,r.jsx)(i.xv,{className:"leading-[35.00px] text-sm text-white-A700 tracking-[-0.50px] w-full",size:"txtInterRegular14",children:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."})]}),(0,r.jsxs)("div",{className:"flex md:flex-1 flex-row items-start justify-between pt-2.5 w-[57%] md:w-full",children:[(0,r.jsxs)("div",{className:"flex flex-col gap-[25px] items-start justify-start w-[10%]",children:[(0,r.jsx)(i.xv,{className:"text-sm text-white-A700 tracking-[-0.50px]",size:"txtInterBold14",children:"World"}),(0,r.jsxs)("div",{className:"flex flex-col gap-[18px] items-start justify-start w-full",children:[(0,r.jsx)(i.xv,{className:"text-white-A700 text-xs tracking-[-0.50px]",size:"txtInterRegular12WhiteA700",children:"Politcts"}),(0,r.jsx)(i.xv,{className:"text-white-A700 text-xs tracking-[-0.50px]",size:"txtInterRegular12WhiteA700",children:"Health"}),(0,r.jsx)(i.xv,{className:"text-white-A700 text-xs tracking-[-0.50px]",size:"txtInterRegular12WhiteA700",children:"Business"}),(0,r.jsx)(i.xv,{className:"text-white-A700 text-xs tracking-[-0.50px]",size:"txtInterRegular12WhiteA700",children:"Tech"}),(0,r.jsx)(i.xv,{className:"text-white-A700 text-xs tracking-[-0.50px]",size:"txtInterRegular12WhiteA700",children:"Entertaiment"})]})]}),(0,r.jsxs)("div",{className:"flex flex-col gap-[25px] items-start justify-start w-[8%]",children:[(0,r.jsx)(i.xv,{className:"text-sm text-white-A700 tracking-[-0.50px]",size:"txtInterBold14",children:"Tech"}),(0,r.jsxs)("div",{className:"flex flex-col gap-[18px] items-start justify-start w-full",children:[(0,r.jsx)(i.xv,{className:"text-white-A700 text-xs tracking-[-0.50px]",size:"txtInterRegular12WhiteA700",children:"Siance"}),(0,r.jsx)(i.xv,{className:"text-white-A700 text-xs tracking-[-0.50px]",size:"txtInterRegular12WhiteA700",children:"Magazine"}),(0,r.jsx)(i.xv,{className:"text-white-A700 text-xs tracking-[-0.50px]",size:"txtInterRegular12WhiteA700",children:"Start up"}),(0,r.jsx)(i.xv,{className:"text-white-A700 text-xs tracking-[-0.50px]",size:"txtInterRegular12WhiteA700",children:"Crypto"})]})]}),(0,r.jsxs)("div",{className:"flex flex-col gap-[25px] items-start justify-start w-[5%]",children:[(0,r.jsx)(i.xv,{className:"text-sm text-white-A700 tracking-[-0.50px]",size:"txtInterBold14",children:"Life"}),(0,r.jsxs)("div",{className:"flex flex-col gap-[18px] items-start justify-start w-full",children:[(0,r.jsx)(i.xv,{className:"text-white-A700 text-xs tracking-[-0.50px]",size:"txtInterRegular12WhiteA700",children:"Food"}),(0,r.jsx)(i.xv,{className:"text-white-A700 text-xs tracking-[-0.50px]",size:"txtInterRegular12WhiteA700",children:"Style"}),(0,r.jsx)(i.xv,{className:"text-white-A700 text-xs tracking-[-0.50px]",size:"txtInterRegular12WhiteA700",children:"Sport"}),(0,r.jsx)(i.xv,{className:"text-white-A700 text-xs tracking-[-0.50px]",size:"txtInterRegular12WhiteA700",children:"Movie"}),(0,r.jsx)(i.xv,{className:"text-white-A700 text-xs tracking-[-0.50px]",size:"txtInterRegular12WhiteA700",children:"Music"})]})]}),(0,r.jsxs)("div",{className:"flex flex-col gap-[23px] items-start justify-start w-[9%]",children:[(0,r.jsx)(i.xv,{className:"text-sm text-white-A700 tracking-[-0.50px]",size:"txtInterBold14",children:"Magezine"}),(0,r.jsxs)("div",{className:"flex flex-col gap-[18px] items-start justify-start",children:[(0,r.jsx)(i.xv,{className:"text-white-A700 text-xs tracking-[-0.50px]",size:"txtInterRegular12WhiteA700",children:"Fasion"}),(0,r.jsx)(i.xv,{className:"text-white-A700 text-xs tracking-[-0.50px]",size:"txtInterRegular12WhiteA700",children:"Blogger"}),(0,r.jsx)(i.xv,{className:"text-white-A700 text-xs tracking-[-0.50px]",size:"txtInterRegular12WhiteA700",children:"People"})]})]}),(0,r.jsxs)("div",{className:"flex flex-col gap-[26px] items-start justify-start w-[14%]",children:[(0,r.jsx)(i.xv,{className:"text-sm text-white-A700 tracking-[-0.50px]",size:"txtInterBold14",children:"Other"}),(0,r.jsxs)("div",{className:"flex flex-col gap-[18px] items-start justify-start w-full",children:[(0,r.jsx)(i.xv,{className:"text-white-A700 text-xs tracking-[-0.50px]",size:"txtInterRegular12WhiteA700",children:"About"}),(0,r.jsx)(i.xv,{className:"text-white-A700 text-xs tracking-[-0.50px]",size:"txtInterRegular12WhiteA700",children:"Contact us"}),(0,r.jsx)(i.xv,{className:"text-white-A700 text-xs tracking-[-0.50px]",size:"txtInterRegular12WhiteA700",children:"Terms & Conditions"})]})]})]})]}),(0,r.jsxs)("div",{className:"flex flex-col gap-[29px] items-center justify-start w-full",children:[(0,r.jsx)(i.x1,{className:"bg-white-A700 h-px w-full"}),(0,r.jsxs)("div",{className:"flex flex-row md:gap-10 items-start justify-between w-full",children:[(0,r.jsx)(i.xv,{className:"mt-1 text-sm text-white-A700 tracking-[-0.50px]",size:"txtInterRegular14",children:"Copyright \xa9 Neuzy | All Rights Reserved"}),(0,r.jsx)(i.Ei,{className:"h-6",src:"images/img_group20875.svg",alt:"Group20875"})]})]})]})})})]})]})})}},593:function(e,t,s){function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function i(e){var t=function(e,t){if("object"!==l(e)||null===e)return e;var s=e[Symbol.toPrimitive];if(void 0!==s){var i=s.call(e,t||"default");if("object"!==l(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===l(t)?t:String(t)}function r(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,l)}return s}function n(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?r(Object(s),!0).forEach((function(t){var l,r,n;l=e,r=t,n=s[t],(r=i(r))in l?Object.defineProperty(l,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):l[r]=n})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}s.d(t,{Z:function(){return n}})},738:function(e,t,s){function l(e,t){if(null==e)return{};var s,l,i=function(e,t){if(null==e)return{};var s,l,i={},r=Object.keys(e);for(l=0;l<r.length;l++)s=r[l],t.indexOf(s)>=0||(i[s]=e[s]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)s=r[l],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(i[s]=e[s])}return i}s.d(t,{Z:function(){return l}})}}]);
//# sourceMappingURL=822.3399dec3.chunk.js.map