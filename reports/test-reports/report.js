$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("TestFeature1.feature");
formatter.feature({
  "line": 2,
  "name": "This is My First Feature",
  "description": "",
  "id": "this-is-my-first-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 187009,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "This is My Second Scenario",
  "description": "",
  "id": "this-is-my-first-feature;this-is-my-second-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@regression"
    },
    {
      "line": 10,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I Click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should enter below details",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 14
    },
    {
      "cells": [
        "abc@gmail.com",
        "password123"
      ],
      "line": 15
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I click submit",
  "keyword": "And "
});
formatter.match({
  "location": "TestSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 231631339,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.iShouldEnterBelowDetails(DataTable)"
});
formatter.result({
  "duration": 36249359,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.iClickSubmit()"
});
formatter.result({
  "duration": 88435,
  "status": "passed"
});
formatter.after({
  "duration": 179894,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "This is My Third Scenario",
  "description": "",
  "id": "this-is-my-first-feature;this-is-my-third-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@regression"
    },
    {
      "line": 18,
      "name": "@so"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I Click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should enter \u003cusername\u003e and \u003cpassword\u003e details",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I click submit",
  "keyword": "And "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "this-is-my-first-feature;this-is-my-third-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 26,
      "id": "this-is-my-first-feature;this-is-my-third-scenario;;1"
    },
    {
      "cells": [
        "abc@gmail.com",
        "password123"
      ],
      "line": 27,
      "id": "this-is-my-first-feature;this-is-my-third-scenario;;2"
    },
    {
      "cells": [
        "Chai@gmail.com",
        "test123"
      ],
      "line": 28,
      "id": "this-is-my-first-feature;this-is-my-third-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 592658,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "This is My Third Scenario",
  "description": "",
  "id": "this-is-my-first-feature;this-is-my-third-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@regression"
    },
    {
      "line": 18,
      "name": "@so"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I Click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should enter abc@gmail.com and password123 details",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I click submit",
  "keyword": "And "
});
formatter.match({
  "location": "TestSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 116668,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc@gmail.com",
      "offset": 15
    },
    {
      "val": "password123",
      "offset": 33
    }
  ],
  "location": "TestSteps.iShouldEnterUsernameAndPasswordDetails(String,String)"
});
formatter.result({
  "duration": 396464,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.iClickSubmit()"
});
formatter.result({
  "duration": 90191,
  "status": "passed"
});
formatter.after({
  "duration": 78637,
  "status": "passed"
});
formatter.before({
  "duration": 86654,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "This is My Third Scenario",
  "description": "",
  "id": "this-is-my-first-feature;this-is-my-third-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@regression"
    },
    {
      "line": 18,
      "name": "@so"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I Click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should enter Chai@gmail.com and test123 details",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I click submit",
  "keyword": "And "
});
formatter.match({
  "location": "TestSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 762707,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chai@gmail.com",
      "offset": 15
    },
    {
      "val": "test123",
      "offset": 34
    }
  ],
  "location": "TestSteps.iShouldEnterUsernameAndPasswordDetails(String,String)"
});
formatter.result({
  "duration": 517999,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.iClickSubmit()"
});
formatter.result({
  "duration": 213845,
  "status": "passed"
});
formatter.after({
  "duration": 155825,
  "status": "passed"
});
});