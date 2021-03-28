import './space.css';

const Space = () => (
    <section className="space">
        <div className="space_inner">
            <article className="main_visual">
                <img src={"http://gabdong.dothome.co.kr/glowseoul/images/space_visual.jpg"} alt="visual image"/>
                <div className="dark"></div>
                <div className="main_visual_text">
                    <h2>
                        글로우 스페이스
                    </h2>
                    <h3>
                        GLOW SPACE
                    </h3>
                    <div className="line"></div>
                    <p>
                        글로우스페이스는 각 분야의 전문 인력들로 구성된 글로우서울의 디자인/설계/시공팀 입니다.
                    </p>
                </div>
            </article>
            <div className="space_about">
                <div className="space_about_inner">
                    <h2>
                        글로우 스페이스는
                    </h2>
                    <h3>About</h3>
                    <div className="space_first">
                        <h2>공간 창조</h2>
                        <ul>
                            <li>
                                <div className="list_text">
                                    <p className="list_title">사업 목표</p>
                                    <p className="list_normal">
                                        초기 기획부터 브랜드,
                                        <br />
                                        메뉴 기획, 공간 창조
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="space_info">
                        <h2>Be Awesome, The New point of view.</h2>
                        <p>
                            글로우디앤에이는 참신한 아이디어로 과거의 흔적 위에서 새로운 미래를 설계해갑니다.
                            <br />
                            새로운 것을 갈구하되, 옛것을 거부하지 않고 과거를 지키되, 미래를 지향하는 깨어있는 아이디어로 현재의 공간에서 과거를 보고 미래를 상상할 수 있는 글로우 스타일을 세상에 선보이고자 합니다.
                        </p>
                    </div>
                    <div className="space_last">
                        <h2>고객, 장소 최적화 브랜드 창조 능력 개발</h2>
                        <ul>
                            <li>
                                창업의 일련의 과정 토탈 서비스
                            </li>
                            <li>
                                스텝별 개별 서비스 이용가능
                            </li>
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
                            <div className="step_box">
                                <p className="step_text">STEP3</p>
                                <h3>디자인 개발</h3>
                                <p className="normal_text">
                                    매장 CI 개발,
                                    <br />
                                    각종 디자인 시안물 작업
                                </p>
                            </div>
                            <div className="step_box mr0">
                                    <p className="step_text">STEP4</p>
                                    <h3>공간 기획, 시설 공사</h3>
                                    <p className="normal_text">
                                        독창적인 인테리어로
                                        <br />
                                        새로운 공간 창조
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default Space;