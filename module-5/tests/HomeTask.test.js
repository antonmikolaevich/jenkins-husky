describe('HomeTask Module - 5 Advance Commands', () => {
  // different url is used thus didn't use beforeAll function

  it('has scenario that utilizes execute() command ', () => {
    browser.url('/showcase/angular/appointmentplanner');

    browser.execute(() => {
      //changes h1 color to green
      document.querySelector('h1.clinic-name').style.color = 'green';
      //remove header
      document.querySelector('h1.clinic-name').remove();
    });
  });

  it('has scenario that utilizes waitUntil() command ', async () => {
    browser.url('/react/demos/progress-bar/radius/');
    await $('#reLoad').click();
    await browser.waitUntil(async () => (await $('#point1').getText()) === '60%', {
      timeout: 10000,
      timeoutMsg: 'expected text to be different after 5s',
    });
  });

  it('has scenario that utilizes browser actions ', async () => {
    browser.url('/showcase/angular/appointmentplanner');

    await browser.pause(5000);

    //simply scroll a page
    await browser
      .action('wheel')
      .scroll({
        deltaX: 0,
        deltaY: 500,
        duration: 200,
      })
      .perform();

    await browser.pause(5000);

    await browser.url('/showcase/angular/appointmentplanner/#/calendar');

    await $('div.e-date-range').click();
    const clickToday = await $("button[aria-label='Today']");
    await clickToday.click();

    const slot1 = await $('td.e-work-hours:nth-child(1)');
    const slot2 = await $('td.e-work-hours:nth-child(2)');
    const SHIFT = '\uE008';
    await slot1.click();
    await browser.performActions([
      {
        type: 'key',
        id: 'keyboard',
        actions: [
          {
            type: 'keyDown',
            value: SHIFT,
          },
        ],
      },
    ]);
    await slot2.click();
    await browser.pause(500);
    await browser.performActions([
      {
        type: 'key',
        id: 'keyboard',
        actions: [
          {
            type: 'keyUp',
            value: SHIFT,
          },
        ],
      },
    ]);
    await browser.releaseActions();

    await browser.pause(5000);
  });

  // Bonus task

  it('has scenario that works with cookies and/or local storage ', async () => {
    browser.url('/showcase/angular/appointmentplanner');

    //setting cookies
    await browser.setCookies({
      name: 'I want to get Bonus points',
      value: 'Hundred',
      path: '/foo',
      httpOnly: true,
      expiry: 1551393875,
    });
    // multiple cookies
    await browser.setCookies([
      { name: 'Sweet Bonus', value: 'two' },
      { name: 'Tasty Bonus', value: 'three' },
    ]);

    // getting the cookies in console
    const cookies = await browser.getCookies();
    console.log(cookies);

    // local storage
    browser.url('/react/demos/progress-bar/radius/');

    const keyOne = 'localStorageKey';
    const valueOne = 'localStorageValue';

    await browser.execute(
      function (keyOne, valueOne) {
        window.localStorage.setItem(keyOne, valueOne);
      },
      keyOne,
      valueOne,
    );

    const readValue = await browser.execute(function (keyOne) {
      return window.localStorage.getItem(keyOne);
    }, keyOne);

    console.log(readValue);
  });
});
