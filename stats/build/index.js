"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const Summary_1 = require("./Summary");
// Create an object that implements the DataReader interface
// const csvFileReader = new CsvFileReader('football.csv');
// Create an object of MatchReader and pass DataReader implementation
// const matchReader = new MatchReader(csvFileReader);
const matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
matchReader.load();
// const summary = new Summary(new WinsAnalysis('Arsenal'), new ConsoleReport());
// const summary = new Summary(new WinsAnalysis('Arsenal'), new HtmlReport());
const summary = Summary_1.Summary.winsAnalysisWithHtmlReport('Arsenal');
summary.buildAndPrintReport(matchReader.matches);
