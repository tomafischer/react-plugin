
import { useEffect, useTransition } from "react";
//import {useFormState} from 'react-dom'

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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";


import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";


type Props = {}

const formSchema = z.object({
  url: z.string().url(),
  body: z.string().optional(),
  env: z.string().optional(),
  asset: z.string().optional()

});
type FormData = z.infer<typeof formSchema>;

export default function PlaygroundContent({ }: Props) {
  const dispatch: AppDispatch = useDispatch();


  const assets = useSelector((state: RootState) => state.assets);

  useEffect(() => {
    dispatch(loadAssetsIntoStore());
  }, []);


  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      url: '',
      body: '',
      env: 'acc',
      asset: 'ctxf'
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
          <div className="flex justify-between items-center flex-col  md:flex-row">

            <Card>
              <CardHeader>
                <CardTitle>Presets</CardTitle>
                <CardDescription>Presets for the request. Please choose.</CardDescription>
              </CardHeader>
              <CardContent>
                <FormField
                  control={form.control}
                  name='env'
                  render={({ field }) => (
                    <FormItem className="block">
                      <FormLabel>Environment</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="ACC" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="localhost">Localhost</SelectItem>
                          <SelectItem value="dev">Development</SelectItem>
                          <SelectItem value="acc">Acceptance</SelectItem>
                          <SelectItem value="prod">Production</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>


                  )} />
                <FormField
                  control={form.control}
                  name='asset'
                  render={({ field }) => (
                    <FormItem>
                      </FormItem>
                  )}
                />



                {/* <div className="flex">
              <Button type='button' onClick={() => {
                console.log('clicked');
                console.log(form.getValues('url'));
                form.setValue('url', 'accepatnce clicked');
                console.log(form.getValues('url'));
              }}>ACC</Button>
            </div> */}
              </CardContent>
            </Card>


            <Button type='submit'>Send Request</Button>
          </div>
          {/* ULR bar  */}
          <Card className="mt-2">
            <CardHeader>
              <CardTitle>Request to the Asset Model</CardTitle>
              <CardDescription>The actual request being send.</CardDescription>
            </CardHeader>
            <CardContent>

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
            </CardContent>
          </Card>

        </form>
      </Form>
    </div >
  )
}


