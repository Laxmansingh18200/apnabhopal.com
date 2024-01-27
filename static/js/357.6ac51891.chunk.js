"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[357],{514:function(e,t,s){s.d(t,{zx:function(){return x},Jg:function(){return m},Ei:function(){return f},II:function(){return u},x1:function(){return g},aV:function(){return v},h1:function(){return k},xv:function(){return I}});var l=s(593),i=s(738),a=s(791),n=s(184),r=["children","className","leftIcon","rightIcon","shape","size","variant","color"],x=function(e){var t=e.children,s=e.className,a=void 0===s?"":s,x=e.leftIcon,c=e.rightIcon,o=(e.shape,e.size,e.variant,e.color,(0,i.Z)(e,r));return(0,n.jsxs)("button",(0,l.Z)((0,l.Z)({className:"".concat(a)},o),{},{children:[!!x&&x,t,!!c&&c]}))},c=function(e){var t=e.errors,s=void 0===t?[]:t,l=e.className,i=void 0===l?"":l;return(null===s||void 0===s?void 0:s.length)>0&&(0,n.jsx)("div",{className:"text-red-500 text-left text-xs w-full mt-1 ".concat(i),children:s.join(", ")})},o=["inputClassName","className","name","children","label","errors","shape","size","variant","color","id","onChange"],m=a.forwardRef((function(e,t){var s=e.inputClassName,a=void 0===s?"":s,r=e.className,x=void 0===r?"":r,m=e.name,d=void 0===m?"":m,f=e.children,p=e.label,u=void 0===p?"":p,h=e.errors,g=void 0===h?[]:h,j=(e.shape,e.size,e.variant,e.color,e.id),v=void 0===j?"checkbox_id":j,w=e.onChange,y=(0,i.Z)(e,o);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:x,children:[(0,n.jsx)("input",(0,l.Z)((0,l.Z)({className:"".concat(a),ref:t,type:"checkbox",name:d,onChange:function(e){var t;w&&w(null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.checked)}},y),{},{id:v})),(0,n.jsx)("label",{htmlFor:v,children:u})]}),(0,n.jsx)(c,{errors:g}),f]})})),d=["className","src","alt"],f=function(e){var t=e.className,s=e.src,a=void 0===s?"defaultNoData.png":s,r=e.alt,x=void 0===r?"testImg":r,c=(0,i.Z)(e,d);return(0,n.jsx)("img",(0,l.Z)((0,l.Z)({className:t,src:a,alt:x},c),{},{loading:"lazy"}))},p=["wrapClassName","className","name","placeholder","type","children","errors","label","prefix","suffix","onChange","shape","size","variant","color"],u=a.forwardRef((function(e,t){var s=e.wrapClassName,a=void 0===s?"":s,r=e.className,x=void 0===r?"":r,o=e.name,m=void 0===o?"":o,d=e.placeholder,f=void 0===d?"":d,u=e.type,h=void 0===u?"text":u,g=(e.children,e.errors),j=void 0===g?[]:g,v=e.label,w=void 0===v?"":v,y=e.prefix,k=e.suffix,b=e.onChange,N=(e.shape,e.size,e.variant,e.color,(0,i.Z)(e,p));return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"".concat(a," \n               \n               \n              "),children:[!!w&&w,!!y&&y,(0,n.jsx)("input",(0,l.Z)({ref:t,className:"".concat(x," bg-transparent border-0"),type:h,name:m,onChange:function(e){var t;b&&b(null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value)},placeholder:f},N)),!!k&&k]}),!!j&&(0,n.jsx)(c,{errors:j})]})})),h=["className"],g=function(e){var t=e.className,s=(0,i.Z)(e,h);return(0,n.jsx)("div",(0,l.Z)({className:t},s))},j=["children","className"],v=function(e){var t=e.children,s=e.className,a=(0,i.Z)(e,j);return(0,n.jsx)("div",(0,l.Z)((0,l.Z)({className:s},a),{},{children:t}))},w=s(890),y=["className","activeCss","inactiveCss","sliderRef","count","activeIndex","selectedWrapperCss","unselectedWrapperCss"],k=function(e){var t=e.className,s=e.activeCss,r=e.inactiveCss,x=e.sliderRef,c=void 0===x?null:x,o=e.count,m=e.activeIndex,d=e.selectedWrapperCss,f=void 0===d?"":d,p=e.unselectedWrapperCss,u=void 0===p?"":p,h=(0,i.Z)(e,y),g=a.useState(0),j=(0,w.Z)(g,2),v=j[0],k=j[1];return a.useEffect((function(){var e,t,s=null===c||void 0===c||null===(e=c.current)||void 0===e||null===(t=e.state)||void 0===t?void 0:t.itemsInSlide;k(s)}),[c]),(0,n.jsx)("div",(0,l.Z)((0,l.Z)({className:t},h),{},{children:Array(o).fill(0).map((function(e,t){var l=m>=t*v&&m<(t+1)*v;return(0,n.jsx)("div",{className:"".concat(l?f:u," "),children:(0,n.jsx)("span",{className:"".concat(l?s:r," slider-indicator"),onClick:function(){var e;return null===c||void 0===c||null===(e=c.current)||void 0===e?void 0:e.slideTo(t*v)}})},"indicator"+t)}))}))},b=["children","className","size","as"],N={txtInterSemiBold24WhiteA700:"font-inter font-semibold",txtInterRegular14Black900:"font-inter font-normal",txtInterSemiBold18WhiteA70087:"font-inter font-semibold",txtInterSemiBold48:"font-inter font-semibold",txtInterRegular12WhiteA700:"font-inter font-normal",txtInterRegular18Black90087:"font-inter font-normal",txtInterRegular14Bluegray900:"font-inter font-normal",txtInterSemiBold24:"font-inter font-semibold",txtInterRegular14Black90087:"font-inter font-normal",txtInterSemiBold36Black900:"font-inter font-semibold",txtPoppinsRegular28:"font-normal font-poppins",txtPoppinsBold14:"font-bold font-poppins",txtPoppinsRegular10:"font-normal font-poppins",txtInterSemiBold14Black90090:"font-inter font-semibold",txtPoppinsRegular12:"font-normal font-poppins",txtInterSemiBold10:"font-inter font-semibold",txtPoppinsRegular10Black90087:"font-normal font-poppins",txtInterRegular16Black900:"font-inter font-normal",txtInterRegular14Black9007f:"font-inter font-normal",txtInterSemiBold48Black900:"font-inter font-semibold",txtPoppinsMedium16:"font-medium font-poppins",txtInterSemiBold14Bluegray900:"font-inter font-semibold",txtInterBold18:"font-bold font-inter",txtInterRegular12Black9007f:"font-inter font-normal",txtInterSemiBold18Black900:"font-inter font-semibold",txtInterRegular10:"font-inter font-normal",txtInterSemiBold36:"font-inter font-semibold",txtInterBold36:"font-bold font-inter",txtInterBold14:"font-bold font-inter",txtInterSemiBold14:"font-inter font-semibold",txtInterSemiBold12:"font-inter font-semibold",txtInterSemiBold18Black90087:"font-inter font-semibold",txtInterSemiBold18:"font-inter font-semibold",txtPoppinsRegular14:"font-normal font-poppins",txtPoppinsRegular15:"font-normal font-poppins",txtPoppinsRegular17:"font-normal font-poppins",txtInterRegular12WhiteA70087:"font-inter font-normal",txtInterRegular18Black900:"font-inter font-normal",txtPoppinsSemiBold20:"font-poppins font-semibold",txtInterBold18WhiteA700:"font-bold font-inter",txtInterRegular12:"font-inter font-normal",txtInterRegular18Black9007f:"font-inter font-normal",txtInterSemiBold10Black900:"font-inter font-semibold",txtInterRegular14:"font-inter font-normal",txtInterSemiBold12WhiteA700:"font-inter font-semibold",txtInterRegular16:"font-inter font-normal",txtInterRegular18:"font-inter font-normal"},I=function(e){var t=e.children,s=e.className,a=void 0===s?"":s,r=e.size,x=e.as,c=(0,i.Z)(e,b),o=x||"p";return(0,n.jsx)(o,(0,l.Z)((0,l.Z)({className:"text-left ".concat(a," ").concat(r&&N[r])},c),{},{children:t}))}},357:function(e,t,s){s.r(t);s(791);var l=s(871),i=s(514),a=s(184);t.default=function(){var e=(0,l.s0)();return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"bg-white-A700 flex flex-col font-inter gap-[50px] items-center justify-start mx-auto w-full",children:[(0,a.jsx)("header",{className:"flex items-center justify-center md:px-5 w-full",children:(0,a.jsx)("div",{className:"bg-bluegray-900 flex flex-row items-center justify-center p-[26px] sm:px-5 w-full",children:(0,a.jsxs)("div",{className:"flex md:flex-col flex-row md:gap-5 items-center justify-center w-[94%]",children:[(0,a.jsx)(i.xv,{className:"text-4xl sm:text-[32px] md:text-[34px] text-white-A700 tracking-[-0.50px]",size:"txtInterSemiBold36",children:"Neuzy"}),(0,a.jsxs)("div",{className:"flex md:flex-col flex-row gap-6 items-center justify-center md:ml-[0] ml-[173px] w-[47%] md:w-full",children:[(0,a.jsx)(i.xv,{className:"text-lg text-white-A700 tracking-[-0.50px]",size:"txtInterSemiBold18",children:"Sport"}),(0,a.jsx)(i.xv,{className:"text-lg text-white-A700 tracking-[-0.50px]",size:"txtInterSemiBold18",children:"Health"}),(0,a.jsx)(i.xv,{className:"text-lg text-white-A700 tracking-[-0.50px]",size:"txtInterSemiBold18",children:"Political"}),(0,a.jsx)(i.xv,{className:"text-lg text-white-A700 tracking-[-0.50px]",size:"txtInterSemiBold18",children:"Business"}),(0,a.jsx)(i.xv,{className:"text-lg text-white-A700 tracking-[-0.50px]",size:"txtInterSemiBold18",children:"Finance"}),(0,a.jsx)(i.xv,{className:"text-lg text-white-A700 tracking-[-0.50px]",size:"txtInterSemiBold18",children:"Life"}),(0,a.jsx)(i.xv,{className:"text-lg text-white-A700 tracking-[-0.50px]",size:"txtInterSemiBold18",children:"Entertainment"})]}),(0,a.jsxs)("div",{className:"flex flex-row items-center justify-between md:ml-[0] ml-[214px] w-[15%] md:w-full",children:[(0,a.jsx)(i.Ei,{className:"common-pointer h-6 w-6",src:"images/img_search.svg",alt:"search",onClick:function(){return e("/search")}}),(0,a.jsx)(i.x1,{className:"bg-white-A700 h-[26px] w-px"}),(0,a.jsxs)("div",{className:"flex flex-row gap-5 items-center justify-between w-[56%]",children:[(0,a.jsx)(i.xv,{className:"common-pointer text-sm text-white-A700 tracking-[-0.50px]",size:"txtInterRegular14",onClick:function(){return e("/login")},children:"Login"}),(0,a.jsx)(i.xv,{className:"common-pointer text-sm text-white-A700 tracking-[-0.50px]",size:"txtInterRegular14",onClick:function(){return e("/register")},children:"Register"})]})]})]})})}),(0,a.jsxs)("div",{className:"flex flex-col items-center justify-start w-full",children:[(0,a.jsxs)("div",{className:"flex flex-col items-center justify-start md:px-5 w-[45%] md:w-full",children:[(0,a.jsxs)("div",{className:"flex flex-row gap-2.5 items-end justify-center w-[17%] md:w-full",children:[(0,a.jsx)("div",{className:"bg-bluegray-900 h-[15px] mt-1.5 rounded-[50%] w-[15px]"}),(0,a.jsx)(i.xv,{className:"text-black-900 text-lg tracking-[-0.50px]",size:"txtInterRegular18Black900",children:"Hot Topic"})]}),(0,a.jsx)(i.xv,{className:"mt-[23px] text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center tracking-[-0.50px] w-full",size:"txtInterBold36",children:"Miami Dolphins won the match and officially qualified for the final"}),(0,a.jsxs)("div",{className:"flex flex-row items-center justify-center mt-[38px] w-[56%] md:w-full",children:[(0,a.jsxs)(i.xv,{className:"text-black-900 text-lg tracking-[-0.50px]",size:"txtInterSemiBold18Black900",children:["New York, 22 Agust 2022"," "]}),(0,a.jsxs)(i.xv,{className:"ml-1 text-black-900_87 text-lg tracking-[-0.50px]",size:"txtInterSemiBold18Black90087",children:[(0,a.jsxs)("span",{className:"text-black-900 font-inter text-left font-semibold",children:["-"," "]}),(0,a.jsx)("span",{className:"text-black-900 font-inter text-left font-normal",children:"10 minutes ago"})]})]})]}),(0,a.jsx)(i.Ei,{className:"h-[497px] sm:h-auto mt-[50px] object-cover w-full",src:"images/img_rectangle5_497X1440.png",alt:"RectangleFive"}),(0,a.jsxs)("div",{className:"flex flex-col gap-[50px] items-center justify-start mt-[60px] md:px-5 w-3/5 md:w-full",children:[(0,a.jsxs)("div",{className:"flex flex-col gap-5 items-center justify-start w-full",children:[(0,a.jsxs)("div",{className:"flex flex-col items-start justify-start w-full",children:[(0,a.jsx)(i.xv,{className:"text-4xl sm:text-[32px] md:text-[34px] text-black-900 tracking-[-0.50px]",size:"txtInterSemiBold36Black900",children:"About Team"}),(0,a.jsx)(i.xv,{className:"leading-[35.00px] mt-[30px] text-base text-black-900 tracking-[-0.50px] w-full",size:"txtInterRegular16Black900",children:(0,a.jsx)(a.Fragment,{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."})}),(0,a.jsx)(i.xv,{className:"leading-[35.00px] mt-5 text-base text-black-900 tracking-[-0.50px] w-full",size:"txtInterRegular16Black900",children:"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."})]}),(0,a.jsx)(i.Ei,{className:"h-[400px] md:h-auto object-cover w-full",src:"images/img_unsplashxhzbz.png",alt:"unsplashxHZBz"})]}),(0,a.jsxs)("div",{className:"flex flex-col items-start justify-start w-full",children:[(0,a.jsx)(i.xv,{className:"text-4xl sm:text-[32px] md:text-[34px] text-black-900 tracking-[-0.50px]",size:"txtInterSemiBold36Black900",children:"Officially Qualified for the Final"}),(0,a.jsx)(i.xv,{className:"leading-[35.00px] mt-[30px] text-base text-black-900 tracking-[-0.50px] w-full",size:"txtInterRegular16Black900",children:(0,a.jsx)(a.Fragment,{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."})}),(0,a.jsx)(i.xv,{className:"leading-[35.00px] mt-5 text-base text-black-900 tracking-[-0.50px] w-full",size:"txtInterRegular16Black900",children:"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}),(0,a.jsx)(i.xv,{className:"leading-[35.00px] mt-5 text-base text-black-900 tracking-[-0.50px] w-full",size:"txtInterRegular16Black900",children:(0,a.jsx)(a.Fragment,{children:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'})})]}),(0,a.jsxs)("div",{className:"flex flex-col gap-5 items-center justify-start w-full",children:[(0,a.jsxs)("div",{className:"flex flex-col items-center justify-start w-full",children:[(0,a.jsx)(i.xv,{className:"text-4xl sm:text-[32px] md:text-[34px] text-black-900 tracking-[-0.50px] w-full",size:"txtInterSemiBold36Black900",children:"Typing skills and strategy are the keys to victory this time"}),(0,a.jsx)(i.xv,{className:"leading-[35.00px] mt-10 text-base text-black-900 tracking-[-0.50px] w-full",size:"txtInterRegular16Black900",children:(0,a.jsx)(a.Fragment,{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."})}),(0,a.jsx)(i.xv,{className:"leading-[35.00px] mt-5 text-base text-black-900 tracking-[-0.50px] w-full",size:"txtInterRegular16Black900",children:(0,a.jsx)(a.Fragment,{children:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'})})]}),(0,a.jsx)(i.Ei,{className:"h-[400px] md:h-auto object-cover w-full",src:"images/img_unsplash26mjgn.png",alt:"unsplash26MJGn"})]}),(0,a.jsxs)("div",{className:"flex flex-col items-start justify-start w-full",children:[(0,a.jsx)(i.xv,{className:"text-4xl sm:text-[32px] md:text-[34px] text-black-900 tracking-[-0.50px]",size:"txtInterSemiBold36Black900",children:"Best regards from Miami Dolphins"}),(0,a.jsx)(i.xv,{className:"leading-[35.00px] mt-[30px] text-base text-black-900 tracking-[-0.50px] w-full",size:"txtInterRegular16Black900",children:(0,a.jsx)(a.Fragment,{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."})}),(0,a.jsx)(i.xv,{className:"leading-[35.00px] mt-5 text-base text-black-900 tracking-[-0.50px] w-full",size:"txtInterRegular16Black900",children:"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."})]}),(0,a.jsx)(i.x1,{className:"bg-black-900_4c h-px w-full"})]}),(0,a.jsxs)("div",{className:"flex flex-col gap-[50px] items-center justify-start mt-[49px] md:px-5 w-[28%] md:w-full",children:[(0,a.jsxs)("div",{className:"flex flex-col gap-5 items-center justify-start w-full",children:[(0,a.jsxs)("div",{className:"flex flex-row gap-2.5 items-start justify-center w-1/2 md:w-full",children:[(0,a.jsx)(i.Ei,{className:"h-[60px] md:h-auto rounded-[50%] w-[60px]",src:"images/img_unsplashtwuphb.png",alt:"unsplashTwuPHb"}),(0,a.jsxs)("div",{className:"flex flex-col gap-[7px] items-start justify-start mt-[3px]",children:[(0,a.jsx)(i.xv,{className:"text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[-0.50px]",size:"txtInterSemiBold24",children:"Jhone RIck"}),(0,a.jsx)(i.xv,{className:"text-black-900_7f text-xs tracking-[-0.50px]",size:"txtInterRegular12Black9007f",children:"About Author"})]})]}),(0,a.jsx)(i.xv,{className:"leading-[35.00px] text-black-900 text-center text-sm tracking-[-0.50px] w-full",size:"txtInterRegular14Black900",children:"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s."})]}),(0,a.jsxs)("div",{className:"flex flex-col gap-[25px] items-center justify-start w-[45%] md:w-full",children:[(0,a.jsx)(i.xv,{className:"text-black-900 text-lg tracking-[-0.50px]",size:"txtInterSemiBold18Black900",children:"Connect with Author"}),(0,a.jsx)(i.Ei,{className:"h-6 w-[65%]",src:"images/img_group20875_black_900.svg",alt:"Group20875"})]})]}),(0,a.jsx)("div",{className:"flex flex-col items-center justify-start max-w-[1294px] mt-[120px] mx-auto pb-[34px] md:px-5 w-full",children:(0,a.jsxs)("div",{className:"flex flex-col gap-[49px] items-center justify-start w-full",children:[(0,a.jsxs)("div",{className:"flex flex-col gap-7 items-center justify-start rounded-lg w-full",children:[(0,a.jsxs)("div",{className:"flex flex-row md:gap-10 items-start justify-between rounded-lg w-full",children:[(0,a.jsx)(i.xv,{className:"mb-0.5 text-4xl sm:text-[32px] md:text-[34px] text-black-900 tracking-[-0.50px]",size:"txtInterSemiBold36Black900",children:"Related News"}),(0,a.jsx)(i.zx,{className:"common-pointer bg-bluegray-900 cursor-pointer font-semibold leading-[normal] min-w-[122px] mt-[5px] py-3 rounded-lg text-center text-sm text-white-A700 tracking-[-0.50px]",onClick:function(){return e("/allblog")},children:"View All"})]}),(0,a.jsx)(i.x1,{className:"bg-black-900_7f h-px w-full"})]}),(0,a.jsxs)(i.aV,{className:"sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full",orientation:"horizontal",children:[(0,a.jsx)("div",{className:"flex flex-1 flex-col items-center justify-start w-full",children:(0,a.jsxs)("div",{className:"flex flex-col gap-[22px] items-start justify-start w-full",children:[(0,a.jsx)("div",{className:"bg-cover bg-no-repeat flex flex-col h-[246px] items-center justify-start w-full",style:{backgroundImage:"url('images/img_group38_13.png')"},children:(0,a.jsxs)("div",{className:"bg-gradient  flex flex-col md:gap-10 gap-[162px] justify-end p-[17px] w-full",children:[(0,a.jsx)(i.II,{name:"language One",placeholder:"Entertaiment ",className:"font-bold leading-[normal] md:h-auto p-0 placeholder:text-white-A700 sm:h-auto text-left text-white-A700 text-xs tracking-[0.12px] w-full",wrapClassName:"bg-deep_purple-A700 md:ml-[0] ml-[267px] mr-1.5 mt-1.5 px-[15px] py-[5px] w-[29%]"}),(0,a.jsx)(i.xv,{className:"mr-[267px] text-white-A700 text-xs tracking-[-0.50px]",size:"txtInterRegular12WhiteA700",children:"Ukraine, 24 april 2022"})]})}),(0,a.jsxs)("div",{className:"flex flex-col items-center justify-start w-full",children:[(0,a.jsxs)(i.xv,{className:"text-black-900 text-lg tracking-[-0.50px] w-full",size:"txtInterSemiBold18Black900",children:["Zelensky accuses Russia of worst crimes since WW2"," "]}),(0,a.jsx)(i.xv,{className:"leading-[25.00px] text-black-900_87 text-xs tracking-[-0.50px] w-full",size:"txtPoppinsRegular12",children:"The Ukrainian leader says Russia must face an international trial as he calls for the country to be thrown off the UN Security Council."})]}),(0,a.jsx)(i.zx,{className:"bg-black-900 cursor-pointer flex items-center justify-center min-w-[151px] ml-3 md:ml-[0] pl-[30px] py-2.5 rounded-lg",rightIcon:(0,a.jsx)(i.Ei,{className:"h-[18px] ml-[5px] mr-[30px] my-2.5",src:"images/img_upload.svg",alt:"upload"}),children:(0,a.jsx)("div",{className:"leading-[normal] sm:pl-5 text-left text-sm text-white-A700 tracking-[-0.50px]",children:"Read More"})})]})}),(0,a.jsx)("div",{className:"flex flex-1 flex-col items-center justify-start w-full",children:(0,a.jsxs)("div",{className:"flex flex-col gap-[22px] items-start justify-start w-full",children:[(0,a.jsx)("div",{className:"bg-cover bg-no-repeat flex flex-col h-[246px] items-center justify-start w-full",style:{backgroundImage:"url('images/img_group38_15.png')"},children:(0,a.jsxs)("div",{className:"bg-gradient  flex flex-col md:gap-10 gap-[162px] justify-end p-[17px] w-full",children:[(0,a.jsx)(i.zx,{className:"bg-red-900 cursor-pointer font-bold leading-[normal] min-w-[78px] md:ml-[0] ml-[282px] mr-[21px] mt-1.5 py-[5px] text-center text-white-A700 text-xs tracking-[0.12px]",children:"Political"}),(0,a.jsx)(i.xv,{className:"mr-[267px] text-white-A700 text-xs tracking-[-0.50px]",size:"txtInterRegular12WhiteA700",children:"Ukraine, 24 april 2022"})]})}),(0,a.jsxs)("div",{className:"flex flex-col items-center justify-start w-full",children:[(0,a.jsxs)(i.xv,{className:"text-black-900 text-lg tracking-[-0.50px] w-full",size:"txtInterSemiBold18Black900",children:["Zelensky accuses Russia of worst crimes since WW2"," "]}),(0,a.jsx)(i.xv,{className:"leading-[25.00px] text-black-900_87 text-xs tracking-[-0.50px] w-full",size:"txtPoppinsRegular12",children:"The Ukrainian leader says Russia must face an international trial as he calls for the country to be thrown off the UN Security Council."})]}),(0,a.jsx)(i.zx,{className:"bg-black-900 cursor-pointer flex items-center justify-center min-w-[151px] ml-3 md:ml-[0] pl-[30px] py-2.5 rounded-lg",rightIcon:(0,a.jsx)(i.Ei,{className:"h-[18px] ml-[5px] mr-[30px] my-2.5",src:"images/img_upload.svg",alt:"upload"}),children:(0,a.jsx)("div",{className:"leading-[normal] sm:pl-5 text-left text-sm text-white-A700 tracking-[-0.50px]",children:"Read More"})})]})}),(0,a.jsx)("div",{className:"flex flex-1 flex-col items-center justify-start w-full",children:(0,a.jsxs)("div",{className:"flex flex-col gap-[21px] items-start justify-start w-full",children:[(0,a.jsx)("div",{className:"bg-cover bg-no-repeat flex flex-col h-[247px] items-center justify-start w-full",style:{backgroundImage:"url('images/img_group38_14.png')"},children:(0,a.jsxs)("div",{className:"bg-gradient  flex flex-col md:gap-10 gap-[167px] justify-end p-4 w-full",children:[(0,a.jsx)(i.zx,{className:"bg-orange-A700 cursor-pointer font-bold leading-[normal] min-w-[78px] md:ml-[0] ml-[300px] mr-2 mt-2 py-[5px] text-center text-white-A700 text-xs tracking-[0.12px]",children:"Finance"}),(0,a.jsx)(i.xv,{className:"mr-[269px] text-white-A700 text-xs tracking-[-0.50px]",size:"txtInterRegular12WhiteA700",children:"Ukraine, 24 april 2022"})]})}),(0,a.jsxs)("div",{className:"flex flex-col items-center justify-start w-full",children:[(0,a.jsxs)(i.xv,{className:"text-black-900 text-lg tracking-[-0.50px] w-full",size:"txtInterSemiBold18Black900",children:["Zelensky accuses Russia of worst crimes since WW2"," "]}),(0,a.jsx)(i.xv,{className:"leading-[25.00px] text-black-900_87 text-xs tracking-[-0.50px] w-full",size:"txtPoppinsRegular12",children:"The Ukrainian leader says Russia must face an international trial as he calls for the country to be thrown off the UN Security Council."})]}),(0,a.jsx)(i.zx,{className:"bg-black-900 cursor-pointer flex items-center justify-center min-w-[151px] pl-[30px] py-2.5 rounded-lg",rightIcon:(0,a.jsx)(i.Ei,{className:"h-[18px] ml-[5px] mr-[30px] my-2.5",src:"images/img_upload.svg",alt:"upload"}),children:(0,a.jsx)("div",{className:"leading-[normal] sm:pl-5 text-left text-sm text-white-A700 tracking-[-0.50px]",children:"Read More"})})]})})]})]})}),(0,a.jsx)("footer",{className:"flex items-center justify-center mt-[120px] md:px-5 w-full",children:(0,a.jsx)("div",{className:"bg-black-900 flex flex-col items-center justify-center p-[60px] md:px-10 sm:px-5 w-full",children:(0,a.jsxs)("div",{className:"flex flex-col gap-[53px] items-center justify-center w-[98%] md:w-full",children:[(0,a.jsxs)("div",{className:"flex md:flex-col flex-row md:gap-10 items-start justify-between w-full",children:[(0,a.jsxs)("div",{className:"flex flex-col gap-[22px] items-start justify-start",children:[(0,a.jsx)(i.xv,{className:"text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[-0.50px]",size:"txtInterSemiBold24WhiteA700",children:"Neuzy"}),(0,a.jsx)(i.xv,{className:"leading-[35.00px] text-sm text-white-A700 tracking-[-0.50px] w-full",size:"txtInterRegular14",children:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."})]}),(0,a.jsxs)("div",{className:"flex md:flex-1 flex-row items-start justify-between pt-2.5 w-[57%] md:w-full",children:[(0,a.jsxs)("div",{className:"flex flex-col gap-[25px] items-start justify-start w-[10%]",children:[(0,a.jsx)(i.xv,{className:"text-sm text-white-A700 tracking-[-0.50px]",size:"txtInterBold14",children:"World"}),(0,a.jsxs)("div",{className:"flex flex-col gap-[18px] items-start justify-start w-full",children:[(0,a.jsx)(i.xv,{className:"text-white-A700 text-xs tracking-[-0.50px]",size:"txtInterRegular12WhiteA700",children:"Politcts"}),(0,a.jsx)(i.xv,{className:"text-white-A700 text-xs tracking-[-0.50px]",size:"txtInterRegular12WhiteA700",children:"Health"}),(0,a.jsx)(i.xv,{className:"text-white-A700 text-xs tracking-[-0.50px]",size:"txtInterRegular12WhiteA700",children:"Business"}),(0,a.jsx)(i.xv,{className:"text-white-A700 text-xs tracking-[-0.50px]",size:"txtInterRegular12WhiteA700",children:"Tech"}),(0,a.jsx)(i.xv,{className:"text-white-A700 text-xs tracking-[-0.50px]",size:"txtInterRegular12WhiteA700",children:"Entertaiment"})]})]}),(0,a.jsxs)("div",{className:"flex flex-col gap-[25px] items-start justify-start w-[8%]",children:[(0,a.jsx)(i.xv,{className:"text-sm text-white-A700 tracking-[-0.50px]",size:"txtInterBold14",children:"Tech"}),(0,a.jsxs)("div",{className:"flex flex-col gap-[18px] items-start justify-start w-full",children:[(0,a.jsx)(i.xv,{className:"text-white-A700 text-xs tracking-[-0.50px]",size:"txtInterRegular12WhiteA700",children:"Siance"}),(0,a.jsx)(i.xv,{className:"text-white-A700 text-xs tracking-[-0.50px]",size:"txtInterRegular12WhiteA700",children:"Magazine"}),(0,a.jsx)(i.xv,{className:"text-white-A700 text-xs tracking-[-0.50px]",size:"txtInterRegular12WhiteA700",children:"Start up"}),(0,a.jsx)(i.xv,{className:"text-white-A700 text-xs tracking-[-0.50px]",size:"txtInterRegular12WhiteA700",children:"Crypto"})]})]}),(0,a.jsxs)("div",{className:"flex flex-col gap-[25px] items-start justify-start w-[5%]",children:[(0,a.jsx)(i.xv,{className:"text-sm text-white-A700 tracking-[-0.50px]",size:"txtInterBold14",children:"Life"}),(0,a.jsxs)("div",{className:"flex flex-col gap-[18px] items-start justify-start w-full",children:[(0,a.jsx)(i.xv,{className:"text-white-A700 text-xs tracking-[-0.50px]",size:"txtInterRegular12WhiteA700",children:"Food"}),(0,a.jsx)(i.xv,{className:"text-white-A700 text-xs tracking-[-0.50px]",size:"txtInterRegular12WhiteA700",children:"Style"}),(0,a.jsx)(i.xv,{className:"text-white-A700 text-xs tracking-[-0.50px]",size:"txtInterRegular12WhiteA700",children:"Sport"}),(0,a.jsx)(i.xv,{className:"text-white-A700 text-xs tracking-[-0.50px]",size:"txtInterRegular12WhiteA700",children:"Movie"}),(0,a.jsx)(i.xv,{className:"text-white-A700 text-xs tracking-[-0.50px]",size:"txtInterRegular12WhiteA700",children:"Music"})]})]}),(0,a.jsxs)("div",{className:"flex flex-col gap-[23px] items-start justify-start w-[9%]",children:[(0,a.jsx)(i.xv,{className:"text-sm text-white-A700 tracking-[-0.50px]",size:"txtInterBold14",children:"Magezine"}),(0,a.jsxs)("div",{className:"flex flex-col gap-[18px] items-start justify-start",children:[(0,a.jsx)(i.xv,{className:"text-white-A700 text-xs tracking-[-0.50px]",size:"txtInterRegular12WhiteA700",children:"Fasion"}),(0,a.jsx)(i.xv,{className:"text-white-A700 text-xs tracking-[-0.50px]",size:"txtInterRegular12WhiteA700",children:"Blogger"}),(0,a.jsx)(i.xv,{className:"text-white-A700 text-xs tracking-[-0.50px]",size:"txtInterRegular12WhiteA700",children:"People"})]})]}),(0,a.jsxs)("div",{className:"flex flex-col gap-[25px] items-start justify-start w-[14%]",children:[(0,a.jsx)(i.xv,{className:"text-sm text-white-A700 tracking-[-0.50px]",size:"txtInterBold14",children:"Other"}),(0,a.jsxs)("div",{className:"flex flex-col gap-[18px] items-start justify-start w-full",children:[(0,a.jsx)(i.xv,{className:"text-white-A700 text-xs tracking-[-0.50px]",size:"txtInterRegular12WhiteA700",children:"About"}),(0,a.jsx)(i.xv,{className:"text-white-A700 text-xs tracking-[-0.50px]",size:"txtInterRegular12WhiteA700",children:"Contact us"}),(0,a.jsx)(i.xv,{className:"text-white-A700 text-xs tracking-[-0.50px]",size:"txtInterRegular12WhiteA700",children:"Terms & Conditions"})]})]})]})]}),(0,a.jsxs)("div",{className:"flex flex-col gap-[29px] items-center justify-start w-full",children:[(0,a.jsx)(i.x1,{className:"bg-white-A700 h-px w-full"}),(0,a.jsxs)("div",{className:"flex flex-row md:gap-10 items-start justify-between w-full",children:[(0,a.jsx)(i.xv,{className:"mt-1 text-sm text-white-A700 tracking-[-0.50px]",size:"txtInterRegular14",children:"Copyright \xa9 Neuzy | All Rights Reserved"}),(0,a.jsx)(i.Ei,{className:"h-6",src:"images/img_group20875.svg",alt:"Group20875 One"})]})]})]})})})]})]})})}},593:function(e,t,s){function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function i(e){var t=function(e,t){if("object"!==l(e)||null===e)return e;var s=e[Symbol.toPrimitive];if(void 0!==s){var i=s.call(e,t||"default");if("object"!==l(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===l(t)?t:String(t)}function a(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,l)}return s}function n(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?a(Object(s),!0).forEach((function(t){var l,a,n;l=e,a=t,n=s[t],(a=i(a))in l?Object.defineProperty(l,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):l[a]=n})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):a(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}s.d(t,{Z:function(){return n}})},738:function(e,t,s){function l(e,t){if(null==e)return{};var s,l,i=function(e,t){if(null==e)return{};var s,l,i={},a=Object.keys(e);for(l=0;l<a.length;l++)s=a[l],t.indexOf(s)>=0||(i[s]=e[s]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)s=a[l],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(i[s]=e[s])}return i}s.d(t,{Z:function(){return l}})}}]);
//# sourceMappingURL=357.6ac51891.chunk.js.map