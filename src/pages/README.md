# Pages

## All pages/screens should be situated here (this is for cra/vite)

### All handlers should be defined here and passed to the children (templates) as props, except for the handlers that are specific to the template.

## Example

```js
import { useCallback } from "react";

import { HomeTemplate } from "@/component/templates";
import { LoadingOverlay } from "@/component/...";

const Home = () => {
  const { data: homeData, isLoading: isHomeDataLoading } = useGetHomeData();
  const { mutateAsync: doSomething, isLoading: isDoSomethingLoading } =
    useMutateHomeData();

  const doSomethingHandler = useCallback(async () => {
    await doSomething();

    // do something else
  }, [doSomething]);

  return (
    <>
      {isLoading && <LoadingOverlay />}

      <HomeTemplate someProp={homeData} onDoSomething={doSomethingHandler} />
    </>
  );
};

export default Home;
```
