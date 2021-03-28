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