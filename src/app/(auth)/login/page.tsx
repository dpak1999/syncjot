"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormSchema } from "@/lib/types";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Loader from "@/components/Loader";

const LoginPage = () => {
  const [submitError, setSubmitError] = useState("");

  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    mode: "onChange",
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit: SubmitHandler<z.infer<typeof FormSchema>> = async (
    formData
  ) => {
    console.log(formData);
  };

  return (
    <Form {...form}>
      <form
        onChange={() => {
          if (submitError) {
            setSubmitError("");
          }
        }}
        className="w-full sm:justify-center sm:w-[400px] space-y-6 flex flex-col"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <Link href={"/"} className="w-full flex justify-start items-center">
          <span className="font-semibold text-4xl first-letter:ml-2 dark:text-white">
            Syncjot.
          </span>
        </Link>
        <FormDescription className="text-foreground/60">
          All inclusive Collaboration & productivity tool
        </FormDescription>
        <FormField
          disabled={isLoading}
          control={form.control}
          name="email"
          render={(field) => {
            return (
              <FormItem>
                <FormControl>
                  <Input type="email" placeholder="Email" {...field}></Input>
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />

        <FormField
          disabled={isLoading}
          control={form.control}
          name="password"
          render={(field) => {
            return (
              <FormItem>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Password"
                    {...field}
                  ></Input>
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        {submitError && <FormMessage>{submitError}</FormMessage>}
        <Button
          type="submit"
          className="w-full p-6"
          size={"lg"}
          disabled={isLoading}
        >
          {!isLoading ? "Login" : <Loader />}
        </Button>
        <span className="self-center">
          Dont have an account?
          <Link href={"/signup"} className="text-primary">
            Sign UP
          </Link>
        </span>
      </form>
    </Form>
  );
};

export default LoginPage;
