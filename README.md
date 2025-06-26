# Repro for withMonitor crashing server

Issue: https://github.com/getsentry/sentry-javascript/issues/16749

To run the repro:

1. `npm install`
1. [In Terminal 1] `npm run dev`
1. [In Terminal 2] `curl http://localhost:8000/crash`. This will crash the server!
