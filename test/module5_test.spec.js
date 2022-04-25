describe("Module 5: Advanced examples", () => {

	describe('execute', () => {
		beforeEach(async () => {
			await browser.url("/showcase/angular/appointmentplanner/#/dashboard");
		});

		it("execute()", async () => {
			await browser.execute(function () {
				const element = document.querySelector("a[href='#/doctor-details/5']");
				element.style.border = 'red solid 2px';
			});
			await browser.pause(3000);
		});

		it("execute() with params", async () => {
			const doctor = await $("a[href='#/doctor-details/5']");
			await browser.execute(function (doctor) {
				doctor.style.border = "red solid 2px";
			}, doctor);
			await browser.pause(3000);
		});

		it("execute() as string", async () => {
			await browser.execute(
				`const element = document.querySelector("a[href='#/doctor-details/5']");
            element.style.border = 'red solid 2px';`
			);
			await browser.pause(3000);
		});

		it("executeAsync()", async () => {
			await browser.executeAsync(function (done) {
				setTimeout(() => {
					const element = document.querySelector("a[href='#/doctor-details/5']");
					element.style.border = "red solid 2px";
					done();
				}, 2000);
			});
			await browser.pause(3000);
		});

		it("executeAsync() with params", async () => {
			const doctor = await $("a[href='#/doctor-details/5']");
			await browser.executeAsync(function (doctor, done) {
				setTimeout(() => {
					doctor.style.border = "red solid 2px";
					done();
				}, 2000);
			}, doctor);
			await browser.pause(3000);
		});

		it("executeAsync() as string", async () => {
			await browser.executeAsync(
				`setTimeout(() => {
                const element = document.querySelector("a[href='#/doctor-details/5']");
                element.style.border = "red solid 2px";
                arguments[0]();
            }, 2000);`
			);
			await browser.pause(3000);
		});
	});


	describe('waitUntil', () => {
		beforeEach(async () => {
			await browser.url("https://ej2.syncfusion.com/react/demos/progress-bar/semi-circular/");
		});

		it('waitUntil()', async () => {
			await $("#reLoad").click();
			await browser.waitUntil(
				async () => await $("#point1").getText() === "100%", {
					timeout: 5000,
					interval: 600,
					timeoutMsg: "not loaded"
				}
			);
		});

	});

	describe('cookies', () => {
		beforeEach(async () => {
			await browser.url("/showcase/angular/appointmentplanner/#/dashboard");
		});

		it('setCookies()', async () => {
			await browser.setCookies([{
				name: "customCookie",
				value: "42"
			}]);
			await browser.pause(10000);
		});

		it('getCookies()', async () => {
			await browser.setCookies([{
				name: "customCookie",
				value: "42"
			}]);
			const cookie = await browser.getCookies(["customCookie"]);
			console.log("cookie value");
			console.dir(cookie);
		});

		it('deleteCookies()', async () => {
			await browser.setCookies([{
				name: "customCookie",
				value: "42"
			}]);
			await browser.deleteCookies(["customCookie"]);
		});

	});

	describe("local storage", () => {
		beforeEach(async () => {
			await browser.url("/showcase/angular/appointmentplanner/#/dashboard");
		});

		it("set/get local storage value", async () => {
			const key = "localStorageKey";
			const value = "localStorageValue";

			await browser.execute(function (key, value) {
				window.localStorage.setItem(key, value);
			}, key, value);

			const readValue = await browser.execute(function (key) {
				return window.localStorage.getItem(key);
			}, key);

			console.log(readValue);
		});

	});

	describe("actions", () => {

		it("mouse move", async () => {
			await browser.url("/showcase/angular/appointmentplanner/#/dashboard");
			const row = await $("div.e-responsive-header table[role=grid] tbody tr:first-child");
			await row.moveTo();
			await browser.pause(5000);
		});

		it("perform actions", async () => {
			await browser.url("/showcase/angular/appointmentplanner/#/calendar");
			const slot1 = await $("[data-date='1596373200000']");
			const slot2 = await $("[data-date='1596382200000']");
			const SHIFT = '\uE008';
			await slot1.click();
			await browser.performActions([{
				type: 'key',
				id: 'keyboard',
				actions: [{
					type: 'keyDown',
					value: SHIFT
				}]
			}]);
			await slot2.click();
			await browser.pause(500);
			await browser.performActions([{
				type: 'key',
				id: 'keyboard',
				actions: [{
					type: 'keyUp',
					value: SHIFT
				}]
			}]);
			await browser.releaseActions();

			await browser.pause(5000);
		});

	});

	describe("get attribute/property", () => {
		beforeEach(async () => {
			await browser.url("/showcase/angular/appointmentplanner/#/dashboard");
		});

		it("getAttribute()", async () => {
			const element = await $("a[href='#/doctor-details/5']");
			const href = await element.getAttribute("href");
			console.log(href);
		});

		it("getProperty()", async () => {
			const element = await $("a[href='#/doctor-details/5']");
			const href = await element.getProperty("href");
			console.log(href);
		});

	});



});