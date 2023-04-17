import React from 'react';

export default function MarkdownPage(props: any) {
    const { fileDisplay } = props;
    return (
        <div className='w-60 h-96 bg-white rounded-lg flex flex-col justify-center items-center box-border'>
            <span>
                {fileDisplay.content};
            </span>
        </div>
    )
}
