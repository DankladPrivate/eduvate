"use client";
const course = "/images/student-profile/course.png";
import BorderHorizontalN40 from "@/components/customBorder/BorderHorizontalN40";
import H3 from "@/components/sharedComponents/H3";
import TextM from "@/components/sharedComponents/TextM";
import { IconCheck, IconX } from "@tabler/icons-react";
import Image from "next/image";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { quizData } from "../../../../../public/data/quiaData";
import ButtonPrimarySmall from "../edit-profile/ButtonPrimarySmall";
import QuizQuestion from "./QuizQuestion";

const QuizBody = () => {
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [allCorrectAnswer, setAllCorrectAnswer] = useState<
    { question: string; correct: boolean }[]
  >([]);

  const [showAnswer, setShowAnswer] = useState(false);

  const handleCheckbox = (answerNo: string) => {
    const answerOption = answerNo.split("");
    quizData.forEach((answer, index) => {
      if (index == parseInt(answerOption[1])) {
        // if (answer.answer == answerOption[0]) { //The below line was previously this line
        if (answer.answers.some((ans) => ans.answerNo === answerOption[0])) {
          setAllCorrectAnswer((prevAnswers) => [
            ...prevAnswers.filter((a) => a.question !== answer.question),
            { question: answer.question, correct: true },
          ]);
        } else {
          setAllCorrectAnswer((prevAnswers) => [
            ...prevAnswers.filter((a) => a.question !== answer.question),
            { question: answer.question, correct: false },
          ]);
        }
      }
    });
  };

  const handleShowAnswer = (
    e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>,
  ) => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="padding-all-32 gap-32px flex flex-col rounded-16px bg-white">
      {" "}
      <div className="flex items-center gap-6 max-lg:flex-col xl:gap-10">
        <div className="overflow-hidden rounded-16px">
          <Image
            src={course}
            width={171}
            height={120}
            alt="course thumbnail"
            className="theme-transition-3 rounded-16px hover:scale-105"
          />
        </div>
        <div className="flex flex-col gap-4">
          <H3>The Complete Health Sciences & Medicine Courses </H3>
          <TextM>120 Courses In 01</TextM>
        </div>
      </div>
      {/* quiz question */}
      <BorderHorizontalN40 />
      {!showAnswer ? (
        <>
          <div className="flex flex-col gap-6">
            {quizData.map(({ question, answers, id }, index) => (
              <QuizQuestion
                key={id}
                handleCheckbox={handleCheckbox}
                question={question}
                answers={answers}
                questionIndex={index}
                correctAnswer={correctAnswer}
              />
            ))}
          </div>
          <ButtonPrimarySmall
            buttonText="View Result"
            onClick={(e) => handleShowAnswer(e)}
          />
        </>
      ) : (
        <>
          <div className="flex flex-col gap-5 rounded-8px border border-neutral-30 bg-neutral-20 p-6">
            {allCorrectAnswer.map((item) => (
              <div
                key={uuidv4()}
                className="flex items-center gap-3 text-xl font-medium text-neutral-500"
              >
                {item.correct ? (
                  <IconCheck size={32} className="text-secondaryColorTwo" />
                ) : (
                  <IconX size={32} className="text-[#FF0505]" />
                )}{" "}
                <p>{item.question}</p>
              </div>
            ))}
          </div>
          <ButtonPrimarySmall
            buttonText="Back To Quiz"
            onClick={(e) => handleShowAnswer(e)}
          />
        </>
      )}
    </div>
  );
};

export default QuizBody;
