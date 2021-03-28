# Glowseoul - React Router

## [ViewSite](http://gabdong.dothome.co.kr/glowseoul)

***
React에 대한 이해와 경험을위해 Glowseoul의 기존 홈페이지를 React Router Dom을 이용하여 클론코딩하였습니다.
Header, Contents, Footer 별로 컴포넌트를 만들어 라우팅을 구현하였습니다

### issue
- 이미지의 src가 상대경로로 설정돼 있으면 라우팅시 경로를 제대로 읽지 못하는 이슈가 있어 절대경로를 이용하여 해결하였습니다.
- 하나의 index.html만 있고 js를 통해 화면을 랜더링하는 SPA특성상 특정 URL로 직접 접속 시도시 404 에러가 뜨는 이슈가 있습니다.
- Express를 이용하여 SSR(Server side Rendering)을 통해 local서버에서는 새로고침 이슈를 해결하였지만 경험부족으로 web server에 호스팅하지 못하여 더 공부중입니다.
- 이 문제를 해결하기 위해 next.js, redux 등을 공부할 계획입니다.

***

## Routes.js

```javascript
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header/Header';
import Home from './Home/Home';
import GlowSeoul from './Glowseoul/Glowseoul';
import Consulting from './Consulting/Consulting';
import Space from './Space/Space';

const Routes = () => (
    <Router>
        <Header />
        <Switch>
            <Route path="/glowseoul" exact component={Home} />
            <Route path="/glowseoul_sub01" component={GlowSeoul} />
            <Route path="/glowseoul_sub02" component={Consulting} />
            <Route path="/glowseoul_sub03" component={Space} />
        </Switch>
    </Router>
)


export default Routes;
```

***

## App.js

```javascript
import React from 'react';
import Routes from './Routes'
import Footer from './Footer/Footer';
import '../App.css';

function App() {
  return (
    <div className="wrapper">
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
```

***

## Header.js

```javascript
import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => (
    <header className="header">
        <div className="header_inner">
            <h1 className="logo">
                <Link to="/glowseoul">GLOW</Link>
            </h1>
            <nav>
                <ul className="navigation cf">
                    <li>
                        <Link to="/glowseoul_sub01">GLOWSEOUL</Link>
                    </li>
                    <li>
                        <Link to="/glowseoul_sub02">GLOW CONSULTING</Link>
                    </li>
                    <li className="mr0">
                        <Link to="/glowseoul_sub03">GLOW SPACE</Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
)

export default Header;
```

***

## Footer.js

```javascript
import './footer.css';

const Footer = () => (
    <footer className="footer">
        <div className="footer_info">
            <div className="footer_info_inner cf">
                <div className="footer_text">
                    <ul className="company">
                        <li>
                            서울특별시 종로구 삼일대로 28길 20 4F. 글로우서울
                        </li>
                        <li> admin@glowseoul.co.kr</li>
                        <li>02-763-8215</li>
                        <li>Company Brochure</li>
                    </ul>
                    <p className="copyright">
                        2019. <span>GLOWSEOUL</span>. ALL RIGHTS RESERVED.
                    </p>
                    <p className="footer_small_text">POWERED BY D.LOFT</p>
                </div>
                <div className="footer_img">
                </div>
            </div>
        </div>
    </footer>
)

export default Footer;
```
