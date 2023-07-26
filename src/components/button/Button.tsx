import {
  type ComponentProps,
  type ReactNode,
  forwardRef,
  type ForwardedRef,
} from 'react';

type Props = {
  children: ReactNode;
} & ComponentProps<'button'>;

const Button = forwardRef(
  (
    { children, ...buttonProps }: Props,
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    return (
      <button
        {...buttonProps}
        type="button"
        ref={ref}
        className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-blue-500 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:bg-slate-400"
      >
        {children}
      </button>
    );
    // className="bg-blue-500 rounded-sm shadow-md text-gray-50 font-semibold uppercase text-sm px-2 py-1 hover:bg-gray-50 hover:text-blue-500"
  }
);

export default Button;
