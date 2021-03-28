import './consulting.css';

const Consulting = () => (
    <section className="consulting">
        <div className="consulting_inner">
            <article className="main_visual">
                <img src={ "http://gabdong.dothome.co.kr/glowseoul/images/consulting_visual.jpg" } alt="visual image"/>
                <div className="dark"></div>
                <div className="main_visual_text">
                    <h2>
                        글로우 컨설팅
                    </h2>
                    <h3>
                        GLOW CONSULTING
                    </h3>
                    <div className="line"></div>
                    <p>
                        차별화 이상의 브랜드 가치를 구현하고 한계를 뛰어남는 기획력으로 독보적인 브랜드를 만들어 가고 있습니다.
                    </p>
                </div>
            </article>
            <article className="consulting_about">
                <div className="consulting_about_inner">
                    <h2>글로우 컨설팅은</h2>
                    <h3>About</h3>
                    <div className="consulting_first">
                        <h2>브랜드 컨설팅</h2>
                        <ul>
                            <li>
                                <div className="list_text">
                                    <p className="list_title">사업 목표</p>
                                    <p className="list_normal">
                                        특정 스팟에 최적화된
                                        <br />
                                        맞춤형 브랜드 컨설팅
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="list_text">
                                    <p className="list_title">향후 계획</p>
                                    <p className="list_normal">
                                        초기 기획부터 브랜드,
                                        <br />
                                        메뉴 기획, 공간 창조
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="consulting_customized">
                        <h2>Customized Brands Consulting</h2>
                        <p>
                            특정 스팟에 최적화된 맞춤형 브랜드 컨설팅
                            <br />
                            고객의 니즈에 따라 초기 기획부터 브랜드, 메뉴 기획, 공간 창조까지 유명 맛집 브랜드를 한데 모은 '셀렉트 다이닝'과는 다른 공간을
                            <br />
                            직접 기획하고 브랜드를 만드는 방식으로 높은 수익률과 차별화된 매장을 기대할 수 있습니다.
                            <br />
                            이를 위해 젊은 감각의 셰프진이 레시피를 개발하고, 차별화된 인테리어로 고객을 사로잡는 등 새롭게 진행하고 있습니다.
                        </p>
                    </div>
                    <div className="consulting_last">
                        <h2>고객, 장소 최적화 브랜드 창조 능력 개발</h2>
                        <ul>
                            <li>창업의 일련의 과정 토탈 서비스</li>
                            <li>스텝별 개별 서비스 이용가능</li>
                        </ul>
                        <div className="step_box_wrapper cf">
                            <div className="step_box">
                                <p className="step_text">STEP1</p>
                                <h3>개별 상담</h3>
                                <p className="normal_text">
                                    고객이 원하는
                                    <br />
                                    솔루션의 범위 상담
                                </p>
                            </div>
                            <div className="step_box">
                                <p className="step_text">STEP2</p>
                                <h3>브랜드 컨설팅</h3>
                                <p className="normal_text">
                                    매장 위치에 최적화된
                                    <br />
                                    맞춤형 브랜드 및 메뉴 개발
                                </p>
                            </div>
                            <div className="step_box mr0">
                                <p className="step_text">STEP3</p>
                                <h3>디자인 개발</h3>
                                <p className="normal_text">
                                    매장 CI 개발,
                                    <br />
                                    각종 디자인 시안물 작업
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    </section>
)

export default Consulting;