describe('First UI test', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should show Step One', async () => {
    await expect(element(by.text('Step One'))).toBeVisible();

  });

  it('should show Debug', async () => {
    await expect(element(by.text('Debug'))).toBeVisible();
  });

  it('should show "Learn More', async () => {
    await expect(element(by.text('Learn More'))).toBeVisible();
  });
});