import { ifElse, __, gte, always, inc } from 'ramda';

const msg = x => `should invoke the ${x} fn arg, and return its result`;

describe("ifElse fn", () => {
	let spec;
	describe(`when passed a truthy fn application as the first arg`, () => {
		spec = x => ifElse(gte(__, 21), always(21), inc)(x);
		it(msg('FIRST'), () => {
			expect(spec(25)).toBe(21);
		});
	});
	describe(`when passed a falsy fn application as the first arg`, () => {
		spec = x => ifElse(gte(__, 21), always(21), inc)(x);
		it(msg('SECOND'), () => {
				expect(spec(16)).toBe(17);
		});
	});
});
