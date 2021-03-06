// THIS FILE WAS AUTOGENERATED
/// <reference path="../../External/qunit.d.ts" />
/// <reference path="../../../JavaScriptSDK.Interfaces/Contracts/Generated/DataPoint.ts" />
/// <reference path="../../../JavaScriptSDK.Interfaces/Contracts/Generated/MetricData.ts" />
/// <reference path="../../../JavaScriptSDK.Interfaces/Contracts/Generated/RemoteDependencyData.ts" />
/// <reference path="../../../JavaScriptSDK.Interfaces/Contracts/Generated/RequestData.ts" />
/// <reference path="../../../JavaScriptSDK.Interfaces/Contracts/Generated/StackFrame.ts" />
/// <reference path="../../../JavaScriptSDK.Interfaces/Contracts/Generated/ExceptionDetails.ts" />
/// <reference path="../../../JavaScriptSDK.Interfaces/Contracts/Generated/ExceptionData.ts" />
/// <reference path="../../../JavaScriptSDK.Interfaces/Contracts/Generated/MessageData.ts" />
/// <reference path="../../../JavaScriptSDK.Interfaces/Contracts/Generated/EventData.ts" />
/// <reference path="../../../JavaScriptSDK.Interfaces/Contracts/Generated/PageViewData.ts" />
/// <reference path="../../../JavaScriptSDK.Interfaces/Contracts/Generated/PageViewPerfData.ts" />
/// <reference path="../../../JavaScriptSDK.Interfaces/Contracts/Generated/AvailabilityData.ts" />
QUnit.test("Test property ExceptionData.ver was created and default is set", function () {
    var temp = new AI.ExceptionData();
    QUnit.ok(temp.ver !== null, "ExceptionData.ver == null");
    QUnit.ok(temp.ver === 2, "Issue with ExceptionData.ver");
});

QUnit.test("Test property ExceptionData.exceptions was created and default is set", function () {
    var temp = new AI.ExceptionData();
    QUnit.ok(temp.exceptions !== null, "ExceptionData.exceptions == null");
});

QUnit.test("Test property ExceptionData.severityLevel was created and default is set", function () {
    var temp = new AI.ExceptionData();
    QUnit.ok(temp.severityLevel !== null, "ExceptionData.severityLevel == null");
});

QUnit.test("Test property ExceptionData.properties was created and default is set", function () {
    var temp = new AI.ExceptionData();
    QUnit.ok(temp.properties !== null, "ExceptionData.properties == null");
});

QUnit.test("Test property ExceptionData.measurements was created and default is set", function () {
    var temp = new AI.ExceptionData();
    QUnit.ok(temp.measurements !== null, "ExceptionData.measurements == null");
});

