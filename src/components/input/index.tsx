import { ComponentPropsWithoutRef, FC, forwardRef } from "react";

export const Input: FC<ComponentPropsWithoutRef<"input">> =
  // eslint-disable-next-line react/display-name
  forwardRef<HTMLInputElement>((props, ref) => {
    return (
      <input
        ref={ref}
        className="border border-y-slate-700 rounded"
        {...props}
      />
    );
  });
