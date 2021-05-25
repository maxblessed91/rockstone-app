import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import PropTypes from "prop-types";
import "../App/App.css";
import SecondPage from "../SecondPage/SecondPage";
import AddText from "../AddText/AddText";
import Message from "../Message/Message";

import "swiper/swiper-bundle.css";

function App() {
  const [textArray, setTA] = React.useState([
    { id: 1, title: "Первый введённый текст отображается вот тут." },
    { id: 2, title: "Второй введённый текст." },
    {
      id: 3,
      title:
        "Анимация для отображения текста - хороший повод проявить фантазию.",
    },
    {
      id: 4,
      title:
        "Текст может быть и подлиннее, тогда он займёт несколько строк, не забудьте про это.",
    },
  ]);

  function addText(title) {
    setTA(
      textArray.concat([
        {
          title,
          id: Date.now(),
        },
      ])
    );
  }

  return (
    <div className="App">
      <Swiper spaceBetween={5} slidesPerView={1}>
        <SwiperSlide className="slide-first">
          <div>
            <AddText onCreate={addText} />
            <Message textArray={textArray} className="message" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide-second">
          <SecondPage />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

App.propTypes = {
  textArray: PropTypes.array,
};

export default App;
