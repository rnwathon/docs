"use strict";(self.webpackChunkpersonal_docs=self.webpackChunkpersonal_docs||[]).push([[102],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,g=d["".concat(p,".").concat(u)]||d[u]||c[u]||i;return n?a.createElement(g,o(o({ref:t},m),{},{components:n})):a.createElement(g,o({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9909:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={id:"commit-message",title:"Commit Message"},p=void 0,s={unversionedId:"git/commit-message",id:"git/commit-message",title:"Commit Message",description:"I follow the conventional commits pattern and use Standard Version lib to generate the changelog when needed.",source:"@site/docs/git/commit-message.md",sourceDirName:"git",slug:"/git/commit-message",permalink:"/docs/git/commit-message",draft:!1,editUrl:"https://github.com/rnwathon/personal-docs/tree/main/docs/git/commit-message.md",tags:[],version:"current",frontMatter:{id:"commit-message",title:"Commit Message"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/"},next:{title:"Styling",permalink:"/docs/front-end/styling"}},m={},c=[],d={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"I follow the conventional commits pattern and use ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/conventional-changelog/standard-version"},"Standard Version")," lib to generate the changelog when needed."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Commit Message Structure")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"  <ty\xadpe>[optional scope]: <de\xadscr\xadipt\xadion>\n  \n  [optional body]\n\n  [optional footer]\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ git commit -m 'feat: create date-picker component'\n$ git commit -m 'fix: top menu breaks on mobile screen size'\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Specification")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Commits MUST be prefixed with a type, which consists of a verb, ",(0,i.kt)("inlineCode",{parentName:"li"},"feat"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"fix"),", etc., followed by a colon and a space."),(0,i.kt)("li",{parentName:"ol"},"The type ",(0,i.kt)("inlineCode",{parentName:"li"},"feat")," MUST be used when a commit adds a new feature to your applic\xadation or library."),(0,i.kt)("li",{parentName:"ol"},"The type ",(0,i.kt)("inlineCode",{parentName:"li"},"fix")," MUST be used when a commit represents a bug fix for your applic\xadation."),(0,i.kt)("li",{parentName:"ol"},"An optional scope MAY be provided after a type. A scope is a phrase describing a section of the codebase enclosed in parent\xadhesis, e.g., ",(0,i.kt)("inlineCode",{parentName:"li"},"fix(pa\xadrser)"),":"),(0,i.kt)("li",{parentName:"ol"},"A descri\xadption MUST immedi\xadately follow the type/scope prefix. The descri\xadption is a short descri\xadption of the pull request, e.g., ",(0,i.kt)("inlineCode",{parentName:"li"},"fix: array parsing issue when multiple spaces were contained in string"),"."),(0,i.kt)("li",{parentName:"ol"},"A longer commit body MAY be provided after the short descri\xadption. The body MUST begin one blank line after the descri\xadption."),(0,i.kt)("li",{parentName:"ol"},"A footer MAY be provided one blank line after the body. The footer SHOULD contain additional meta-i\xadnfo\xadrmation about the pull-r\xadequest (such as the issues it fixes, e.g., ",(0,i.kt)("inlineCode",{parentName:"li"},"fixes #13, #5"),")."),(0,i.kt)("li",{parentName:"ol"},"Breaking changes MUST be indicated at the very beginning of the footer or body section of a commit. A breaking change MUST consist of the uppercase text ",(0,i.kt)("inlineCode",{parentName:"li"},"BREAKING CHANGE"),", followed by a colon and a space."),(0,i.kt)("li",{parentName:"ol"},"A descri\xadption MUST be provided after the ",(0,i.kt)("inlineCode",{parentName:"li"},"BREAKING CHANGE:")," , describing what has changed about the API, e.g., ",(0,i.kt)("inlineCode",{parentName:"li"},"BREAKING CHANGE: enviro\xadnment variables now take precedence over config files"),"."),(0,i.kt)("li",{parentName:"ol"},"Types other than feat and fix MAY be used in your commit messages.")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Types"),(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"feat")),(0,i.kt)("td",{parentName:"tr",align:null},"Features"),(0,i.kt)("td",{parentName:"tr",align:null},"A new feature")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"fix")),(0,i.kt)("td",{parentName:"tr",align:null},"Bug Fixes"),(0,i.kt)("td",{parentName:"tr",align:null},"A bug fix")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"docs")),(0,i.kt)("td",{parentName:"tr",align:null},"Docume\xadntation"),(0,i.kt)("td",{parentName:"tr",align:null},"Docume\xadntation only changes (e.g. README)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"style")),(0,i.kt)("td",{parentName:"tr",align:null},"Styles"),(0,i.kt)("td",{parentName:"tr",align:null},"Changes that do not affect the meaning of the code (white\xad-space, format\xadting, missing semi-c\xadolons, etc)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"refactor")),(0,i.kt)("td",{parentName:"tr",align:null},"Code Refact\xadoring"),(0,i.kt)("td",{parentName:"tr",align:null},"A code change that neither fixes a bug nor adds a feature")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"perf")),(0,i.kt)("td",{parentName:"tr",align:null},"Perfor\xadmance Improv\xadements"),(0,i.kt)("td",{parentName:"tr",align:null},"A code change that improves perfor\xadmance")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"test")),(0,i.kt)("td",{parentName:"tr",align:null},"Tests"),(0,i.kt)("td",{parentName:"tr",align:null},"Adding missing tests or correcting existing tests")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"build")),(0,i.kt)("td",{parentName:"tr",align:null},"Builds"),(0,i.kt)("td",{parentName:"tr",align:null},"Changes that affect the build system or external depend\xadencies (example scopes: gulp, broccoli, npm)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ci")),(0,i.kt)("td",{parentName:"tr",align:null},"Continuous Integr\xadations"),(0,i.kt)("td",{parentName:"tr",align:null},"Changes to our CI config\xaduration files and scripts (example scopes: Travis, Circle, Browse\xadrStack, SauceLabs)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"chore")),(0,i.kt)("td",{parentName:"tr",align:null},"Chores"),(0,i.kt)("td",{parentName:"tr",align:null},"Other changes that don't modify src or test files (e.g. install new package)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"revert")),(0,i.kt)("td",{parentName:"tr",align:null},"Reverts"),(0,i.kt)("td",{parentName:"tr",align:null},"Reverts a previous commit")))),(0,i.kt)("p",null,"Read more about Conventional Commit on the documentation ",(0,i.kt)("a",{parentName:"p",href:"https://www.conventionalcommits.org/en/v1.0.0/"},"here.")))}u.isMDXComponent=!0}}]);