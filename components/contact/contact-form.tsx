"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check, TriangleAlert } from "lucide-react";
import * as React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { company } from "@/data/company";
import { services } from "@/data/services";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";

/**
 * Enquiry form.
 *
 * Validation is client-side with Zod. There is no backend, so a valid enquiry
 * opens the visitor's email application with a pre-filled message addressed to
 * the company.
 */

const schema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.email("Please enter a valid email address."),
  phone: z
    .string()
    .min(7, "Please enter a contactable phone number.")
    .regex(/^[\d\s+()-]+$/, "Use digits, spaces and + ( ) - only."),
  projectType: z.string().min(2, "Please describe the type of house project."),
  service: z.string().min(1, "Please select a service."),
  location: z.string().min(2, "Where is the project located?"),
  message: z
    .string()
    .min(20, "Please give us at least a couple of sentences.")
    .max(2000, "Please keep this under 2,000 characters."),
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const [sent, setSent] = React.useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      projectType: "",
      service: "",
      location: "",
      message: "",
    },
  });

  const onSubmit = (values: FormValues) => {
    const subject = `House engineering enquiry from ${values.name}`;
    const body = [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      `Phone: ${values.phone}`,
      `Project type: ${values.projectType}`,
      `Service: ${values.service}`,
      `Project location: ${values.location}`,
      "",
      "Project details:",
      values.message,
    ].join("\n");

    setSent(true);
    window.location.assign(
      `mailto:${company.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
    );
  };

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="sent"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="border border-line bg-paper-2 p-8 md:p-12"
            role="status"
          >
            <span className="flex size-12 items-center justify-center bg-accent text-white">
              <Check className="size-6" strokeWidth={1.75} aria-hidden />
            </span>
            <h3 className="display-sm mt-7">Email app opened.</h3>
            <p className="lede mt-4 max-w-md">
              Review the prepared message and press send in your email app. For
              anything urgent, please call or message us directly.
            </p>
            <button
              type="button"
              onClick={() => {
                reset();
                setSent(false);
              }}
              className="label mt-9 text-accent underline underline-offset-4"
            >
              Send another enquiry
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2"
          >
            <Field
              label="Full name"
              id="name"
              error={errors.name?.message}
              required
            >
              <input
                id="name"
                autoComplete="name"
                placeholder="Ramesh Thapa"
                className={inputCn(!!errors.name)}
                {...register("name")}
              />
            </Field>

            <Field
              label="Email address"
              id="email"
              error={errors.email?.message}
              required
            >
              <input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="you@email.com"
                className={inputCn(!!errors.email)}
                {...register("email")}
              />
            </Field>

            <Field
              label="Phone"
              id="phone"
              error={errors.phone?.message}
              required
            >
              <input
                id="phone"
                type="tel"
                autoComplete="tel"
                placeholder="+977 ..."
                className={inputCn(!!errors.phone)}
                {...register("phone")}
              />
            </Field>

            <Field
              label="House / project type"
              id="projectType"
              error={errors.projectType?.message}
              required
            >
              <input
                id="projectType"
                placeholder="New house, renovation or extension"
                className={inputCn(!!errors.projectType)}
                {...register("projectType")}
              />
            </Field>

            <Field
              label="Service required"
              id="service"
              error={errors.service?.message}
              required
            >
              <select
                id="service"
                className={cn(inputCn(!!errors.service), "cursor-pointer")}
                defaultValue=""
                {...register("service")}
              >
                <option value="" disabled>
                  Select a service…
                </option>
                {services.map((s) => (
                  <option key={s.slug} value={s.title}>
                    {s.title}
                  </option>
                ))}
                <option value="Multiple / not sure">Multiple / not sure</option>
              </select>
            </Field>

            <Field
              label="Project location"
              id="location"
              error={errors.location?.message}
              required
            >
              <input
                id="location"
                placeholder="District or municipality"
                className={inputCn(!!errors.location)}
                {...register("location")}
              />
            </Field>

            <div className="sm:col-span-2">
              <Field
                label="Project details"
                id="message"
                error={errors.message?.message}
                required
                hint="Stage, scale and the constraint that concerns you most."
              >
                <textarea
                  id="message"
                  rows={6}
                  placeholder="Tell us about the project…"
                  className={cn(inputCn(!!errors.message), "resize-y py-4")}
                  {...register("message")}
                />
              </Field>
            </div>

            <div className="flex flex-col gap-5 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-sm text-xs leading-relaxed text-fg-subtle">
                This website does not store the form. Your email application
                opens with the enquiry ready for you to review and send.
              </p>

              <button
                type="submit"
                className="group/btn inline-flex h-14 shrink-0 items-center justify-center gap-4 bg-ink px-8 text-fg-invert transition-colors duration-500 ease-out-expo hover:bg-accent"
              >
                <span className="label">Open Email App</span>
                <ArrowUpRight
                  className="size-4 transition-transform duration-500 ease-out-expo group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
                  aria-hidden
                />
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

/* --------------------------------- helpers -------------------------------- */

const inputCn = (invalid: boolean) =>
  cn(
    "w-full border-b bg-transparent py-3.5 text-base outline-none transition-colors duration-300",
    "placeholder:text-fg-subtle focus:border-accent",
    invalid ? "border-accent" : "border-line-strong",
  );

function Field({
  label,
  id,
  error,
  required,
  hint,
  children,
}: {
  label: string;
  id: string;
  error?: string;
  required?: boolean;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="label flex items-center gap-1.5 text-fg-subtle">
        {label}
        {required && (
          <span className="text-accent" aria-hidden>
            *
          </span>
        )}
      </label>
      <div className="mt-2.5">{children}</div>
      {hint && !error && (
        <p className="mt-2 text-xs text-fg-subtle">{hint}</p>
      )}
      {error && (
        <p
          role="alert"
          className="mt-2 flex items-center gap-1.5 text-xs text-accent-deep"
        >
          <TriangleAlert className="size-3.5 shrink-0" aria-hidden />
          {error}
        </p>
      )}
    </div>
  );
}
