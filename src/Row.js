import React, { useState, useEffect } from 'react'
import axios from './axios';
import "./Row.css"

import YouTube from 'react-youtube';


const baseImgUrl = "https://image.tmdb.org/t/p/original/"  // 기본 original 주소 가져오기

const opts = {
    height: "390",
    width: "100%",
    playerVars: {
        autoplay: 1,
    },
    GamepadButton: false
}

// 레이아웃 Row 작성
function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("")

    //  snippet 사용
    useEffect(() => {
        // Tranding Now 부분에 Row 박스 넣기위한 Effect 선언
        // if [], run once when the row loads, and dont run again 안에 항목이 들어가면 적용 아니면 다시 체크
        async function fetchData() {
            const request = await axios.get(fetchUrl); // request 로 fetchUrl 
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    const handleClick = async (movie) => {
        if (trailerUrl) {
            setTrailerUrl("");
        } else {
            let trailerUrl = await axios.get(
                `/movie/${movie.id}/videos?api_key=fb34530271b349314af0de263d16ab5a`
            );
            setTrailerUrl(trailerUrl.data.results[0]?.key);
        }
    }

    console.table(movies); // console로 영화 목록 이미지 띄우기

    return (
        <div className="row">
            {/* Title 부분 */}
            <h2>{title}</h2>
            {/* Container 부분 */}
            <div className="row__posters">
                {/* row 포스터 */}
                {movies.map(
                    (movie) =>
                        movie.backdrop_path !== null && (
                            // eslint-disable-next-line no-undef
                            <img
                                key={movie.id}
                                className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                                src={`${baseImgUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                                alt={movie.name}
                                onClick={() => handleClick(movie)}
                            />  // 이미지 제목 map함수로 불러온다.
                        )
                )}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row