
import React from 'react';
import { Works } from "@/types/works"
import { client } from "@/libs/client";

type Props = {
    works: Works[];
}

const DisplayContents: React.FC<Props> = ({ works }) => {
    return (
        <div>
            {contents.map((works) => (
                <div key={content.id}>
                    <h2>{content.title}</h2>
                    <p>{content.describe}</p>
                    <div>
                        {content.image.map((img) => (
                            <img
                                key={img.url}
                                src={img.url}
                                alt={content.title}
                                height={img.height}
                                width={img.width}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};