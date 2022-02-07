exports.config = {
  'specs': [ '../specs/single.js' ],
  'browserstackUser': process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
  'browserstackKey': process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACCESS_KEY',

  'capabilities': {
    'name': 'single_test',
    'browserName': 'chrome',
    'resolution': '1024x768',
    'browserstack.debug': 'true',
    'browserstack.local': process.env.BROWSERSTACK_LOCAL || 'false',
    'browserstack.localIdentifier': process.env.BROWSERSTACK_LOCAL_IDENTIFIER

    'build': process.env.BROWSERSTACK_BUILD_NAME
  }
};
