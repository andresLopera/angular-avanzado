ng g library math

"build:math": "ng build math",
"pack:math": "npm run build:math && cd dist/math && npm pack"

npm i .\dist\math\math-0.0.1.tgz -s

"math": "file:dist/math/math-0.0.1.tgz",

import { MathModule } from 'math';
