import "antd/dist/antd.css";
import "../styles/global.css";
import "antd-mobile/dist/antd-mobile.css";
import "react-table-6/react-table.css";
import "rc-drawer/assets/index.css";
function MyApp({ Component, pageProps }) {
  return (
    <div style={{width: '100%'}}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
