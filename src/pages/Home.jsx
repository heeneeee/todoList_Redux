import React, { useState } from "react";
import { addTodo } from "../redux/modules/todos";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import uuid from "react-uuid";
import todos from "../redux/modules/todos";

const Home = () => {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  //import 필수!
  // 중앙저장소 안에 있는 전체 state
  const todos = useSelector((state) => state.todos);
  //디스패치 가져오기

  const dispatch = useDispatch();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (title === "") return;
    const newTodo = {
      id: uuid(),
      title,
      body,
      isDone: false,
    };
    dispatch(addTodo(newTodo));
    setTitle("");
    setBody("");
  };

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <Title>TodoList</Title>
        <Title>
          제목 :
          <input
            type="text"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </Title>
        <Body>
          내용 :{" "}
          <input
            type="text"
            value={body}
            onChange={(event) => {
              setBody(event.target.value);
            }}
          />
        </Body>
        <Button>등록</Button>
      </form>
    </>
  );
};

export default Home;

const Title = styled.div``;

const Body = styled.div``;

const Button = styled.button``;
