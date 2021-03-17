/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import './Nav.css'

function Nav({ children }) {
    const [show, handleShow] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                handleShow(true)
            } else handleShow(false);
        });
        setTimeout(() => {
            setIsOpen(false)
        }, 8000)
        return () => {
            window.addEventListener('scroll', '');
        };
    }, []);


    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
                className="nav__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/b/b8/%EC%99%93%EC%B1%A0_%EB%A1%9C%EA%B3%A0_2021.png"
                alt="WatCha Logo"
            />
            <img
                className="nav__avatar"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                alt="WatCha Avatar"
            />
            <div>
                <a href="#" className="h1">홈</a>
                <a href="#" className="h1"
                    onMouseEnter={() => setIsOpen(true)}
                // onMouseLeave={() => setIsOpen(false)}
                >탐색하기</a>
                <a href="#" className="h1">평가하기</a>
                {isOpen &&
                    <div className="item" onMouseLeave={() => setIsOpen(false)}>
                        <div className="top_bar">
                            <h1 className="top_bar_title">장르</h1>
                            <h1 className="top_bar_title">국가</h1>
                            <h1 className="top_bar_title">특징</h1>
                        </div>
                        <div className="bottom_bar">
                            <ul className="bottom_bar_ul">

                                <li className="bottom_bar_li1">새로 올라온 작품</li>
                                <li className="bottom_bar_li1">새 에피소드 추가작</li>
                                <li className="bottom_bar_li1">왓챠 익스클루시브</li>

                                {/* 2줄  */}

                                <li className="bottom_bar_li2">TV드라마</li>
                                <li className="bottom_bar_li2">TV애니메이션</li>
                                <li className="bottom_bar_li2">영어 자막 지원 콘텐츠</li>

                                {/* 3줄 */}

                                <li className="bottom_bar_li3">재난</li>
                                <li className="bottom_bar_li3">로맨틱코미디</li>
                                <li className="bottom_bar_li3">시트콤</li>

                                {/* 4줄 */}

                                <li className="bottom_bar_li4">시대극</li>
                                <li className="bottom_bar_li4">역사</li>
                                <li className="bottom_bar_li4">틴에이저</li>

                                {/* 5줄 */}
                                <li className="bottom_bar_li5">가족</li>
                                <li className="bottom_bar_li5">음악</li>
                                <li className="bottom_bar_li5">SF</li>

                                <li className="bottom_bar_li6">가족</li>
                                <li className="bottom_bar_li6">음악</li>
                                <li className="bottom_bar_li6">SF</li>

                            </ul>
                        </div>
                    </div>
                }
                <div className="nav__menu-item"
                    onMouseEnter={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}
                >
                </div>
            </div>
        </div >
    );
}


export default Nav;