import lighthouse from 'lighthouse';
import { launch } from 'chrome-launcher';

async function performanceAnalyzer(url) {
  const chrome = await launch({ chromeFlags: ['--headless'] });
  const options = {
    port: chrome.port,
    output: 'json',
    logLevel: 'info',
    onlyCategories: ['performance'], // Ensure we only get performance-related audits
  };

  const runnerResult = await lighthouse(url, options);
  const report = runnerResult.lhr;

  // Extract relevant performance metrics from the report
  const performanceData = extractMetrics(report);
  console.log("performanceData from backend", performanceData);

  await chrome.kill();
  return performanceData;
}

function extractMetrics(report) {
  const interactive = report.audits['interactive'];
  const networkRequests = report.audits['network-requests'];
  const fid = report.audits['first-input-delay'];
  const cls = report.audits['cumulative-layout-shift'];
  const lcp = report.audits['largest-contentful-paint'];

  // Extract page load time (interactive metric)
  const pageLoadTime = interactive ? interactive.numericValue : null;

  // Extract total request size
  const totalRequestSize = networkRequests && networkRequests.details.items
    ? networkRequests.details.items.reduce((total, request) => total + request.transferSize, 0)
    : null;

  // Extract number of requests
  const numberOfRequests = networkRequests && networkRequests.details.items
    ? networkRequests.details.items.length
    : null;

  // Extract FID, CLS, and LCP metrics
  const firstInputDelay = fid ? fid.numericValue : null;
  const cumulativeLayoutShift = cls ? cls.numericValue : null;
  const largestContentfulPaint = lcp ? lcp.numericValue : null;

  return {
    pageLoadTime,
    totalRequestSize,
    numberOfRequests,
    firstInputDelay,
    cumulativeLayoutShift,
    largestContentfulPaint,
  };
}

export default performanceAnalyzer;
