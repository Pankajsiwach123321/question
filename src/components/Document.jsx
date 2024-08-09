import React from "react";
import { QUESTIONS_ANSWER } from "../utils/helper";

const Document = () => {
  return (
    <div className="container mb-20">
      <h1 className="text-center text-4xl font-bold mt-20 mb-10">
        Question/Answer
      </h1>
      {QUESTIONS_ANSWER.map((obj, i) => (
        <div key={i} className="mt-4">
          <h2 className="flex gap-1 items-start text-xl font-semibold">
            <span>Q{i + 1}.</span>
            {obj.question}
          </h2>
          {obj.answer && (
            <div className="sm:flex mt-1 gap-1 items-start text-lg font-medium">
              <span>Answer:</span>
              <p dangerouslySetInnerHTML={{ __html: obj.answer }}/>
            </div>
          )}
          {obj.difference &&
            obj.difference.map((data, i) => (
              <div key={i} className="flex sm:flex-row flex-col  mt-2 gap-5 items-start">
                Answer:
                <ul className="list-disc ps-10  sm:ps-3 border-b-2 sm:border-r-2 pb-6 sm:pr-6">
                  {data.first.map((li, i) => (
                    <li key={i}>{li}</li>
                  ))}
                </ul>
                <div>
                  <ul className="list-disc ps-10 sm:ps-6">
                    {data.second.map((li, i) => (
                      <li key={i}>{li}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default Document;
