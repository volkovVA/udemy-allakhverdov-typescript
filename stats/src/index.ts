import { CsvFileReader } from './ScvFileReader';
import { MatchReader } from './MatchReader';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summary } from './Summary';
import { HtmlReport } from './reportTargets/HtmlReport';

// Create an object that implements the DataReader interface
// const csvFileReader = new CsvFileReader('football.csv');

// Create an object of MatchReader and pass DataReader implementation
// const matchReader = new MatchReader(csvFileReader);
const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();

// const summary = new Summary(new WinsAnalysis('Arsenal'), new ConsoleReport());
// const summary = new Summary(new WinsAnalysis('Arsenal'), new HtmlReport());
const summary = Summary.winsAnalysisWithHtmlReport('Arsenal');
summary.buildAndPrintReport(matchReader.matches);
