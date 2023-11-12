"use client"
import React from "react";

type PageTitleParams = {
    title: string;
};

export const PageTitle: React.FC<PageTitleParams> = ({
    title,
}) => {

    return (
        <>
            <h1 className="text-emerald-700">{title}</h1>
        </>
    );
};