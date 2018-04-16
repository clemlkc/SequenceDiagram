import {BlockBegin, BlockEnd, BlockSplit} from './Block.js';
import {getComponents} from './BaseComponent.js';

describe('Block', () => {
	it('registers itself with the component store', () => {
		const components = getComponents();

		expect(components.get('block begin')).toEqual(jasmine.any(BlockBegin));
		expect(components.get('block split')).toEqual(jasmine.any(BlockSplit));
		expect(components.get('block end')).toEqual(jasmine.any(BlockEnd));
	});
});
