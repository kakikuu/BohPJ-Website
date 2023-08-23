
import React from 'react';


const DisplayContents: React.FC<Props> = ({ contents }) => {
    return (
        <div>
            {contents.map((content) => (
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