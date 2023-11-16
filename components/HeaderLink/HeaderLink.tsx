"use client"
import React from "react";
import clsx from 'clsx';


type HeaderLinkParams = {
    color: string;
    text: string;
    address: string;
};

export const HeaderLink: React.FC<HeaderLinkParams> = ({
    color,
    text,
    address
}) => {

    const styles = {
        anchor : clsx([
            'font-bold px-[8px] border-zinc-400 [&:not(:last-child)]:border-r-[2px] ',
            color === 'lightBlue' && 'text-[#454eb1]',
            color === 'darkBlue' && 'text-[#021faf]',
            color === 'darkRed' && 'text-[#b90909]',
            color === 'green' && 'text-[#09b90e]',
            color === 'orange' && 'text-[#ff8100]'
        ])
    }

  return (
    <a className={styles.anchor} href={address} target="_blank">
        {text}
    </a>
  );
};