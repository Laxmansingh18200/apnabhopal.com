"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[583],{514:function(t,e,s){s.d(e,{zx:function(){return x},Jg:function(){return m},Ei:function(){return f},II:function(){return u},x1:function(){return g},aV:function(){return j},h1:function(){return b},xv:function(){return k}});var n=s(593),r=s(738),l=s(791),i=s(184),a=["children","className","leftIcon","rightIcon","shape","size","variant","color"],x=function(t){var e=t.children,s=t.className,l=void 0===s?"":s,x=t.leftIcon,o=t.rightIcon,c=(t.shape,t.size,t.variant,t.color,(0,r.Z)(t,a));return(0,i.jsxs)("button",(0,n.Z)((0,n.Z)({className:"".concat(l)},c),{},{children:[!!x&&x,e,!!o&&o]}))},o=function(t){var e=t.errors,s=void 0===e?[]:e,n=t.className,r=void 0===n?"":n;return(null===s||void 0===s?void 0:s.length)>0&&(0,i.jsx)("div",{className:"text-red-500 text-left text-xs w-full mt-1 ".concat(r),children:s.join(", ")})},c=["inputClassName","className","name","children","label","errors","shape","size","variant","color","id","onChange"],m=l.forwardRef((function(t,e){var s=t.inputClassName,l=void 0===s?"":s,a=t.className,x=void 0===a?"":a,m=t.name,d=void 0===m?"":m,f=t.children,p=t.label,u=void 0===p?"":p,h=t.errors,g=void 0===h?[]:h,v=(t.shape,t.size,t.variant,t.color,t.id),j=void 0===v?"checkbox_id":v,w=t.onChange,N=(0,r.Z)(t,c);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:x,children:[(0,i.jsx)("input",(0,n.Z)((0,n.Z)({className:"".concat(l),ref:e,type:"checkbox",name:d,onChange:function(t){var e;w&&w(null===t||void 0===t||null===(e=t.target)||void 0===e?void 0:e.checked)}},N),{},{id:j})),(0,i.jsx)("label",{htmlFor:j,children:u})]}),(0,i.jsx)(o,{errors:g}),f]})})),d=["className","src","alt"],f=function(t){var e=t.className,s=t.src,l=void 0===s?"defaultNoData.png":s,a=t.alt,x=void 0===a?"testImg":a,o=(0,r.Z)(t,d);return(0,i.jsx)("img",(0,n.Z)((0,n.Z)({className:e,src:l,alt:x},o),{},{loading:"lazy"}))},p=["wrapClassName","className","name","placeholder","type","children","errors","label","prefix","suffix","onChange","shape","size","variant","color"],u=l.forwardRef((function(t,e){var s=t.wrapClassName,l=void 0===s?"":s,a=t.className,x=void 0===a?"":a,c=t.name,m=void 0===c?"":c,d=t.placeholder,f=void 0===d?"":d,u=t.type,h=void 0===u?"text":u,g=(t.children,t.errors),v=void 0===g?[]:g,j=t.label,w=void 0===j?"":j,N=t.prefix,b=t.suffix,y=t.onChange,I=(t.shape,t.size,t.variant,t.color,(0,r.Z)(t,p));return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"".concat(l," \n               \n               \n              "),children:[!!w&&w,!!N&&N,(0,i.jsx)("input",(0,n.Z)({ref:e,className:"".concat(x," bg-transparent border-0"),type:h,name:m,onChange:function(t){var e;y&&y(null===t||void 0===t||null===(e=t.target)||void 0===e?void 0:e.value)},placeholder:f},I)),!!b&&b]}),!!v&&(0,i.jsx)(o,{errors:v})]})})),h=["className"],g=function(t){var e=t.className,s=(0,r.Z)(t,h);return(0,i.jsx)("div",(0,n.Z)({className:e},s))},v=["children","className"],j=function(t){var e=t.children,s=t.className,l=(0,r.Z)(t,v);return(0,i.jsx)("div",(0,n.Z)((0,n.Z)({className:s},l),{},{children:e}))},w=s(890),N=["className","activeCss","inactiveCss","sliderRef","count","activeIndex","selectedWrapperCss","unselectedWrapperCss"],b=function(t){var e=t.className,s=t.activeCss,a=t.inactiveCss,x=t.sliderRef,o=void 0===x?null:x,c=t.count,m=t.activeIndex,d=t.selectedWrapperCss,f=void 0===d?"":d,p=t.unselectedWrapperCss,u=void 0===p?"":p,h=(0,r.Z)(t,N),g=l.useState(0),v=(0,w.Z)(g,2),j=v[0],b=v[1];return l.useEffect((function(){var t,e,s=null===o||void 0===o||null===(t=o.current)||void 0===t||null===(e=t.state)||void 0===e?void 0:e.itemsInSlide;b(s)}),[o]),(0,i.jsx)("div",(0,n.Z)((0,n.Z)({className:e},h),{},{children:Array(c).fill(0).map((function(t,e){var n=m>=e*j&&m<(e+1)*j;return(0,i.jsx)("div",{className:"".concat(n?f:u," "),children:(0,i.jsx)("span",{className:"".concat(n?s:a," slider-indicator"),onClick:function(){var t;return null===o||void 0===o||null===(t=o.current)||void 0===t?void 0:t.slideTo(e*j)}})},"indicator"+e)}))}))},y=["children","className","size","as"],I={txtInterSemiBold24WhiteA700:"font-inter font-semibold",txtInterRegular14Black900:"font-inter font-normal",txtInterSemiBold18WhiteA70087:"font-inter font-semibold",txtInterSemiBold48:"font-inter font-semibold",txtInterRegular12WhiteA700:"font-inter font-normal",txtInterRegular18Black90087:"font-inter font-normal",txtInterRegular14Bluegray900:"font-inter font-normal",txtInterSemiBold24:"font-inter font-semibold",txtInterRegular14Black90087:"font-inter font-normal",txtInterSemiBold36Black900:"font-inter font-semibold",txtPoppinsRegular28:"font-normal font-poppins",txtPoppinsBold14:"font-bold font-poppins",txtPoppinsRegular10:"font-normal font-poppins",txtInterSemiBold14Black90090:"font-inter font-semibold",txtPoppinsRegular12:"font-normal font-poppins",txtInterSemiBold10:"font-inter font-semibold",txtPoppinsRegular10Black90087:"font-normal font-poppins",txtInterRegular16Black900:"font-inter font-normal",txtInterRegular14Black9007f:"font-inter font-normal",txtInterSemiBold48Black900:"font-inter font-semibold",txtPoppinsMedium16:"font-medium font-poppins",txtInterSemiBold14Bluegray900:"font-inter font-semibold",txtInterBold18:"font-bold font-inter",txtInterRegular12Black9007f:"font-inter font-normal",txtInterSemiBold18Black900:"font-inter font-semibold",txtInterRegular10:"font-inter font-normal",txtInterSemiBold36:"font-inter font-semibold",txtInterBold36:"font-bold font-inter",txtInterBold14:"font-bold font-inter",txtInterSemiBold14:"font-inter font-semibold",txtInterSemiBold12:"font-inter font-semibold",txtInterSemiBold18Black90087:"font-inter font-semibold",txtInterSemiBold18:"font-inter font-semibold",txtPoppinsRegular14:"font-normal font-poppins",txtPoppinsRegular15:"font-normal font-poppins",txtPoppinsRegular17:"font-normal font-poppins",txtInterRegular12WhiteA70087:"font-inter font-normal",txtInterRegular18Black900:"font-inter font-normal",txtPoppinsSemiBold20:"font-poppins font-semibold",txtInterBold18WhiteA700:"font-bold font-inter",txtInterRegular12:"font-inter font-normal",txtInterRegular18Black9007f:"font-inter font-normal",txtInterSemiBold10Black900:"font-inter font-semibold",txtInterRegular14:"font-inter font-normal",txtInterSemiBold12WhiteA700:"font-inter font-semibold",txtInterRegular16:"font-inter font-normal",txtInterRegular18:"font-inter font-normal"},k=function(t){var e=t.children,s=t.className,l=void 0===s?"":s,a=t.size,x=t.as,o=(0,r.Z)(t,y),c=x||"p";return(0,i.jsx)(c,(0,n.Z)((0,n.Z)({className:"text-left ".concat(l," ").concat(a&&I[a])},o),{},{children:e}))}},583:function(t,e,s){s.r(e);s(791);var n=s(871),r=s(514),l=s(184);e.default=function(){var t=(0,n.s0)();return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"bg-white-A700 flex flex-col font-inter sm:gap-10 md:gap-10 gap-[70px] items-center justify-start mx-auto w-full",children:[(0,l.jsx)("header",{className:"flex items-center justify-center md:px-5 w-full",children:(0,l.jsx)("div",{className:"bg-bluegray-900 flex flex-row items-center justify-center p-[26px] sm:px-5 w-full",children:(0,l.jsxs)("div",{className:"flex md:flex-col flex-row md:gap-5 items-center justify-center w-[94%]",children:[(0,l.jsx)(r.xv,{className:"text-4xl sm:text-[32px] md:text-[34px] text-white-A700 tracking-[-0.50px]",size:"txtInterSemiBold36",children:"Neuzy"}),(0,l.jsxs)("div",{className:"flex md:flex-col flex-row gap-6 items-center justify-center md:ml-[0] ml-[173px] w-[47%] md:w-full",children:[(0,l.jsx)(r.xv,{className:"text-lg text-white-A700 tracking-[-0.50px]",size:"txtInterSemiBold18",children:"Sport"}),(0,l.jsx)(r.xv,{className:"text-lg text-white-A700 tracking-[-0.50px]",size:"txtInterSemiBold18",children:"Health"}),(0,l.jsx)(r.xv,{className:"text-lg text-white-A700 tracking-[-0.50px]",size:"txtInterSemiBold18",children:"Political"}),(0,l.jsx)(r.xv,{className:"text-lg text-white-A700 tracking-[-0.50px]",size:"txtInterSemiBold18",children:"Business"}),(0,l.jsx)(r.xv,{className:"text-lg text-white-A700 tracking-[-0.50px]",size:"txtInterSemiBold18",children:"Finance"}),(0,l.jsx)(r.xv,{className:"text-lg text-white-A700 tracking-[-0.50px]",size:"txtInterSemiBold18",children:"Life"}),(0,l.jsx)(r.xv,{className:"text-lg text-white-A700 tracking-[-0.50px]",size:"txtInterSemiBold18",children:"Entertainment"})]}),(0,l.jsxs)("div",{className:"flex flex-row items-center justify-between md:ml-[0] ml-[214px] w-[15%] md:w-full",children:[(0,l.jsx)(r.Ei,{className:"common-pointer h-6 w-6",src:"images/img_search.svg",alt:"search",onClick:function(){return t("/search")}}),(0,l.jsx)(r.x1,{className:"bg-white-A700 h-[26px] w-px"}),(0,l.jsxs)("div",{className:"flex flex-row gap-5 items-center justify-between w-[56%]",children:[(0,l.jsx)(r.xv,{className:"common-pointer text-sm text-white-A700 tracking-[-0.50px]",size:"txtInterRegular14",onClick:function(){return t("/login")},children:"Login"}),(0,l.jsx)(r.xv,{className:"common-pointer text-sm text-white-A700 tracking-[-0.50px]",size:"txtInterRegular14",onClick:function(){return t("/register")},children:"Register"})]})]})]})})}),(0,l.jsxs)("div",{className:"flex flex-col md:gap-10 gap-[130px] items-center justify-start w-full",children:[(0,l.jsxs)("div",{className:"flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1291px] mx-auto md:px-5 w-full",children:[(0,l.jsxs)("div",{className:"flex flex-col md:gap-10 gap-[120px] items-start justify-start",children:[(0,l.jsx)(r.xv,{className:"text-5xl sm:text-[38px] md:text-[44px] text-black-900 tracking-[-0.50px] w-full",size:"txtInterSemiBold48Black900",children:"Enter your new password to update the old password"}),(0,l.jsx)(r.xv,{className:"leading-[35.00px] text-black-900_87 text-lg tracking-[-0.50px] w-[88%] sm:w-full",size:"txtInterRegular18Black90087",children:(0,l.jsx)(l.Fragment,{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"})})]}),(0,l.jsx)("div",{className:"bg-white-A700 border border-bluegray-900 border-solid flex md:flex-1 flex-col items-center justify-start p-[51px] md:px-10 sm:px-5 w-[41%] md:w-full",children:(0,l.jsxs)("div",{className:"flex flex-col md:gap-10 gap-[60px] items-center justify-start mb-[3px] rounded-[10px] w-[94%] md:w-full",children:[(0,l.jsx)(r.xv,{className:"text-4xl sm:text-[32px] md:text-[34px] text-black-900 tracking-[-0.50px]",size:"txtInterSemiBold36Black900",children:"Neuzy"}),(0,l.jsxs)("div",{className:"flex flex-col gap-[30px] items-start justify-start w-full",children:[(0,l.jsxs)("div",{className:"flex flex-col font-poppins gap-[23px] items-center justify-start pt-[3px] rounded-[10px] w-full",children:[(0,l.jsxs)("div",{className:"flex flex-col gap-3.5 items-start justify-start rounded-[10px] w-full",children:[(0,l.jsx)(r.xv,{className:"text-black-900 text-sm tracking-[0.07px]",size:"txtPoppinsRegular14",children:"Password"}),(0,l.jsx)(r.II,{name:"Input",placeholder:"Enter your Password",className:"p-0 placeholder:text-bluegray-400 sm:pr-5 text-base text-bluegray-400 text-left tracking-[0.08px] w-full",wrapClassName:"border border-black-900 border-solid pb-[18px] pl-4 pr-[35px] pt-6 rounded-[10px] w-full",type:"password"})]}),(0,l.jsxs)("div",{className:"flex flex-col gap-3.5 items-start justify-start rounded-[10px] w-full",children:[(0,l.jsx)(r.xv,{className:"text-black-900 text-sm tracking-[0.07px]",size:"txtPoppinsRegular14",children:"Confirm Password"}),(0,l.jsx)(r.II,{name:"Input One",placeholder:"Enter your Password",className:"p-0 placeholder:text-bluegray-400 sm:pr-5 text-base text-bluegray-400 text-left tracking-[0.08px] w-full",wrapClassName:"border border-black-900 border-solid pb-[18px] pl-4 pr-[35px] pt-6 rounded-[10px] w-full",type:"password"})]})]}),(0,l.jsx)(r.zx,{className:"common-pointer bg-bluegray-900 cursor-pointer font-medium font-poppins min-w-[400px] sm:min-w-full py-5 rounded-[10px] text-base text-center text-white-A700 tracking-[0.08px]",onClick:function(){return t("/login")},children:"Submit"}),(0,l.jsxs)(r.xv,{className:"md:ml-[0] ml-[50px] text-black-900 text-sm tracking-[-0.50px]",size:"txtInterRegular14Black900",children:[(0,l.jsxs)("span",{className:"text-black-900 font-inter text-left font-normal",children:["Do you already have an account??"," "]}),(0,l.jsx)("span",{className:"text-bluegray-900 font-inter text-left font-normal",children:"Login Now"})]})]})]})})]}),(0,l.jsx)("footer",{className:"flex items-center justify-center md:px-5 w-full",children:(0,l.jsx)("div",{className:"bg-black-900 flex flex-col items-center justify-center p-[60px] md:px-10 sm:px-5 w-full",children:(0,l.jsxs)("div",{className:"flex flex-col gap-[53px] items-center justify-center w-[98%] md:w-full",children:[(0,l.jsxs)("div",{className:"flex md:flex-col flex-row md:gap-10 items-start justify-between w-full",children:[(0,l.jsxs)("div",{className:"flex flex-col gap-[22px] items-start justify-start",children:[(0,l.jsx)(r.xv,{className:"text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[-0.50px]",size:"txtInterSemiBold24WhiteA700",children:"Neuzy"}),(0,l.jsx)(r.xv,{className:"leading-[35.00px] text-sm text-white-A700 tracking-[-0.50px] w-full",size:"txtInterRegular14",children:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."})]}),(0,l.jsxs)("div",{className:"flex md:flex-1 flex-row items-start justify-between pt-2.5 w-[57%] md:w-full",children:[(0,l.jsxs)("div",{className:"flex flex-col gap-[25px] items-start justify-start w-[10%]",children:[(0,l.jsx)(r.xv,{className:"text-sm text-white-A700 tracking-[-0.50px]",size:"txtInterBold14",children:"World"}),(0,l.jsxs)("div",{className:"flex flex-col gap-[18px] items-start justify-start w-full",children:[(0,l.jsx)(r.xv,{className:"text-white-A700 text-xs tracking-[-0.50px]",size:"txtInterRegular12WhiteA700",children:"Politcts"}),(0,l.jsx)(r.xv,{className:"text-white-A700 text-xs tracking-[-0.50px]",size:"txtInterRegular12WhiteA700",children:"Health"}),(0,l.jsx)(r.xv,{className:"text-white-A700 text-xs tracking-[-0.50px]",size:"txtInterRegular12WhiteA700",children:"Business"}),(0,l.jsx)(r.xv,{className:"text-white-A700 text-xs tracking-[-0.50px]",size:"txtInterRegular12WhiteA700",children:"Tech"}),(0,l.jsx)(r.xv,{className:"text-white-A700 text-xs tracking-[-0.50px]",size:"txtInterRegular12WhiteA700",children:"Entertaiment"})]})]}),(0,l.jsxs)("div",{className:"flex flex-col gap-[25px] items-start justify-start w-[8%]",children:[(0,l.jsx)(r.xv,{className:"text-sm text-white-A700 tracking-[-0.50px]",size:"txtInterBold14",children:"Tech"}),(0,l.jsxs)("div",{className:"flex flex-col gap-[18px] items-start justify-start w-full",children:[(0,l.jsx)(r.xv,{className:"text-white-A700 text-xs tracking-[-0.50px]",size:"txtInterRegular12WhiteA700",children:"Siance"}),(0,l.jsx)(r.xv,{className:"text-white-A700 text-xs tracking-[-0.50px]",size:"txtInterRegular12WhiteA700",children:"Magazine"}),(0,l.jsx)(r.xv,{className:"text-white-A700 text-xs tracking-[-0.50px]",size:"txtInterRegular12WhiteA700",children:"Start up"}),(0,l.jsx)(r.xv,{className:"text-white-A700 text-xs tracking-[-0.50px]",size:"txtInterRegular12WhiteA700",children:"Crypto"})]})]}),(0,l.jsxs)("div",{className:"flex flex-col gap-[26px] items-start justify-start w-[5%]",children:[(0,l.jsx)(r.xv,{className:"text-sm text-white-A700 tracking-[-0.50px]",size:"txtInterBold14",children:"Life"}),(0,l.jsxs)("div",{className:"flex flex-col gap-[18px] items-start justify-start w-full",children:[(0,l.jsx)(r.xv,{className:"text-white-A700 text-xs tracking-[-0.50px]",size:"txtInterRegular12WhiteA700",children:"Food"}),(0,l.jsx)(r.xv,{className:"text-white-A700 text-xs tracking-[-0.50px]",size:"txtInterRegular12WhiteA700",children:"Style"}),(0,l.jsx)(r.xv,{className:"text-white-A700 text-xs tracking-[-0.50px]",size:"txtInterRegular12WhiteA700",children:"Sport"}),(0,l.jsx)(r.xv,{className:"text-white-A700 text-xs tracking-[-0.50px]",size:"txtInterRegular12WhiteA700",children:"Movie"}),(0,l.jsx)(r.xv,{className:"text-white-A700 text-xs tracking-[-0.50px]",size:"txtInterRegular12WhiteA700",children:"Music"})]})]}),(0,l.jsxs)("div",{className:"flex flex-col gap-6 items-start justify-start w-[9%]",children:[(0,l.jsx)(r.xv,{className:"text-sm text-white-A700 tracking-[-0.50px]",size:"txtInterBold14",children:"Magezine"}),(0,l.jsxs)("div",{className:"flex flex-col gap-[18px] items-start justify-start",children:[(0,l.jsx)(r.xv,{className:"text-white-A700 text-xs tracking-[-0.50px]",size:"txtInterRegular12WhiteA700",children:"Fasion"}),(0,l.jsx)(r.xv,{className:"text-white-A700 text-xs tracking-[-0.50px]",size:"txtInterRegular12WhiteA700",children:"Blogger"}),(0,l.jsx)(r.xv,{className:"text-white-A700 text-xs tracking-[-0.50px]",size:"txtInterRegular12WhiteA700",children:"People"})]})]}),(0,l.jsxs)("div",{className:"flex flex-col gap-[25px] items-start justify-start w-[14%]",children:[(0,l.jsx)(r.xv,{className:"text-sm text-white-A700 tracking-[-0.50px]",size:"txtInterBold14",children:"Other"}),(0,l.jsxs)("div",{className:"flex flex-col gap-[18px] items-start justify-start w-full",children:[(0,l.jsx)(r.xv,{className:"text-white-A700 text-xs tracking-[-0.50px]",size:"txtInterRegular12WhiteA700",children:"About"}),(0,l.jsx)(r.xv,{className:"text-white-A700 text-xs tracking-[-0.50px]",size:"txtInterRegular12WhiteA700",children:"Contact us"}),(0,l.jsx)(r.xv,{className:"text-white-A700 text-xs tracking-[-0.50px]",size:"txtInterRegular12WhiteA700",children:"Terms & Conditions"})]})]})]})]}),(0,l.jsxs)("div",{className:"flex flex-col gap-[29px] items-center justify-start w-full",children:[(0,l.jsx)(r.x1,{className:"bg-white-A700 h-px w-full"}),(0,l.jsxs)("div",{className:"flex flex-row md:gap-10 items-start justify-between w-full",children:[(0,l.jsx)(r.xv,{className:"mt-1 text-sm text-white-A700 tracking-[-0.50px]",size:"txtInterRegular14",children:"Copyright \xa9 Neuzy | All Rights Reserved"}),(0,l.jsx)(r.Ei,{className:"h-6",src:"images/img_group20875.svg",alt:"Group20875"})]})]})]})})})]})]})})}},593:function(t,e,s){function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function r(t){var e=function(t,e){if("object"!==n(t)||null===t)return t;var s=t[Symbol.toPrimitive];if(void 0!==s){var r=s.call(t,e||"default");if("object"!==n(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===n(e)?e:String(e)}function l(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,n)}return s}function i(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?l(Object(s),!0).forEach((function(e){var n,l,i;n=t,l=e,i=s[e],(l=r(l))in n?Object.defineProperty(n,l,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[l]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):l(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}s.d(e,{Z:function(){return i}})},738:function(t,e,s){function n(t,e){if(null==t)return{};var s,n,r=function(t,e){if(null==t)return{};var s,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)s=l[n],e.indexOf(s)>=0||(r[s]=t[s]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)s=l[n],e.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(t,s)&&(r[s]=t[s])}return r}s.d(e,{Z:function(){return n}})}}]);
//# sourceMappingURL=583.cc4218a6.chunk.js.map