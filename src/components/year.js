import React from 'react';
import Button from './button';
import grades from '../grades';
import '../index.css';
import TooManySubjectsError from './too-many-subjects-error';
const Year = ({
  year,
  handleQCA,
  totalSubjectsPerYear,
  clearYear,
  eachGradePerYear,
  tooManySubjestsInYear,
  clearLastSubject,
}) => {
  let totalPoints = 0;
  eachGradePerYear[year - 1].forEach((element) => {
    totalPoints += grades[element];
  });
  const qca =
    totalSubjectsPerYear[year - 1] === 0 ?
      0 :
      totalPoints / totalSubjectsPerYear[year - 1];
  return (
    <>
      <div className="year" style={{gridColumnStart: year * 2}}>
        <h2>Year {year}</h2>
        <p>
          {totalSubjectsPerYear[year - 1] === 0 ?
            `Enter your grades for year ${year}` :
            `Yearly QCA: ${qca.toFixed(2)}`}
        </p>
        <p>Results :</p>
        <p>{eachGradePerYear[year - 1].map((g) => g + ' ')}&nbsp;</p>
        <p>Total Subjects: {totalSubjectsPerYear[year - 1]}</p>
        <div className="keys">
          {Object.keys(grades).map((key) => (
            <Button grade={key} onClick={handleQCA(key, year)} key={key} />
          ))}
          <Button onClick={clearLastSubject(year)} grade={'<-'} />

          <Button onClick={clearYear(year)} grade={'CLR'} />
        </div>
        <TooManySubjectsError
          year={year}
          tooManySubjestsInYear={tooManySubjestsInYear}
        />
      </div>
    </>
  );
};

export default Year;
