$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/calculator/calculator.feature");
formatter.feature({
  "line": 1,
  "name": "Calculator",
  "description": "As a user\nI want to use a calculator\nSo that I don\u0027t need to calculate myself",
  "id": "calculator",
  "keyword": "Feature"
});
formatter.before({
  "duration": 97300,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Add two numbers",
  "description": "",
  "id": "calculator;add-two-numbers",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I have a calculator",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I add 2 and 3",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the result should be 5",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculatorSteps.i_have_a_calculator()"
});
formatter.result({
  "duration": 149860200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 6
    },
    {
      "val": "3",
      "offset": 12
    }
  ],
  "location": "CalculatorSteps.i_add_and(int,int)"
});
formatter.result({
  "duration": 2636100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 21
    }
  ],
  "location": "CalculatorSteps.the_result_should_be(int)"
});
formatter.result({
  "duration": 79500,
  "status": "passed"
});
formatter.before({
  "duration": 22100,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Subtract two numbers",
  "description": "",
  "id": "calculator;subtract-two-numbers",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I have a calculator",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I subtract 5 and 3",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the result should be 2",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculatorSteps.i_have_a_calculator()"
});
formatter.result({
  "duration": 18900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 11
    },
    {
      "val": "3",
      "offset": 17
    }
  ],
  "location": "CalculatorSteps.i_subtract_and(int,int)"
});
formatter.result({
  "duration": 100500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 21
    }
  ],
  "location": "CalculatorSteps.the_result_should_be(int)"
});
formatter.result({
  "duration": 49200,
  "status": "passed"
});
formatter.before({
  "duration": 23100,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Multiply two numbers",
  "description": "",
  "id": "calculator;multiply-two-numbers",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "I have a calculator",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I multiply 2 and 3",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "the result should be 6",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculatorSteps.i_have_a_calculator()"
});
formatter.result({
  "duration": 22200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 11
    },
    {
      "val": "3",
      "offset": 17
    }
  ],
  "location": "CalculatorSteps.i_multiply_and(int,int)"
});
formatter.result({
  "duration": 108400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 21
    }
  ],
  "location": "CalculatorSteps.the_result_should_be(int)"
});
formatter.result({
  "duration": 57100,
  "status": "passed"
});
formatter.before({
  "duration": 22200,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Divide two numbers",
  "description": "",
  "id": "calculator;divide-two-numbers",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "I have a calculator",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I divide 10 and 2",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "the result should be 5",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculatorSteps.i_have_a_calculator()"
});
formatter.result({
  "duration": 25500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 9
    },
    {
      "val": "2",
      "offset": 16
    }
  ],
  "location": "CalculatorSteps.i_divide_and(int,int)"
});
formatter.result({
  "duration": 127700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 21
    }
  ],
  "location": "CalculatorSteps.the_result_should_be(int)"
});
formatter.result({
  "duration": 57100,
  "status": "passed"
});
});