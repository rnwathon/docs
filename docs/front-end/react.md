---
sidebar_position: 2
id: react
title: React
---

## Imports / Exports

I personally prefer to import React without destructuring and calls hooks from React object. It is easier for me when deciding to use or not using certain React stuffs without having to scroll up to add/remove the destructured imports.

```jsx
/* Nope ❌ */
import React, { useEffect, useState } from 'react';
const [state, setState] = useState()
useEffect(() => {}, [])

/* Yup ✅ */
import React from 'react'; 
const [state, setState] = React.useState()
React.useEffect(() => {}, [])
```

In terms of components, pages, etc. I actually prefer to use the destructuring to prevent multiline of imports. So, instead of importing like this:

```jsx
/* Nope ❌ */
import Input from './components/Input';
import Select from './components/Select';
import DatePicker from './components/DatePicker';
...
```

I would prefer to import like this:

```jsx
/* Yup ✅ */
import { DatePicker, Input, Select } from './components';
```

In order to achieve that, I need to make `index.js` inside of `components` folder and exporting the default export of each component.

***Folder structure:***

    .
    ├── ...
    ├── components
    │   ├── DatePicker.jsx
    │   ├── Input.jsx
    │   ├── Select.jsx
    │   ├── ...
    │   └── index.js
    └── ...

***index.js***

```js
export { default as DatePicker } from './DatePicker';
export { default as Input } from './Input';
export { default as Select } from './Select';
...
```

