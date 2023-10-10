import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head>

      </Head>
      <body>
        <Main />
        <NextScript />
        <Script type="text/javascript" id="zsiqchat">
          {`var $zoho=$zoho || {};$zoho.salesiq = $zoho.salesiq || {widgetcode: "siqa4899e43c1edb3d41b065b921424741aa5b9a7e68d3939967b7fba6c4d3cb0f3", values:{},ready:function(){}};var d=document;s=d.createElement("script");s.type="text/javascript";s.id="zsiqscript";s.defer=true;s.src="https://salesiq.zohopublic.in/widget";t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);</Script>`}
        </Script>
      </body>
    </Html>
  );
}
