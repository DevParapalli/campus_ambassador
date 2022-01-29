import React from "react";
import "../style/faq-form.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Faq() {
  const [selected, setSelected] = useState(null);
  const onClickButton = (e) => {
    e.preventDefault();
  };
  let navigate = useNavigate();
  const redirect = () => {
    navigate("/");
  };
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  const slideLeft = () => {
    let container = document.getElementById("container");
    container.classList.add("sign-up-mode");
  };

  const slideRight = () => {
    let container = document.getElementById("container");
    container.classList.remove("sign-up-mode");
  };
  return (
    <div>
      <div id="container">
        <div className="forms-container">
          <div className="signin-signup">
            <form className="faq_section">
              <div className="wrapper">
                <h2 className="title">Faq's</h2>
                <div className="accordian">
                  {data.map((item, i) => (
                    <div className="item">
                      <div className="faq_title" onClick={() => toggle(i)}>
                        <h2>{item.question}</h2>
                        <span>{selected === i ? "-" : "+"}</span>
                      </div>

                      <div
                        className={selected === i ? "content show" : "content"}
                      >
                        {item.answer}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </form>
            <form action="/" className="contact_form">
              <h2 className="title">Contact Form</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input type="email" placeholder="Email" />
              </div>
              <div className="input-field">
                <i class="fas fa-mobile-alt"></i>
                <input type="number" placeholder="Phone No." />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="text" placeholder="code" />
              </div>
              <div className="input-field">
                <i class="fas fa-comments"></i>

                <textarea
                  cols="5"
                  rows="5"
                  placeholder="Type your question "
                ></textarea>
              </div>
              <input
                type="submit"
                className="btn"
                value="Submit"
                onClick={(e) => {
                  onClickButton(e);
                  redirect();
                }}
              />
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content1">
              <h3>Have a new quetion ?</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis, ex ratione. Aliquid!
              </p>
              <button
                onClick={slideLeft}
                className="btn transparent"
                id="sign-up-btn"
              >
                Ask question
              </button>
            </div>
            <img
              src="https://actiserp.com/wp-content/uploads/admin/2019/07/undraw_newsletter_vovu.png"
              className="image"
              alt=""
            />
          </div>
          <div className="panel right-panel">
            <div className="content1">
              <h3>Find your answer here?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                laboriosam ad deleniti.
              </p>
              <button
                onClick={slideRight}
                className="btn transparent"
                id="sign-in-btn"
              >
                Find answer
              </button>
            </div>
            <img
              src="https://www.virgosix.com/img/v34.png"
              className="image"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const data = [
  {
    question: "Question1 ",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Totam distinctio quod quos voluptatibus placeat. Tempora, sint exercitationem recusandae, debitis amet quos unde impedit odio sunt laborum provident error ex explicabo! ",
  },

  {
    question: "Question2",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Totam distinctio quod quos voluptatibus placeat. Tempora, sint exercitationem recusandae, debitis amet quos unde impedit odio sunt laborum provident error ex explicabo! ",
  },

  {
    question: "Question3 ",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Totam distinctio quod quos voluptatibus placeat. Tempora, sint exercitationem recusandae, debitis amet quos unde impedit odio sunt laborum provident error ex explicabo! ",
  },

  {
    question: "Question4 ",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Totam distinctio quod quos voluptatibus placeat. Tempora, sint exercitationem recusandae, debitis amet quos unde impedit odio sunt laborum provident error ex explicabo! ",
  },
];