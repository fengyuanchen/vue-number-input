!function(){"use strict";var e={21:function(e,t){t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[e,o]of t)n[e]=o;return n}},658:function(e,t,n){var o=Vue;const a={class:"app"},l={class:"navbar navbar-light navbar-expand-md"},r={class:"container"},u={class:"navbar-brand",href:"./"},d=(0,o.createElementVNode)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbar-collapse","aria-controls":"navbar-collapse","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,o.createElementVNode)("span",{class:"navbar-toggler-icon"})],-1),i=(0,o.createElementVNode)("div",{id:"navbar-collapse",class:"collapse navbar-collapse justify-content-end",role:"navigation"},[(0,o.createElementVNode)("nav",{class:"nav navbar-nav"},[(0,o.createElementVNode)("a",{class:"nav-link",href:"https://github.com/fengyuanchen/vue-number-input",title:"View the GitHub project"}," GitHub "),(0,o.createElementVNode)("a",{class:"nav-link",href:"https://fengyuanchen.github.io/",title:"Explore more projects"}," Explore "),(0,o.createElementVNode)("a",{class:"nav-link",href:"https://chenfengyuan.com/",title:"About the author"}," About ")])],-1),c={class:"bg-primary text-white py-5"},s={class:"container"},m={class:"row"},p={class:"col-md"},v={class:"h6"},b={class:"lead"},h={class:"col-md"},f={ref:"carbonads",class:"carbonads"},g={class:"container"},N={class:"markdown-body"},y=(0,o.createStaticVNode)('<footer><div class="container"><p class="heart"></p><nav class="nav flex-wrap justify-content-center mb-3"><a class="nav-link" href="https://github.com/fengyuanchen/vue-number-input"> GitHub </a><a class="nav-link" href="https://github.com/fengyuanchen/vue-number-input/blob/main/CHANGELOG.md"> Changelog </a><a class="nav-link" href="https://github.com/fengyuanchen/vue-number-input/blob/main/LICENSE"> License </a><a class="nav-link" href="https://chenfengyuan.com/"> About </a></nav></div></footer>',1);var V=JSON.parse('{"name":"@chenfengyuan/vue-number-input","version":"2.0.0","description":"Number input component for Vue 3.","main":"dist/vue-number-input.js","module":"dist/vue-number-input.esm.js","types":"dist/vue-number-input.d.ts","files":["dist"],"scripts":{"build":"rollup -c --environment BUILD:production","build:docs":"webpack --env production","build:types":"move-file dist/vue-number-input.vue.d.ts dist/vue-number-input.d.ts","changelog":"conventional-changelog -p angular -i CHANGELOG.md -s -r 0","clean":"del-cli dist","lint":"npm run lint:js && npm run lint:css","lint:css":"stylelint **/*.{css,scss,vue} --fix","lint:js":"eslint . --ext .js,.ts,.vue --fix","prepare":"husky install","release":"npm run clean && npm run lint && npm run build && npm run build:types && npm run build:docs && npm test && npm run changelog","serve":"webpack serve --hot --open","start":"npm run serve","test":"jest","test:coverage":"cat coverage/lcov.info | codecov"},"repository":{"type":"git","url":"https://github.com/fengyuanchen/vue-number-input.git"},"keywords":["number","input","vue","vue3","vue-component","front-end","web"],"author":"Chen Fengyuan (https://chenfengyuan.com/)","license":"MIT","bugs":"https://github.com/fengyuanchen/vue-number-input/issues","homepage":"https://fengyuanchen.github.io/vue-number-input","devDependencies":{"@babel/core":"^7.17.0","@babel/preset-env":"^7.16.11","@commitlint/cli":"^16.1.0","@commitlint/config-conventional":"^16.0.0","@types/jest":"^27.4.0","@typescript-eslint/eslint-plugin":"^5.10.2","@typescript-eslint/parser":"^5.10.2","@vue/test-utils":"^2.0.0-rc.18","@vue/vue3-jest":"^27.0.0-alpha.4","babel-jest":"^27.5.0","babel-loader":"^8.2.3","change-case":"^4.1.2","codecov":"^3.8.3","conventional-changelog-cli":"^2.2.2","create-banner":"^2.0.0","css-loader":"^6.6.0","del-cli":"^4.0.1","eslint":"^8.8.0","eslint-config-airbnb-typescript":"^16.1.0","eslint-plugin-import":"^2.25.4","eslint-plugin-vue":"^8.4.1","html-webpack-plugin":"^5.5.0","husky":"^7.0.4","jest":"^27.5.0","lint-staged":"^12.3.3","markdown-to-vue-loader":"^3.1.3","mini-css-extract-plugin":"^2.5.3","move-file-cli":"^3.0.0","postcss":"^8.4.6","rollup":"^2.67.1","rollup-plugin-postcss":"^4.0.2","rollup-plugin-terser":"^7.0.2","rollup-plugin-typescript2":"^0.31.2","rollup-plugin-vue":"^6.0.0","sass":"^1.49.7","sass-loader":"^12.4.0","style-loader":"^3.3.1","stylelint":"^14.3.0","stylelint-config-recommended-scss":"^5.0.2","stylelint-config-recommended-vue":"^1.1.0","stylelint-order":"^5.0.0","ts-jest":"^27.1.3","ts-loader":"^9.2.6","tslib":"^2.3.1","typescript":"^4.5.5","vue":"^3.2.30","vue-loader":"^17.0.0","webpack":"^5.68.0","webpack-cli":"^4.9.2","webpack-dev-server":"^4.7.4"},"peerDependencies":{"vue":"^3.0.0"},"publishConfig":{"access":"public"}}');const E={class:"component-readme"},C=(0,o.createElementVNode)("h1",null,"Number Input",-1),x=(0,o.createElementVNode)("blockquote",null,[(0,o.createElementVNode)("p",null,"Number input with optional controls.")],-1),j=(0,o.createElementVNode)("h2",null,"Basic usage",-1),k=(0,o.createElementVNode)("pre",null,[(0,o.createElementVNode)("code",{class:"language-html"},'<template>\n  <p>Value: {{ value }}</p>\n  <vue-number-input v-model="value" :min="1" :max="10" inline controls></vue-number-input>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      value: 1,\n    };\n  },\n};\n<\/script>\n')],-1),w=(0,o.createElementVNode)("h2",null,"Step",-1),B=(0,o.createElementVNode)("pre",null,[(0,o.createElementVNode)("code",{class:"language-html"},'<template>\n  <vue-number-input :step="10" inline controls></vue-number-input>\n</template>\n')],-1),_=(0,o.createElementVNode)("h2",null,"Inline",-1),I=(0,o.createElementVNode)("pre",null,[(0,o.createElementVNode)("code",{class:"language-html"},'<template>\n  <p>\n    <vue-number-input placeholder="Block input (default)" controls></vue-number-input>\n  </p>\n  <vue-number-input placeholder="Inline input" inline controls></vue-number-input>\n</template>\n')],-1),S=(0,o.createElementVNode)("h2",null,"Center number",-1),D=(0,o.createElementVNode)("pre",null,[(0,o.createElementVNode)("code",{class:"language-html"},'<template>\n  <vue-number-input :model-value="0" inline center controls></vue-number-input>\n</template>\n')],-1),O=(0,o.createElementVNode)("h2",null,"Sizes",-1),z=(0,o.createElementVNode)("pre",null,[(0,o.createElementVNode)("code",{class:"language-html"},'<template>\n  <vue-number-input placeholder="Small" size="small" inline controls></vue-number-input>\n  <vue-number-input placeholder="Default" inline controls></vue-number-input>\n  <vue-number-input placeholder="Large" size="large" inline controls></vue-number-input>\n</template>\n\n<style scoped>\n.vue-number-input + .vue-number-input {\n  margin-left: 1rem;\n}\n</style>\n')],-1),T=(0,o.createElementVNode)("h2",null,"Without controls",-1),L=(0,o.createElementVNode)("pre",null,[(0,o.createElementVNode)("code",{class:"language-html"},'<template>\n  <vue-number-input placeholder="Small number input" size="small" inline></vue-number-input>\n  <vue-number-input placeholder="Default number input" inline></vue-number-input>\n  <vue-number-input placeholder="Large number input" size="large" inline></vue-number-input>\n</template>\n\n<style scoped>\n.vue-number-input + .vue-number-input {\n  margin-left: 1rem;\n}\n</style>\n')],-1),$=(0,o.createElementVNode)("h2",null,"Rounded",-1),M=(0,o.createElementVNode)("pre",null,[(0,o.createElementVNode)("code",{class:"language-html"},'<template>\n  <vue-number-input :model-value="1.5" inline controls rounded></vue-number-input>\n</template>\n')],-1),q=(0,o.createElementVNode)("h2",null,"Not inputtable",-1),G=(0,o.createElementVNode)("p",null,"The input is not inputtable, but still allow to change the value by controls.",-1),U=(0,o.createElementVNode)("pre",null,[(0,o.createElementVNode)("code",{class:"language-html"},'<template>\n  <vue-number-input :model-value="1" :min="1" :max="3" :inputtable="false" inline controls></vue-number-input>\n</template>\n')],-1),A=(0,o.createElementVNode)("h2",null,"Readonly",-1),H=(0,o.createElementVNode)("pre",null,[(0,o.createElementVNode)("code",{class:"language-html"},'<template>\n  <vue-number-input :model-value="1" inline controls readonly></vue-number-input>\n</template>\n')],-1),Z=(0,o.createElementVNode)("h2",null,"Disabled",-1),P=(0,o.createElementVNode)("pre",null,[(0,o.createElementVNode)("code",{class:"language-html"},'<template>\n  <vue-number-input :model-value="0" inline controls disabled></vue-number-input>\n</template>\n')],-1),R=(0,o.createElementVNode)("h2",null,"Customize attributes for the input element",-1),F=(0,o.createStaticVNode)('<pre><code class="language-html">&lt;template&gt;\n  &lt;vue-number-input :model-value=&quot;0&quot; :attrs=&quot;{ id: &#39;my-vue-number-input&#39;, tabindex: -1 }&quot; inline controls&gt;&lt;/vue-number-input&gt;\n&lt;/template&gt;\n</code></pre><h2>Props</h2><div class="table-responsive"><table class="table"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Options</th><th>Description</th></tr></thead><tbody><tr><td>attrs</td><td><code>Object</code></td><td>-</td><td>-</td><td>Specify attributes for the built-in input element.</td></tr><tr><td>center</td><td><code>boolean</code></td><td><code>false</code></td><td>-</td><td>Indicate if the number is center or not.</td></tr><tr><td>controls</td><td><code>boolean</code></td><td><code>false</code></td><td>-</td><td>Indicate if the controls is visible or not.</td></tr><tr><td>disabled</td><td><code>boolean</code></td><td><code>false</code></td><td>-</td><td>Indicate if the component is disabled or not.</td></tr><tr><td>inline</td><td><code>boolean</code></td><td><code>false</code></td><td>-</td><td>Indicate if the input is inline or not.</td></tr><tr><td>inputtable</td><td><code>boolean</code></td><td><code>true</code></td><td>-</td><td>Indicate if the input element is inputtable or not.</td></tr><tr><td>max</td><td><code>number</code></td><td><code>Infinity</code></td><td>-</td><td>The maximum value.</td></tr><tr><td>min</td><td><code>number</code></td><td><code>-Infinity</code></td><td>-</td><td>The minimum value.</td></tr><tr><td>name</td><td><code>string</code></td><td>-</td><td>-</td><td>The name of the input element.</td></tr><tr><td>placeholder</td><td><code>string</code></td><td>-</td><td>-</td><td>The placeholder of the input element.</td></tr><tr><td>readonly</td><td><code>boolean</code></td><td><code>false</code></td><td>-</td><td>Indicate if the component is read only or not.</td></tr><tr><td>rounded</td><td><code>boolean</code></td><td><code>false</code></td><td>-</td><td>Indicate if the number is rounded or not.</td></tr><tr><td>size</td><td><code>string</code></td><td>-</td><td>small, large</td><td>The size of the component.</td></tr><tr><td>step</td><td><code>number</code></td><td><code>1</code></td><td>-</td><td>The increment of each step.</td></tr><tr><td>modelValue</td><td><code>number</code></td><td>-</td><td>-</td><td>The binding value.</td></tr></tbody></table></div><h2>Events</h2><div class="table-responsive"><table class="table"><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>update:model-value</td><td><code>(newValue, oldValue)</code></td><td>Fire when the value is changed.</td></tr></tbody></table></div><blockquote><p>Native events that bubble up from child elements are also available.</p></blockquote>',6),J=(0,o.createElementVNode)("pre",null,[(0,o.createElementVNode)("code",{class:"language-html"},'<template>\n  <vue-number-input @update:model-value="onUpdate" @change="onChange" @input="onInput" inline controls></vue-number-input>\n</template>\n\n<script>\nexport default {\n  methods: {\n    onUpdate(newValue, oldValue) {\n      console.log(newValue, oldValue);\n    },\n    onChange(event) {\n      console.log(event);\n    },\n    onInput(event) {\n      console.log(event);\n    },\n  },\n};\n<\/script>\n')],-1);var K,Q={components:{"component-readme-0":(K={data:()=>({value:1})},"function"==typeof K&&(K=K()),"object"!=typeof K&&(K={}),Object.assign(K,{name:"component-readme-0",template:'<div class="component-readme-0">\n  <p>Value: {{ value }}</p>\n  <vue-number-input v-model="value" :min="1" :max="10" inline="" controls=""></vue-number-input>\n</div>'})),"component-readme-1":function(){var e={};return"function"==typeof e&&(e=e()),"object"!=typeof e&&(e={}),Object.assign(e,{name:"component-readme-1",template:'<div class="component-readme-1">\n  <vue-number-input :step="10" inline="" controls=""></vue-number-input>\n</div>'})}(),"component-readme-2":function(){var e={};return"function"==typeof e&&(e=e()),"object"!=typeof e&&(e={}),Object.assign(e,{name:"component-readme-2",template:'<div class="component-readme-2">\n  <p>\n    <vue-number-input placeholder="Block input (default)" controls=""></vue-number-input>\n  </p>\n  <vue-number-input placeholder="Inline input" inline="" controls=""></vue-number-input>\n</div>'})}(),"component-readme-3":function(){var e={};return"function"==typeof e&&(e=e()),"object"!=typeof e&&(e={}),Object.assign(e,{name:"component-readme-3",template:'<div class="component-readme-3">\n  <vue-number-input :model-value="0" inline="" center="" controls=""></vue-number-input>\n</div>'})}(),"component-readme-4":function(){var e={};return"function"==typeof e&&(e=e()),"object"!=typeof e&&(e={}),Object.assign(e,{name:"component-readme-4",template:'<div class="component-readme-4">\n  <vue-number-input placeholder="Small" size="small" inline="" controls=""></vue-number-input>\n  <vue-number-input placeholder="Default" inline="" controls=""></vue-number-input>\n  <vue-number-input placeholder="Large" size="large" inline="" controls=""></vue-number-input>\n</div>',beforeCreate:function(){var e=document.createElement("style");e.textContent="\n.component-readme-4 .vue-number-input + .vue-number-input {\n  margin-left: 1rem;\n}\n",document.head.appendChild(e),this.$styleInjectedByMarkdownToVueLoader=e},beforeUnmount:function(){var e=this.$styleInjectedByMarkdownToVueLoader;e.parentNode.removeChild(e)}})}(),"component-readme-5":function(){var e={};return"function"==typeof e&&(e=e()),"object"!=typeof e&&(e={}),Object.assign(e,{name:"component-readme-5",template:'<div class="component-readme-5">\n  <vue-number-input placeholder="Small number input" size="small" inline=""></vue-number-input>\n  <vue-number-input placeholder="Default number input" inline=""></vue-number-input>\n  <vue-number-input placeholder="Large number input" size="large" inline=""></vue-number-input>\n</div>',beforeCreate:function(){var e=document.createElement("style");e.textContent="\n.component-readme-5 .vue-number-input + .vue-number-input {\n  margin-left: 1rem;\n}\n",document.head.appendChild(e),this.$styleInjectedByMarkdownToVueLoader=e},beforeUnmount:function(){var e=this.$styleInjectedByMarkdownToVueLoader;e.parentNode.removeChild(e)}})}(),"component-readme-6":function(){var e={};return"function"==typeof e&&(e=e()),"object"!=typeof e&&(e={}),Object.assign(e,{name:"component-readme-6",template:'<div class="component-readme-6">\n  <vue-number-input :model-value="1.5" inline="" controls="" rounded=""></vue-number-input>\n</div>'})}(),"component-readme-7":function(){var e={};return"function"==typeof e&&(e=e()),"object"!=typeof e&&(e={}),Object.assign(e,{name:"component-readme-7",template:'<div class="component-readme-7">\n  <vue-number-input :model-value="1" :min="1" :max="3" :inputtable="false" inline="" controls=""></vue-number-input>\n</div>'})}(),"component-readme-8":function(){var e={};return"function"==typeof e&&(e=e()),"object"!=typeof e&&(e={}),Object.assign(e,{name:"component-readme-8",template:'<div class="component-readme-8">\n  <vue-number-input :model-value="1" inline="" controls="" readonly=""></vue-number-input>\n</div>'})}(),"component-readme-9":function(){var e={};return"function"==typeof e&&(e=e()),"object"!=typeof e&&(e={}),Object.assign(e,{name:"component-readme-9",template:'<div class="component-readme-9">\n  <vue-number-input :model-value="0" inline="" controls="" disabled=""></vue-number-input>\n</div>'})}(),"component-readme-10":function(){var e={};return"function"==typeof e&&(e=e()),"object"!=typeof e&&(e={}),Object.assign(e,{name:"component-readme-10",template:'<div class="component-readme-10">\n  <vue-number-input :model-value="0" :attrs="{ id: \'my-vue-number-input\', tabindex: -1 }" inline="" controls=""></vue-number-input>\n</div>'})}(),"component-readme-11":function(){var e={methods:{onUpdate(e,t){console.log(e,t)},onChange(e){console.log(e)},onInput(e){console.log(e)}}};return"function"==typeof e&&(e=e()),"object"!=typeof e&&(e={}),Object.assign(e,{name:"component-readme-11",template:'<div class="component-readme-11">\n  <vue-number-input @update:model-value="onUpdate" @change="onChange" @input="onInput" inline="" controls=""></vue-number-input>\n</div>'})}()}},W=n(21),Y=(0,W.Z)(Q,[["render",function(e,t,n,a,l,r){const u=(0,o.resolveComponent)("component-readme-0"),d=(0,o.resolveComponent)("demo-block"),i=(0,o.resolveComponent)("component-readme-1"),c=(0,o.resolveComponent)("component-readme-2"),s=(0,o.resolveComponent)("component-readme-3"),m=(0,o.resolveComponent)("component-readme-4"),p=(0,o.resolveComponent)("component-readme-5"),v=(0,o.resolveComponent)("component-readme-6"),b=(0,o.resolveComponent)("component-readme-7"),h=(0,o.resolveComponent)("component-readme-8"),f=(0,o.resolveComponent)("component-readme-9"),g=(0,o.resolveComponent)("component-readme-10"),N=(0,o.resolveComponent)("component-readme-11");return(0,o.openBlock)(),(0,o.createElementBlock)("div",E,[C,x,j,(0,o.createVNode)(d,null,{default:(0,o.withCtx)((()=>[(0,o.createVNode)(u)])),_:1}),k,w,(0,o.createVNode)(d,null,{default:(0,o.withCtx)((()=>[(0,o.createVNode)(i)])),_:1}),B,_,(0,o.createVNode)(d,null,{default:(0,o.withCtx)((()=>[(0,o.createVNode)(c)])),_:1}),I,S,(0,o.createVNode)(d,null,{default:(0,o.withCtx)((()=>[(0,o.createVNode)(s)])),_:1}),D,O,(0,o.createVNode)(d,null,{default:(0,o.withCtx)((()=>[(0,o.createVNode)(m)])),_:1}),z,T,(0,o.createVNode)(d,null,{default:(0,o.withCtx)((()=>[(0,o.createVNode)(p)])),_:1}),L,$,(0,o.createVNode)(d,null,{default:(0,o.withCtx)((()=>[(0,o.createVNode)(v)])),_:1}),M,q,G,(0,o.createVNode)(d,null,{default:(0,o.withCtx)((()=>[(0,o.createVNode)(b)])),_:1}),U,A,(0,o.createVNode)(d,null,{default:(0,o.withCtx)((()=>[(0,o.createVNode)(h)])),_:1}),H,Z,(0,o.createVNode)(d,null,{default:(0,o.withCtx)((()=>[(0,o.createVNode)(f)])),_:1}),P,R,(0,o.createVNode)(d,null,{default:(0,o.withCtx)((()=>[(0,o.createVNode)(g)])),_:1}),F,(0,o.createVNode)(d,null,{default:(0,o.withCtx)((()=>[(0,o.createVNode)(N)])),_:1}),J])}]]);V.name=V.name.split("/").pop()||"";var X=(0,o.defineComponent)({components:{Readme:Y},data:()=>V,mounted(){const e=document.createElement("script");e.async=!0,e.id="_carbonads_js",e.src="//cdn.carbonads.com/carbon.js?serve=CKYI55Q7&placement=fengyuanchengithubio",this.$refs.carbonads.appendChild(e)}}),ee=(0,W.Z)(X,[["render",function(e,t,n,V,E,C){const x=(0,o.resolveComponent)("Readme");return(0,o.openBlock)(),(0,o.createElementBlock)("div",a,[(0,o.createElementVNode)("header",l,[(0,o.createElementVNode)("nav",r,[(0,o.createElementVNode)("a",u,(0,o.toDisplayString)(e.name),1),d,i])]),(0,o.createElementVNode)("main",null,[(0,o.createElementVNode)("div",c,[(0,o.createElementVNode)("div",s,[(0,o.createElementVNode)("div",m,[(0,o.createElementVNode)("div",p,[(0,o.createElementVNode)("h1",null,[(0,o.createTextVNode)((0,o.toDisplayString)(e.name)+" ",1),(0,o.createElementVNode)("small",v," v"+(0,o.toDisplayString)(e.version),1)]),(0,o.createElementVNode)("p",b,(0,o.toDisplayString)(e.description),1)]),(0,o.createElementVNode)("div",h,[(0,o.createElementVNode)("div",f,null,512)])])])]),(0,o.createElementVNode)("div",g,[(0,o.createElementVNode)("div",N,[(0,o.createVNode)(x)])])]),y])}]]);const te={class:"demo-block"};var ne=(0,o.defineComponent)({name:"DemoBlock"}),oe=(0,W.Z)(ne,[["render",function(e,t,n,a,l,r){return(0,o.openBlock)(),(0,o.createElementBlock)("div",te,[(0,o.renderSlot)(e.$slots,"default")])}]]);const ae=["disabled"],le=["name","value","min","max","step","readonly","disabled","placeholder"],re=["disabled"],ue=Number.isNaN||window.isNaN,de=/^-?(?:\d+|\d+\.\d+|\.\d+)(?:[eE][-+]?\d+)?$/,ie=/\.\d*(?:0|9){10}\d*$/,ce=(e,t=1e11)=>ie.test(String(e))?Math.round(e*t)/t:e;var se=(0,o.defineComponent)({name:"VueNumberInput",props:{attrs:{type:Object,default:void 0},center:Boolean,controls:Boolean,disabled:Boolean,inputtable:{type:Boolean,default:!0},inline:Boolean,max:{type:Number,default:1/0},min:{type:Number,default:-1/0},name:{type:String,default:void 0},placeholder:{type:String,default:void 0},readonly:Boolean,rounded:Boolean,size:{type:String,default:void 0},step:{type:Number,default:1},modelValue:{type:Number,default:NaN}},emits:["update:modelValue"],data:()=>({value:NaN}),computed:{increasable(){return ue(this.value)||this.value<this.max},decreasable(){return ue(this.value)||this.value>this.min}},watch:{modelValue:{immediate:!0,handler(e,t){ue(e)&&void 0===t||e===this.value||this.setValue(e)}}},methods:{isNaN:ue,change(e){this.setValue(e.target.value)},paste(e){const t=e.clipboardData||window.clipboardData;t&&!de.test(t.getData("text"))&&e.preventDefault()},decrease(){if(this.decreasable){let{value:e}=this;ue(e)&&(e=0),this.setValue(ce(e-this.step))}},increase(){if(this.increasable){let{value:e}=this;ue(e)&&(e=0),this.setValue(ce(e+this.step))}},setValue(e){const t=this.value;let n="number"!=typeof e?parseFloat(e):e;ue(n)||(this.min<=this.max&&(n=Math.min(this.max,Math.max(this.min,n))),this.rounded&&(n=Math.round(e))),this.value=n,n===t&&(this.$refs.input.value=String(n)),this.$emit("update:modelValue",n,t)}}}),me=(0,W.Z)(se,[["render",function(e,t,n,a,l,r){return(0,o.openBlock)(),(0,o.createElementBlock)("div",{class:(0,o.normalizeClass)(["vue-number-input",{"vue-number-input--inline":e.inline,"vue-number-input--center":e.center,"vue-number-input--controls":e.controls,[`vue-number-input--${e.size}`]:e.size}])},[e.controls?((0,o.openBlock)(),(0,o.createElementBlock)("button",{key:0,class:"vue-number-input__button vue-number-input__button--minus",type:"button",tabindex:"-1",disabled:e.disabled||e.readonly||!e.decreasable,onClick:t[0]||(t[0]=(...t)=>e.decrease&&e.decrease(...t))},null,8,ae)):(0,o.createCommentVNode)("v-if",!0),(0,o.createElementVNode)("input",(0,o.mergeProps)({ref:"input",class:"vue-number-input__input"},e.attrs,{type:"number",name:e.name,value:isNaN(e.value)?"":e.value,min:e.min,max:e.max,step:e.step,readonly:e.readonly||!e.inputtable,disabled:e.disabled||!e.decreasable&&!e.increasable,placeholder:e.placeholder,autocomplete:"off",onChange:t[1]||(t[1]=(...t)=>e.change&&e.change(...t)),onPaste:t[2]||(t[2]=(...t)=>e.paste&&e.paste(...t))}),null,16,le),e.controls?((0,o.openBlock)(),(0,o.createElementBlock)("button",{key:1,class:"vue-number-input__button vue-number-input__button--plus",type:"button",tabindex:"-1",disabled:e.disabled||e.readonly||!e.increasable,onClick:t[3]||(t[3]=(...t)=>e.increase&&e.increase(...t))},null,8,re)):(0,o.createCommentVNode)("v-if",!0)],2)}],["__scopeId","data-v-a1c8e850"]]);const pe=(0,o.createApp)(ee);pe.component(me.name,me),pe.component(oe.name,oe),pe.mount("#app")}},t={};!function n(o){var a=t[o];if(void 0!==a)return a.exports;var l=t[o]={exports:{}};return e[o](l,l.exports,n),l.exports}(658)}();