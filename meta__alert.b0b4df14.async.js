(self.webpackChunkqing_ui=self.webpackChunkqing_ui||[]).push([[761],{54444:function(t,n,e){"use strict";var _;e.r(n),e.d(n,{demos:function(){return c}});var l=e(15009),r=e.n(l),i=e(99289),o=e.n(i),s=e(67294),a=e(70208),u=e(45697),P=e.n(u),m=e(27386),c={"alert-demo-basic":{component:s.memo(s.lazy(function(){return e.e(819).then(e.bind(e,70621))})),asset:{type:"BLOCK",id:"alert-demo-basic",refAtomIds:["alert"],dependencies:{"index.tsx":{type:"FILE",value:e(6239).Z},react:{type:"NPM",value:"19.2.0"},"../index.tsx":{type:"FILE",value:e(59695).Z},"prop-types":{type:"NPM",value:"15.8.1"},"./style/index.less":{type:"FILE",value:e(33936).Z}},entry:"index.tsx"},context:{"../index.tsx":a,"./style/index.less":m,react:_||(_=e.t(s,2)),"D:/Git/qing-ui/src/alert/index.tsx":a,"prop-types":u,"D:/Git/qing-ui/src/alert/style/index.less":m},renderOpts:{compile:function(){var f=o()(r()().mark(function O(){var p,v=arguments;return r()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(862).then(e.bind(e,16862));case 2:return d.abrupt("return",(p=d.sent).default.apply(p,v));case 3:case"end":return d.stop()}},O)}));function E(){return f.apply(this,arguments)}return E}()}}}},70208:function(t,n,e){"use strict";e.r(n);var _=e(97857),l=e.n(_),r=e(13769),i=e.n(r),o=e(67294),s=e(45697),a=e.n(s),u=e(27386),P=e(85893),m=["children","kind"],c="happy-alert",f={info:"#5352ED",positive:"#2ED573",negative:"#FF4757",warning:"#FFA502"},E=function(p){var v=p.children,D=p.kind,d=D===void 0?"info":D,M=i()(p,m);return(0,P.jsx)("div",l()(l()({className:c,style:{background:f[d]}},M),{},{children:v}))};E.propTypes={kind:a().oneOf(["info","positive","negative","warning"])},n.default=E},27386:function(t,n,e){"use strict";e.r(n)},5504:function(t,n,e){"use strict";e.r(n),e.d(n,{texts:function(){return _}});const _=[{value:"\u8B66\u544A\u63D0\u793A\uFF0C\u5C55\u73B0\u9700\u8981\u5173\u6CE8\u7684\u4FE1\u606F\u3002",paraId:0,tocIndex:0}]},6239:function(t,n){"use strict";n.Z=`import React from 'react';\r
import Alert from '../index';\r
// import '../style';\r
\r
export default () => <Alert kind="warning">\u8FD9\u662F\u4E00\u6761\u8B66\u544A\u63D0\u793A</Alert>;\r
`},59695:function(t,n){"use strict";n.Z=`import React from 'react';\r
import t from 'prop-types';\r
import './style/index.less';\r
export interface AlertProps {\r
  kind?: 'info' | 'positive' | 'negative' | 'warning';\r
  children?: React.ReactNode;\r
}\r
\r
export type KindMap = Record<Required<AlertProps>['kind'], string>;\r
\r
const prefixCls = 'happy-alert';\r
\r
const kinds: KindMap = {\r
  info: '#5352ED',\r
  positive: '#2ED573',\r
  negative: '#FF4757',\r
  warning: '#FFA502',\r
};\r
\r
const Alert: React.FC<AlertProps> = ({ children, kind = 'info', ...rest }) => (\r
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
  kind: t.oneOf(['info', 'positive', 'negative', 'warning']),\r
};\r
\r
export default Alert;\r
`},33936:function(t,n){"use strict";n.Z=`@popupPrefix: happy-alert;\r
\r
.@{popupPrefix} {\r
  padding: 20px;\r
  background: white;\r
  border-radius: 3px;\r
  color: white;\r
}\r
`},13769:function(t,n,e){var _=e(48541);function l(r,i){if(r==null)return{};var o=_(r,i),s,a;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(r);for(a=0;a<u.length;a++)s=u[a],!(i.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(r,s)&&(o[s]=r[s])}return o}t.exports=l,t.exports.__esModule=!0,t.exports.default=t.exports},48541:function(t){function n(e,_){if(e==null)return{};var l={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(_.indexOf(i)>=0)&&(l[i]=e[i]);return l}t.exports=n,t.exports.__esModule=!0,t.exports.default=t.exports}}]);
