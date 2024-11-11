
import { Suspense, useTransition} from "react";
//import {useFormState} from 'react-dom'
import {use} from 'react';
import {useActionState} from 'react'
import { SkeletonDefault } from "../skeleton-default";
import { Button } from "../ui/button";
type Props = {}

function AzureResults({ resultPromise }: { resultPromise: Promise<any> }) {
  use(resultPromise);
  //await promise
  return (
    
    <div className="p-4 bg-orange-200"> Here comes the outcome</div>
  )
}

let myPromise = () => new Promise((resolve, reject) => {
  // Asynchronous operation
  setTimeout(() => {
    resolve("Hello from the promise!");
  }, 2000);
});

export default function AsyncLoading({ }: Props) {
  const waitabit = async () => {
    return new Promise(() => { 
      setTimeout(() => {
        console.log('done waiting 2 seconds');
      }, 2000);
    });
  }
  
  // const [error, submitAction, isPending] = useActionState(
  //   async () => {
  //     await waitabit();
  //     return;}
  // )

  const [isPending, startTransition] = useTransition();
  const onSubmit = () => {
    console.log('clicked');
    startTransition( async () => {
      console.log('transition started');
      await myPromise();
    });
 
  }
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <Button onClick={()=>onSubmit()}>Click me</Button>
      {isPending ? <div>loading...</div> : <div>not loading</div>}  
      <Suspense fallback={<SkeletonDefault />}> 
        <AzureResults resultPromise={myPromise()}/>
      </Suspense>
    </div>
  )
}


