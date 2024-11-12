
import { useEffect, useTransition } from "react";
//import {useFormState} from 'react-dom'
import { use } from 'react';
import { useForm, useFormState } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/lib/store-redux/store";
import { loadAssetsIntoStore } from "@/lib/store-redux/assets-slice";

type Props = {}

const formSchema = z.object({
  url: z.string().url(),
  body: z.string().optional(),

});
type FormData = z.infer<typeof formSchema>;

export default function PlaygroundContent({ }: Props) {
  const dispatch : AppDispatch = useDispatch();


  const assets = useSelector((state: RootState) => state.assets);

  useEffect(() => {
    dispatch(loadAssetsIntoStore());
  }, []);
  

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      url: '',
      body: '',
    }
  });

  //const {values} = useFormState({control});

  const onSubmit = (data: FormData) => {
    console.log(data);
  }



  return (
    <div className="p-2">
      <Form {...form} >
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex justify-between">
            <div className="flex">
              <Button type='button' onClick={()=>{
                console.log('clicked');
                console.log(form.getValues('url'));
                form.setValue('url', 'accepatnce clicked');
                console.log(form.getValues('url'));
              }}>ACC</Button>
            </div>
            <Button type='submit'>Send Request</Button>
          </div>
          {/* ULR bar  */}
          <FormField
            control={form.control}
            name="url"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Url:</FormLabel>
                <FormControl>
                  <Input placeholder="Url" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
          {/* body */}
          <FormField
            control={form.control}
            name="body"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Body:</FormLabel>
                <FormControl>
                  <Textarea placeholder="Body" {...field} rows={15} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} >
          </FormField>

        </form>
      </Form>
    </div >
  )
}


