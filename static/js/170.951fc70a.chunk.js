"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[170],{514:function(e,t,s){s.d(t,{zx:function(){return c},Jg:function(){return m},Ei:function(){return u},II:function(){return f},x1:function(){return g},aV:function(){return v},h1:function(){return N},xv:function(){return I}});var l=s(593),a=s(738),i=s(791),r=s(184),n=["children","className","leftIcon","rightIcon","shape","size","variant","color"],c=function(e){var t=e.children,s=e.className,i=void 0===s?"":s,c=e.leftIcon,o=e.rightIcon,x=(e.shape,e.size,e.variant,e.color,(0,a.Z)(e,n));return(0,r.jsxs)("button",(0,l.Z)((0,l.Z)({className:"".concat(i)},x),{},{children:[!!c&&c,t,!!o&&o]}))},o=function(e){var t=e.errors,s=void 0===t?[]:t,l=e.className,a=void 0===l?"":l;return(null===s||void 0===s?void 0:s.length)>0&&(0,r.jsx)("div",{className:"text-red-500 text-left text-xs w-full mt-1 ".concat(a),children:s.join(", ")})},x=["inputClassName","className","name","children","label","errors","shape","size","variant","color","id","onChange"],m=i.forwardRef((function(e,t){var s=e.inputClassName,i=void 0===s?"":s,n=e.className,c=void 0===n?"":n,m=e.name,d=void 0===m?"":m,u=e.children,p=e.label,f=void 0===p?"":p,h=e.errors,g=void 0===h?[]:h,j=(e.shape,e.size,e.variant,e.color,e.id),v=void 0===j?"checkbox_id":j,w=e.onChange,b=(0,a.Z)(e,x);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:c,children:[(0,r.jsx)("input",(0,l.Z)((0,l.Z)({className:"".concat(i),ref:t,type:"checkbox",name:d,onChange:function(e){var t;w&&w(null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.checked)}},b),{},{id:v})),(0,r.jsx)("label",{htmlFor:v,children:f})]}),(0,r.jsx)(o,{errors:g}),u]})})),d=["className","src","alt"],u=function(e){var t=e.className,s=e.src,i=void 0===s?"defaultNoData.png":s,n=e.alt,c=void 0===n?"testImg":n,o=(0,a.Z)(e,d);return(0,r.jsx)("img",(0,l.Z)((0,l.Z)({className:t,src:i,alt:c},o),{},{loading:"lazy"}))},p=["wrapClassName","className","name","placeholder","type","children","errors","label","prefix","suffix","onChange","shape","size","variant","color"],f=i.forwardRef((function(e,t){var s=e.wrapClassName,i=void 0===s?"":s,n=e.className,c=void 0===n?"":n,x=e.name,m=void 0===x?"":x,d=e.placeholder,u=void 0===d?"":d,f=e.type,h=void 0===f?"text":f,g=(e.children,e.errors),j=void 0===g?[]:g,v=e.label,w=void 0===v?"":v,b=e.prefix,N=e.suffix,y=e.onChange,k=(e.shape,e.size,e.variant,e.color,(0,a.Z)(e,p));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"".concat(i," \n               \n               \n              "),children:[!!w&&w,!!b&&b,(0,r.jsx)("input",(0,l.Z)({ref:t,className:"".concat(c," bg-transparent border-0"),type:h,name:m,onChange:function(e){var t;y&&y(null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value)},placeholder:u},k)),!!N&&N]}),!!j&&(0,r.jsx)(o,{errors:j})]})})),h=["className"],g=function(e){var t=e.className,s=(0,a.Z)(e,h);return(0,r.jsx)("div",(0,l.Z)({className:t},s))},j=["children","className"],v=function(e){var t=e.children,s=e.className,i=(0,a.Z)(e,j);return(0,r.jsx)("div",(0,l.Z)((0,l.Z)({className:s},i),{},{children:t}))},w=s(890),b=["className","activeCss","inactiveCss","sliderRef","count","activeIndex","selectedWrapperCss","unselectedWrapperCss"],N=function(e){var t=e.className,s=e.activeCss,n=e.inactiveCss,c=e.sliderRef,o=void 0===c?null:c,x=e.count,m=e.activeIndex,d=e.selectedWrapperCss,u=void 0===d?"":d,p=e.unselectedWrapperCss,f=void 0===p?"":p,h=(0,a.Z)(e,b),g=i.useState(0),j=(0,w.Z)(g,2),v=j[0],N=j[1];return i.useEffect((function(){var e,t,s=null===o||void 0===o||null===(e=o.current)||void 0===e||null===(t=e.state)||void 0===t?void 0:t.itemsInSlide;N(s)}),[o]),(0,r.jsx)("div",(0,l.Z)((0,l.Z)({className:t},h),{},{children:Array(x).fill(0).map((function(e,t){var l=m>=t*v&&m<(t+1)*v;return(0,r.jsx)("div",{className:"".concat(l?u:f," "),children:(0,r.jsx)("span",{className:"".concat(l?s:n," slider-indicator"),onClick:function(){var e;return null===o||void 0===o||null===(e=o.current)||void 0===e?void 0:e.slideTo(t*v)}})},"indicator"+t)}))}))},y=["children","className","size","as"],k={txtInterSemiBold24WhiteA700:"font-inter font-semibold",txtInterRegular14Black900:"font-inter font-normal",txtInterSemiBold18WhiteA70087:"font-inter font-semibold",txtInterSemiBold48:"font-inter font-semibold",txtInterRegular12WhiteA700:"font-inter font-normal",txtInterRegular18Black90087:"font-inter font-normal",txtInterRegular14Bluegray900:"font-inter font-normal",txtInterSemiBold24:"font-inter font-semibold",txtInterRegular14Black90087:"font-inter font-normal",txtInterSemiBold36Black900:"font-inter font-semibold",txtPoppinsRegular28:"font-normal font-poppins",txtPoppinsBold14:"font-bold font-poppins",txtPoppinsRegular10:"font-normal font-poppins",txtInterSemiBold14Black90090:"font-inter font-semibold",txtPoppinsRegular12:"font-normal font-poppins",txtInterSemiBold10:"font-inter font-semibold",txtPoppinsRegular10Black90087:"font-normal font-poppins",txtInterRegular16Black900:"font-inter font-normal",txtInterRegular14Black9007f:"font-inter font-normal",txtInterSemiBold48Black900:"font-inter font-semibold",txtPoppinsMedium16:"font-medium font-poppins",txtInterSemiBold14Bluegray900:"font-inter font-semibold",txtInterBold18:"font-bold font-inter",txtInterRegular12Black9007f:"font-inter font-normal",txtInterSemiBold18Black900:"font-inter font-semibold",txtInterRegular10:"font-inter font-normal",txtInterSemiBold36:"font-inter font-semibold",txtInterBold36:"font-bold font-inter",txtInterBold14:"font-bold font-inter",txtInterSemiBold14:"font-inter font-semibold",txtInterSemiBold12:"font-inter font-semibold",txtInterSemiBold18Black90087:"font-inter font-semibold",txtInterSemiBold18:"font-inter font-semibold",txtPoppinsRegular14:"font-normal font-poppins",txtPoppinsRegular15:"font-normal font-poppins",txtPoppinsRegular17:"font-normal font-poppins",txtInterRegular12WhiteA70087:"font-inter font-normal",txtInterRegular18Black900:"font-inter font-normal",txtPoppinsSemiBold20:"font-poppins font-semibold",txtInterBold18WhiteA700:"font-bold font-inter",txtInterRegular12:"font-inter font-normal",txtInterRegular18Black9007f:"font-inter font-normal",txtInterSemiBold10Black900:"font-inter font-semibold",txtInterRegular14:"font-inter font-normal",txtInterSemiBold12WhiteA700:"font-inter font-semibold",txtInterRegular16:"font-inter font-normal",txtInterRegular18:"font-inter font-normal"},I=function(e){var t=e.children,s=e.className,i=void 0===s?"":s,n=e.size,c=e.as,o=(0,a.Z)(e,y),x=c||"p";return(0,r.jsx)(x,(0,l.Z)((0,l.Z)({className:"text-left ".concat(i," ").concat(n&&k[n])},o),{},{children:t}))}},710:function(e,t,s){s.r(t),s.d(t,{default:function(){return o}});var l=s(890),a=s(791),i=s(871),r=(s(156),s(853),s(197)),n=s(514),c=s(184),o=function(){(0,i.s0)();var e=(0,a.useState)(""),t=(0,l.Z)(e,2),s=t[0],o=t[1],x=(0,a.useState)(""),m=(0,l.Z)(x,2),d=m[0],u=m[1],p=(0,a.useState)(""),f=(0,l.Z)(p,2),h=f[0],g=f[1],j=[{title:"Service 1",image:(0,c.jsx)("img",{src:"images/insta1.jpeg",alt:"service1",srcset:""}),description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},{title:"Service 2",image:(0,c.jsx)("img",{src:"images/insta1.jpeg",alt:"service1",srcset:""}),description:"Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{title:"Service 3",image:(0,c.jsx)("img",{src:"images/insta1.jpeg",alt:"service1",srcset:""}),description:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."}];return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("div",{className:"bg-white-A700 flex flex-col font-inter gap-[0px] items-center justify-start mx-auto w-full",children:[(0,c.jsx)("header",{className:"flex items-center justify-center md:px-0 w-full py-0",children:(0,c.jsx)("div",{className:"bg-bluegray-900 flex flex-row items-center justify-center p-[6px] sm:px-5 w-full",children:(0,c.jsxs)("div",{className:"flex md:flex-col flex-row md:gap-5 items-center justify-center w-[94%]",children:[(0,c.jsx)("a",{href:"",className:"scroll-smooth",children:(0,c.jsx)("img",{src:"images/bhopalLogo.png",alt:"logo",className:"scale-75"})}),(0,c.jsxs)("div",{className:"flex md:flex-col flex-row gap-5 items-center justify-center md:ml-[0] ml-[173px] w-[57%] md:w-full",children:[(0,c.jsx)("a",{href:"#home-updates",className:"scroll-smooth",children:(0,c.jsx)("p",{className:"text-lg text-white-A700 tracking-[-0.50px]",children:"Home"})}),(0,c.jsx)("a",{href:"#updates",className:"scroll-smooth",children:(0,c.jsx)("p",{className:"text-lg text-white-A700 tracking-[-0.50px]",children:"Latest Updates"})}),(0,c.jsx)("a",{href:"#our-services",className:"scroll-smooth",children:(0,c.jsx)("p",{className:"text-lg text-white-A700 tracking-[-0.50px]",children:"Our Services"})}),(0,c.jsx)("a",{href:"#about-us",className:"scroll-smooth",children:(0,c.jsx)("p",{className:"text-lg text-white-A700 tracking-[-0.50px]",children:"About Us"})}),(0,c.jsx)("a",{href:"#contact-us",className:"scroll-smooth",children:(0,c.jsx)("p",{className:"text-lg text-white-A700 tracking-[-0.50px]",children:"Contact Us"})})]}),(0,c.jsxs)("div",{className:"flex flex-row items-center justify-between md:ml-[0] ml-[214px] w-[15%] md:w-full",children:[(0,c.jsx)("a",{href:"#search",className:"scroll-smooth",children:(0,c.jsx)("img",{className:"common-pointer h-6 w-6",src:"images/img_search.svg",alt:"search"})}),(0,c.jsx)("div",{className:"bg-white-A700 h-[26px] w-px"}),(0,c.jsxs)("div",{className:"flex flex-row gap-5 items-center justify-between w-[56%]",children:[(0,c.jsx)("a",{href:"#login",className:"scroll-smooth",children:(0,c.jsx)("p",{className:"common-pointer text-sm text-white-A700 tracking-[-0.50px]",children:"Login"})}),(0,c.jsx)("a",{href:"#register",className:"scroll-smooth",children:(0,c.jsx)("p",{className:"common-pointer text-sm text-white-A700 tracking-[-0.50px]",children:"Register"})})]})]})]})})}),(0,c.jsx)("div",{id:"home",className:"w-full mx-auto",children:(0,c.jsxs)(r.lr,{className:"w-full custom-carousel",showThumbs:!1,autoPlay:!0,interval:2e3,infiniteLoop:!0,dynamicHeight:!1,children:[(0,c.jsxs)("div",{className:"custom-slide",children:[(0,c.jsx)("img",{src:"images/bhopalc4.webp",alt:"Image 1",className:"w-full h-400"}),(0,c.jsx)("p",{className:"legend",children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque quas expedita labore rerum quae distinctio."})]}),(0,c.jsxs)("div",{className:"custom-slide",children:[(0,c.jsx)("img",{src:"images/bhopalc2.jpg",alt:"Image 2",className:"w-full h-400"}),(0,c.jsx)("p",{className:"legend",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ipsa eaque veniam quo, soluta ratione!"})]}),(0,c.jsxs)("div",{className:"custom-slide",children:[(0,c.jsx)("img",{src:"images/bhopalc5.jpg",alt:"Image 3",className:"w-full h-400"}),(0,c.jsx)("p",{className:"legend",children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio dolore laboriosam sint repellendus hic unde?"})]})]})}),(0,c.jsxs)("div",{className:"flex flex-col md:gap-10 gap-[50px] items-center justify-start w-full",children:[(0,c.jsxs)("div",{id:"home-updates",className:"flex flex-col gap-[20px] items-center justify-start w-full mt-10",children:[(0,c.jsx)(n.xv,{className:"text-4xl sm:text-[32px] md:text-[34px] text-center text-black-900 font-semibold text-3xl tracking-[-0.50px] w-[39%] sm:w-full",children:(0,c.jsx)(c.Fragment,{children:"Update's From Our Social Media Platforms"})}),(0,c.jsxs)("div",{className:"flex flex-col md:px-5 relative w-full",children:[(0,c.jsx)("div",{className:"flex flex-col items-center justify-start mx-auto w-full",children:(0,c.jsx)("div",{className:"bg-cover bg-no-repeat flex flex-col h-[700px] items-center justify-start w-full",style:{backgroundImage:"url('images/social_media_updates_banner.jpg')"},children:(0,c.jsx)("div",{className:"bg-gradient1  flex flex-row items-center justify-start p-[75px] md:px-10 sm:px-5 w-full",children:(0,c.jsxs)("div",{className:"flex flex-row items-start justify-between mb-[142px] mt-[245px] w-full",children:[(0,c.jsx)(n.Ei,{className:"h-[60px] mb-[103px] w-[60px]",src:"images/img_arrowleft.svg",alt:"arrowleft"}),(0,c.jsx)(n.h1,{className:"flex h-[15px] mt-[148px] w-[115px]",count:5,activeCss:"inline-block cursor-pointer rounded-[50%] h-[15px] bg-white-A700 w-[15px]",activeIndex:1,inactiveCss:"inline-block cursor-pointer rounded-[50%] h-[15px] bg-white-A700_4f w-[15px]",selectedWrapperCss:"inline-block mx-[5.00px]",unselectedWrapperCss:"inline-block mx-[5.00px]"}),(0,c.jsx)(n.zx,{className:"bg-white-A700 border-2 border-solid border-white-A700 flex h-[60px] items-center justify-center mb-[103px] p-[15px] rotate-[180deg] rounded-[50%] w-[60px]",children:(0,c.jsx)(n.Ei,{className:"h-[27px]",src:"images/img_arrow1.svg",alt:"arrowright"})})]})})})}),(0,c.jsxs)(n.aV,{className:"sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center mt-[-197px] mx-auto w-[90%] z-[1]",orientation:"horizontal",children:[(0,c.jsxs)("div",{className:"bg-white-A700 flex flex-col gap-5 items-center justify-start sm:ml-[0] pb-[22px] rounded-[10px] w-full",children:[(0,c.jsx)(n.Ei,{className:"h-[400px] sm:h-auto object-cover rounded-[10px] w-[308px] md:w-full",src:"images/insta1.jpeg",alt:"RectangleSeventeen"}),(0,c.jsx)("div",{className:"flex flex-col gap-[13px] items-center justify-start w-[100%] md:w-full",children:(0,c.jsx)(n.xv,{className:"text-black-900_7f text-sm tracking-[-0.50px]",size:"txtInterRegular14Black9007f",children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius labore repellendus pariatur quisquam voluptates perspiciatis impedit corrupti nemo consequatur tempore!"})})]}),(0,c.jsxs)("div",{className:"bg-white-A700 flex flex-col gap-5 items-center justify-start sm:ml-[0] pb-[22px] rounded-[10px] w-full",children:[(0,c.jsx)(n.Ei,{className:"h-[400px] sm:h-auto object-cover rounded-[10px] w-[308px] md:w-full",src:"images/insta2.jpeg",alt:"RectangleSeventeen"}),(0,c.jsx)("div",{className:"flex flex-col gap-[13px] items-center justify-start w-[100%] md:w-full",children:(0,c.jsx)(n.xv,{className:"text-black-900_7f text-sm tracking-[-0.50px]",size:"txtInterRegular14Black9007f",children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius labore repellendus pariatur quisquam voluptates perspiciatis impedit corrupti nemo consequatur tempore!"})})]}),(0,c.jsxs)("div",{className:"bg-white-A700 flex flex-col gap-5 items-center justify-start sm:ml-[0] pb-[22px] rounded-[10px] w-full",children:[(0,c.jsx)(n.Ei,{className:"h-[400px] sm:h-auto object-cover rounded-[10px] w-[308px] md:w-full",src:"images/insta3.heic",alt:"RectangleSeventeen"}),(0,c.jsx)("div",{className:"flex flex-col gap-[13px] items-center justify-start w-[100%] md:w-full",children:(0,c.jsx)(n.xv,{className:"text-black-900_7f text-sm tracking-[-0.50px]",size:"txtInterRegular14Black9007f",children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius labore repellendus pariatur quisquam voluptates perspiciatis impedit corrupti nemo consequatur tempore!"})})]}),(0,c.jsxs)("div",{className:"bg-white-A700 flex flex-col gap-5 items-center justify-start sm:ml-[0] pb-[22px] rounded-[10px] w-full",children:[(0,c.jsx)(n.Ei,{className:"h-[400px] sm:h-auto object-cover rounded-[10px] w-[308px] md:w-full",src:"images/insta1.jpeg",alt:"RectangleSeventeen"}),(0,c.jsx)("div",{className:"flex flex-col gap-[13px] items-center justify-start w-[100%] md:w-full",children:(0,c.jsx)(n.xv,{className:"text-black-900_7f text-sm tracking-[-0.50px]",size:"txtInterRegular14Black9007f",children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius labore repellendus pariatur quisquam voluptates perspiciatis impedit corrupti nemo consequatur tempore!"})})]})]})]})]}),(0,c.jsxs)("div",{id:"updates",className:"flex flex-row gap-2.5 items-start justify-start w-[35%] md:w-full",children:[(0,c.jsx)("div",{className:"bg-bluegray-900 h-[15px] my-[3px] rounded-[50%] w-[15px]"}),(0,c.jsx)(n.xv,{className:" text-4xl sm:text-[32px] md:text-[34px] text-Black-900 text-center tracking-[-0.50px] w-[100%] sm:w-full",size:"txtInterSemiBold36Black900",children:(0,c.jsx)(c.Fragment,{children:"Latest News & Update's"})})]}),(0,c.jsx)("div",{className:"bg-black-900 flex flex-col items-center justify-start p-[50px] md:px-10 sm:px-5 w-full",children:(0,c.jsx)("div",{className:"flex flex-col items-center justify-start max-w-[1291px] mx-auto w-full",children:(0,c.jsxs)("div",{className:"flex md:flex-col flex-row md:gap-[50px] items-center justify-between w-full",children:[(0,c.jsx)("div",{className:"flex md:flex-1 flex-col items-center justify-start w-[62%] md:w-full",children:(0,c.jsx)("div",{className:"bg-cover bg-no-repeat flex flex-col h-[590px] items-center justify-start w-full",style:{backgroundImage:"url('images/latest_updates_banner.jpg')"},children:(0,c.jsxs)("div",{className:"bg-gradient2  flex flex-col gap-[55px] items-center justify-end p-[45px] md:px-10 sm:px-5 w-full",children:[(0,c.jsxs)("div",{className:"flex flex-col gap-[50px] items-center justify-start mt-[225px] w-[51%] md:w-full",children:[(0,c.jsxs)("div",{className:"flex flex-col gap-[13px] items-center justify-start w-full",children:[(0,c.jsxs)("div",{className:"flex flex-row gap-2.5 items-start justify-center w-[43%] md:w-full",children:[(0,c.jsx)("div",{className:"bg-bluegray-900 h-[15px] mt-[3px] rounded-[50%] w-[15px]"}),(0,c.jsx)(n.xv,{className:"text-sm text-white-A700 tracking-[-0.50px]",size:"txtInterRegular14",children:"Bhopal Insights"})]}),(0,c.jsx)(n.xv,{className:"text-4xl sm:text-[32px] md:text-[34px] text-center text-white-A700 tracking-[-0.50px] w-full",size:"txtInterSemiBold36",children:"Must Visit Places In Bhopal"})]}),(0,c.jsx)(n.zx,{className:"border border-solid border-white-A700 cursor-pointer font-semibold leading-[normal] min-w-[154px] py-3 rounded-lg text-center text-lg text-white-A700 tracking-[-0.50px]",children:"Know More.."})]}),(0,c.jsx)(n.h1,{className:"flex h-[15px] justify-center w-[115px]",count:5,activeCss:"inline-block cursor-pointer rounded-[50%] h-[15px] bg-white-A700 w-[15px]",activeIndex:1,inactiveCss:"inline-block cursor-pointer rounded-[50%] h-[15px] bg-white-A700_4f w-[15px]",selectedWrapperCss:"inline-block md:ml-[0] mx-[5.00px] sm:ml-[0]",unselectedWrapperCss:"inline-block md:ml-[0] mx-[5.00px] sm:ml-[0]"})]})})}),(0,c.jsxs)(n.aV,{className:"flex flex-col gap-[10px] w-[35%]",orientation:"vertical",children:[(0,c.jsxs)("div",{className:"flex sm:flex-col flex-row gap-6 items-center justify-between my-0 w-full",children:[(0,c.jsx)(n.Ei,{className:"h-[90px] md:h-auto object-cover",src:"images/img_rectangle1479_84X121.png",alt:"Rectangle1479 Three"}),(0,c.jsxs)("div",{className:"flex flex-col gap-[15px] items-start justify-start",children:[(0,c.jsx)(n.xv,{className:"text-sm text-white-A700 tracking-[-0.50px] w-full",size:"txtInterBold18WhiteA700",children:"Modi to attend 125th foundation ceremony of Scindia School in Gwalior today."}),(0,c.jsxs)("div",{className:"flex flex-row gap-[7px] items-center justify-start w-[78%] md:w-full",children:[(0,c.jsxs)(n.xv,{className:"text-white-A700 text-xs tracking-[-0.50px]",size:"txtInterSemiBold12WhiteA700",children:["Bhopal, 08 December 2023"," "]}),(0,c.jsx)(n.xv,{className:"text-white-A700_87 text-xs tracking-[-0.50px]",size:"txtInterRegular12WhiteA70087",children:"- 15 minutes ago"})]})]})]}),(0,c.jsxs)("div",{className:"flex sm:flex-col flex-row gap-6 items-center justify-between my-0 w-full",children:[(0,c.jsx)(n.Ei,{className:"h-[90px] md:h-auto object-cover",src:"images/img_rectangle1479_84X121.png",alt:"Rectangle1479 Three"}),(0,c.jsxs)("div",{className:"flex flex-col gap-[15px] items-start justify-start",children:[(0,c.jsx)(n.xv,{className:"text-sm text-white-A700 tracking-[-0.50px] w-full",size:"txtInterBold18WhiteA700",children:"Modi to attend 125th foundation ceremony of Scindia School in Gwalior today."}),(0,c.jsxs)("div",{className:"flex flex-row gap-[7px] items-center justify-start w-[78%] md:w-full",children:[(0,c.jsxs)(n.xv,{className:"text-white-A700 text-xs tracking-[-0.50px]",size:"txtInterSemiBold12WhiteA700",children:["Bhopal, 08 December 2023"," "]}),(0,c.jsx)(n.xv,{className:"text-white-A700_87 text-xs tracking-[-0.50px]",size:"txtInterRegular12WhiteA70087",children:"- 15 minutes ago"})]})]})]}),(0,c.jsxs)("div",{className:"flex sm:flex-col flex-row gap-6 items-center justify-between my-0 w-full",children:[(0,c.jsx)(n.Ei,{className:"h-[90px] md:h-auto object-cover",src:"images/img_rectangle1479_84X121.png",alt:"Rectangle1479 Three"}),(0,c.jsxs)("div",{className:"flex flex-col gap-[15px] items-start justify-start",children:[(0,c.jsx)(n.xv,{className:"text-sm text-white-A700 tracking-[-0.50px] w-full",size:"txtInterBold18WhiteA700",children:"Modi to attend 125th foundation ceremony of Scindia School in Gwalior today."}),(0,c.jsxs)("div",{className:"flex flex-row gap-[7px] items-center justify-start w-[78%] md:w-full",children:[(0,c.jsxs)(n.xv,{className:"text-white-A700 text-xs tracking-[-0.50px]",size:"txtInterSemiBold12WhiteA700",children:["Bhopal, 08 December 2023"," "]}),(0,c.jsx)(n.xv,{className:"text-white-A700_87 text-xs tracking-[-0.50px]",size:"txtInterRegular12WhiteA70087",children:"- 15 minutes ago"})]})]})]}),(0,c.jsxs)("div",{className:"flex sm:flex-col flex-row gap-6 items-center justify-between my-0 w-full",children:[(0,c.jsx)(n.Ei,{className:"h-[90px] md:h-auto object-cover",src:"images/img_rectangle1479_84X121.png",alt:"Rectangle1479 Three"}),(0,c.jsxs)("div",{className:"flex flex-col gap-[15px] items-start justify-start",children:[(0,c.jsx)(n.xv,{className:"text-sm text-white-A700 tracking-[-0.50px] w-full",size:"txtInterBold18WhiteA700",children:"Modi to attend 125th foundation ceremony of Scindia School in Gwalior today."}),(0,c.jsxs)("div",{className:"flex flex-row gap-[7px] items-center justify-start w-[78%] md:w-full",children:[(0,c.jsxs)(n.xv,{className:"text-white-A700 text-xs tracking-[-0.50px]",size:"txtInterSemiBold12WhiteA700",children:["Bhopal, 08 December 2023"," "]}),(0,c.jsx)(n.xv,{className:"text-white-A700_87 text-xs tracking-[-0.50px]",size:"txtInterRegular12WhiteA70087",children:"- 15 minutes ago"})]})]})]}),(0,c.jsxs)("div",{className:"flex sm:flex-col flex-row gap-6 items-center justify-between my-0 w-full",children:[(0,c.jsx)(n.Ei,{className:"h-[90px] md:h-auto object-cover",src:"images/img_rectangle1479_84X121.png",alt:"Rectangle1479 Three"}),(0,c.jsxs)("div",{className:"flex flex-col gap-[15px] items-start justify-start",children:[(0,c.jsx)(n.xv,{className:"text-sm text-white-A700 tracking-[-0.50px] w-full",size:"txtInterBold18WhiteA700",children:"Modi to attend 125th foundation ceremony of Scindia School in Gwalior today."}),(0,c.jsxs)("div",{className:"flex flex-row gap-[7px] items-center justify-start w-[78%] md:w-full",children:[(0,c.jsxs)(n.xv,{className:"text-white-A700 text-xs tracking-[-0.50px]",size:"txtInterSemiBold12WhiteA700",children:["Bhopal, 08 December 2023"," "]}),(0,c.jsx)(n.xv,{className:"text-white-A700_87 text-xs tracking-[-0.50px]",size:"txtInterRegular12WhiteA70087",children:"- 15 minutes ago"})]})]})]})]})]})})}),(0,c.jsxs)("div",{id:"our-services",className:"container py-5",children:[(0,c.jsx)("h2",{className:"text-3xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white",children:"Our Services"}),(0,c.jsx)("h5",{className:"text-center py-5",children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad porro minus doloribus odit eius explicabo voluptates repudiandae, autem totam vel sit qui. Labore distinctio et aperiam similique voluptate? Soluta, exercitationem ipsum pariatur placeat inventore adipisci delectus dignissimos consectetur non voluptatibus laudantium voluptates ducimus consequatur minus, aliquam id quo sunt. Fugiat."}),(0,c.jsx)("section",{className:"bg-blue-50 py-10 px-0 m-0",children:(0,c.jsx)("div",{className:"container mx-auto text-center",children:(0,c.jsx)("div",{className:"grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-8 m-4",children:j.map((function(e,t){return(0,c.jsxs)("div",{className:"bg-blue-100 p-6 rounded-lg shadow-md",children:[(0,c.jsx)("h3",{className:"text-xl font-semibold text-gray-800 mb-4",children:e.title}),(0,c.jsx)("p",{children:e.image})]},t)}))})})})]}),(0,c.jsxs)("div",{id:"about-us",className:"container px-0 py-0 mx-auto",children:[(0,c.jsx)("h2",{className:"text-3xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white",children:"Our Team"}),(0,c.jsx)("h5",{className:"text-center py-5",children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad porro minus doloribus odit eius explicabo voluptates repudiandae, autem totam vel sit qui. Labore distinctio et aperiam similique voluptate? Soluta, exercitationem ipsum pariatur placeat inventore adipisci delectus dignissimos consectetur non voluptatibus laudantium voluptates ducimus consequatur minus, aliquam id quo sunt. Fugiat."}),(0,c.jsxs)("div",{className:"grid grid-cols-3 grid gap-20 mt-0 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 bg-cyan-50 py-10",children:[(0,c.jsxs)("div",{className:"w-full max-w-xs text-center",children:[(0,c.jsx)("img",{className:"w-48 h-48 mx-auto object-cover object-center rounded-full",src:"https://images.unsplash.com/photo-1516756587022-7891ad56a8cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",alt:"avatar"}),(0,c.jsxs)("div",{className:"mt-2",children:[(0,c.jsx)("h3",{className:"text-lg font-medium text-gray-700 dark:text-gray-200",children:"Aruneshwar Sunhara"}),(0,c.jsx)("span",{className:"mt-1 font-medium text-gray-600 dark:text-gray-300",children:"Co-founder"})]})]}),(0,c.jsxs)("div",{className:"w-full max-w-xs text-center",children:[(0,c.jsx)("img",{className:"w-48 h-48 mx-auto object-cover object-center rounded-full",src:"https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80",alt:"avatar"}),(0,c.jsxs)("div",{className:"mt-2",children:[(0,c.jsx)("h3",{className:"text-lg font-medium text-gray-700 dark:text-gray-200",children:"Steve Ben"}),(0,c.jsx)("span",{className:"mt-1 font-medium text-gray-600 dark:text-gray-300",children:"UI/UX"})]})]}),(0,c.jsxs)("div",{className:"w-full max-w-xs text-center",children:[(0,c.jsx)("img",{className:"w-48 h-48 mx-auto object-cover object-center rounded-full",src:"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",alt:"avatar"}),(0,c.jsxs)("div",{className:"mt-2",children:[(0,c.jsx)("h3",{className:"text-lg font-medium text-gray-700 dark:text-gray-200",children:"Patterson Johnson"}),(0,c.jsx)("span",{className:"mt-1 font-medium text-gray-600 dark:text-gray-300",children:"Software Engineer"})]})]})]})]}),(0,c.jsxs)("div",{id:"contact-us",className:"container px-0 py-5 mx-auto bg-purple-0",children:[(0,c.jsx)("h2",{className:"text-3xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white",children:"Contact Us"}),(0,c.jsx)("div",{className:"container flex items-center justify-center mx-auto p-4",children:(0,c.jsxs)("div",{className:"w-full max-w-lg bg-gray-200 shadow-md rounded p-7",children:[(0,c.jsx)("h1",{className:"text-2xl font-bold mb-4",children:"Post Your Query/Suggession ?"}),(0,c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log("Feedback submitted:",{name:s,email:d,feedback:h}),o(""),u(""),g("")},children:[(0,c.jsxs)("div",{className:"mb-4",children:[(0,c.jsx)("label",{htmlFor:"name",className:"block text-gray-700 text-sm font-bold mb-2",children:"Name"}),(0,c.jsx)("input",{type:"text",id:"name",name:"name",value:s,onChange:function(e){return o(e.target.value)},className:"w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500",required:!0})]}),(0,c.jsxs)("div",{className:"mb-4",children:[(0,c.jsx)("label",{htmlFor:"email",className:"block text-gray-700 text-sm font-bold mb-2",children:"Email"}),(0,c.jsx)("input",{type:"email",id:"email",name:"email",value:d,onChange:function(e){return u(e.target.value)},className:"w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500",required:!0})]}),(0,c.jsxs)("div",{className:"mb-4",children:[(0,c.jsx)("label",{htmlFor:"feedback",className:"block text-gray-700 text-sm font-bold mb-2",children:"Your Message/Feedback"}),(0,c.jsx)("textarea",{id:"feedback",name:"feedback",value:h,onChange:function(e){return g(e.target.value)},className:"w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500",rows:"4",required:!0})]}),(0,c.jsx)("button",{type:"submit",className:"bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600",children:"Submit Feedback"})]})]})})]}),(0,c.jsx)("footer",{className:"flex items-center justify-center md:px-5 w-full",children:(0,c.jsx)("div",{className:"bg-black-900 flex flex-col items-center justify-center p-[30px] md:px-10 sm:px-5 w-full",children:(0,c.jsxs)("div",{className:"flex flex-col gap-[53px] items-center justify-center w-[98%] md:w-full",children:[(0,c.jsxs)("div",{className:"flex md:flex-col flex-row md:gap-10 items-start justify-between w-full",children:[(0,c.jsx)("div",{className:"flex flex-col gap-[25px] items-start justify-start",children:(0,c.jsx)(n.xv,{className:"text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[-0.50px]",size:"txtInterSemiBold24WhiteA700",children:(0,c.jsx)("img",{src:"images/bhopalLogo.png",alt:""})})}),(0,c.jsxs)("div",{className:"flex md:flex-1 flex-row items-start justify-between pt-2.5 w-[57%] md:w-full",children:[(0,c.jsx)("div",{className:"flex flex-col gap-[25px] items-start justify-start w-[10%]",children:(0,c.jsx)(n.xv,{className:"text-sm text-white-A700 tracking-[-0.50px]",size:"txtInterBold14",children:"Home"})}),(0,c.jsx)("div",{className:"flex flex-col gap-[25px] items-start justify-start w-[8%]",children:(0,c.jsx)(n.xv,{className:"text-sm text-white-A700 tracking-[-0.50px]",size:"txtInterBold14",children:"News"})}),(0,c.jsx)("div",{className:"flex flex-col gap-[25px] items-start justify-start w-[5%]",children:(0,c.jsx)(n.xv,{className:"text-sm text-white-A700 tracking-[-0.50px]",size:"txtInterBold14",children:"Events"})}),(0,c.jsx)("div",{className:"flex flex-col gap-[23px] items-start justify-start w-[9%]",children:(0,c.jsx)(n.xv,{className:"text-sm text-white-A700 tracking-[-0.50px]",size:"txtInterBold14",children:"Our Services"})}),(0,c.jsx)("div",{className:"flex flex-col gap-[25px] items-start justify-start w-[14%]",children:(0,c.jsx)(n.xv,{className:"text-sm text-white-A700 tracking-[-0.50px]",size:"txtInterBold14",children:"About Us"})}),(0,c.jsx)("div",{className:"flex flex-col gap-[25px] items-start justify-start w-[14%]",children:(0,c.jsx)(n.xv,{className:"text-sm text-white-A700 tracking-[-0.50px]",size:"txtInterBold14",children:"Contact Us"})})]})]}),(0,c.jsxs)("div",{className:"flex flex-col gap-[29px] items-center justify-start w-full",children:[(0,c.jsx)(n.x1,{className:"bg-white-A700 h-px w-full"}),(0,c.jsxs)("div",{className:"flex flex-row md:gap-10 items-start justify-between w-full",children:[(0,c.jsx)(n.xv,{className:"mt-1 text-sm text-white-A700 tracking-[-0.50px]",size:"txtInterRegular14",children:"Copyright \xa9 Apna Bhopal | All Rights Reserved"}),(0,c.jsxs)("div",{children:[(0,c.jsxs)("div",{className:"flex",children:[(0,c.jsx)("a",{href:"https://www.instagram.com/apna_bhopal/",className:"mr-4",children:(0,c.jsx)("img",{src:"images/instagram.png",width:20,alt:""})}),(0,c.jsx)("a",{href:"https://www.instagram.com/apna_bhopal/",className:"mr-4",children:(0,c.jsx)("img",{src:"images/facebook.png",width:20,alt:""})}),(0,c.jsx)("a",{href:"https://www.instagram.com/apna_bhopal/",className:"mr-4",children:(0,c.jsx)("img",{src:"images/telegram.png",width:20,alt:""})}),(0,c.jsx)("a",{href:"https://www.instagram.com/apna_bhopal/",children:(0,c.jsx)("img",{src:"images/twitter.png",width:20,alt:""})})]}),(0,c.jsx)("div",{className:"fixed bottom-12 right-4",children:(0,c.jsx)("a",{href:"https://wa.me/7869992531",target:"_blank",rel:"noopener noreferrer",children:(0,c.jsx)("img",{src:"images/whatsapp.png",alt:"click to chat",className:"w-12 h-12"})})})]})]})]})]})})})]})]})})}}}]);
//# sourceMappingURL=170.951fc70a.chunk.js.map