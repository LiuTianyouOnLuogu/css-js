function loadJS(url) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
}

function loadCSS(url) {
    var link = document.createElement('link');
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = url;
    document.getElementsByTagName("head")[0].appendChild(link);
};
loadCSS("https://cdn.jsdelivr.net/npm/mdui@1.0.1/dist/css/mdui.min.css"); //MDUI CSS
loadJS("https://cdn.jsdelivr.net/npm/mdui@1.0.1/dist/js/mdui.min.js"); //MDUI JS
loadJS("https://cdn.bootcdn.net/ajax/libs/jquery.form/4.3.0/jquery.form.min.js"); //JQueryForm4.3.0
loadJS("https://cdn.bootcdn.net/ajax/libs/vue/2.5.22/vue.min.js") //Vue2.5.22
loadJS("https://cdn.luogu.com.cn/markdown-palettes/markdown-palettes.min.js"); //洛谷Markdown JS（如有侵权，光速替换）
loadCSS("https://cdn.luogu.com.cn/markdown-palettes/markdown-palettes.css"); //洛谷Markdown CSS
loadJS("https://cdn.bootcss.com/blueimp-md5/2.10.0/js/md5.min.js"); //MD5库
loadCSS("https://liutianyouonluogu.github.io/css-js/custom.min.css");
loadJS("https://liutianyouonluogu.github.io/css-js/main.js");
document.write("<style type='text/css'>\n");
//字体文件
document.write("@font-face{font-family:'Roboto';font-style:normal;font-weight:regular;src:url('//lib.baomitu.com/fonts/roboto/roboto-regular.woff2') format('woff2')}.material-icons{font-family:'Material Icons';font-weight:normal;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased}\n");
//图标文件
document.write("@font-face{font-family:'Material Icons';font-style:normal;font-weight:400;src:url(http://cdn.bootcss.com/material-design-icons/2.1.1/iconfont/MaterialIcons-Regular.woff2) format('woff2')}.material-icons{font-family:'Material Icons';font-weight:normal;font-style:normal;font-size:24px;display:inline-block;width:1em;height:1em;line-height:1;text-transform:none;letter-spacing:normal;word-wrap:normal;white-space:nowrap;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:'liga'}\n");
document.write("</style>");