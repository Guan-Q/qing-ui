(self.webpackChunkqing_ui=self.webpackChunkqing_ui||[]).push([[761],{54444:function(t,n,e){"use strict";var _;e.r(n),e.d(n,{demos:function(){return f}});var a=e(15009),r=e.n(a),i=e(99289),o=e.n(i),s=e(67294),l=e(70208),u=e(45697),D=e.n(u),f={"alert-demo-basic":{component:s.memo(s.lazy(function(){return e.e(819).then(e.bind(e,70621))})),asset:{type:"BLOCK",id:"alert-demo-basic",refAtomIds:["alert"],dependencies:{"index.tsx":{type:"FILE",value:e(6239).Z},react:{type:"NPM",value:"19.2.0"},"../index.tsx":{type:"FILE",value:e(59695).Z},"prop-types":{type:"NPM",value:"15.8.1"}},entry:"index.tsx"},context:{"../index.tsx":l,react:_||(_=e.t(s,2)),"D:/Git/qing-ui/src/alert/index.tsx":l,"prop-types":u},renderOpts:{compile:function(){var E=o()(r()().mark(function O(){var p,c=arguments;return r()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(862).then(e.bind(e,16862));case 2:return d.abrupt("return",(p=d.sent).default.apply(p,c));case 3:case"end":return d.stop()}},O)}));function m(){return E.apply(this,arguments)}return m}()}}}},70208:function(t,n,e){"use strict";e.r(n);var _=e(97857),a=e.n(_),r=e(13769),i=e.n(r),o=e(67294),s=e(45697),l=e.n(s),u=e(85893),D=["children","kind"],f="happy-alert",E={info:"#5352ED",positive:"#2ED573",negative:"#FF4757",warning:"#FFA502"},m=function(p){var c=p.children,v=p.kind,d=v===void 0?"info":v,P=i()(p,D);return(0,u.jsx)("div",a()(a()({className:f,style:{background:E[d]}},P),{},{children:c}))};m.propTypes={kind:l().oneOf(["info","positive","negative","warning"])},n.default=m},5504:function(t,n,e){"use strict";e.r(n),e.d(n,{texts:function(){return _}});const _=[{value:"\u8B66\u544A\u63D0\u793A\uFF0C\u5C55\u73B0\u9700\u8981\u5173\u6CE8\u7684\u4FE1\u606F\u3002",paraId:0,tocIndex:0}]},6239:function(t,n){"use strict";n.Z=`import React from 'react';\r
import Alert from '../index';\r
// import '../style';\r
\r
export default () => <Alert kind="warning">\u8FD9\u662F\u4E00\u6761\u8B66\u544A\u63D0\u793A</Alert>;\r
`},59695:function(t,n){"use strict";n.Z=`import React from "react";\r
import t from "prop-types";\r
\r
export interface AlertProps {\r
  kind?: "info" | "positive" | "negative" | "warning";\r
  children?: React.ReactNode;\r
}\r
\r
export type KindMap = Record<Required<AlertProps>["kind"], string>;\r
\r
const prefixCls = "happy-alert";\r
\r
const kinds: KindMap = {\r
  info: "#5352ED",\r
  positive: "#2ED573",\r
  negative: "#FF4757",\r
  warning: "#FFA502",\r
};\r
\r
const Alert: React.FC<AlertProps> = ({ children, kind = "info", ...rest }) => (\r
  <div\r
    className={prefixCls}\r
    style={{\r
      background: kinds[kind],\r
    }}\r
    {...rest}\r
  >\r
    {children}\r
  </div>\r
);\r
\r
Alert.propTypes = {\r
  kind: t.oneOf(["info", "positive", "negative", "warning"]),\r
};\r
\r
export default Alert;\r
`},13769:function(t,n,e){var _=e(48541);function a(r,i){if(r==null)return{};var o=_(r,i),s,l;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(r);for(l=0;l<u.length;l++)s=u[l],!(i.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(r,s)&&(o[s]=r[s])}return o}t.exports=a,t.exports.__esModule=!0,t.exports.default=t.exports},48541:function(t){function n(e,_){if(e==null)return{};var a={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(_.indexOf(i)>=0)&&(a[i]=e[i]);return a}t.exports=n,t.exports.__esModule=!0,t.exports.default=t.exports}}]);
