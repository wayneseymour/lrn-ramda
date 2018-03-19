import { ifElse, __, gte, always, inc } from 'ramda';

describe(`pointfree functions`, () => {
	const args = [gte(__, 21), always(21), inc];
	const forever21Pointed = age =>
		ifElse(...args)(age);
	const forever21PointFree =
		ifElse(...args);
	const equals17 = f => f() === 17;
	it(`should return identically to the pointed versions`, () => {
		expect(equals17(() => forever21PointFree(16)))
			.toBe(equals17(() =>  forever21Pointed(16)));
	});
});
