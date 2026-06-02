import Link from 'next/link';
import type { ComponentProps } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';

const base =
  'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-signal disabled:opacity-50 disabled:cursor-not-allowed';

const sizes = 'px-6 py-3 text-base';

const variants: Record<Variant, string> = {
  primary: 'bg-signal text-anthracite-950 hover:bg-signal-400',
  secondary:
    'border-2 border-anthracite-600 text-white hover:border-signal hover:text-signal bg-transparent',
  ghost: 'text-anthracite-300 hover:text-white',
};

type LinkButtonProps = { variant?: Variant; href: string } & Omit<
  ComponentProps<typeof Link>,
  'href'
>;

export function LinkButton({ variant = 'primary', className = '', href, ...rest }: LinkButtonProps) {
  return (
    <Link href={href} className={`${base} ${sizes} ${variants[variant]} ${className}`} {...rest} />
  );
}

type ButtonProps = { variant?: Variant } & ComponentProps<'button'>;

export function Button({ variant = 'primary', className = '', ...rest }: ButtonProps) {
  return <button className={`${base} ${sizes} ${variants[variant]} ${className}`} {...rest} />;
}
