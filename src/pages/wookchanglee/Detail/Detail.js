/* eslint-disable */
import React, { Component } from 'react';
import TopNav from '../../../components/Nav/Nav';
import Footer from '../../../components/Footer/Footer';
import './detail.scss';

class Detail extends Component {
  constructor() {
    super();
    this.state = { isHeartFill: false };
  }

  render() {
    return (
      <div className="Detail body__container">
        <TopNav></TopNav>

        <section className="description section">
          <h1>콜드 브루</h1>
          <p className="menu-history">
            홈 &gt; MENU &gt; 음료 &gt; 에스프레소 &gt; 화이트 초콜릿 모카
          </p>
          <div className="content-box">
            <div className="content-box__left">
              <img
                src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/06/[9200000003643]_20210623101238875.jpg"
                alt="아이스크림 블렌딩 콜드 브루"
              />
            </div>
            <div className="content-box__right">
              <div className="content-box__description">
                <div className="content-box__description--header">
                  <div className="header--title">
                    <h1>아이스크림 블렌딩 콜드 브루</h1>
                    <p>Ice Cream Blending Cold Brew</p>
                  </div>
                  <div className="header--like">
                    <i
                      className={
                        this.state.isHeartFill ? 'fas fa-heart' : 'far fa-heart'
                      }
                      onClick={() => {
                        this.setState({ isHeartFill: !this.state.isHeartFill });
                      }}
                    ></i>
                  </div>
                </div>
                <div className="content-box__description--content">
                  <p className="product-description">
                    콜드 브루와 바닐라빈이 콕콕 박힌 아이스크림이 블렌딩 되어
                    진하고 부드러운 콜드 브루 풍미를 느낄 수 있는 콜드 브루
                    <br />* 아이스크림 블렌딩 콜드 브루는 BOGO쿠폰, 무료음료
                    쿠폰 등 일부 쿠폰 사용이 제한됩니다
                  </p>
                  <div className="product-nutrition">
                    <p>제품 영양 정보</p>
                    <p>Tall(톨) / 355ml (12 fl oz)</p>
                  </div>
                  <div className="product-nutrition--detail">
                    <div className="detail--part">
                      <div className="detail--row">
                        <p>1회 제공량 (kcal)</p>
                        <p>420</p>
                      </div>
                      <div className="detail--row">
                        <p>포화지방 (g)</p>
                        <p>6</p>
                      </div>
                      <div className="detail--row">
                        <p>단백질 (g)</p>
                        <p>10</p>
                      </div>
                    </div>
                    <div className="detail--part">
                      <div className="detail--row">
                        <p>나트륨 (mg)</p>
                        <p>140</p>
                      </div>
                      <div className="detail--row">
                        <p>당류 (g)</p>
                        <p>53</p>
                      </div>
                      <div className="detail--row">
                        <p>카페인 (mg)</p>
                        <p>210</p>
                      </div>
                    </div>
                  </div>
                  <p className="product-allergy">
                    알레르기 유발 요인 : 대두 / 우유
                  </p>
                </div>
                <div className="content-box__review">
                  <h2>리뷰</h2>
                  <div className="content-box__review--wrap">
                    <div className="content-box__review--list">
                      <div className="content-box__review--core">
                        <p className="content-box__review--username">
                          coffee_lover
                        </p>
                        <p className="content-box__review--string">
                          너무 맛있어요!
                        </p>
                      </div>
                      <div className="content-box__review--option">
                        <div className="content-box__review--like">
                          <i className="far fa-heart"></i>
                        </div>
                        <div className="content-box__review--delete">❌</div>
                      </div>
                    </div>
                    <div className="content-box__review--list">
                      <div className="content-box__review--core">
                        <p className="content-box__review--username">CHOCO7</p>
                        <p className="content-box__review--string">
                          오늘도 마시러갑니다.
                        </p>
                      </div>
                      <div className="content-box__review--option">
                        <div className="content-box__review--like">
                          <i className="far fa-heart"></i>
                        </div>
                        <div className="content-box__review--delete">❌</div>
                      </div>
                    </div>
                    <div className="content-box__review--list">
                      <div className="content-box__review--core">
                        <p className="content-box__review--username">
                          legned_dev
                        </p>
                        <p className="content-box__review--string">
                          전실이다 진짜 진짜 전설이다.
                        </p>
                      </div>
                      <div className="content-box__review--option">
                        <div className="content-box__review--like">
                          <i className="far fa-heart"></i>
                        </div>
                        <div className="content-box__review--delete">❌</div>
                      </div>
                    </div>
                  </div>
                  <form className="content-box__review--inputBox">
                    <input
                      className="content-box__review--id"
                      type="text"
                      placeholder="아이디"
                    />
                    <input
                      className="content-box__review--content"
                      type="text"
                      placeholder="리뷰를 입력해주세요."
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Detail;
