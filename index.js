function saturdayFun (activity = "roller-skate")
{
    return "This Saturday, I want to " + activity + "!";
}
console.log(saturdayFun())

function mondayWork (work = "go to the office")
{
    return "This Monday, I will " + work + ".";
}
console.log(mondayWork())

function wrapAdjective(flair = "*") 
{
    return function (adjective = "special") 
    {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }