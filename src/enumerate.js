import {list} from '@iterable-iterator/list';

import _enumerate from './_enumerate';

const enumerate = (elements) => _enumerate(list(elements));
export default enumerate;
