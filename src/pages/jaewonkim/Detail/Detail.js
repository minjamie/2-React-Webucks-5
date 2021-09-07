import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../../components/Nav/Nav';
import './Detail.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';

library.add(faHeartRegular, faHeartSolid);

class DetailJaeWonKim extends Component {
  constructor() {
    super();
    this.state = {
      toggleHeartClassName: 'fas fa-heart',
    };
  }

  verifyForm = () => {
    this.isValidInput()
      ? this.setState({
          buttonClassName: 'form-input active',
          buttonDisabled: false,
          formAction: '/list-jaewonkim',
        })
      : this.setState({ buttonClassName: 'form-input', buttonDisabled: true });
  };

  toggleHeart = () => {
    if (this.state.toggleHeartClassName === 'fas fa-heart') {
      this.setState({ toggleHeartClassName: 'fas fa-heart active' });
    } else if (this.state.toggleHeartClassName === 'fas fa-heart active') {
      this.setState({ toggleHeartClassName: 'fas fa-heart' });
    }
  };

  render() {
    return (
      <div className="Detail">
        <Nav />

        <nav>
          <h2>콜드 브루 커피</h2>
          <img
            id="nav-title"
            alt="Cold Brew"
            src="https://image.istarbucks.co.kr/common/img/menu/tit/drink_tit9.png"
          />
          <Link to="login-jaewonkim">홈</Link>
          <img
            alt="Arrow Icon"
            src="https://image.istarbucks.co.kr/common/img/common/icon_arrow.png"
          />
          <Link to="/list-jaewonkim">MENU</Link>
          <img
            alt="Arrow Icon"
            src="https://image.istarbucks.co.kr/common/img/common/icon_arrow.png"
          />
          <Link to="#">음료</Link>
          <img
            alt="Arrow Icon"
            src="https://image.istarbucks.co.kr/common/img/common/icon_arrow.png"
          />
          <Link to="#">콜드 브루</Link>
          <img
            alt="Arrow Icon"
            src="https://image.istarbucks.co.kr/common/img/common/icon_arrow.png"
          />
          <Link to="/detail-jaewonkim">제주 비자림 콜드 브루</Link>
        </nav>

        <main>
          <aside>
            <h3>제주 비자림 콜드 브루</h3>
            <img
              alt="Jeju Forest Cold Brew"
              src="https://image.istarbucks.co.kr/upload/store/skuimg/2020/09/[9200000002672]_20200921171223958.jpg"
            />
          </aside>

          <section>
            <div className="section">
              <div className="section-info">
                <h3>
                  제주 비자림 콜드 브루
                  <FontAwesomeIcon
                    className="far fa-heart"
                    onClick={this.toggleHeart}
                    icon={faHeartRegular}
                  />
                  <FontAwesomeIcon
                    className={this.state.toggleHeartClassName}
                    onClick={this.toggleHeart}
                    icon={faHeartSolid}
                  />
                </h3>
                <h4>Jeju Forest Cold Brew</h4>
              </div>
              <div className="section-info">
                <p>
                  [제주지역 한정음료] 제주 천년의 숲 비자림을 연상시키는
                  <br />
                  음료로 제주에서 유기농 말차로 만든
                  <br />
                  파우더와 Cold Brew를 활용한 음료.
                </p>
              </div>
            </div>

            <div className="section">
              <div className="section-spec">
                <h5>제품 영양 정보</h5>
                <p>Grande(그란데) / 473ml (16 fl oz)</p>
              </div>

              <div className="section-spec">
                <div>
                  <dl>
                    <dt>1회 제공량 (kcal)</dt>
                    <dd>340</dd>
                  </dl>
                  <dl>
                    <dt>포화지방 (g)</dt>
                    <dd>8</dd>
                  </dl>
                  <dl>
                    <dt>단백질 (g)</dt>
                    <dd>10</dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt>나트륨 (mg)</dt>
                    <dd>115</dd>
                  </dl>
                  <dl>
                    <dt>당류 (g)</dt>
                    <dd>44</dd>
                  </dl>
                  <dl>
                    <dt>카페인 (mg)</dt>
                    <dd>105</dd>
                  </dl>
                </div>
              </div>

              <div className="section-spec">
                <p>알레르기 유발 요인 : 우유</p>
              </div>
            </div>

            <div className="section">
              <div className="section-review">
                <h5>리뷰</h5>
              </div>
              <div className="section-review">
                <dl>
                  <dt>coffe_lover</dt>
                  <dd>너무 맛있어요!</dd>
                </dl>
                <dl className="section-review">
                  <dt>CHOCO7</dt>
                  <dd>오늘도 제주 비자림 콜드 브루를 마시러 갑니다.</dd>
                </dl>
                <dl className="section-review">
                  <dt>legend_dev</dt>
                  <dd>
                    진짜 제주 비자림 콜드 브루는 전설이다. 진짜 제주 비자림 콜드
                    브루는 전설이다. 진짜 제주 비자림 콜드 브루는 전설이다.
                  </dd>
                </dl>
              </div>
              <div className="section-review">
                <input type="text" placeholder="리뷰를 입력해주세요." />
              </div>
            </div>
          </section>
        </main>

        <footer>
          <dl className="footer">
            <dt className="footer-menu">
              <Link to="#">COMPANY</Link>
            </dt>
            <dd className="footer-list">
              <Link to="#">한눈에 보기</Link>
              <Link to="#">스타벅스 사명</Link>
              <Link to="#">스타벅스 소개</Link>
              <Link to="#">국내 뉴스룸</Link>
              <Link to="#">세계의 스타벅스</Link>
              <Link to="#">글로벌 뉴스룸</Link>
            </dd>
          </dl>
          <dl className="footer">
            <dt className="footer-menu">
              <Link to="#">CORPORATE SALES</Link>
            </dt>
            <dd className="footer-list">
              <Link to="#">단체 및 기업 구매 안내</Link>
            </dd>
          </dl>
          <dl className="footer">
            <dt className="footer-menu">
              <Link to="#">PARTNERSHIP</Link>
            </dt>
            <dd className="footer-list">
              <Link to="#">신규 입점 제의</Link>
              <Link to="#">협력 고객사 등록 신청</Link>
            </dd>
          </dl>
          <dl className="footer">
            <dt className="footer-menu">
              <Link to="#">ONLINE COMMUNITY</Link>
            </dt>
            <dd className="footer-list">
              <Link to="#">페이스북</Link>
              <Link to="#">트위터</Link>
              <Link to="#">유튜브</Link>
              <Link to="#">블로그</Link>
              <Link to="#">인스타그램</Link>
            </dd>
          </dl>
          <dl className="footer">
            <dt className="footer-menu">
              <Link to="#">RECRUIT</Link>
            </dt>
            <dd className="footer-list">
              <Link to="#">채용 소개</Link>
              <Link to="#">채용 지원하기</Link>
            </dd>
          </dl>
          <dl className="footer">
            <dt className="footer-menu">
              <Link to="#">WEBUCKS</Link>
            </dt>
            <dd className="footer-list">
              <Link to="#"></Link>
            </dd>
          </dl>
        </footer>
      </div>
    );
  }
}

export default DetailJaeWonKim;
