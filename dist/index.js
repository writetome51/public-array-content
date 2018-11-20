"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var isEmpty_notEmpty_1 = require("basic-data-handling/isEmpty_notEmpty");
var errorIfNotFunction_1 = require("basic-data-handling/errorIfNotFunction");
var arrays_match_1 = require("@writetome51/arrays-match");
var array_get_indexes_basic_1 = require("@writetome51/array-get-indexes-basic");
var array_get_indexes_intermediate_1 = require("@writetome51/array-get-indexes-intermediate");
var array_has_1 = require("@writetome51/array-has");
var array_starts_with_ends_with_1 = require("@writetome51/array-starts-with-ends-with");
var public_array_container_1 = require("@writetome51/public-array-container");
var PublicArrayContent = /** @class */ (function (_super) {
    __extends(PublicArrayContent, _super);
    function PublicArrayContent(data) {
        if (data === void 0) { data = []; }
        return _super.call(this, data) || this;
    }
    Object.defineProperty(PublicArrayContent.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        set: function (value) {
            this.data.length = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PublicArrayContent.prototype, "isEmpty", {
        get: function () {
            return isEmpty_notEmpty_1.isEmpty(this.data);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PublicArrayContent.prototype, "notEmpty", {
        get: function () {
            return isEmpty_notEmpty_1.notEmpty(this.data);
        },
        enumerable: true,
        configurable: true
    });
    // Does same thing as Array.join()
    PublicArrayContent.prototype.asString = function (glue) {
        if (glue === void 0) { glue = ', '; }
        return this.data.join(glue);
    };
    // returns false if value is object.
    PublicArrayContent.prototype.has = function (value) {
        return array_has_1.arrayHas(value, this.data);
    };
    // returns false if values contains object.
    PublicArrayContent.prototype.hasAll = function (values) {
        return array_has_1.arrayHasAll(values, this.data);
    };
    PublicArrayContent.prototype.hasAny = function (values) {
        return array_has_1.arrayHasAny(values, this.data);
    };
    // returns false if values contains object.
    PublicArrayContent.prototype.hasAdjacent = function (values) {
        return array_has_1.arrayHasAdjacent(values, this.data);
    };
    PublicArrayContent.prototype.startsWith = function (values) {
        return array_starts_with_ends_with_1.arrayStartsWith(values, this.data);
    };
    PublicArrayContent.prototype.endsWith = function (values) {
        return array_starts_with_ends_with_1.arrayEndsWith(values, this.data);
    };
    // returns false if array contains object.
    PublicArrayContent.prototype.matches = function (array) {
        return arrays_match_1.arraysMatch(array, this.data);
    };
    // For the next 3 methods:
    // testFunction(item, index?, array?) checks if item passes test.
    // If yes, it returns true.
    // returns true if all items pass test.
    PublicArrayContent.prototype.allPass = function (testFunction) {
        errorIfNotFunction_1.errorIfNotFunction(testFunction);
        return this.data.every(testFunction);
    };
    // returns true if at least 1 item passes.
    PublicArrayContent.prototype.anyPass = function (testFunction) {
        errorIfNotFunction_1.errorIfNotFunction(testFunction);
        return this.data.some(testFunction);
    };
    PublicArrayContent.prototype.indexesThatPass = function (testFunction) {
        return array_get_indexes_intermediate_1.getIndexesThatPass(testFunction, this.data);
    };
    // Does not work if value is object.
    PublicArrayContent.prototype.firstIndexOf = function (value) {
        return array_get_indexes_basic_1.getFirstIndexOf(value, this.data);
    };
    // Does not work if value is object.
    PublicArrayContent.prototype.lastIndexOf = function (value) {
        return array_get_indexes_intermediate_1.getLastIndexOf(value, this.data);
    };
    // Does not work if value is object.
    PublicArrayContent.prototype.indexesOf = function (value) {
        return array_get_indexes_intermediate_1.getIndexesOf(value, this.data);
    };
    return PublicArrayContent;
}(public_array_container_1.PublicArrayContainer));
exports.PublicArrayContent = PublicArrayContent;