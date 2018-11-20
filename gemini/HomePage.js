gemini.suite('home-page', (suite) => {
  suite.setUrl('/')
      .setCaptureElements('#root')
      .capture('plain');
});