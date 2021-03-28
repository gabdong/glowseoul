import './glowseoul.css';

const GlowSeoul = () => (
    <section className="glowseoul">
        <article className="main_visual">
            <img src={"http://gabdong.dothome.co.kr/glowseoul/images/glowseoul_visual.jpg" } alt="visual"/>
            <div className="dark"></div>
            <div className="main_visual_text">
                <h2>
                    글로우서울
                </h2>
                <h3>
                    GLOWSEOUL
                </h3>
                <div className="line"></div>
                <p>
                    글로우서울이 찾고 선택한 공간은 그 지역의 새로운 랜드마크로 재탄생 될 것입니다.
                </p>
            </div>
        </article>
        <article className="glowseoul_about">
            <div className="glowseoul_about_inner">
                <h2>글로우서울은</h2>
                <h3>About</h3>
                <div className="glowseoul_first">
                    <h2>창조와 인정</h2>
                    <ul>
                        <li>
                            <p className="list_text">
                                세상에 없던,
                                <br />
                                새로움을 창조
                            </p>
                        </li>
                        <li>
                            <p className="list_text">
                                안정적인
                                <br />
                                Cash Cow 확보
                            </p>
                        </li>
                        <li>
                            <p className="list_text">
                                전문 창업
                                <br />
                                코디네이터 양성
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="glowseoul_team cf">
                    <div className="team_text">
                        <h2>Above the standard</h2>
                        <p>
                            주식회사 글로우서울은 창의적인 아이디어로 정해진 기준을 거부합니다.
                            <br />
                            저평가된 지역에 새로운 감성을 가미하여 주변 상권에 활력을 불어넣습니다.
                            <br />
                            단순히 매출과 수익률이 높은 공간을 만드는 것에 만족하지 않고,
                            <br />
                            그 지역의 랜드마크가 될 수 있는 공간 창출이 저희의 목표이며,
                            <br />
                            SPACE PIONEER로서의 역할로
                            <br />
                            끊임없이 지역과 공간 그리고 고객과의 소통을 고민합니다.
                        </p>
                        <div className="company_info cf">
                            <div className="company_info_title">
                                <p>법인명</p>
                                <p>대표이사</p>
                                <p>본사</p>
                                <p>운영</p>
                            </div>
                            <div className="company_info_text">
                                <p>주식회사 글로우서울</p>
                                <p>유정수</p>
                                <p>서울특별시 종로구 삼일대로28길 20, 4층(그린빌딩)</p>
                                <p>방콕 프로젝트, 익동정육점, 심플도쿄, 호텔 세느장, 헤센 프로젝트, 짝두짝 방콕</p>
                            </div>
                        </div>
                    </div>
                    <div className="team_img">
                        <img src={"http://gabdong.dothome.co.kr/glowseoul/images/team_photo.jpg" } alt="team photo"/>
                    </div>
                </div>
            </div>
        </article>
    </section>
)

export default GlowSeoul;