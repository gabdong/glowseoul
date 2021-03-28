import './home.css';

const Home = () => (
    <section className="home">

        {/* home slider */}
        <article className="home_slider">
            <div className="slider_bg">
                <img src={"http://gabdong.dothome.co.kr/glowseoul/images/main_bg_01.jpg"} alt="bgA" className="slider_item" />
                <img src={"http://gabdong.dothome.co.kr/glowseoul/images/main_bg_02.jpg"} alt="bgB" className="slider_item" />
                <img src={"http://gabdong.dothome.co.kr/glowseoul/images/main_bg_03.jpg"} alt="bgC" className="slider_item" />
            </div>
            <div className="slider_dark"></div>
            <div className="slider_text">
                <h2>
                    Creating newness
                    <br />
                    that was not in the world.
                </h2>
                <h3>
                    세상에 없던, 새로움을 창조 
                </h3>
                <p>
                    글로우서울은 창의적인 아이디어로 정해진 기준을 거부합니다.
                </p>
                <button className="slider_button" id="prev">PREV</button>
                <button className="slider_button" id="next">NEXT</button>
            </div>
        {/* //home slider */}
        </article>

        {/* glowseoul */}
        <article className="home_glowseoul">
            <div className="home_glowseoul_inner cf">
                <div className="home_glowseoul_img">
                    <img src={"http://gabdong.dothome.co.kr/glowseoul/images/team_photo.jpg"} alt="team photo"/>
                </div>
                <div className="home_glowseoul_text">
                    <h2 className="home_title">
                        Glow<strong>seoul</strong>
                    </h2>
                    <p className="home_big_text">
                        Above
                        <br />
                        the standard
                    </p>
                    <p className="normal_text">
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
                    <a href="#" className="button">LEARN MORE</a>
                </div>
            </div>
        </article>
        {/* //glowseoul */}

        {/* consulting */}
        <article className="home_consulting">
            <div className="home_consulting_inner cf">
                <div className="home_consulting_text">
                    <h2 className="home_title">
                        Glow <strong>Consulting</strong>
                    </h2>
                    <p className="home_big_text">
                        Customized
                        <br />
                        Brands Consulting
                    </p>
                    <p className="normal_text">
                        특정 스팟에 최적화된 맞춤형 브랜드 컨설팅
                        <br />
                        고객의 니즈에 따라 초기 기획부터 브랜드, 메뉴 기획, 공간 창조까지
                        <br />
                        유명 맛집 브랜드를 한데 모은 '셀렉트 다이닝'과는 다른 공간을 직접
                        <br />
                        기획하고 브랜드를 만드는 방식으로 높은 수익률과 차별된 매장을
                        <br />
                        기대할 수 있습니다. 이를 위해 젊은 감각의 셰프진이 레시피를 개발하고,
                        <br />
                        차별화된 인테리어로 고객을 사로잡는 등 새롭게 진행하고 있습니다.
                    </p>
                    <a href="#" className="button">LEARN MORE</a>
                </div>
                <div className="home_consulting_img">
                    <img src={"http://gabdong.dothome.co.kr/glowseoul/images/consulting_image.jpg"} alt="consulting image"/>
                </div>
            </div>
        </article>
        {/* //consulting */}

        {/* dna */}
        <article className="home_dna">
            <div className="home_dna_inner">
                <div className="home_dna_slider">
                    <img src={"http://gabdong.dothome.co.kr/glowseoul/images/dna_image.jpg"} alt="dnaImg"/>
                </div>
                <div className="home_dna_text">
                    <h2 className="home_title">
                        Glow <strong>DNA</strong>
                    </h2>
                    <p className="home_big_text">
                        Be Awesome,
                        <br />
                        The New point of view.
                    </p>
                    <p className="normal_text">
                        글로우디앤에이는 참신한 아이디어로 과거의 흔적 위에서
                        <br />
                        새로운 미래를 설계해갑니다.
                        <br />
                        새로운 것을 갈구하되, 옛것을 거부하지 않고
                        <br />
                        과거를 지키되, 미래를 지향하는 깨어있는 아이디어로
                        <br />
                        현재의 공간에서 과거를 보고 미래를 상상할 수 있는
                        <br />
                        글로우 스타일을 세상에 선보이고자 합니다.
                    </p>
                    <a href="#" className="button">LEARN MORE</a>
                </div>
            </div>
        </article>
        {/* //dna */}

        {/* superman */}
        <article className="home_superman">
            <div className="home_superman_text">
                <h2 className="home_title">
                    Glow <strong>Superman</strong>
                </h2>
                <p className="home_big_text">
                    Leads the way to
                    <br />
                    Power brand
                </p>
                <p className="normal_text">
                    글로우 슈퍼맨은 project one 서비스의 핵심 파트로써
                    <br />
                    기획매장의 오픈에 앞서 매니저급으로 구성된
                    <br />
                    전문 인력 인프라를 파견하여 브랜드 매장의 오픈행정과
                    <br />
                    운영관리를 통합적으로 지원 관리해주는
                    <br />
                    글로우서울만의 전담 코디네이터 운영 시스템입니다.
                </p>
                <a href="#" className="button">LEARN MORE</a>
            </div>
            <div className="home_superman_img">
                <img src={ "http://gabdong.dothome.co.kr/glowseoul/images/superman_image.jpg"} alt="superman Img"/>
            </div>
        </article>
        {/* //superman */}
    </section>
)

export default Home;