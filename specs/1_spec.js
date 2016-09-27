// spec.js
describe('Protractor Demo App1', function() {
  it('should greet the named user', function() {
    browser.get('http://www.angularjs.org');

    element(by.model('yourName1234')).sendKeys('Example');

    var greeting = element(by.binding('yourName1234'));

    expect(greeting.getText()).toEqual('Hello Example!');
  });
});
