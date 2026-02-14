# UseEffect practice

parallel rendering or if the the dependency array changes rerendener

## Import

import { useEffect, useState } from 'react';

```bash
 useEffect(()=>{
getData()

 },[index])
```

## Usage
### Asynchronnus api calling
```

const getData = async () => {
  const response = await fetch(`https://picsum.photos/v2/list?page=${index}&limit=6`);
  const jsonData = await response.json();
     setUserdata(jsonData);
};
```

## Description 
Simple image gallery with little bit of pagination 


## License

[Have a look](https://use-effect-practice-beta.vercel.app/)