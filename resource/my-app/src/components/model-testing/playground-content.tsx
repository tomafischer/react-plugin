
import {  useTransition} from "react";
//import {useFormState} from 'react-dom'
import {use} from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

type Props = {}

const formSchema = z.object({
  url: z.string().url(),
  body: z.string().optional(),
  
});
type FormData = z.infer<typeof formSchema>;

export default function PlaygroundContent({ }: Props) {

  const form = useForm<FormData>({
  });
  
  return (
    <div className="p-2">
     
    </div>
  )
}


